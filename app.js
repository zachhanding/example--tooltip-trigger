$(document).ready(function(){
			
	// when MOUSEOVER on the bar graphic, show its respective tooltip
	$('.bar').mouseover(function(){
			$(this).next('.bar__tooltip').show();
	});

	// when MOUSEOUT on the bar graphic, hide its respective tooltip
	$('.bar').mouseout(function(){
			$(this).next('.bar__tooltip').hide();
	});

	// when MOUSEOVER on the second tooltip, 
	// trigger the bar graphic's MOUSEOVER event
	$('.bar__tooltip--trigger').mouseover(function(){
		$(this).prev('.bar').trigger('mouseover');
	});

	// when MOUSEOut on the second tooltip, 
	// trigger the bar graphic's MOUSEOUT event
	$('.bar__tooltip--trigger').mouseout(function(){
		$(this).prev('.bar').trigger('mouseout');
	});
});