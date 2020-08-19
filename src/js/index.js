$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 4,
        variableWidth: true,
        infinite: true
    }
    );

    $('.slider').on('afterChange', function(event, slick, currentSlide){
        $(".slider__number").text(currentSlide > 8 ? currentSlide + 1 : "0" + (currentSlide + 1));
     });
});
