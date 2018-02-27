( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
 	$body.imagesLoaded( function() {
 		setTimeout(function() {
		    
 		      // Resize sections
 		      adjustWindow();
		      
 		      // Fade in sections
 			  $body.addClass('loaded');
			  
 		}, 300);
 	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false
		});
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}

	$(document).ready(function(){
		$('.longstory1').addClass("hiding");

		$('.longstory1').click(function() {
			var $this = $(this);

			if ($this.hasClass("hiding")) {
				$(this).removeClass("hiding").addClass("visibleing");

			} else {
				$(this).removeClass("visibleing").addClass("hiding");
			}
		});
	});
		
} )( jQuery );