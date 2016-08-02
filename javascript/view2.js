viewTwo = function(){
	$("#entradas").on("click", function(){
		$("#maincol2").removeClass("transitionY rotateYY").addClass("transitionY rotateY").load("views/entradas.html", entradas);
	});
	$("#principal").on("click", function(){
		$("#maincol2").removeClass("transitionY rotateY").addClass("transitionY rotateYY").addClass("transitionY rotateYY").load("views/principal.html", principal);
	});
	$("#postres").on("click", function(){
		$("#maincol2").removeClass("transitionY rotateYY").addClass("transitionY rotateY").load("views/postres.html", postres);
	});
	$("#bebidas").on("click", function(){
		$("#maincol2").removeClass("transitionY rotateY").addClass("transitionY rotateYY").load("views/bebidas.html", bebidas);
	});
}
