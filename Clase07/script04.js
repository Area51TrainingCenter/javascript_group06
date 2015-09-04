var app = angular.module("miApp",[]);

app.controller("miControlador", ["$http", "serviciosCursos", function($http, serviciosCursos){
	var referencia = this;

	/*Para listar registros*/
	serviciosCursos.listar().then(function(registros){
		referencia.lista = registros.data;
	});

	this.insertarRegistro = function(){
		/*Para insertar*/
		serviciosCursos
			.insertar({nombreCurso: this.datoAInsertar})
			.then(function(registro){
				alert("Registro insertado");
				referencia.datoAInsertar="";
			})
			.then(function(msg){
				serviciosCursos.refrescar()
					.then(function(registros){
						referencia.lista = registros.data;
					});
			});
	};

	this.borrarRegistro = function(registro){
		serviciosCursos
			.borrar({idCurso:registro.idCurso})
			.then(function(reg){
				alert("El registro fue borrado");
				serviciosCursos.refrescar()
					.then(function(registros){
						referencia.lista = registros.data;
					});				
			});
	};

	this.mostrarFechaActualizacion = function(registro){
		serviciosCursos
			.detallar({idCurso:registro.idCurso})
			.then(function(reg){
				alert(reg.data.updatedAt);
			});
	};

	this.actualizarCurso = function(item) {
		serviciosCursos
			.actualizar(item)
			.then(function(reg){
				alert("Registro Actualizado");
				serviciosCursos.refrescar()
					.then(function(registros){
						referencia.lista = registros.data;
					});	
			});
	}

}]);