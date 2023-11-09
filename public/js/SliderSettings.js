HotterSwiper = (elementSelector) => {
  new Swiper(elementSelector, {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 3000,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 1
      }
    }
  });
};

CategorySwiper = (elementSelector) => {
  new Swiper(elementSelector, {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 3000,
  });
};
