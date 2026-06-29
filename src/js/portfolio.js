/* ═══════════════════════════════════════════════════════════
   PORTFOLIO LISTING PAGE — portfolio.js
═══════════════════════════════════════════════════════════ */

const cards     = Array.from(document.querySelectorAll('.pf-card'));
const tabs      = document.querySelectorAll('.bl-tab, .sidebar-cat-btn');
const searchEl  = document.getElementById('pf-search');
const countEl   = document.getElementById('pf-count');
const emptyEl   = document.getElementById('pf-empty');
const emptyTerm = document.getElementById('pf-empty-term');
const clearBtn  = document.getElementById('pf-clear');

let activeCat   = 'all';
let searchQuery = '';

/* ── FILTER ENGINE ────────────────────────────────────────── */
function filterCards() {
  let visible = 0;

  cards.forEach((card, i) => {
    const cats  = card.dataset.cat   || '';
    const title = card.dataset.title || '';

    const catMatch    = activeCat === 'all' || cats.split(' ').includes(activeCat);
    const searchMatch = !searchQuery || title.includes(searchQuery);
    const show        = catMatch && searchMatch;

    if (!show) {
      card.style.transition = 'opacity 0.18s, transform 0.18s';
      card.style.opacity    = '0';
      card.style.transform  = 'translateY(8px)';
      setTimeout(() => card.classList.add('hidden'), 180);
    } else {
      card.classList.remove('hidden');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        card.style.transition = `opacity 0.38s ${i * 55}ms, transform 0.38s ${i * 55}ms`;
        card.style.opacity    = '1';
        card.style.transform  = 'translateY(0)';
      }));
      visible++;
    }
  });

  if (countEl) {
    countEl.innerHTML = `Showing <strong>${visible}</strong> project${visible !== 1 ? 's' : ''}`;
  }
  if (emptyEl) {
    if (visible === 0) {
      emptyEl.removeAttribute('hidden');
      if (emptyTerm) emptyTerm.textContent = searchQuery || activeCat;
    } else {
      emptyEl.setAttribute('hidden', '');
    }
  }
}

/* ── SET ACTIVE CATEGORY ──────────────────────────────────── */
function setCategory(cat) {
  activeCat = cat;
  document.querySelectorAll('.bl-tab').forEach(t =>
    t.classList.toggle('active', t.dataset.cat === cat));
  document.querySelectorAll('.sidebar-cat-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === cat));
  filterCards();
}

tabs.forEach(t => { if (t.dataset.cat) t.addEventListener('click', () => setCategory(t.dataset.cat)); });

/* ── SEARCH ───────────────────────────────────────────────── */
searchEl?.addEventListener('input', () => {
  searchQuery = searchEl.value.trim().toLowerCase();
  filterCards();
});
clearBtn?.addEventListener('click', () => {
  searchQuery = '';
  if (searchEl) searchEl.value = '';
  setCategory('all');
});

/* ── URL PARAM (?cat=shopify) ─────────────────────────────── */
const urlCat = new URLSearchParams(location.search).get('cat');
if (urlCat) setCategory(urlCat);

filterCards();
