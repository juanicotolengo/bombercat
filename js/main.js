var myCanvas, context, posX = 100, posY = 100, e, size = 1/2;

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

	// Dibuja el cuerpo del Bomberman
	body(posX, posY, size);

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

 	// Cabeza
 	context.beginPath();
 	context.arc(posX, posY - rCuerpo, rCabeza, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 1;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Pie Izquierdo
 	context.beginPath();
 	context.arc(posX - rCuerpo / 2, posY + rCuerpo, rPieIzq, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 1;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Pie Derecho
 	context.beginPath();
 	context.arc(posX + rCuerpo / 2, posY + rCuerpo, rPieDer, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 1;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Mano Izquierda
 	context.beginPath();
 	context.arc(posX - rCuerpo, posY, rBrazoIzq, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 1;
 	context.strokeStyle = "#000000";
 	context.stroke();

 	// Mano Derecha
 	context.beginPath();
 	context.arc(posX + rCuerpo, posY, rBrazoDer, 0, 2 * Math.PI, false);
 	context.fillStyle = "yellow";
 	context.fill();
 	context.lineWidth = 1;
 	context.strokeStyle = "#000000";
 	context.stroke();

}

function doKeyDown(e) {
	// Derecha
	if (e.keyCode == 39){
		if (posX < window.innerWidth -50){
			posX = posX + 10;
			context.fillStyle = "#BB0011";
			context.fillRect(0,0,canvas.width,canvas.height);
			body(posX, posY, 1/2);
		}
	}
	// Izquierda
	if (e.keyCode == 37){
		if (posX > 50){
			posX = posX - 10;
			context.fillStyle = "#BB0011";
			context.fillRect(0,0,canvas.width,canvas.height);
			body(posX, posY, 1/2);
		}
	}
	// Arriba
	if (e.keyCode == 38){
		if (posY > 70){
			posY = posY - 10;
			context.fillStyle = "#BB0011";
			context.fillRect(0,0,canvas.width,canvas.height);
			body(posX, posY, 1/2);
		}
	}
	// Abajo
	if (e.keyCode == 40){
		if (posY < window.innerHeight - 70){
			posY = posY + 10;
			context.fillStyle = "#BB0011";
			context.fillRect(0,0,canvas.width,canvas.height);
			body(posX, posY, 1/2);
		}
	}
}

/*
left arrow		37
up arrow		38
right arrow 	39
down arrow		40
*/
