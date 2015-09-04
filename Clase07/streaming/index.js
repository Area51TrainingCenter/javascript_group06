var app = require("express")(),
	http = require("http").createServer(app),
	io = require("socket.io")(http),
	port = process.env.PORT || 7000;

http.listen(port, function (){
	console.log("Transmitiendo por el puerto %d", port);
});

app.get("/", function (req, res){
	res.sendFile(__dirname + "/publico/cliente.html");
});

app.get("/streaming", function (req, res){
	res.sendFile(__dirname+"/publico/servidor.html");
});

io.on("connection", function (socket){
	socket.on("streaming", function (img){
		io.emit("play video", img);
	});
});

/*
	1. Instalar el NodeJS (http://www.nodejs.org)
	2. Copian los archivos a una carpeta
	3. npm install -g express
	4. npm install -g socket.io
	5. node index.js
	6. Abrir un navegador
	7. Tipear http://localhost:7000/streaming   --> Envía video
	8. Tipear http://localhost:7000             --> Recibe video

	Para probar la cámara: http://www.testwebcam.com/
*/