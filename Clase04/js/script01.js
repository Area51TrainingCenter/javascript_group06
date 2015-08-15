
//Objeto JSON
var pais = {continente: "América"}; //Par inicial

//Agregar más pares
pais.nombre = "Perú";
pais.bandera = "imgPeru.jpg";
pais.cantHab = 31000000;

//Arreglo
var pais2 =["Perù", "imgPeru.jpg", 31000000];

//Muestra cada elemento del arreglo
console.log(pais2[0], pais2[1], pais2[2]);

//Muestra el JSON pais
console.log(pais);

//Agrega otro par
pais.idioma = "español";

//Muestra nuevamente el JSON pais
console.log(pais);

//Muestra el arreglo pais2
console.log(pais2);



/*var info = document.querySelector("#info");

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


window.addEventListener("load", mostrarDatos);*/