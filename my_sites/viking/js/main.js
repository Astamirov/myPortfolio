$(function(){

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    });

    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        SlidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.heroes__slider-img',
        arrows: false
    });

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        SlidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-prev slick-btn"><img src="images/arrow-left.png" alt="prew"></button>',
        nextArrow: '<button class="slick-next slick-btn"><img src="images/arrow-right.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                      dots: true
                }
            }
        ]
    });

}); 