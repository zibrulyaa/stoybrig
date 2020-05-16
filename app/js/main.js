$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      $(".header__menu").addClass("sticky");
    } else {
      $(".header__menu").removeClass("sticky");
    }
  });
  var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
