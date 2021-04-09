const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
    },
});

const swiper2 = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
        nextEl: '.recommended-button-next',
        prevEl: '.recommended-button-prev',
    },
});
const swiperFood = new Swiper('.food-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    // Navigation arrows
    navigation: {
        nextEl: '.food-button-next',
        prevEl: '.food-button-prev',
    },
});