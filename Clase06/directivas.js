(function(){

var app = angular.module("misDirectivas", []);

app.directive("miDirectivaGaleria", function(){
	return {
		restrict:"E",
		templateUrl:"galeria.html",
		controller: function(){
			this.mostrarTituloFoto=function(foto) {
				alert(foto.titulo);
			}			
		},
		controllerAs: "gal"
	}
})



})();