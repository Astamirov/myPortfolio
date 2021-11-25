const header = document.querySelector(".header__inner");
const testBtn = document.querySelector('#testBtn'); //выбор
const menuListLink = document.querySelectorAll('.menu__list-link'); 

window.addEventListener("scroll", function() { 
    checkScroll();
});

document.addEventListener("DOMContentLoader", checkScroll); //настоящая позиция
//                                     вместо функции можно сразу имя

function checkScroll() {  //создали функцию
    let scrollPos = window.scrollY;
    if (scrollPos > 0) {
        header.classList.add('header_fixed'); //добавить
    } else {
        header.classList.remove('header_fixed'); //удалить
    }
};


testBtn.addEventListener("click", function() { //событие клика
    console.log('clicked');
});



for(let navItem of menuListLink) {
    navItem.addEventListener("click", function() {
        console.log(navItem.text);
    });
}