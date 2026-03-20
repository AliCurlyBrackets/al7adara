var swiper = new Swiper(".HeroSwiper", {
    loop:true,
    speed:1000,

    autoplay:{
        delay:4000,
        disableOnInteraction:false
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true
    },

    effect:"fade"
});