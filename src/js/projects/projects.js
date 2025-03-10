// import Swiper JS
import Swiper from 'swiper';
import 'swiper/css';

// ==============================================================

const refs = {
  btnSeeProject: document.querySelector('.btn-project'),
};

refs.btnSeeProject.addEventListener('click', () => {
  window.open('https://github.com/serhiilukianenkodev/portfolio', '_blank');
});

// ==============================================================

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  simulateTouch: true,

  grabCursor: true,

  hashNavigation: {
    watchState: true,
  },

  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  speed: 800,

  loop: false,
});
