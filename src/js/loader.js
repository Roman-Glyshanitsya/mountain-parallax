// Спочатку додаємо клас "loading" до body
document.body.classList.add('loading');

// Коли сторінка повністю завантажиться
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  // Плавно ховаємо loader
  loader.style.opacity = '0';
  loader.style.transition = 'opacity 0.5s ease';

  // Після завершення анімації — видаляємо його
  setTimeout(() => {
    loader.style.display = 'none';
    document.body.classList.remove('loading');
  }, 500);
});
