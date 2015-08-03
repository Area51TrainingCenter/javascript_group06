var turno=1;
var arrValoresCelda = new Array(9);

function verificarGanador(letra) {

	//Combinaciones horizontales
	var comb1 = (arrValoresCelda[0]==letra) && (arrValoresCelda[1]==letra) && (arrValoresCelda[2]==letra);
	var comb2 = (arrValoresCelda[3]==letra) && (arrValoresCelda[4]==letra) && (arrValoresCelda[5]==letra);
	var comb3 = (arrValoresCelda[6]==letra) && (arrValoresCelda[7]==letra) && (arrValoresCelda[8]==letra);	

	//Combinaciones verticales
	var comb4 = (arrValoresCelda[0]==letra) && (arrValoresCelda[3]==letra) && (arrValoresCelda[6]==letra);
	var comb5 = (arrValoresCelda[1]==letra) && (arrValoresCelda[4]==letra) && (arrValoresCelda[7]==letra);
	var comb6 = (arrValoresCelda[2]==letra) && (arrValoresCelda[5]==letra) && (arrValoresCelda[8]==letra);	

	//Combinaciones diagonales
	var comb7 = (arrValoresCelda[0]==letra) && (arrValoresCelda[4]==letra) && (arrValoresCelda[8]==letra);
	var comb8 = (arrValoresCelda[2]==letra) && (arrValoresCelda[4]==letra) && (arrValoresCelda[6]==letra);



	if(comb1 || comb2 || comb3 || comb4 || comb5 || comb6 || comb7 || comb8){
		alert("Ganó el jugador " + letra);
		window.location.reload();
	} else if(turno==9) {
		alert("Empate");
		window.location.reload();
	}

}

function michi(evento){
	//console.log(evento.target.id);
	var celdaId = evento.target.id;

	var letra = (turno % 2 != 0) ? "X" : "O"; 

	evento.target.style.backgroundColor = (turno % 2 != 0) ? "yellow" : "green";
	evento.target.innerHTML = letra;
	evento.target.removeEventListener("click", michi);

	arrValoresCelda[ celdaId[1] ] = letra;

	verificarGanador(letra);

	turno++;
}

function asignarEventos(){
	//var celdas = document.getElementsByClassName("michi");
	var celdas = document.getElementsByTagName('td');
	//console.log(celdas);


	var numPosicion = 0;

	while(numPosicion < celdas.length) {

		celdas[numPosicion++].addEventListener("click", michi);

		//numPosicion = numPosicion + 1;

		//numPosicion++;
		
		//console.log(numPosicion);
	}


	//var celda = document.getElementById("c0");
	//celdas.addEventListener("click", michi);
}

window.addEventListener("load", asignarEventos);