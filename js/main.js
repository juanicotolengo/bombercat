var myCanvas, context, posX, posY;

$(document).ready(function(){
	// Almacenamos canvas y creamos contexto
	myCanvas = document.getElementById("canvas");
	context = myCanvas.getContext("2d");

	// Ancho y alto
	myCanvas.width = window.innerWidth;
	myCanvas.height = window.innerHeight;

	// Rellenamos fondo
	context.fillStyle = "#BB0011";
	context.fillRect(0,0,window.innerWidth,window.innerHeight);
	context.fillRect(0,0,200,100)

	body(510, 300);

});

function body(posX, posY){
	

 	// Cuerpo
 	context.beginPath();
 	context.arc(posX, posY, 70, 0, 2 * Math.PI, false);
 	context.fillStyle = "green";
 	context.fill();
 	context.lineWidth = 5;
 	context.strokeStyle = "#003300";
 	context.stroke();

 	// Cabeza
 	context.beginPath();
 	context.arc(posX, posY - 87.5, 35, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 3;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Pie Izquierdo
 	context.beginPath();
 	context.arc(posX - 30, posY + 70, 20, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 3;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Pie Derecho
 	context.beginPath();
 	context.arc(posX + 30, posY + 70, 20, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 3;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Mano Izquierda
 	context.beginPath();
 	context.arc(posX - 70, posY, 10, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 3;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Mano Derecha
 	context.beginPath();
 	context.arc(posX + 70, posY, 10, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 3;
 	context.strokeStyle = "#000000";
 	context.stroke();
}