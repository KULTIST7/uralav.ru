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

    let placeSwiper = new Swiper('.place__slider', {
        loop: true,
        speed: 750,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.place__slider .swiper-button-next',
            prevEl: '.place__slider .swiper-button-prev'
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    let InfraSlider = new Swiper('.infrastructure__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.infrastructure .swiper-button-next',
            prevEl: '.infrastructure .swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1150: {
                slidesPerView: 3
            },
            750: {
                slidesPerView: 2,
                spaceBetween: 15
            }
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

    $('input[type=tel]').inputmask({
        mask: '+7 (*{1}99) 999-99-99',
        placeholder: "+7 (___) ___-__-__",
        definitions: {
            '*': {
                validator: "[0-6,9]"
            }
        }
    });

    Fancybox.bind("[data-fancybox]");
});