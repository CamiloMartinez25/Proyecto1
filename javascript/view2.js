viewTwo = function(){
	$("#entradas").on("click", function(){
		$("#maincol2").addClass("transitionY").addClass("rotateY");
		$("#col2").empty().load("views/entradas.html", entradas);
		$("#botones").addClass("rotateY");
	});
	$("#principal").on("click", function(){
		$("#col2").empty();
		$("#col2").load("views/principal.html", entradas);
	});
	$("#postres").on("click", function(){
		$("#col2").empty();
		$("#col2").load("views/postres.html", entradas);
	});
	$("#bebidas").on("click", function(){
		$("#col2").empty();
		$("#col2").load("views/bebidas.html", entradas);
	});
}
