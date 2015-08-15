(function(){

	var app=angular.module("miApp",[]);

	var inventario =[
		{
			tipo:"Gatos",
			fotos:[
				{grande: "gato1.jpg", chica:'gato1c.jpg'},
				{grande: "gato2.jpg", chica:'gato2c.jpg'},
				{grande: "gato3.jpg", chica:'gato3c.jpg'}
			],
			comentarios:[
				{autor:"Sergio", texto:"No me gustan los gatos", estrellas:1},
				{autor:"Felipe", texto:"A mi sí me gustan los gatos", estrellas:4}
			]
		},
		{
			tipo:"Perros",
			fotos:[
				{grande: "perro1.jpg", chica:'perro1c.jpg'},
				{grande: "perro2.jpg", chica:'perro2c.jpg'},
				{grande: "perro3.jpg", chica:'perro3c.jpg'}
			],
			comentarios:[
				{autor:"Ana", texto:"Lindos los perritos", estrellas:3},
				{autor:"Sue", texto:"Me gustan los perros pero me gustan más los gatitos", estrellas:4}

			]
		}
	];


	app.controller("inventarioController", function(){
		this.animales = inventario;
	});

	app.controller("galeriaController", function(){
		this.fotoActual = 1;

		this.agrandarFoto = function(indice){
			this.fotoActual=indice;
		};
	});

	app.controller("formularioController", function(){
		this.comentario = {};

		this.agregarComentario = function(animal){
			animal.comentarios.push(this.comentario);

			this.comentario = {};
		}


	});


})();