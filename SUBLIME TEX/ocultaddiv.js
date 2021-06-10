$(document).ready(function(){
	
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").hide(5000);
   });
	
	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").show(3000);
   
   });

	$("#imagenabajo").fadeOut(4000, function(){
		$("#imagenabajo").css({'top':300, 'left':200});
		$("#imagenabajo").fadeIn(4000)
   });
   	$("#ocultar1").fadeOut(4000, function(){
		$("#ocultar1").css({'top':300, 'left':200});
		$("#ocultar1").fadeIn(4000)
	});
});			
			