var servicesSwiper = new Swiper(".myServicesSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    },

    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});
