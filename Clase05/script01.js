var nombre = document.getElementById("txtNombre"),
	resumen = document.getElementById("resumen");

function fnTecla(){
	var texto = nombre.value;
	resumen.innerHTML = texto;
}

nombre.addEventListener("keyup", fnTecla);
