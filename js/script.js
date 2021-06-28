$(document).ready(function() {
    $(".header__burger").click(function() {
        $(".header__burger").addClass("out");
        $(".header__menu").addClass("open");

    });
    $(".close").click(function() {
        $(".header__menu").removeClass("open");
        $(".header__burger").removeClass("out");
    });
    $(".register-b").hide();

    $(".register").click(function() {
        $(".register-b").fadeIn(500);
        $(".login-n").hide(500);
    });
    $(".register").click(function() {
        $(".register").fadeIn();
    });
    $(".logIn").click(function() {
        $(".login-n").fadeIn(500);
        $(".register-b").hide(500);
    });
    let cardSlider = new Swiper('.card-slider', {

        spaceBetween: 0,
        breakPoints: {},
        slidesPerView: 4,
        speed: 600,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },

        breakpoints: {
            360: {
                slidesPerView: 1,

            },
            767: {
                slidesPerView: 1.5,
                spaceBetween: 0,

            },
            992: {
                slidesPerView: 3.2,
                spaceBetween: 10,

            }
        }
    });
});