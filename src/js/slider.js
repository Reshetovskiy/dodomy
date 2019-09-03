let swiper = undefined;
function initSwiper() {
  var screenWidth = $(window).width();
  if (screenWidth > 749 && swiper == undefined) {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 600,
      effect: 'fade',
      parallax: true,
      // autoplay: {
      //   delay: 5000,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  } else if (screenWidth < 749 && swiper != undefined) {
    swiper.destroy();
  }
}

initSwiper();

$(window).on('resize', function () {
  initSwiper();
});