$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        } else{
            $('.scroll-up-btn').removeClass('show');
        }
    });
});

// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0})
});

// toggle menu/navbar
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
});

// OWL CAROUSEL SCRIPT
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        200:{
            items: 2,
            nav: false
        },
        400:{
            items: 3,
            nav: false
        },
        600:{
            items: 4,
            nav: false
        },
    },
})

// typing animation script

var typed = new Typed(".typing", {
    strings: ["Products and Services"],
    typeSpeed: 100,
    backSpeed: 700,
    loop: false,
});