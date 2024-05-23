$(document).ready(function () {
    let slider = new Swiper('.slider', {
        speed: 750,
        navigation: {
            nextEl: '.slider__arrows .swiper-button-next',
            prevEl: '.slider__arrows .swiper-button-prev'
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    let selectMiniSlider = new Swiper('.select__mini-slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true,
        watchSlidesProgress: true,
    });

    let selectSlider = new Swiper('.select__slider', {
        loop: true,
        speed: 750,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.select__slider__arrows .swiper-button-next',
            prevEl: '.select__slider__arrows .swiper-button-prev'
        },
        thumbs: {
            swiper: selectMiniSlider
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    $('.header__burger-btn').on('click', () => {
        $('.burger').addClass('burger-open');
        $('body').addClass('body-noscroll');
    });

    $('.burger__close-btn').on('click', () => {
        $('.burger').removeClass('burger-open');
        $('body').removeClass('body-noscroll');
    });

    $('.up').on('click', () => {
        const body = $("html, body");
        body.animate({scrollTop:0}, 500, 'swing');
    });

    $(document).on('scroll', function() {
        if ($(window).scrollTop() >= 800) {
            $('.up').removeClass('up-invisible');
            $('.up').removeClass('up-invisible');
        } else {
            $('.up').addClass('up-invisible');
            $('.up').addClass('up-invisible');
        }
    });

    Fancybox.bind("[data-fancybox]");
});