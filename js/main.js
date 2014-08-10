var myCanvas, context, canvasWidth, canvasHeight, mapCellX, mapCellY, posX = 48.75, posY = 152, e, size = 1/2, move = 5, pixelPared = 200;

var topBomber, rightBomber, bottomBomber, leftBomber;

var espaciamiento = 100;

$(document).ready(function(){
	// Almacenamos canvas y creamos contexto
	myCanvas = document.getElementById("canvas");
	context = myCanvas.getContext("2d");

	// Ancho y alto
	myCanvas.width = window.innerWidth -10;
	canvasWidth = myCanvas.width;
	myCanvas.height = window.innerHeight - 10;
	canvasHeight = myCanvas.height;

	// Divide ancho y alto del canvas en 20 partes
	mapCellX = canvasWidth / 20;
	mapCellY = canvasHeight / 20;

	// Rellenamos fondo
	context.fillStyle = "#BB0011";
	context.fillRect(0,0,window.innerWidth,window.innerHeight);
	context.fillRect(0,0,200,100);

	// Dibuja el cuerpo del Bomberman
	
	body(posX, posY, size);
	mapa();
	dibujarParedAzul();
	
	// Checkea si se presionó una tecla y ejecuta doKeyDown
	document.body.addEventListener( "keypress", doKeyDown, true);

});

function body(posX, posY, size){

	//fondo rojo
	context.fillStyle = "#BB0011";
	context.fillRect(0,0,canvas.width,canvas.height);

	var rCuerpo = 70 * size;
	var rCabeza = 35 * size;
	var rPieIzq = 20 * size;
	var rPieDer = 20 * size;
	var rBrazoIzq = 10 * size;
	var rBrazoDer = 10 * size;

	topBomber = posY - rCuerpo - rCabeza;
	rightBomber = posX + rCuerpo + rBrazoDer;
	bottomBomber = posY + rCuerpo + rCabeza;
	leftBomber = posX - rCuerpo - rBrazoIzq;

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

function paredMetal(counterX, counterY){
	context.beginPath();
	context.fillStyle = "gray";
	context.fillRect(espaciamiento * counterX, espaciamiento * counterY, pixelPared * size, pixelPared * size);
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
				paredMetal(i, j);
			}
		}
	}
}

function doKeyDown(e) {
	// Derecha
	if (e.keyCode == 39){
		if (posX < myCanvas.width - 70){
			posX = posX + move;
			if(chocoParedAzul() == true)
			{
				posX = posX - (move*2);
			}
		}
	}
	// Izquierda
	if (e.keyCode == 37){
		if (posX > 70 ){
			posX = posX - move;
			if(chocoParedAzul() == true)
			{
				posX = posX + (move*2);
			}
		}
	}
	// Arriba
	if (e.keyCode == 38){
		if (posY > 90 ){
			posY = posY - move;
			if(chocoParedAzul() == true)
			{
				posY = posY + (move*2);
			}
		}
	}
	// Abajo
	if (e.keyCode == 40){
		if (posY < myCanvas.height - 90){
			posY = posY + move;
			if(chocoParedAzul() == true)
			{
				posY = posY - (move*2);
			}
		}
	}

	body(posX, posY, size);
	mapa();
	dibujarParedAzul();
	
}

function choco(){
	for(i = 0; i < 14; i++){
		for(j = 0; j < 8; j++){
			if(i%2==0 && j%2==0){
				rightPared = (i * espaciamiento) + (pixelPared * size);
				leftPared = i * espaciamiento;
				topPared = j * espaciamiento;
				bottomPared = (j * espaciamiento) + (pixelPared * size);
				if(leftBomber <= rightPared && rightBomber >= leftPared){
					if(bottomBomber >= topPared && topBomber <= bottomPared){
						return true;
					}
				}
			}
		}
	}
	console.log("Retornó False");
	return false;
}

function dibujarParedAzul(){
		context.beginPath();
		context.fillStyle = "blue";
		context.fillRect(500, 300, 200, 200);
		context.fill();
		context.lineWidth = 1;
 		context.strokeStyle = "#000000";
 		context.stroke();
 		context.closePath();
}

function chocoParedAzul(){
	var topPared = 300;
 	var rightPared = 700;
 	var bottomPared = 500;
 	var leftPared = 500;
	if(leftBomber < rightPared && rightBomber > leftPared){
		if(bottomBomber > topPared && topBomber < bottomPared){
			return true;
		}
	}
	return false;
}


/*
left arrow		37
up arrow		38
right arrow 	39
down arrow		40
*/