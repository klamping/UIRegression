/* ------------------------------

   Responsive Starter Kit
   Global JS Functions

--------------------------------- */

// Creating a Mobile-First Responsive Web Design - http://www.html5rocks.com/en/mobile/responsivedesign/
(function(w){

	var sw = document.body.clientWidth,
		sh = document.body.clientHeight,
		breakpoint = 700,
		speed = 800,
		mobile = true;
		
	$(document).ready(function() {
		checkMobile();
		setNav();
	});
		
	$(w).resize(function(){ // Update dimensions on resize
		sw = document.body.clientWidth;
		sh = document.body.clientHeight;
		checkMobile();
	});
	
	// Check if Mobile
	function checkMobile() {
		mobile = (sw > breakpoint) ? false : true;
		if (!mobile) { // If Not Mobile
			$('.nav-primary').show(); // Show full navigation
		} else { // Hide 
			if (!$('#nav-primary-link').hasClass('active')) {
				$('.nav-primary').hide();
			}
		}
	}
	
	// Toggle navigation for small screens
	function setNav() {
		$('#nav-primary-link').click(function(e){
			e.preventDefault();
			var $this = $(this),
				thisHref = $this.attr('href');
			$('.nav-primary').slideUp('fast');
			if($this.hasClass('active')) {
				$this.removeClass('active');
				$(thisHref).slideUp('fast');
			} else {
				$('.nav-primary-link').removeClass('active');
				$this.addClass('active');
				$(thisHref).slideDown('fast');
			}
		});
	}
  
})(this);


$(document).ready(function () {
    
    // collapsible content
    if ($('.show-hide').length > 0) {
        // Close by default
        $('.show-hide .body').hide();
        
        // Expand/collapse content when header is clicked
        $('.show-hide .toggle').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            if ($this.hasClass('active')) {
                $this.removeClass('active');
                $(this).next('.body').slideUp('fast');
            } else {
                $this.removeClass('active');
                $this.addClass('active');
                $(this).next('.body').slideDown('fast');
            }
        });
        
        // 'Hide' links for small screens
        $('.show-hide .close-section').click(function(e) {
            e.preventDefault();
            $(this).parent('.body').slideUp('fast');
            $(this).closest('.show-hide').find('.toggle').removeClass('active');
        });
    }

    // modal for general content (fancyBox)
    if ($(".fancybox").length > 0) {
        $(".fancybox").fancybox({
            maxWidth: 800,
            maxHeight: 600
        });
    }

    // modal for video player (fancyBox)
    if ($('.fancybox-media').length > 0) {
        $('.fancybox-media').fancybox({
            width: 800,
            height: 450,
            padding: 2,
            openEffect: 'none',
            closeEffect: 'none',
            helpers: {
                media: {}
            }
        });
    }

    // flexible videos (fitVids)
    if ($('.flexible-video').length > 0) {
        $(".flexible-video").fitVids();
    }

});