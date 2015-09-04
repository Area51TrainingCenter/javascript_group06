var io = io();

io.on("play video", function(img){
	var imagen = document.getElementById("streaming");

	imagen.src = img;
});
