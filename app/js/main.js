$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      $(".header__menu").addClass("sticky");
    } else {
      $(".header__menu").removeClass("sticky");
    }
  });
  var mySwiper = new Swiper(".home__slider ", {
    direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });
  var mySwiper = new Swiper(".gallery__slider", {
    loop: true,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
