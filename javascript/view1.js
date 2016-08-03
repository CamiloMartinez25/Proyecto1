viewOne = function(){
	$("#orderHere").on("click", function(){
		router.evalRoute("view2", viewTwo);
	})
	$("#submit").on("click", function(){

			if ($("#tipoUser").val() === "Administrador") {
				url = "https://api.mlab.com/api/1/databases/menu/collections/usuarios?apiKey=SQ9VT2lJJM7bpfC37XVUEemzWasToQpq";
				mongo.get(url,function(data){
					index = data.validar($("#userName").val(), $("#password").val(), data);
					if (index !== null){
						router.evalRoute("admin", admin);
					}else{
						$("#mensaje").text("Usuario o contraeña incorrectos");
					}
						
				})
			} else{
				url = "https://api.mlab.com/api/1/databases/menu/collections/usuarios?apiKey=SQ9VT2lJJM7bpfC37XVUEemzWasToQpq";
				mongo.get(url,function(data){
					index = data.validar($("#userName").val(), $("#password").val(), data);
					if (index !== null){
						
					}else{
						$("#mensaje").text("Usuario o contraeña incorrectos");
					}
						
				})
			};
	})
}