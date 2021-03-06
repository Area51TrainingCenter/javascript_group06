var io = io();
	startCamera = false,
	video = document.getElementById("video"),
	canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d");

navigator.streaming = (
					navigator.getUserMedia ||
					navigator.webkitGetUserMedia ||
					navigator.mozGetUserMedia ||
					navigator.msGetUserMedia
				);

navigator.streaming(
	{
		video:true,
		audio:false
	}, 
	function (stream){
		startCamera = true;
		video.src = window.URL.createObjectURL(stream);
	},
	function (err){
		alert("Error al acceder a la camara web:"+err);
	}
);

window.playVideo = (function (cb){
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (cb)
		{
			window.setTimeout(cb,1000/100);
		}
})();



function streamVideo(context, video, canvas)
{
	context.drawImage(video, 0, 0, 640, 480);
	var outputStream = canvas.toDataURL("image/jpeg",0.4);
	
	if(startCamera)
	{
		io.emit("streaming",outputStream);
	};

	playVideo(function (){
		streamVideo(context, video, canvas);
	});
}


window.addEventListener("load",function (){
	video.style.display = "none";
	video.autoplay = true;
	
	streamVideo(context, video, canvas);
});
