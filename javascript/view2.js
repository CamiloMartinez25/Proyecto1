viewTwo = function(){
	$("#entradas").on("click", function(){
		$("#col2").empty();
		$("#col2").load("entradas.html", entradas);
	});
	$("#principal").on("click", function(){
		$("#col2").empty();
		$("#col2").load("principal.html", entradas);
	});
	$("#postres").on("click", function(){
		$("#col2").empty();
		$("#col2").load("postres.html", entradas);
	});
	$("#bebidas").on("click", function(){
		$("#col2").empty();
		$("#col2").load("bebidas.html", entradas);
	});
}