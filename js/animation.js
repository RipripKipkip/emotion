// // Trigger CSS animations on scroll.
// // Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/
//
// // Looking for a version that also reverses the animation when
// // elements scroll below the fold again?
// // --> Check https://codepen.io/bramus/pen/vKpjNP
//
// jQuery(function($) {
//
//     // Function which adds the 'animated' class to any '.animatable' in view
//     var doAnimations = function() {
//
//         // Calc current offset and get all animatables
//         var offset = $(window).scrollTop() + $(window).height(),
//             $animatables = $('.animatable');
//
//         // Unbind scroll handler if we have no animatables
//         if ($animatables.size() == 0) {
//             $(window).off('scroll', doAnimations);
//         }
//
//         // Check all animatables and animate them if necessary
//         $animatables.each(function(i) {
//             var $animatable = $(this);
//             if (($animatable.offset().top + $animatable.height() -
//                     20) < offset) {
//                 $animatable.removeClass('animatable').addClass(
//                     'animated');
//             }
//         });
//
//     };
//
//     // Hook doAnimations on scroll, and trigger a scroll
//     $(window).on('scroll', doAnimations);
//     $(window).trigger('scroll');
//
// });



// AOS.init({
//     duration: 1200,
// })


// window.sr = new scrollReveal({
//     reset: true, // faire disparaitre l'élément en dehors du scroll. Par défaut false
// });

// jQuery(function($) {
//
//     // Function which adds the 'animated' class to any '.animatable' in view
//     var doAnimations = function() {
//
//         // Calc current offset and get all animatables
//         var offset = $(window).scrollTop() + $(window).height(),
//             $animatables = $('.animatable');
//
//         // Unbind scroll handler if we have no animatables
//         if ($animatables.size() == 0) {
//             $(window).off('scroll', doAnimations);
//         }
//
//         // Check all animatables and animate them if necessary
//         $animatables.each(function(i) {
//             var $animatable = $(this);
//             if (($animatable.offset().top + $animatable.height() -
//                     20) < offset) {
//                 $animatable.removeClass('animatable').addClass(
//                     'animated');
//             }
//         });
//
//     };
//
//     // Hook doAnimations on scroll, and trigger a scroll
//     $(window).on('scroll', doAnimations);
//     $(window).trigger('scroll');
//
// });


$(window).scroll(function() {
    var wintop = $(this).scrollTop();
    $('section').each(function() {
        if (wintop > $(this).offset().top - ($(
                    window).height() /
                1.1)) {
            h = $(this).find('.fadeInUp_animate')
            h.show();
            h.addClass('animatedfadeInUp');

            h.addClass('animate');
            h.addClass('fadeInUp');
        }
    });
});

$(window).scroll(function() {
    var wintop = $(this).scrollTop();
    $('section').each(function() {
        if (wintop > $(this).offset().top - ($(window).height() /
                1.1)) {
            h = $(this).find('.bounceInLeft_animate')
            h.show();
            h.addClass('animatedbounceInLeft');

            h.addClass('animate');
            h.addClass('bounceInLeft');
        }
    });
});

$(window).scroll(function() {
    var wintop = $(this).scrollTop();
    $('section').each(function() {
        if (wintop > $(this).offset().top - ($(window).height() /
                1.1)) {
            h = $(this).find('.bounceInRight_animate')
            h.show();
            h.addClass('animatedbounceInRight');

            h.addClass('animate');
            h.addClass('bounceInRight');
        }
    });
});


$(window).scroll(function() {
    var wintop = $(this).scrollTop();
    $('section').each(function() {
        if (wintop > $(this).offset().top - ($(window).height() /
                1.1)) {
            h = $(this).find('.bounceIn_animate')
            h.show();
            h.addClass('animatedbounceIn');

            h.addClass('animate');
            h.addClass('bounceIn');
        }
    });
});

$(document).ready(function() {
    $(".trusted_text").animate({
        opacity: '0.5',
    });
});
