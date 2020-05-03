$(document).ready(function() {
	
	$('.pavilion__gallery').slick({
		slidesToShow: 3
	});


	$('.people__info-slider').slick({
		autoplay: true,
		slidesToShow: 1,
		fade: true,
		asNavFor: $('.people__image-carousel'),
	});

	$('.people__image-carousel').slick({
		autoplay: true,
		slidesToShow: 1,
		fade: true,
		arrows: false,
		asNavFor: $('.people__info-slider'),

	});
		
		

});