'use strict';

// Loading content
window.onload = function () {
  const parallax = document.querySelector('main');

  if (parallax) {
    const content = document.querySelector('.parallax__container');
    const clouds = document.querySelector('.images-parallax__clouds');
    const mountains = document.querySelector('.images-parallax__mountains');
    const human = document.querySelector('.images-parallax__human');
    const overlay = document.getElementById('overlay');

    // Коофшцієнти
    const forClouds = 60;
    const forMountains = 40;
    const forHuman = 30;
    const forOverlay = 20;

    // Швидкість анімації
    const speed = 0.1;

    //Об'ява змінних
    let positionX = 0,
      positionY = 0;
    let coordXprocent = 0,
      coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      //   Передаємо стилі
      clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${
        positionY / forClouds
      }%);`;
      mountains.style.cssText = `transform: translate(${
        positionX / forMountains
      }%, ${positionY / forMountains}%);`;
      human.style.cssText = `transform: translate(${positionX / forHuman}%, ${
        positionY / forHuman
      }%);`;
      overlay.style.cssText = `transform: translate(${
        positionX / forOverlay
      }%, ${positionY / forOverlay}%)`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener('mousemove', function (e) {
      //   Отримання ширини та висоти блока
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      // Нуль по середині
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageX - parallaxHeight / 2;

      // отримуєм відсотки
      coordXprocent = (coordX / parallaxWidth) * 100;
      coordYprocent = (coordY / parallaxHeight) * 100;
    });

    //   Parallax при скроллі
    let thresholdSets = [];
    for (let i = 0; i <= 1.0; i += 0.005) {
      thresholdSets.push(i);
    }
    const callback = function (entries, observer) {
      const scrollTopProcent = (window.scrollY / parallax.offsetHeight) * 100;
      setParallaxItemsStyle(scrollTopProcent);
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets,
    });

    observer.observe(document.querySelector('.content'));

    function setParallaxItemsStyle(scrollTopProcent) {
      content.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 12
      }%);`;
      mountains.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 9
      }%);`;
      human.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 6
      }%);`;
      overlay.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 3
      }%);`;
    }
  }
};
