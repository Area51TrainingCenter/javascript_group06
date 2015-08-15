function deviceOrientationHandler(tiltLR, tiltFB, dir) {
      document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
      document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
      document.getElementById("doDirection").innerHTML = Math.round(dir);
      
      var perro = document.getElementById("imgPerro");
      perro.style.webkitTransform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
      perro.style.MozTransform = "rotate("+ tiltLR +"deg)";
      perro.style.transform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
    }


if (window.DeviceOrientationEvent) {
		window.addEventListener('deviceorientation', function(eventData) {
			var tiltLR = eventData.gamma;
			var tiltFB = eventData.beta;
			var dir = eventData.alpha;

	        deviceOrientationHandler(tiltLR, tiltFB, dir);
	    },false);		
}