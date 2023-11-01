const allItems = document.querySelectorAll(
  '.progress-bar .progress-bar__list .progress-bar__item .progress-bar__link'
);

allItems.forEach(item => {
  item.addEventListener('click', function (e) {
    //   remove active
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove('active');
    }
    this.classList.add('active');
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
