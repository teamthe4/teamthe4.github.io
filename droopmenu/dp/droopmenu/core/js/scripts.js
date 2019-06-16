jQuery(function($){	
	$('.nav-toggle').on('click touchstart', function(e) {
		e.preventDefault();
		if(!$('.site-header').hasClass("active")){
			$('.site-header').addClass("active");
			$(".nav-wrapper").stop(true, true).slideDown(500);
		} else {
			$('.site-header').removeClass("active");
			$(".nav-wrapper").stop(true, true).slideUp(500);
		}
	});
	
    $('.nav-wrapper ul').singlePageNav({
		updateHash: false,
		filter: ':not(.ext)',
		threshold:10
    });		
				
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$(".site-header").addClass("droopmenu-showbg");
		} else {
			$(".site-header").removeClass("droopmenu-showbg");
		}						  
	});
});	