const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses();

    slide.classList.add('active');
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active'); //удалить класс из каждого слайда
  });
}

const backToPortfolio = document.getElementById('back');

backToPortfolio.onclick = function () {
  history.back(); // Возвращаемся на предыдущую страницу, ее также можно записать как history.go (-1)
};
