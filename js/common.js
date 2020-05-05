$(document).ready(function() {

	

	$('.menu-init').on('click', function(e) {
		e.preventDefault();
		if ($('.menu').hasClass('menu_visible')){
			$('.menu').removeClass('menu_visible');
		} else {
			$('.menu').toggleClass('menu_visible');
		}
		
	});	
	
	$('.menu .menu-item').on('click', function() {
		$('.menu').removeClass('menu_visible');
	});

	$('.pavilion__gallery').slick({
		slidesToShow: 3,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}]
	});


	$('.peopl2e__info-slider').slick({
		autoplay: true,
		slidesToShow: 1,
		fade: true,
		asNavFor: $('.people__image'),
	});

	$('.team-slider').slick({
		autoplay: true,
		slidesToShow: 1,
		fade: true,
		arrows: true,

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

	$('.scroll').mPageScroll2id();
		

	

	$('.pavilion__gallery, .portfolio__content').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
			
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});
});