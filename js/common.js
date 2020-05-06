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


	AOS.init({
	  // Global settings:
	  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	  initClassName: 'aos-init', // class applied after initialization
	  animatedClassName: 'aos-animate', // class applied on animation
	  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	  

	  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	  offset: 200, // offset (in px) from the original trigger point
	  delay: 0, // values from 0 to 3000, with step 50ms
	  duration: 600, // values from 0 to 3000, with step 50ms
	  easing: 'ease', // default easing for AOS animations
	  once: false, // whether animation should happen only once - while scrolling down
	  mirror: false, // whether elements should animate out while scrolling past them
	  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});
});