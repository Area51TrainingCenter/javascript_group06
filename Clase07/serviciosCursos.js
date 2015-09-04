app.factory("serviciosCursos", ["$http", function($http){
	var servicio = {};
	var ruta = "http://area51.tibajodemanda.com:7001/cursos";

	servicio.listar = function(){
		return $http.get(ruta);
	};

	servicio.detallar = function(registro){
		return $http.get(ruta+"/"+registro.idCurso);
	};

	servicio.refrescar = function(listado){
		return $http.get(ruta);
	};

	servicio.insertar = function(registro){
		return $http.post(ruta,registro);
	};

	servicio.actualizar = function(registro){
		return $http.put(ruta+"/"+registro.idCurso, registro);
	};

	servicio.borrar = function(registro){
		return $http.delete(ruta+"/"+registro.idCurso, registro);
	};

	return servicio;

}]);