var hora = document.getElementById("hora");
var btnIniciar = document.getElementById("iniciar");
var btnParar = document.getElementById("parar");

function Utilitario(){
	var obj = this;
	var objInterval;

	obj.mostrarHora = function(tipo){
		var fechaHora = new Date();

		var horas = fechaHora.getHours();
		var minutos = fechaHora.getMinutes();
		var segundos = fechaHora.getSeconds();

		if(tipo==2) {
			if(horas>12) horas = horas-12;
		}

		if(horas<10) {horas = "0"+horas;}
		if(minutos<10) {minutos = "0"+minutos;}
		if(segundos<10) {segundos = "0"+segundos;}

		hora.innerHTML = horas + ":" + minutos + ":" + segundos;
	}

	obj.iniciarReloj = function() {
		objInterval = setInterval(function(){
			obj.mostrarHora(1);
		}, 1000);
	}

	obj.pararReloj = function() {
		clearInterval(objInterval);
	}
}


window.onload = function() {
	var util = new Utilitario();

	btnIniciar.addEventListener("click", util.iniciarReloj);
	btnParar.addEventListener("click", util.pararReloj);

	/*setInterval(function(){
		util.mostrarHora(2);
	}, 1000);*/

	//util.mostrarHora();
}