$(document).ready(function(){
	$('#prikazi').addClass('show');
   $('#hiden').click(function(){
		$('#prikazi').removeClass('show');
	});
	
    $('#showit').click(function(){
		$('#prikazi').addClass('show');
	});
	
	var selector = '.masthead-nav li';

	$(selector).on('click', function(){
		$(selector).removeClass('active');
		$(this).addClass('active');
	});
	
});







	

