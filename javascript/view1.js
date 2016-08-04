viewOne = function(){
	$("#orderHere").on("click", function(){
		router.evalRoute("view2", viewTwo);
	});
	$("#logIn").on("click", function(){
		$("#logSpace").load("views/login.html", login);
	});
}
