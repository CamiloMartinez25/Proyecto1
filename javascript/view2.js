viewTwo = function(){
	$("#principal").on("click", function(){
		$("#col2").empty();
		$("#col2").load("entradas.html", entradas);
	})
}