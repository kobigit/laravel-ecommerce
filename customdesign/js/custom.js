$(document).ready(function(e){
	wow = new WOW({
      	boxClass:     'wow',     
      	animateClass: 'animated', 
      	offset:       0, 
      	mobile:       true, 
      	live:         true
    });
    wow.init();
	/*var review_slider = $('.review_slider');
	review_slider.owlCarousel({
		itemsCustom : [
			[0, 1],
			[768, 1],
			[992, 2],
			[1200, 2]
	  	],
	  	autoPlay:false,
		autoplayHoverPause: true,
	  	autoplayTimeout:500,
	  	slideSpeed: 1000,
	  	loop:false,
	  	dots: false,
	  	navigation: true,
		navigationText: [
			"<img src='images/arrow_left.png'>",
			"<img src='images/arrow_right.png'>"
		]
	});*/
	$(".category_list li").click(function(e){
		$(this).find(".submenu").slideToggle();
	});
	$(".category_mobile").click(function(e){
		if($(window).width()<768){
			$(".category").slideToggle();
			$(".category_mobile i").toggleClass("active");
		}
		else{
			$(".category").slideDown();
		}
	});
	$(window).resize(function(e){
		if($(window).width()>767){
			$(".category").slideDown();
		}
		else{
			$(".category").slideUp();	
		}
	});
});

