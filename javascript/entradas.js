entradas = function(){
	if ($("#maincol2").hasClass("rotateY")){
		$("#menuEntradas").addClass("rotateY");
	}else {
		$("#menuEntradas").removeClass("rotateY");
	}
	url = "https://api.mlab.com/api/1/databases/menu/collections/entradas?apiKey=SQ9VT2lJJM7bpfC37XVUEemzWasToQpq";
	mongo.get(url, function(entradas){
		for (i in entradas) {
			$("#menuEntradas").append(
				"<div id='entrada' class='panel bg-red row text-center'><img src='" + entradas[i].imagen + "' class='img-circle imgMenu pull-left'><div class='menText'><span class='label bg-green pull-right'><h6>"+entradas[i].precio+"</h6></span><h3>"+entradas[i].nombre + "</h3><p>"+entradas[i].descripcion+"</p></div></div>")
		};
	});	
	
	console.log("esto es una entrada");
}
