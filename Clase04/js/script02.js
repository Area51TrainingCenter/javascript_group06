//Arreglo multidimensional
var arrPaises = [
	['peru.png', 'Perú', '31 mill.'],

	['colombia.png', 'Colombia', '40 mill.'],

	['brasil.png', 'Brasil', '219 mill.']
];

var info = document.querySelector("#info");
/*
var info = document.getElementById("info");
getElementsByClassName
getElementsByTagName
querySelectorAll
*/

//Objeto JSON
var lista = {
	paises : [
		{bandera: "peru.png", nombre: "Perú", cantHab: 31000000},
		{bandera: "brasil.png", nombre:"Brasil", cantHab: 219000000},
		{bandera: "colombia.png", nombre:"Colombia", cantHab: 40000000}
	]
}

function mostrarDatos(){
	var informacion = "";

	var paises = lista.paises;

	for(var numPosicion=0; numPosicion<paises.length; numPosicion++) {
		informacion += '<section class="linea">';
		informacion += '	<div class="item"><img src="img/' + paises[numPosicion].bandera +  '" /></div>';
		informacion += '	<div class="item">' + paises[numPosicion].nombre + '</div>';
		informacion += '	<div class="item">' + paises[numPosicion].cantHab + '</div>';
		informacion += '</section>';
	};

	info.innerHTML = informacion;	
}


window.addEventListener("load", mostrarDatos);