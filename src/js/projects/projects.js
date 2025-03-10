// import Swiper JS
import Swiper from 'swiper';
import 'swiper/css';


const refs = {
    btnSeeProject: document.querySelector('.btn-project'),
};

refs.btnSeeProject.addEventListener('click', () => {
  window.open('https://github.com/serhiilukianenkodev/portfolio', '_blank');
});

const swiper = new Swiper('.projects', {
  navigation: {
    nextEl: '.right-arrow',
    prevEl: '.left-arrow ',
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

// ============================================

//   function imagesTemplateSecond() {
//     return items.map(`<picture class="container-img-project">
//       <source
//         srcset="
//           /img/projects/mob_second_page_1x.webp 1x,
//           /img/projects/mob_second_page_2x.webp 2x
//         "
//         media="(man-width: 375px)"
//       />
//       <source
//         srcset="
//           /img/projects/tab_second_page_1x.webp 1x,
//           /img/projects/tab_second_page_2x.webp 2x
//         "
//         media="(min-width: 768px)"
//       />
//       <source
//         srcset="
//           /img/projects/web_second_page_1x.webp 1x,
//           /img/projects/web_second_page_2x.webp 2x
//         "
//         media="(mix-width: 1440px)"
//       />
//       <img
//         src="/img/projects/mob_second_page_1x.webp"
//         alt="Maket project"
//         class="image-project"
//       />
//     </picture>
// `).join('');
// }
  
// function imagesTemplateThird() {
//     return items.map(`<picture class="container-img-project">
//       <source
//         srcset="
//           /img/projects/mob_third_page_1x.webp 1x,
//           /img/projects/mob_third_page_2x.webp 2x
//         "
//         media="(man-width: 375px)"
//       />
//       <source
//         srcset="
//           /img/projects/tab_third_page_1x.webp 1x,
//           /img/projects/tab_third_page_2x.webp 2x
//         "
//         media="(min-width: 768px)"
//       />
//       <source
//         srcset="
//           /img/projects/web_third_page_1x.webp 1x,
//           /img/projects/web_third_page_2x.webp 2x
//         "
//         media="(mix-width: 1440px)"
//       />
//       <img
//         src="/img/projects/mob_third_page_1x.webp"
//         alt="Maket project"
//         class="image-project"
//       />
//     </picture>
// `).join('');
//   }