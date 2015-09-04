var app = angular.module("miApp", []);

app.controller("miControlador", function(){
	this.miNombre = "Sergio";
	this.miApellido = "Hidalgo";

	this.comentario="<script>alert('Hackeado');</script>";
});