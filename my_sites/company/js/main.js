$(function () {
  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function () {
    $('.menu ul').slideToggle();
  });
});

// btn back
const backToPortfolio = document.getElementById('back');

backToPortfolio.onclick = function () {
  history.back(); // Возвращаемся на предыдущую страницу, ее также можно записать как history.go (-1)
};
