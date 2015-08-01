//Declaracion de variables

//Definicion de clases y funciones


//Ejecucion

var btn1 = document.getElementById("boton1");
var btn2 = document.getElementById("boton2");

function eventoClic(evento){
	alert("Presionaste el boton");
	evento.target.style.fontSize = "2rem";
	evento.target.style.borderRadius = "1em";

	if(evento.target.id=="boton1") {
		evento.target.style.transform = "rotate(45deg)";
	} else {
		evento.target.style.transform = "rotate(-45deg)";
	}

	evento.target.removeEventListener("click", eventoClic)


	//console.log(evento.target.id);
}

function cambiarColor(evento){
	evento.target.style.background = "rgba(255,0,0,0.5)";
}

function retornarColor(evento) {
	evento.target.style.background = "white";
}


window.onload = function() {
	btn1.addEventListener("click", eventoClic);
	btn1.addEventListener("dblclick", eventoClic);
	
	btn2.addEventListener("click", eventoClic);
	btn2.addEventListener("mouseenter", cambiarColor);
	btn2.addEventListener("mouseleave", retornarColor);
}




