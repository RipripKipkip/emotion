$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 100) {
    	$('#nav').addClass('opaque');
        $('#container-menu').addClass('opaque2');
    }
    else {
    $('#nav').removeClass('opaque');
    $('#container-menu').addClass('opaque2');
    }
  });
});
