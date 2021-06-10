$(document).ready(function(){
	$("img").fedeOut(1000, function(){
		$("#img").css({'top' :300, 'left' :200});
		$("#img").fadeIn(500);
    });
	
	$("#ocultar1").fedeOut(1000, function(){
		$("#ocultar1").css({'top' :300, 'left' :200});
		$("#ocultar1").fadeIn(500);
    });
});   