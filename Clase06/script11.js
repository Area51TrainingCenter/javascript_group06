var app=angular.module("miApp", ["misDirectivas"]);

var galerias = [
	{
		titulo: "Fotos Viaje Arequipa",
		fotos:[
			{archivo:'foto1.jpg', titulo:'Visitando Yanahuara'},
			{archivo:'foto2.jpg', titulo:'Vista de la campiña arequipeña'}
		]
	},
	{
		titulo: "Fotos Viaje Cuzco",
		fotos:[
			{archivo:'foto3.jpg', titulo:'De visita en Machu Picchu'},
			{archivo:'foto4.jpg', titulo:'Almorzando en San Blas'}
		]
	}
];

app.controller("miControlador", function(){
	this.galerias = galerias;

});