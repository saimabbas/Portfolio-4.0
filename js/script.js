console.log("abc");
var swiper = new Swiper(".testimonials-swiper", {
  pagination: {
    el: ".testimonials-pagination",
  },
  navigation: {
    nextEl: ".testimoonial-right",
    prevEl: ".testimoonial-left",
  },
  autoHeight: false,
  speed: 1000,
  spaceBetween: 100,
  centeredSlides: true,
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});
