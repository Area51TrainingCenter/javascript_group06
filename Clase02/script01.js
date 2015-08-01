function Perro(){

	var obj = this;

	obj.raza ="";
	obj.entrenado = false;
	obj.nombre="";

	obj.mostrarFoto = function(){
		var objImagen = document.createElement("img");
		objImagen.src = "perro.jpg";
		objImagen.title = "Perro siberiano";

		document.body.appendChild(objImagen);
	}

	obj.ladrar = function(){
		var objAudio = document.createElement("audio");
		objAudio.src="guau-guau.mp3";
		objAudio.controls = true;

		document.body.appendChild(objAudio);

	
		return objAudio.play();	
	}
}

var perro = new Perro();

perro.ladrar();
perro.mostrarFoto();