$(document).ready(function(){
	
		setBindings();	
	$(window).scroll(function(){
		var wscroll = $(this).scrollTop();
		
		if (wscroll> $(".bg2").offset().top-($(window).height()/1.75)) {

			$('.abimg').addClass('is-showing');
		}
	});
		


});

function setBindings(){

	$("nav a").click(function(e){
		e.preventDefault();
		var secID = e.currentTarget.id + "Section";
		$("html body").animate({
			scrollTop : $("#" + secID).offset().top
		},1500)
	});
};