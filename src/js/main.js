// Mobile nav
const mobBtn   = document.getElementById('mob-btn');
const mobMenu  = document.getElementById('mob-menu');
const mobClose = document.getElementById('mob-close');
mobBtn?.addEventListener('click', () => { mobMenu?.classList.add('open'); document.body.style.overflow='hidden'; });
mobClose?.addEventListener('click', closeMenu);
mobMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
function closeMenu() { mobMenu?.classList.remove('open'); document.body.style.overflow=''; }

// Active nav link
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mob-menu a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
document.querySelectorAll('.scroll-reveal').forEach(el => obs.observe(el));

// Stagger children of .stagger-children
document.querySelectorAll('.stagger-children').forEach(parent => {
  parent.querySelectorAll(':scope > *').forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
  });
});
