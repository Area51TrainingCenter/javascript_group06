function registrarAlumno(){
	console.log("registrarAlumno");
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve();	
	}, 2000);
	

	return diferido.promise;	
}

function verificarRequisitos(){
	console.log("verificarRequisitos");
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve();	
	}, 2000);
	

	return diferido.promise;	
}

function listarCursosDisponibles(){
	console.log("listarCursosDisponibles");
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve();	
	}, 2000);
	

	return diferido.promise;	
}


function matricularse(){
	console.log("matricularse");
}


registrarAlumno()
	.then(verificarRequisitos)
	.then(listarCursosDisponibles)
	.then(matricularse);








