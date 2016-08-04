login = function(){
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
						$("#logSpace").empty();
						$("#logSpace").append("<h3>!Atáscate Mi cuate¡<br/>ponele picante,<br/>invitame un Tequila<br/> ¡Que la noche esta linda!</h3><br/><button id='orderHere' type='button' class='btn btn-success bg-green btn-lg'>Order Here!</button>");						
					}else{
						$("#mensaje").text("Usuario o contraeña incorrectos");
					}
						
				})
			};
	});
	$("#enjoy").on("click", function(){

	});

}
