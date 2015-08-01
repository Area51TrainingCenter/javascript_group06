function Animal(nombre, foto, sonido){
	var obj = this;

	obj.nombre=nombre;
	obj.especie="";
	obj.tamano=0;
	obj.peso=0;
	obj.foto=foto;
	obj.sonido=sonido;

	obj.caminar = function(){}
	obj.comer = function(){}

	obj.ejecutarSonido = function(){
		var objAudio = document.createElement("audio");
		objAudio.src=obj.sonido;

		return objAudio.play();			
	}

	obj.mostrarFoto = function(){
		var objImagen = document.createElement("img");
		objImagen.src = obj.foto;

		document.body.appendChild(objImagen);		
	}

	obj.mostrarNombre = function(){
		var objH1 = document.createElement("h1");
		objH1.innerHTML = obj.nombre;

		document.body.appendChild(objH1);
	}
}


var perro = new Animal("Dandy","perro.jpg","guau-guau.mp3");
perro.mostrarNombre();
perro.ejecutarSonido();
perro.mostrarFoto();

var gato = new Animal("Tom", "gato.jpg", "miau.mp3");
gato.mostrarNombre();
gato.ejecutarSonido();
gato.mostrarFoto();




