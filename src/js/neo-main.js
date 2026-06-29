/* ═══════════════════════════════════════════════════════════
   CODE NEO PORTFOLIO — neo-main.js
═══════════════════════════════════════════════════════════ */

/* ── HEADER SCROLL ────────────────────────────────────────── */
const header = document.getElementById('site-header');
function onScroll() {
  if (window.scrollY > 20) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
  updateActiveNav();
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ── ACTIVE NAV ON SCROLL ─────────────────────────────────── */
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  let current = '';
  sections.forEach(section => {
    if (section.offsetTop <= scrollY) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === '#' + current) link.classList.add('active');
  });
}

/* ── MOBILE MENU ──────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');
const mobileOverlay = document.getElementById('mobile-overlay');

function openMenu() {
  mobileMenu?.classList.add('open');
  mobileOverlay?.classList.add('visible');
  document.body.style.overflow = 'hidden';
  hamburger?.classList.add('open');
  hamburger?.setAttribute('aria-expanded', 'true');
}
function closeMenu() {
  mobileMenu?.classList.remove('open');
  mobileOverlay?.classList.remove('visible');
  document.body.style.overflow = '';
  hamburger?.classList.remove('open');
  hamburger?.setAttribute('aria-expanded', 'false');
}

hamburger?.addEventListener('click', openMenu);
mobileClose?.addEventListener('click', closeMenu);
mobileOverlay?.addEventListener('click', closeMenu);

document.querySelectorAll('.mobile-nav-link, .mobile-cta').forEach(link => {
  link.addEventListener('click', closeMenu);
});

/* ── SMOOTH SCROLL FOR ANCHOR LINKS ──────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── SCROLL REVEAL ────────────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  // Stagger within parent
  const parent = el.parentElement;
  if (parent) {
    const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'));
    const idx = siblings.indexOf(el);
    if (idx > 0) {
      el.style.transitionDelay = `${idx * 75}ms`;
    }
  }
  revealObs.observe(el);
});

/* ── TICKER CLONE (infinite scroll) ──────────────────────── */
const tickerInner = document.getElementById('ticker-inner');
if (tickerInner) {
  const clone = tickerInner.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  tickerInner.parentElement.appendChild(clone);
}

/* ── PORTFOLIO FILTER ─────────────────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projectCards.forEach((card, i) => {
      const cats = card.dataset.cat || '';
      const show = filter === 'all' || cats.split(' ').includes(filter);

      if (!show) {
        card.style.transition = 'opacity 0.2s, transform 0.2s';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.96) translateY(8px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 200);
      } else {
        card.style.display = '';
        setTimeout(() => {
          card.style.transition = `opacity 0.4s ${i * 50}ms, transform 0.4s ${i * 50}ms`;
          card.style.opacity = '1';
          card.style.transform = 'scale(1) translateY(0)';
        }, 20);
      }
    });
  });
});

/* ── CONTACT FORM ─────────────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.submit-btn');
  const btnText = btn.querySelector('.btn-text');

  btn.disabled = true;
  if (btnText) btnText.textContent = 'SENDING...';

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  // Honeypot check
  if (data._gotcha) {
    btn.disabled = false;
    if (btnText) btnText.textContent = 'SEND MESSAGE';
    return;
  }

  try {
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' },
    });

    if (res.ok) {
      contactForm.style.display = 'none';
      if (contactStatus) {
        contactStatus.innerHTML = `
          <div class="success-msg">
            <p style="font-size:1.5rem;margin-bottom:0.5rem;">✅ Message Sent!</p>
            <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
          </div>`;
      }
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', { value: 1, currency: 'USD' });
      }
    } else {
      const json = await res.json().catch(() => ({}));
      if (contactStatus) {
        contactStatus.innerHTML = `<div class="error-msg">⚠️ ${json.error || 'Something went wrong. Please try again.'}</div>`;
      }
      btn.disabled = false;
      if (btnText) btnText.textContent = 'SEND MESSAGE';
    }
  } catch {
    if (contactStatus) {
      contactStatus.innerHTML = `<div class="error-msg">⚠️ Network error. Please check your connection and try again.</div>`;
    }
    btn.disabled = false;
    if (btnText) btnText.textContent = 'SEND MESSAGE';
  }
});

/* ── BACK TO TOP ──────────────────────────────────────────── */
document.getElementById('back-to-top')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── INIT ─────────────────────────────────────────────────── */
onScroll();
