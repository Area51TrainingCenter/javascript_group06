var app=angular.module("miApp", []);

app.controller("miControlador", function(){
	this.nombreEmpleado = "Sergio Hidalgo";
	this.cargo = "Consultor";
});

app.directive("fichaUsuario", function(){
	return {
		restrict: "E",
		templateUrl: "fichaUsuario.html"
	}
});

