document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    document.querySelectorAll('.portfolio-item').forEach((item, i) => {
      const cats = item.dataset.categories?.split(' ') ?? [];
      const show = cat === 'all' || cats.includes(cat);
      if (!show) {
        item.style.transition = 'opacity 0.2s, transform 0.2s';
        item.style.opacity = '0'; item.style.transform = 'scale(0.97)';
        setTimeout(() => item.style.display = 'none', 200);
      } else {
        item.style.display = '';
        setTimeout(() => {
          item.style.transition = `opacity 0.35s ${i*50}ms, transform 0.35s ${i*50}ms`;
          item.style.opacity = '1'; item.style.transform = 'scale(1)';
        }, 20);
      }
    });
  });
});
document.querySelector('.filter-btn')?.classList.add('active');
