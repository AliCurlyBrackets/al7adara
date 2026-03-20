document.addEventListener("DOMContentLoaded", function(){

var swiper = new Swiper(".Swiper_Hero", {
    loop:true,
    speed:1000,

    effect:"coverflow",

    coverflowEffect:{
        rotate:30,
        stretch:0,
        depth:200,
        modifier:1,
        slideShadows:true
    },

    autoplay:{
        delay:4000
    },

    pagination:{
        el:".hero-pagination",
        clickable:true
    }
});
});