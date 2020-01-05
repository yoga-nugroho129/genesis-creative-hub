$(document).ready(function() {
    // TRIPLE CAROUSEL //
    $('.triple-carousel').slick({
        slidesToShow: 3, // number of displayed portfolio image to show on desktop screen size
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500, // time for slider movement in mili-second
        arrows: false,
        dots: false,
        pauseOnHover: false, // pause slide movement during mouse hover
        responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 3 // 
            }
        }, {
            breakpoint: 770,
            settings: {
                slidesToShow: 1 //
            }
        }]
    });
    // END OF PORTFOLIO CAROUSEL //
    // ============================================= //
});