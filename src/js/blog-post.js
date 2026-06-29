/* ═══════════════════════════════════════════════════════════
   BLOG POST PAGE — blog-post.js
═══════════════════════════════════════════════════════════ */

/* ── READING PROGRESS BAR ─────────────────────────────────── */
const progressBar = document.getElementById('reading-progress');
const postContent = document.getElementById('post-content');

function updateProgress() {
  if (!progressBar || !postContent) return;
  const rect   = postContent.getBoundingClientRect();
  const total  = postContent.offsetHeight;
  const scrolled = Math.max(0, -rect.top);
  const pct    = Math.min(100, (scrolled / (total - window.innerHeight)) * 100);
  progressBar.style.width = pct + '%';
  progressBar.setAttribute('aria-valuenow', Math.round(pct));
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

/* ── TOC: ACTIVE LINK HIGHLIGHT ───────────────────────────── */
const tocLinks   = document.querySelectorAll('.toc-link');
const headings   = document.querySelectorAll('.post-content h2[id], .post-content h3[id]');
const headerH    = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;

function updateTOC() {
  let current = '';
  headings.forEach(h => {
    if (window.scrollY >= h.offsetTop - headerH - 80) {
      current = h.id;
    }
  });
  tocLinks.forEach(link => {
    const href = link.getAttribute('href')?.replace('#', '');
    link.classList.toggle('active', href === current);
  });
}

if (headings.length) {
  window.addEventListener('scroll', updateTOC, { passive: true });
  updateTOC();
}

/* ── MOBILE TOC TOGGLE ────────────────────────────────────── */
const tocToggle   = document.getElementById('toc-toggle');
const mobileToc   = document.getElementById('post-toc-mobile');

tocToggle?.addEventListener('click', () => {
  const open = mobileToc && !mobileToc.hasAttribute('hidden');
  if (open) {
    mobileToc.setAttribute('hidden', '');
    tocToggle.setAttribute('aria-expanded', 'false');
  } else {
    mobileToc?.removeAttribute('hidden');
    tocToggle?.setAttribute('aria-expanded', 'true');
  }
});

// Close mobile TOC when clicking a link inside it
mobileToc?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileToc.setAttribute('hidden', '');
    tocToggle?.setAttribute('aria-expanded', 'false');
  });
});

/* ── COPY LINK BUTTON ─────────────────────────────────────── */
document.getElementById('copy-link-btn')?.addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.getElementById('copy-link-btn');
    if (!btn) return;
    btn.style.color     = 'var(--accent)';
    btn.style.borderColor = 'rgba(249,115,22,0.4)';
    btn.title = 'Copied!';
    setTimeout(() => {
      btn.style.color      = '';
      btn.style.borderColor = '';
      btn.title = '';
    }, 2000);
  });
});

/* ── CODE BLOCK COPY BUTTONS ──────────────────────────────── */
document.querySelectorAll('.post-code-copy').forEach(btn => {
  btn.addEventListener('click', () => {
    const block = btn.closest('.post-code-block');
    const code  = block?.querySelector('pre code');
    if (!code) return;

    // Strip HTML tags to get plain text
    const text = code.innerText || code.textContent || '';
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    }).catch(() => {
      btn.textContent = 'Error';
      setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
    });
  });
});

/* ── SMOOTH SCROLL FOR TOC LINKS ──────────────────────────── */
document.querySelectorAll('.toc-link, .post-toc-mobile a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href?.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── ESTIMATED READ TIME (auto-calculate & inject) ────────── */
(function injectReadTime() {
  const content = document.getElementById('post-content');
  if (!content) return;
  const words   = (content.innerText || '').trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 225));
  // Update any visible read-time elements that show "5 min read"
  document.querySelectorAll('.post-meta-item').forEach(el => {
    if (el.textContent.includes('min read')) {
      el.textContent = `${minutes} min read`;
    }
  });
})();
