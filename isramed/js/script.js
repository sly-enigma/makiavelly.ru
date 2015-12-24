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
            320:{
                items:1
            },
            600:{
                items:4,
                nav:true
            },
            1270:{
                items:6,
                nav:true,
                loop:true
            }
        }
    });

    $('.b-video-carousel').owlCarousel({
        loop:true,
        margin:20,
        navText: false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            320: {
                items:1
            },
            600:{
                items:2
            },
            1270:{
                items:4
            }
        }
    });

    $( "#account-tabs" ).tabs();

    $("#upload_link").on('click', function(e){
        e.preventDefault();
        $("#upload:hidden").trigger('click');
    });
});

