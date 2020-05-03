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


	var modal = $('.modal');
	var modalInit = $('.modal-init');
	var modalClose = $('.modal-close');	

	modalInit.on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('no-scroll');
		modal.fadeIn(300);
	});
		
	modalClose.on('click', function(e) {
		e.preventDefault();
		modal.fadeOut(300);
		$('body').removeClass('no-scroll');
	});

	
		

});