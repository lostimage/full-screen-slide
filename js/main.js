;(function($){
    'use strict';
    var slide=document.querySelectorAll('ba-slider__slide');
  var slider = $('.ba-slider').slick({
        arrows:true,
        dots:true,
        slide:'.ba-slider__slide',
        prevArrow:'.slick-prev',
        nextArrow:'.slick-next'
    });
})(jQuery);
