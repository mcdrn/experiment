var swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 0,
  },
  loop: true,
  speed: 3000,
  slidesPerView: 3.5,
  centeredSlides: true,
  preventInteractionOnTransition: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  }
});