const navbarLinks = document.querySelectorAll('.progress-bar__link');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY;
  const footerTop = footer.offsetTop;

  if (fromTop + window.innerHeight >= footerTop) {
    navbarLinks.forEach(item => item.classList.remove('active'));
    return;
  }

  let activeSet = false;

  navbarLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      !activeSet &&
      fromTop >= sectionTop &&
      fromTop < sectionTop + sectionHeight
    ) {
      navbarLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
      activeSet = true;
    }
  });
});
