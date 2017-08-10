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

var h_hght = 711; 
var h_mrg = 0;

$(function(){
 
	var elem = $('.top-line2');
	var top = $(this).scrollTop();
	 
	if(top > h_hght){
		elem.css('top', h_mrg);
	}
	 
	$(window).scroll(function(){
		top = $(this).scrollTop();
		 
		if (top+h_mrg < h_hght) {
			elem.css('top', (h_hght-top));
			elem.css('display', 'none');
		} else {
			elem.css('top', h_mrg);
			elem.css('display', 'block');
		}
	});
});

var menu_selector = ".nav2";

function onScroll(){
	var scroll_top = $(document).scrollTop() + 250;
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}

$(document).ready(function () {
 
	$(document).on("scroll", onScroll);
 
	$("a[href*='#']").click(function(e){
		e.preventDefault();
 
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
 
		$("html, body").animate({
			scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
 
	});
 
});