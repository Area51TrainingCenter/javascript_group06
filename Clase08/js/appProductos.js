app.factory("datosProductos", function(){
	var datos = [
		{
			id:1, 
			idCategoria:1, 
			nombre:"Barbie",
			descripcion:"Descripción Barbie",
			precio: 1000,
			stock: 3,
			fotos: [
				{chica:"img/foto01_chica.jpg", grande: "img/foto01_grande.jpg"},
				{chica:"img/foto02_chica.jpg", grande: "img/foto02_grande.jpg"},
				{chica:"img/foto03_chica.jpg", grande: "img/foto03_grande.jpg"},
				{chica:"img/foto04_chica.jpg", grande: "img/foto04_grande.jpg"}
			],
			disponibilidad: true		
		},
		{
			id:2, 
			idCategoria:1, 
			nombre:"Casa Minnie",
			descripcion:"Descripción Casa Minnie",
			precio: 500,
			stock: 2,
			fotos: [
				{chica:"img/foto01_chica.jpg", grande: "img/foto01_grande.jpg"},
				{chica:"img/foto02_chica.jpg", grande: "img/foto02_grande.jpg"},
				{chica:"img/foto03_chica.jpg", grande: "img/foto03_grande.jpg"},
				{chica:"img/foto04_chica.jpg", grande: "img/foto04_grande.jpg"}
			],
			disponibilidad: false
		},
		{
			id:3, 
			idCategoria:1, 
			nombre:"Polly Pockets",
			descripcion:"Descripción Polly Pockets",
			precio: 100,
			stock: 4,
			fotos: [
				{chica:"img/foto01_chica.jpg", grande: "img/foto01_grande.jpg"},
				{chica:"img/foto02_chica.jpg", grande: "img/foto02_grande.jpg"},
				{chica:"img/foto03_chica.jpg", grande: "img/foto03_grande.jpg"},
				{chica:"img/foto04_chica.jpg", grande: "img/foto04_grande.jpg"}
			],
			disponibilidad: true		
		},
		{
			id:4, 
			idCategoria:1, 
			nombre:"Pequeño Pony",
			descripcion:"Descripción Pequeño Pony",
			precio: 50,
			stock: 1,
			fotos: [
				{chica:"img/foto01_chica.jpg", grande: "img/foto01_grande.jpg"},
				{chica:"img/foto02_chica.jpg", grande: "img/foto02_grande.jpg"},
				{chica:"img/foto03_chica.jpg", grande: "img/foto03_grande.jpg"},
				{chica:"img/foto04_chica.jpg", grande: "img/foto04_grande.jpg"}
			],
			disponibilidad: true		
		},
		{
			id:5, 
			idCategoria:1, 
			nombre:"Simon",
			descripcion:"Descripción Simon",
			precio: 10,
			stock: 3,
			fotos: [
				{chica:"img/foto01_chica.jpg", grande: "img/foto01_grande.jpg"},
				{chica:"img/foto02_chica.jpg", grande: "img/foto02_grande.jpg"},
				{chica:"img/foto03_chica.jpg", grande: "img/foto03_grande.jpg"},
				{chica:"img/foto04_chica.jpg", grande: "img/foto04_grande.jpg"}
			],
			disponibilidad: true		

		},
		{
			id:6, 
			idCategoria:2, 
			nombre:"El Perfume",
			descripcion:"Descripción El Perfume",
			precio: 34,
			stock: 4,
			fotos: [
				{chica:"img/foto01_chica.jpg", grande: "img/foto01_grande.jpg"},
				{chica:"img/foto02_chica.jpg", grande: "img/foto02_grande.jpg"},
				{chica:"img/foto03_chica.jpg", grande: "img/foto03_grande.jpg"},
				{chica:"img/foto04_chica.jpg", grande: "img/foto04_grande.jpg"}
			],
			disponibilidad: true		
		},
		{
			id:7, 
			idCategoria:2, 
			nombre:"Yawar Fiesta",
			descripcion:"Descripción Yawar Fiesta",
			precio: 100,
			stock: 1,
			fotos: [
				{chica:"img/foto01_chica.jpg", grande: "img/foto01_grande.jpg"},
				{chica:"img/foto02_chica.jpg", grande: "img/foto02_grande.jpg"},
				{chica:"img/foto03_chica.jpg", grande: "img/foto03_grande.jpg"},
				{chica:"img/foto04_chica.jpg", grande: "img/foto04_grande.jpg"}
			],
			disponibilidad: true		
		},
		{
			id:8, 
			idCategoria:2, 
			nombre:"La Casa de Cartón",
			descripcion:"Descripción La Casa de Cartón",
			precio: 80,
			stock: 3,
			fotos: [
				{chica:"img/foto01_chica.jpg", grande: "img/foto01_grande.jpg"},
				{chica:"img/foto02_chica.jpg", grande: "img/foto02_grande.jpg"},
				{chica:"img/foto03_chica.jpg", grande: "img/foto03_grande.jpg"},
				{chica:"img/foto04_chica.jpg", grande: "img/foto04_grande.jpg"}
			],
			disponibilidad: true		
		}
	];

	var obj = {};

	obj.listarProductos = function(){
		return datos;
	};

	return obj;
});