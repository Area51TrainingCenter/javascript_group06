var app =angular.module("appRutas", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
                templateUrl : 'home.html',
                controller: 'ctrlHome',
                controllerAs: 'ctrl'
    	})

		.when('/quienes', {
                templateUrl : 'quienes.html',
                controller: 'ctrlQuienes',
                controllerAs: 'ctrl'
    	});

		.when('/contacto', {
                templateUrl : 'contacto.html',
                controller: 'ctrlContacto',
                controllerAs: 'ctrl'
    	});    
});

app.controller("ctrlHome", function(){
	this.fecha = new Date();
});

app.controller("ctrlQuienes", function(){
	this.fecha = new Date();
});

app.controller("ctrlContacto", function(){
	this.fecha = new Date();
});

