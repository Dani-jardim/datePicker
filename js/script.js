$ (function(){

	$('input').bind('focus', function(){
		var pos = $(this).offset();
		var width = $(this).width();

		$('.horaescolha').css('left', pos.left + width);
		$('.horaescolha').css('top', pos.top);
		$('.horaescolha').show();
	});

 	$('input').bind('blur', function(){
 		$('.horaescolha').hide();

 	});
});
