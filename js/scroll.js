// $(document).ready(function() {
//     $('.js-scrollTo').on('click', function() { // Au clic sur un élément
//         var page = $(this).attr('href'); // Page cible
//         var speed = 750; // Durée de l'animation (en ms)
//         $('html, body').animate({
//             scrollTop: $(page).offset().top
//         }, speed); // Go
//         return false;
//     });
// });


// $(document).ready(function() {
//     $('.js-scrollTo').on('click', function() { // Au clic sur un élément
//         var page = $(this).attr('href'); // Page cible
//         var speed = 900; // Durée de l'animation (en ms)
//         $('html, body').animate({
//             scrollTop: $(page).offset().top
//         }, speed); // Go
//         return false;
//     });
// });


$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 900; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top - 80 // le - 80 pour la navbar
        }, speed); // Go
        return false;
    });
});


// $(document).ready(function() {
//     $('.js-scrollTo').on('click', function() { // Au clic sur un élément
//             var page = $(this).attr('href'); // Page cible
//             var speed = 900; // Durée de l'animation (en ms)
//             $('html, body').animate({
//                     scrollTop: $(page).prop("scrollHeight") -
//                         100
//                 }
//             }, speed); // Go
//         return false;
//     });
// });
