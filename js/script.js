$( document ).ready(function() {
	
	// Banner Slider
	if ( $('#banner .bxslider').length ) {
		$('#banner .bxslider').bxSlider({
			pager: false
		});
	}
	
	// Characters Change
	if ( $('#character').length ) {
		$('#character .img img').hide();
		$('#character .img img').first().show();
		$('#character .border-menu li a').click(function() {
			$('#character .border-menu li').removeClass('active');
			$(this).parent().addClass('active');
			var ind = $(this).parent().index();
			$('#character .img img').hide();
			$('#character .img img').eq(ind).show();
			return false;
		});
	}
	
	// Scroll to Anchor
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);
		return false;
	});
	
	// Placeholder for IE9
	$('input, textarea').placeholder();
	
});