var app = angular.module("miApp", []);

var arrEmpleados = [
	{nombreCompleto:"Sergio Hidalgo", cargo:"Consultor", annoIngreso:2010},
	{nombreCompleto:"Javier Pérez", cargo:"Director", annoIngreso:2012},
	{nombreCompleto:"Luisa Chacón", cargo:"Creativo", annoIngreso:2014},
	{nombreCompleto:"Arnaldo Rivera", cargo:"Diseñador", annoIngreso:2010},
	{nombreCompleto:"Alonso Cueto", cargo:"Ilustrador", annoIngreso:2009},
	{nombreCompleto:"Paul Cueto", cargo:"Ilustrador", annoIngreso:2007},
	{nombreCompleto:"Jessica Alba", cargo:"Analista", annoIngreso:2006}
];


app.controller("miControlador", function(){
	this.empleados = arrEmpleados;

	this.mostrarDataFiltrada = function(){
		console.log(this.dataFiltrada);
	}
});