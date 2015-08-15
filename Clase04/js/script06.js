function entregarCarta(){
	console.log("entregarCarta")
	//Aquí el cliente decide qué comer
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve();	
	}, 2000);
	

	return diferido.promise;
}

function tomarPedido(){
	console.log("tomarPedido");
	//Aquí llevo el pedido hacia la cocina
	
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve();	
	}, 2000);
	

	return diferido.promise;	
}

function entregarPedidoACocina(){
	console.log("entregarPedidoACocina");
	//Entrego el pedido a la cocina
	
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.reject("No hay ese plato");	
	}, 2000);
	

	return diferido.promise;	
}

function recogerPedido(){
	console.log("recogerPedido");
	//Espero a recoger el pedido
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve();	
	}, 2000);
	

	return diferido.promise;	
}

function entregarPedido(){
	console.log("entregarPedido");
	//Tiempo que me toma llegar al cliente
	//Espero que el cliente termine
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve();	
	}, 2000);
	

	return diferido.promise;	
}

function cobrar(){
	console.log("cobrar");
	//Aquí se termina el flujo
}


entregarCarta()
	.then(tomarPedido)
	.then(entregarPedidoACocina)
	.then(recogerPedido)
	.then(entregarPedido)
	.then(cobrar)
	.fail(function(msg){
		alert(msg)
	})
	.done(function(){
		alert("Fin del flujo");
	});








