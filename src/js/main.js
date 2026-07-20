/* ── Mobile nav ── */
const mobBtn  = document.getElementById('mob-btn');
const mobMenu = document.getElementById('mob-menu');
const mobClose = document.getElementById('mob-close');

mobBtn?.addEventListener('click', () => {
  mobMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
});
mobClose?.addEventListener('click', closeMenu);
mobMenu?.querySelectorAll('.mob-link').forEach(a => a.addEventListener('click', closeMenu));
function closeMenu() {
  mobMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Smooth-scroll all anchor links ── */
document.querySelectorAll('.nav-anchor').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    closeMenu();
    const offset = 64;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks  = document.querySelectorAll('.nav-links .nav-anchor');

function setActiveNav() {
  const scrollY = window.scrollY + 80;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}
window.addEventListener('scroll', setActiveNav, { passive: true });
setActiveNav();

/* ── Sticky nav shadow on scroll ── */
const siteNav = document.getElementById('site-nav');
window.addEventListener('scroll', () => {
  siteNav?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Scroll reveal ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -28px 0px' });

document.querySelectorAll('.scroll-reveal').forEach(el => revealObs.observe(el));

/* ── Stagger children ── */
document.querySelectorAll('.stagger-children').forEach(parent => {
  parent.querySelectorAll(':scope > *').forEach((child, i) => {
    child.style.transitionDelay = `${i * 75}ms`;
  });
});

/* ── Dynamic copyright year ── */
document.querySelectorAll('.copyright-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});
