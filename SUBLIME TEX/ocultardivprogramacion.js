$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").hide(5000);
   });
	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").show(3000);
   });
	$("#ocultar5").fadeOut(4000, function(){
		$("#ocultar5").css({'top':300, 'left':200});
		$("#ocultar5").fadeIn(4000)
   });
   	$("#desvanecer1").fadeOut(4000, function(){
		$("#desvanecer1").css({'top':300, 'left':200});
		$("#desvanecer1").fadeIn(4000)
	});	
			
});
