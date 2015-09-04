var app=angular.module("miApp", []);

var arrEmpleados = [
	{nombreCompleto:"Sergio Hidalgo", cargo:"Consultor", fecha:"2015-08-10", sueldo:3500.456,idioma:'PE-español'},
	{nombreCompleto:"Javier Pérez", cargo:"Director", fecha:"2012-03-03", sueldo:5000.5678, idioma:'AR-español'},
	{nombreCompleto:"Luisa Chacón", cargo:"Creativo", fecha:"2013-02-01", sueldo:2800.2345, idioma: 'CO-español'},
	{nombreCompleto:"Arnaldo Rivera", cargo:"Diseñador", fecha:"2007-04-08", sueldo:2200.6745, idioma:'US-inglés'},
	{nombreCompleto:"Alonso Cueto", cargo:"Ilustrador", fecha:"2005-09-11", sueldo:1800.003, idioma:'ES-catalán'},
	{nombreCompleto:"Paul Cueto", cargo:"Ilustrador", fecha:"2000-10-07", sueldo:1800.003, idioma: 'ES-catalán'},
	{nombreCompleto:"Jessica Alba", cargo:"Analista", fecha:"1990-11-07", sueldo:1500.038, idioma: 'MX-español'}
];


app.controller("miControlador", function(){
	this.empleados = arrEmpleados;
})