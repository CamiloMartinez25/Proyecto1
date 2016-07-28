router = function(){
	var Router = {};

	Router.evalRoute = function(view, cbk){
		app.loadTemplate(view, cbk);	
	};
	return Router;
}();
app = function(myRouter){
	var MyApp = {};

	MyApp.init = function(){
		$(document).ready(function(){
			myRouter.evalRoute("view1", viewOne);
		});
	}();

	MyApp.loadTemplate = function(partialName, cbk){
		$("#main-container").load("views/" + partialName +".html", cbk);
	};

	return MyApp;
}(router);