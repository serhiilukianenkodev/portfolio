import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const gallery = document.querySelector('.reviews-gallery');
const swiperCards = document.querySelector('.swiper');

async function getAllFoto() {
  try {
    const result = await axios.get(
      `https://portfolio-js.b.goit.study/api/reviews`
    );
    makeGallery(result.data);

    const targetLast = document.querySelector('.reviews-item:last-child');
    const targetFirst = document.querySelector('.reviews-item:first-child');

    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observerLast = new IntersectionObserver(arr => {
      if (arr[0].isIntersecting) console.log('LAST', arr[0]);
    }, options);
    const observerFirst = new IntersectionObserver(arr => {
      if (arr[0].isIntersecting) console.log('FIRST', arr[0]);
    }, options);
    observerFirst.observe(targetFirst);
    observerLast.observe(targetLast);
  } catch (error) {
    const result = `<li class="reviews-item">
        <div class="reviews-content">
          <p class="reviews-error">Not found</p>
        </div>
      </li>
    `;
    console.log(result);

    gallery.insertAdjacentHTML('beforeend', result);

    const target = document.querySelector('.reviews-error');
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(arr => {
      if (arr[0].isIntersecting)
        messageAllert('ERROR', `Sorry, ${error}!`, ' #ef4040');
      console.log(arr[0]);
    }, options);

    observer.observe(target);
  }
}

function messageAllert(message, text, backColor) {
  iziToast.show({
    position: 'topRight',
    title: message,
    titleColor: 'white',
    message: text,
    messageSize: '24px',
    messageLineHeight: '24px',
    messageColor: 'white',
    backgroundColor: backColor,
    theme: 'dark',
  });
}

function makeGallery(array) {
  const listImages = array
    .map(
      element =>
        `<li class="reviews-item">
        <div class="reviews-thumb">
          <img
            src="${element.avatar_url}"
            alt="foto"
            width="48"
            class="reviews-image"
          />
        </div>
        <div class="reviews-content">
          <h3 class="reviews-member">${element.author}</h3>
          <p class="reviews-text">${element.review}
          </p>
        </div>
      </li>
    `
    )
    .join(' ');
  const listBtn = `<div class="swiper-buttons">
      <div class="swiper-btn  btn-left swiper-left">
        <svg class="arrow">
          <use href="./img/sprite.svg#icon-arrow-narrow-right"></use>
        </svg>
      </div>
      <div class="swiper-btn swiper-right">
        <svg class="arrow">
          <use href="./img/sprite.svg#icon-arrow-narrow-right"></use>
        </svg>
      </div>
    </div>`;

  gallery.insertAdjacentHTML('beforeend', listImages);
  swiperCards.insertAdjacentHTML('beforeend', listBtn);

  new Swiper('.swiper', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    // navigation: {
    //   nextEl: '.swiper-right',
    //   prevEl: '.swiper-left',
    // },
    // mousewheel: {
    //   invert: true,
    // },

    // keyboard: true,
  });
}

getAllFoto();
