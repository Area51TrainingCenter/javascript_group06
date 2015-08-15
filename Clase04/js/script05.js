function entregarCarta(cb){
	//Aquí el cliente decide qué comer
	cb(entregarPedidoACocina);
}

function tomarPedido(cb){
	//Aquí llevo el pedido hacia la cocina
	cb(recogerPedido);
}

function entregarPedidoACocina(cb){
	//Entrego el pedido a la cocina
	cb(entregarPedido);
}

function recogerPedido(cb){
	//Espero a recoger el pedido
	cb(cobrar);
}

function entregarPedido(cb){
	//Tiempo que me toma llegar al cliente
	//Espero que el cliente termine
	cb()
}

function cobrar(){
	//Aquí se termina el flujo
}


entregarCarta(tomarPedido);










