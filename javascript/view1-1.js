viewOneO = function(){
	$("#orderHere").on("click", function(){
		router.evalRoute("view2", viewTwo);
	});
	$("#logIn").on("click", function(){
		$("#col2").load("views/login.html", login);
	});
}
