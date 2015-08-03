var info = document.querySelector("#info");

var arrPaises = [
	['peru.png', 'Perú', '31 mill.'],

	['colombia.png', 'Colombia', '40 mill.'],

	['brasil.png', 'Brasil', '219 mill.']
];

function mostrarDatos() {

	var informacion = "";

	for(var numPosicion=0; numPosicion<arrPaises.length; numPosicion++) {
		informacion += '<section class="linea">';
		informacion += '	<div class="item"><img src="img/' + arrPaises[numPosicion][0]  +  '" /></div>';
		informacion += '	<div class="item">' + arrPaises[numPosicion][1] + '</div>';
		informacion += '	<div class="item">' + arrPaises[numPosicion][2] + '</div>';
		informacion += '</section>';
	};

	info.innerHTML = informacion;



}


window.addEventListener("load", mostrarDatos);

