$('#packages-btn__one').click(function(e){
	e.preventDefault();
	$('.form-option__one').attr('selected', true);
	$('.form-option__two').attr('selected', false);
	$('.form-option__three').attr('selected', false);
});

$('#packages-btn__two').click(function(e){
	e.preventDefault();
	$('.form-option__one').attr('selected', false);
	$('.form-option__two').attr('selected', true);
	$('.form-option__three').attr('selected', false);
});

$('#packages-btn__three').click(function(e){
	e.preventDefault();
	$('.form-option__one').attr('selected', false);
	$('.form-option__two').attr('selected', false);
	$('.form-option__three').attr('selected', true);
	$('.form-option__three').attr('selected', 'selected');
});

$(window).scroll(function() {
	if($(this).scrollTop() > 500) {
		$('#toTop').fadeIn();
	} else {
		$('#toTop').fadeOut();
	}
});
$('#toTop').click(function() {
	$('body,html').animate({scrollTop:0},800);
});