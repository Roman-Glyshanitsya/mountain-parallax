// const allItems = document.querySelectorAll(
//   '.progress-bar .progress-bar__list .progress-bar__item .progress-bar__link'
// );

// allItems.forEach(item => {
//   item.addEventListener('click', function (e) {
//     //   remove active
//     for (let i = 0; i < allItems.length; i++) {
//       allItems[i].classList.remove('active');
//     }
//     this.classList.add('active');
//   });
// });

const navbar = document.querySelector('.progress-bar');
const navbarLinks = document.querySelectorAll('.progress-bar__link');

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY;

  // Измените значение offset на высоту вашего фиксированного навбара
  const offset = 10;

  navbarLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));

    if (
      section.offsetTop - offset <= fromTop &&
      section.offsetTop + section.offsetHeight - offset > fromTop
    ) {
      navbarLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// const articles = document.querySelectorAll('article');
// const windowHeight = window.innerHeight;
// const navigation = document.querySelector('.progress-bar__list');

// window.addEventListener('scroll', function () {
//   const scrollTop = window.scrollY;
//   articles.forEach(function (article, i) {
//     if (
//       article.offsetTop < scrollTop + windowHeight / 2 &&
//       scrollTop < article.offsetTop + windowHeight / 2
//     ) {
//       navigation.children[i].classList.add('active');
//     }
//   });
// });

// let section = querySelectorAll('article');
// let navLink = querySelectorAll('.progress-bar__link');

// window.onscroll = () => {
//   section.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');
//     if (top > offset && top < offset + height) {
//       navLink.forEach(links => {
//         links.classList.remove('active');
//         document
//           .querySelector('.progress-bar__link[href^="+id+"]')
//           .classList.add('active');
//       });
//     }
//   });
// };
