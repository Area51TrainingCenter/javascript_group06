(function(){

	var app=angular.module("miApp2",[]);

	var usuario={};
	usuario.nombre = "Pepe";
	usuario.dni = "07974521";
	usuario.ubigeo = 150121;
	usuario.hijos = ["Andrea","Joaquin"];

	app.controller("usuarioController", function(){
		this.datosUsuario = usuario;
	});


})();