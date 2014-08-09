var myCanvas, context, canvasWidth, canvasHeight, mapCellX, mapCellY, posX = 195, posY = 195, e, size = 1/2, move = 5;
var xBomberArribaIzq, yBomberArribaIzq, xBomberArribaDer, yBomberArribaDer;
var xBomberAbajoIzq, yBomberAbajoIzq, xBomberAbajoDer, yBomberAbajoDer;
var xParedArribaIzq, yParedArribaIzq, xParedArribaDer, yParedArribaDer;
var xParedAbajoIzq, yParedAbajoIzq, xParedAbajoDer, yParedAbajoDer;

$(document).ready(function(){
	// Almacenamos canvas y creamos contexto
	myCanvas = document.getElementById("canvas");
	context = myCanvas.getContext("2d");

	// Ancho y alto
	myCanvas.width = window.innerWidth -10;
	canvasWidth = myCanvas.width;
	myCanvas.height = window.innerHeight - 10;
	canvasHeight = myCanvas.height;
	console.log(canvasWidth);
	console.log(canvasHeight);

	// Divide ancho y alto del canvas en 20 partes
	mapCellX = canvasWidth / 20;
	mapCellY = canvasHeight / 20;

	console.log(mapCellX);
	console.log(mapCellY);

	// Rellenamos fondo
	context.fillStyle = "#BB0011";
	context.fillRect(0,0,window.innerWidth,window.innerHeight);
	context.fillRect(0,0,200,100)

	// Dibuja el cuerpo del Bomberman
	body(posX, posY, size);
	mapa();
	
	// Checkea si se presionó una tecla y ejecuta doKeyDown
	document.body.addEventListener( "keydown", doKeyDown, true);

});

function body(posX, posY, size, color){
	
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
 	context.lineWidth = 1;
 	context.strokeStyle = "#003300";
 	context.stroke();
 	context.closePath();

 	// Cabeza
 	context.beginPath();
 	context.arc(posX, posY - rCuerpo, rCabeza, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 1;
 	context.strokeStyle = "#000000";
 	context.stroke();
 	context.closePath();

 	// Pie Izquierdo
 	context.beginPath();
 	context.arc(posX - rCuerpo / 2, posY + rCuerpo, rPieIzq, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 1;
 	context.strokeStyle = "#000000";
 	context.stroke();
 	context.closePath();

 	// Pie Derecho
 	context.beginPath();
 	context.arc(posX + rCuerpo / 2, posY + rCuerpo, rPieDer, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 1;
 	context.strokeStyle = "#000000";
 	context.stroke();
 	context.closePath();

 	// Mano Izquierda
 	context.beginPath();
 	context.arc(posX - rCuerpo, posY, rBrazoIzq, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 1;
 	context.strokeStyle = "#000000";
 	context.stroke();
 	context.closePath();

 	// Mano Derecha
 	context.beginPath();
 	context.arc(posX + rCuerpo, posY, rBrazoDer, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 1;
 	context.strokeStyle = "#000000";
 	context.stroke();
 	context.closePath();
}

function paredMetal(size, counterX, counterY){
	context.beginPath();
	context.fillStyle = "gray";
	context.fillRect(100 * counterX, 100 * counterY, 195 * size, 195 * size);
	context.fill();
	context.lineWidth = 1;
 	context.strokeStyle = "#000000";
 	context.stroke();
 	context.closePath();
}

function mapa(){
	for(i = 0; i < 14; i++){
		for(j = 0; j < 8; j++){
			if(i%2==0 && j%2==0){
				paredMetal(size, i, j);
			}
		}
	}
}

function chocoPared(posX, posY){

	var noChoco = true;
	return noChoco;

}

function doKeyDown(e) {
	// Derecha
	if (e.keyCode == 39){
		if (posX < myCanvas.width - 70 && chocoPared(posX, posY)){
			posX = posX + move;
			context.fillStyle = "#BB0011";
			context.fillRect(0,0,canvas.width,canvas.height);
			body(posX, posY, size);
		}
	}
	// Izquierda
	if (e.keyCode == 37){
		if (posX > 70){
			posX = posX - move;
			context.fillStyle = "#BB0011";
			context.fillRect(0,0,canvas.width,canvas.height);
			body(posX, posY, size);
		}
	}
	// Arriba
	if (e.keyCode == 38){
		if (posY > 90){
			posY = posY - move;
			context.fillStyle = "#BB0011";
			context.fillRect(0,0,canvas.width,canvas.height);
			body(posX, posY, size);
		}
	}
	// Abajo
	if (e.keyCode == 40){
		if (posY < myCanvas.height - 90){
			posY = posY + move;
			context.fillStyle = "#BB0011";
			context.fillRect(0,0,canvas.width,canvas.height);
			body(posX, posY, size);
		}
	}
	mapa();
}

/*
left arrow		37
up arrow		38
right arrow 	39
down arrow		40
*/
