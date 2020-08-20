$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        infinite: true
    }
    );

    $('.slider').on('afterChange', function(event, slick, currentSlide){
        $(".hero__slid-number").text(currentSlide > 16 ? currentSlide/2 + 1 : "0" + (currentSlide/2 + 1));
     });
});
