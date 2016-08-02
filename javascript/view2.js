viewTwo = function(){
	$("#entradas").on("click", function(){
		$("#maincol2").css({"-webkit-transition": "-webkit-transform 2s", "transition": "transform 2s", "-webkit-transform": "rotateY(180deg)", "transform": "rotateY(180deg)"}).load("views/entradas.html", entradas);
	});
	$("#principal").on("click", function(){
		$("#maincol2").removeClass("transitionY rotateY").addClass("transitionY rotateY").load("views/principal.html", principal);
	});
	$("#postres").on("click", function(){
		$("#maincol2").removeClass("transitionY rotateY").addClass("transitionY rotateY").load("views/postres.html", postres);
	});
	$("#bebidas").on("click", function(){
		$("#maincol2").removeClass("transitionY rotateY").addClass("transitionY rotateY").load("views/bebidas.html", bebidas);
	});
}
