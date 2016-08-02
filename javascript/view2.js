viewTwo = function(){
	$("#entradas").on("click", function(){
		$("#maincol2").addClass("transitionY").toggleClass("rotateY").load("views/entradas.html", entradas);
	});
	$("#principal").on("click", function(){
		$("#maincol2").addClass("transitionY").toggleClass("rotateY").load("views/principal.html", principal);
	});
	$("#postres").on("click", function(){
		$("#maincol2").addClass("transitionY").toggleClass("rotateY").load("views/postres.html", postres);
	});
	$("#bebidas").on("click", function(){
		$("#maincol2").addClass("transitionY").toggleClass("rotateY").load("views/bebidas.html", bebidas);
	});
}
