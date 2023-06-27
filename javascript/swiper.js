var projectsSwiper = new Swiper(".projectsSwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
});

var aboutSwiper = new Swiper(".aboutSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});