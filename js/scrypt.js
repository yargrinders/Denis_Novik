$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__menu').click(function(){
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
});

// const swiper = new Swiper('.swiper', {
    
//     // Optional parameters
//     direction: 'horizontal',
//     autoplay: {
//         delay: 3500,
//     },

//     // Navigation arrows
//     navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//     },

// });

