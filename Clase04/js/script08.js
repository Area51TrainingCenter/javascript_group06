console.log(navigator.geolocation);

function mostrarPosicion(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;	

	var mapdiv = document.createElement('div');
	mapdiv.id = 'mapa';
	mapdiv.style.height = '400px';
	mapdiv.style.width = '600px';    

	document.body.appendChild(mapdiv);

	var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	  
	var options = {
	    zoom: 15,
	    center: coords,
	    mapTypeControl: false,
	    navigationControlOptions: {
	    	style: google.maps.NavigationControlStyle.SMALL
	    },
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById("mapa"), options);

	var marker = new google.maps.Marker({
	      position: coords,
	      map: map,
	      title:"Supuestamente estamos aquí"
	});
}

function error(){
	console.log("No se pudo");
}

if(navigator.geolocation){
	console.log("Soporta geolocalización");

	navigator.geolocation.getCurrentPosition(mostrarPosicion, error);

} else {
	console.log("Actualiza tu navegador");
}