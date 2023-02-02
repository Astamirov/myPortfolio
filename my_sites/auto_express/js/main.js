$(function () {
  $('.carousel__inner').slick({
    arrows: false,
    slidesToShow: 3,
    dots: true,
  });
});

// btn back
const backToPortfolio = document.getElementById('back');

backToPortfolio.onclick = function () {
  history.back(); // Возвращаемся на предыдущую страницу, ее также можно записать как history.go (-1)
};
