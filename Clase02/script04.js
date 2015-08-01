var btn = document.getElementById("boton");

function verificarParidad(){
	var numeroIngresado = prompt("Por favor ingrese un numero");

	var noEsNumero = isNaN(numeroIngresado);

	if(!noEsNumero) {
		var EsPar =   (numeroIngresado % 2 == 0) ? "Es Par" : "Es Impar";

		alert(EsPar);
	} else {
		alert("Por favor ingrese numero");
	}
}


function iniciar(){
	btn.addEventListener("click", verificarParidad);
}


window.onload = iniciar();

