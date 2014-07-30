var myCanvas, context, posX, posY, size;

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

	body(510, 300, 1/2);

});

function body(posX, posY, size){
	
	var rCuerpo = 70 * size;
	var rCabeza = 35 * size;
	var rPieIzq = 20 * size;
	var rPieDer = 20 * size;
	var rBrazoIzq = 10 * size;
	var rBrazoDer = 10 * size;

 	// Cuerpo
 	context.beginPath();
 	context.arc(posX, posY, rCuerpo, 0, 2 * Math.PI, false);
 	context.fillStyle = "green";
 	context.fill();
 	context.lineWidth = 5;
 	context.strokeStyle = "#003300";
 	context.stroke();

 	// Cabeza
 	context.beginPath();
 	context.arc(posX, posY - rCuerpo, rCabeza, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 3;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Pie Izquierdo
 	context.beginPath();
 	context.arc(posX - rCuerpo / 2, posY + rCuerpo, rPieIzq, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 3;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Pie Derecho
 	context.beginPath();
 	context.arc(posX + rCuerpo / 2, posY + rCuerpo, rPieDer, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 3;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Mano Izquierda
 	context.beginPath();
 	context.arc(posX - rCuerpo, posY, rBrazoIzq, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 3;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Mano Derecha
 	context.beginPath();
 	context.arc(posX + rCuerpo, posY, rBrazoDer, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 3;
 	context.strokeStyle = "#000000";
 	context.stroke();
}