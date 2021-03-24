/*global $ , jquery , console*/

$(function () {

	if (document.title == 'ContactPage' || document.title == 'CardsPage') {

		$("body").css("overflow","auto");
	};

	"use strict";

	// Adjust Slider Height
	var winH  = $(window).height(),
		navH  = $('.navbar').innerHeight();

	$('.slider,.carousel-item').height(winH - navH);

	// Add Class Active And Remove It From Siblings
	$('.slider .carousel-indicators li').on('click' , function(){

		$(this).addClass('active').siblings().removeClass('active')

	});

	// Type Wrighter In Slide
	var thePlacehead = $('.slider .carousel-inner div h1'),
		thePlacespan = $('.slider .carousel-inner div span'),
		theTextHead	 = 'Were An Independent Company Are The Greatest In The World Has',
		theTextSpan  = 'Awesome/Cars';

		function autoWrightText(selector , text , speed){


			var theText = text,

				theTextLength = theText.length,

				n = 0,

				theTyper = setInterval(function(){

					$(selector).html($(selector).html() + theText[n]);

					n++;

					if (n === theTextLength) {

						clearInterval(theTyper);
					}

				},speed);

		}

		autoWrightText(thePlacehead , theTextHead , 100);
		autoWrightText(thePlacespan , theTextSpan , 500);


	// Add Buy Class On The Button Buy Now
	$('.famous-cars .card .card-link:last-child').on('click' , function(){
		var itemSex = $('.navbar .navbar-nav .nav-item:nth-of-type(6)'),
			linkSex = $('.navbar .navbar-nav .nav-item:nth-of-type(6) .nav-link');
		$(this).toggleClass('buy');
		if ($(this).hasClass('buy')) {

			itemSex.addClass('openCard');
			linkSex.addClass('open-word');

		}else{

			itemSex.removeClass('openCard');
			linkSex.removeClass('open-word');
		}
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	// Close The Popup In Card
	$('.popup').click(function(){

		$(this).fadeOut();

	});

	$('.popup .inner').click(function(e){

		e.stopPropagation();

	});


	$(' .popup .inner .close').click(function(e){

		e.preventDefault();

		$(this).parents('.popup').fadeOut();

	});

	// FadeOut By ==> Escape In Keybourd [ Esc == 27 ]
	$(document).keydown(function(e){

		if (e.keyCode == 27) { // [ Esc == 27 ]

			$('.popup').fadeOut();

		}

	});

	// Show / Hide Settings Box
	$('.settings-box .toggle-settings').on('click' , function(){
		$(this).find('i').toggleClass('fa-spin')
		$(this).parent('.settings-box').toggleClass('hide-settings')
	});
	// Switch Color
	var colorThemes = [];
	$('.color-options li').each(function(){

		colorThemes.push($(this).data('theme'))

	});
	$('.color-options li').on('click' , function(){
		$(this).addClass('active').siblings().removeClass('active')
		$('body').removeClass(colorThemes.join(" ")).addClass($(this).data('theme'))
	});

	// Switch Font
	var fontClasses = [];
	$('.font-option select option').each(function(){

		fontClasses.push($(this).val())

	});

	$('.font-option select').on('change' , function(){
		$('body').removeClass(fontClasses.join(" ")).addClass($(this).find('option:selected').val());
	});


	$('.logo-bejo , .logo-kiv , .logo-tesla , .logo-ferrari').height((winH - navH));

	function position_logo(selector){
		$(selector).css({
			'position': 'relative',
			'top': '-48px'
		});
		$(selector).next('span').css({
			'position': 'relative',
			'top': '-48px'
		});

	}

	position_logo('.logo-kiv');
	position_logo('.logo-bejo');
	position_logo('.logo-tesla');
	position_logo('.logo-ferrari');




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	$(window).scroll(function(){

		'use strict';

		// Scroll To Top Button

		var buttonScroll = $('.scroll-to-top');

		// console.log($(window).scrollTop())

		if ($(window).scrollTop() >= 700) {

			if (buttonScroll.is(':hidden')) {

				buttonScroll.fadeIn(600)

				buttonScroll.css('display' , 'inline-block')

			}

		}else{

			buttonScroll.fadeOut(800);

			buttonScroll.css('display' , 'none')
		}


	});

	$('.scroll-to-top').click(function(e){

		e.preventDefault();

		$('html, body').animate({

			scrollTop:0

		},1000);

	});

	$('.logo-kiv , .logo-bejo , .logo-tesla , .logo-ferrari').next('span').find('i').click(function(e){

		e.preventDefault();

		$('html, body').animate({

			scrollTop:684

		},1000);

	});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	// Sync Navbar Links With Section
	$(window).scroll(function(){

		function showCards(mainSelector , oneSelector , towSelector , threeSelector) {

			if ($(mainSelector).offset().top > 2000) {
				if ($(window).scrollTop() > $(mainSelector).offset().top - 2000) {

					$(oneSelector).animate({

							opacity:1

					},500 , function(){

						$(towSelector).animate({

								opacity:1

						},500 , function(){

							$(threeSelector).animate({

									opacity:1

							},500);

						});

					});


				}
				
			}else{
				if ($(window).scrollTop() > $(mainSelector).offset().top - 500) {

					$(oneSelector).animate({

							opacity:1

					},500 , function(){

						$(towSelector).animate({

								opacity:1

						},500 , function(){

							$(threeSelector).animate({

									opacity:1

							},500);

						});

					});


				}
			}
		}

		showCards('.row' , '.row .one' , '.row .tow' , '.row .three')

		showCards('.row' , 'row .one' , 'row .tow' , 'row .three')


		showCards('.row' , '.row .one' , '.row .tow' , '.row .three')


		showCards('.row' , '.row .one' , '.row .tow' , '.row .three')


	});


});

// Loading Screen
$(window).on('load', function () {
	"use strict";

	$('.slide-up-effect').delay(100).slideUp(1000 , function(){

		"use strict";

		$("body").delay(5000).css("overflow","auto");
	});

	$('.slide-down-effect').delay(100).slideUp(1000 , function(){

		"use strict";

		$("body").delay(5000).css("overflow","auto");
	});

	$('.slide-left-effect').delay(100).animate({

		left:'-100%'

	},1000,function(){
		"use strict";

		$("body").delay(5000).css("overflow","auto");
	});

	$('.slide-right-effect').delay(100).animate({

		left:'100%'

	} , 1000 ,function(){
		"use strict";

		$("body").delay(5000).css("overflow","auto");
	});


	$('.slide-zoom-effect').delay(100).css({

		"transition": 'transform 1.5s ease-in-out',
		"transform": 'scale(0)'
	}).parent('body').css("overflow","auto");
});






let swiperBox = document.querySelector('.swiper-container')

let swiper = new Swiper(swiperBox, {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});