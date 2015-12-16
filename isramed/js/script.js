$(document).ready(function(){
    $('.main-page-slider').owlCarousel({
        loop:true,
        navText: false,
        autoWidth:true,
        margin:25,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:6,
                nav:true,
                loop:true
            }
        }
    });

    $( "#account-tabs" ).tabs();
});

