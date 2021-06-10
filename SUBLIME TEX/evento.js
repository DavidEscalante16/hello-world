$(document).ready(function(){
	$("img").fedeout(10000, function(){
		$("#img").css({'top' :300, 'left' :200});
		$("#img").fadein(500);
    });
	
	$("#ocultar1").fedeout(10000, function(){
		$("#ocultar1").css({'top' :300, 'left' :200});
		$("#ocultar1").fadein(500);
    });
});   