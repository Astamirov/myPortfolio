$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 4000,
        dots: true
    });

    $('.header-btn').on('click', function(){
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    });

});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
