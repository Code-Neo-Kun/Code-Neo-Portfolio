/* ═══════════════════════════════════════════════════════════
   BLOG LISTING PAGE — blog.js
═══════════════════════════════════════════════════════════ */

const cards    = Array.from(document.querySelectorAll('.bl-card'));
const tabs     = document.querySelectorAll('.bl-tab, .sidebar-cat-btn, .sidebar-tag[data-cat]');
const search   = document.getElementById('blog-search');
const countEl  = document.getElementById('bl-count');
const emptyEl  = document.getElementById('bl-empty');
const emptyTerm = document.getElementById('bl-empty-term');
const clearBtn = document.getElementById('bl-clear');

let activeCat   = 'all';
let searchQuery = '';

/* ── FILTER + SEARCH ENGINE ───────────────────────────────── */
function filterCards() {
  let visible = 0;

  cards.forEach((card, i) => {
    const cats  = card.dataset.cat || '';
    const title = card.dataset.title || '';

    const catMatch    = activeCat === 'all' || cats.split(' ').includes(activeCat);
    const searchMatch = !searchQuery || title.includes(searchQuery);
    const show        = catMatch && searchMatch;

    if (!show) {
      card.style.transition = 'opacity 0.18s, transform 0.18s';
      card.style.opacity    = '0';
      card.style.transform  = 'scale(0.97) translateY(6px)';
      setTimeout(() => { card.classList.add('hidden'); }, 180);
    } else {
      card.classList.remove('hidden');
      // tiny delay so removal of 'hidden' flushes before transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.style.transition = `opacity 0.35s ${i * 45}ms, transform 0.35s ${i * 45}ms`;
          card.style.opacity    = '1';
          card.style.transform  = 'scale(1) translateY(0)';
        });
      });
      visible++;
    }
  });

  // Update count
  if (countEl) {
    countEl.innerHTML = `Showing <strong>${visible}</strong> article${visible !== 1 ? 's' : ''}`;
  }

  // Show / hide empty state
  if (emptyEl) {
    if (visible === 0) {
      emptyEl.removeAttribute('hidden');
      if (emptyTerm) emptyTerm.textContent = searchQuery || activeCat;
    } else {
      emptyEl.setAttribute('hidden', '');
    }
  }
}

/* ── CATEGORY FILTER ──────────────────────────────────────── */
function setCategory(cat) {
  activeCat = cat;

  // Sync all tab-like controls
  document.querySelectorAll('.bl-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });
  document.querySelectorAll('.sidebar-cat-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });

  filterCards();
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const cat = tab.dataset.cat;
    if (cat) setCategory(cat);
  });
});

/* ── SEARCH ───────────────────────────────────────────────── */
if (search) {
  search.addEventListener('input', () => {
    searchQuery = search.value.trim().toLowerCase();
    filterCards();
  });
}

if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    searchQuery = '';
    if (search) search.value = '';
    setCategory('all');
  });
}

/* ── URL PARAM SUPPORT (?cat=wordpress) ─────────────────────*/
const urlCat = new URLSearchParams(location.search).get('cat');
if (urlCat) setCategory(urlCat);

/* ── INITIAL RENDER ───────────────────────────────────────── */
filterCards();
