viewOne = function(){
	$("#orderHere").on("click", function(){
		router.evalRoute("view2", viewTwo);
	})
}