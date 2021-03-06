(function ($) {
 "use strict";
 
/*--------------------------
testimonial-carousel
---------------------------- */
$(".testimonial-carousel").slick({
	dots: true,
	arrows:false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	adaptiveHeight: true,
	prevArrow: '<i class="fa fa-angle-left"></i>',
	nextArrow: '<i class="fa fa-angle-right"></i>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}
	]
});

$(document).ready(function(){


	$(".mobilem").on('click', function(){
		$(".mainmenu.in-mobile").slideToggle("slow");
		$(this).toggleClass("mobilecm");
	});
	
    $('.product-list-single input').on('click', function () {
      $('input:not(:checked)').parent().removeClass("selected");
      $('input:checked').parent().addClass("selected");
    }); 

});

})(jQuery); 