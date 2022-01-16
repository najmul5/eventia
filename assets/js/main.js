(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	// popup video
    	$('.video-play-btn').magnificPopup({
    		type:'video',
    	})

		$('.recent-post-carousel').owlCarousel({
			items:3,
			margin: 15,
			autoplay: true,
			loop: true,
			responsive:{
				  	// breakpoint from 0 up
				    0 : {
				        items:1
				    },
				    // breakpoint from 480 up
				    480 : {
				        items:1,
				        margin:20
				    },
				    // breakpoint from 768 up
				    768 : {
				        items:3
				    }
			}
		});

		$('#clock').countdown('2020/03/01', function(event) {
		  	$(this).html(event.strftime('<span class="countdown-wrap"><span class="single-countdown-item">%w <br /><span>Weeks</span></span></span><span class="single-countdown-item">%d <br /><span>Days</span></span><span class="single-countdown-item">%H <br /><span>Hours</span></span><span class="single-countdown-item">%M <br /><span>Minutes</span></span><span class="single-countdown-item">%S <br /><span>Seconds</span></span>'));
		});

        $(window).scroll(function(){
            if($(this).scrollTop() <600 ){
            	$('nav').removeClass('overlay');
                $(".back-to-top").fadeOut();
            }else{
            	$('nav').addClass('overlay');
                $(".back-to-top").fadeIn();
            }
        });

        $('.back-to-top').click(function(){ 
	        $("html, body").animate({ scrollTop: 0 }, 600); 
	        return false; 
	    });

    });


}(jQuery));	