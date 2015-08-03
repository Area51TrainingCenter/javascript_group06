//Variables
var btnRedondeo = document.getElementById("btnRedondeo");
var btnRedondeoArriba = document.getElementById("btnRedondeoArriba");
var btnRedondeoAbajo = document.getElementById("btnRedondeoAbajo");
var btnAdivina = document.getElementById("btnAdivina");

//Funciones
function eventoClic(evento) {
	var ingreso = prompt("Ingrese un número");

	if(!isNaN(ingreso)){
		var id = evento.target.id;

		switch(id) {
			case 'btnRedondeo':
				alert("Redondeo = " + Math.round(ingreso));
				break;

			case 'btnRedondeoArriba':
				alert("Redondeo Arriba = " + Math.ceil(ingreso));	
				break;

			case 'btnRedondeoAbajo':
				alert("Redondeo Abajo = " + Math.floor(ingreso));
				break;	
		}


	} else {
		alert("No me estafes!!!!");
	}

}

function eventoAdivina(){
	var numAleatorio = Math.floor(Math.random()*10 + 1);

	var ingreso = prompt("Adivina que número estoy pensando");

	if(!isNaN(ingreso)) {
		if(ingreso == numAleatorio){
			alert("Adivinaste, pensé en el número " + numAleatorio);
		} else {
			alert("No acertaste. Pensé en el número " + numAleatorio + "\npero tú en el número " + ingreso);
		}


	} else {
		alert("No es un número");
	}

}


function asignarEventos(){
	btnRedondeo.addEventListener("click", eventoClic);
	btnRedondeoArriba.addEventListener("click", eventoClic);
	btnRedondeoAbajo.addEventListener("click", eventoClic);
	btnAdivina.addEventListener("click", eventoAdivina);
}

//Eventos
window.addEventListener("load", asignarEventos);