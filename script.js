document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper', {
    // Parâmetros e opções aqui
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
