// JavaScript Document
  $( document ).ready(function() {
  $('.slider').owlCarousel({
    loop:true,
    margin:0,
 dots: true,
    autoplay:true,
    autoplayTimeout:3000,
    nav:true,
    dots:true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',

    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
}); 
 
