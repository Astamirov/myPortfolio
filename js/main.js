$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass("sticky");
        }
        else {
            $('.header').removeClass("sticky");
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.top__title').addClass("topScroll");
        }
        else {
            $('.top__title').removeClass("topScroll");
        }
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



})

