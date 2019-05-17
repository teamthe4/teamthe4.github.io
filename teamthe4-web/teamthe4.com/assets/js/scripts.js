jQuery.noConflict();
$(document).ready(function () {
  $(function() {
      var removePreloader = function() {
		$('.spinner').css('opacity', 0);
		setTimeout(function(){$('.spinner').hide();}, 600);	
    }
	
	// Dom Ready
	$(function() {
        $(window).bind('load', function() {
			removePreloader();
    	});
   	});
  });
});(jQuery);


