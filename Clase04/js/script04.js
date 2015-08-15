var usuario = {};

function mostrarDatosUsuario(){
	console.log(usuario);
}

function detalleUsuario(callbackFunction){
	for(var i=0; i<=2000000000; i++){
		if(i==8000){
			usuario = {nombre: "Sergio", apellido: "Hidalgo"};
			callbackFunction();
		}
	}
}

detalleUsuario(mostrarDatosUsuario);