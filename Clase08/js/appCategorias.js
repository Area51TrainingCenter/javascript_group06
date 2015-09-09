app.factory("datosCategoria", function(){
	var datos = [
		{id:1, nombre:'Juguetes'},
		{id:2, nombre:'Libros'},
		{id:3, nombre:'Cocina'},
		{id:4, nombre:'Electrónica'},
		{id:5, nombre:'Música'},
		{id:6, nombre:'Videos'}
	];

	var obj = {};

	obj.listarCategorias = function(){
		return datos;
	};

	return obj;

});