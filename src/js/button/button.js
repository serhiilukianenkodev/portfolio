const target = document.querySelector('.hero');
const btnReturn = document.getElementById('btn-return');
const options = {
  rootMargin: '0px',
  threshold: 0.1,
};

const observer = new IntersectionObserver(arr => {
  if (arr[0].isIntersecting) {
    btnReturn.classList.add('visually-hidden');
  } else {
    btnReturn.classList.remove('visually-hidden');
  }
}, options);

observer.observe(target);

btnReturn.addEventListener('click', e => {
  e.preventDefault();
  const target = document.querySelector('.hero');
  target.scrollIntoView({
    behavior: 'smooth',
  });
});
