var app = angular.module("miApp", []);

var arrEmpleados = [
	{nombreCompleto:"Sergio Hidalgo", cargo:"Consultor"},
	{nombreCompleto:"Javier Pérez", cargo:"Director"},
	{nombreCompleto:"Luisa Chacón", cargo:"Creativo"},
	{nombreCompleto:"Arnaldo Rivera", cargo:"Diseñador"},
	{nombreCompleto:"Alonso Cueto", cargo:"Ilustrador"},
	{nombreCompleto:"Paul Cueto", cargo:"Ilustrador"},
	{nombreCompleto:"Jessica Alba", cargo:"Analista"}
];


app.controller("miControlador", function(){
	this.empleados = arrEmpleados;

});