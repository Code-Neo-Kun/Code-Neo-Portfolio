/* ── Portfolio filter ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const portCards  = document.querySelectorAll('.port-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    portCards.forEach((card, i) => {
      const cats = (card.dataset.cat || '').split(' ');
      const show = filter === 'all' || cats.includes(filter);

      if (show) {
        card.classList.remove('hidden');
        card.style.transitionDelay = `${(i % 3) * 60}ms`;
      } else {
        card.classList.add('hidden');
        card.style.transitionDelay = '0ms';
      }
    });
  });
});
