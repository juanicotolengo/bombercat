var myCanvas, context, size = 1/2, move = 7, pixelPared = 200;

var espaciamiento = 120;

var bomberGlobal, paredGlobalAzul, paredGlobal;

// Objeto Bomber
var Bomber = function() {
    var posX = 0;
    var posY = 0;
    var ancho = 0;
    var alto = 0;

    this.setPosX = function(value) {posX = value;}
    this.setPosY = function(value) {posY = value;}
    this.setAncho = function(value) {ancho = value;}
    this.setAlto = function(value) {alto = value;}

    this.getPosX = function() {return posX;}
    this.getPosY = function() {return posY;}
    this.getAncho = function() {return ancho;}
    this.getAlto = function() {return alto;}

    this.calcularTop = function() {return posY;}
    this.calcularRight = function() {return posX + ancho;}
    this.calcularBottom = function() {return posY + alto;}
    this.calcularLeft = function() {return  posX;}

    this.calcularCentroX = function() {return  posX + (ancho/2);}
    this.calcularCentroY = function() {return  posX + (alto/2);}
}

// Objeto Pared
var Pared = function() {
	var top = 300;
 	var right = 700;
 	var bottom = 500;
 	var left = 500;

 	this.setTop = function(value) {top = value;}
    this.setRight = function(value) {right = value;}
    this.setBottom = function(value) {bottom = value;}
    this.setLeft = function(value) {left = value;}

 	this.getTop = function() {return top;}
    this.getRight = function() {return right;}
    this.getBottom = function() {return bottom;}
    this.getLeft = function() {return left;}

    this.dibujar = function() {
		context.beginPath();
		context.fillStyle = "blue";
		context.fillRect(left, top, right - left, bottom - top);
		context.fill();
		context.lineWidth = 1;
 		context.strokeStyle = "#000000";
 		context.stroke();
 		context.closePath();
	}
}

$(document).ready(function(){
	// Almacenamos canvas y creamos contexto
	myCanvas = document.getElementById("canvas");
	context = myCanvas.getContext("2d");

	// Ancho y alto
	myCanvas.width = window.innerWidth -10;
	myCanvas.height = window.innerHeight - 10;

	// Rellenamos fondo
	context.fillStyle = "#BB0011";
	context.fillRect(0,0,window.innerWidth,window.innerHeight);
	context.fillRect(0,0,200,100);

	// Crea una nueva paredGlobal
	paredGlobalAzul = new Pared();
	paredGlobal = new Pared();

	// Crea un objeto Bomber, le asigna las posiciones y lo dibuja
	bomberGlobal = new Bomber();
	bomberGlobal.setPosY(150);
	bomberGlobal.setPosX(150);
	body(size);
	// Dibuja el mapa
	mapa();
	paredGlobalAzul.dibujar();
	
	// Checkea si se presionó una tecla y ejecuta doKeyDown
	document.body.addEventListener( "keypress", doKeyDown, true);
});

function body(size){
	//fondo rojo
	context.fillStyle = "#BB0011";
	context.fillRect(0,0,canvas.width,canvas.height);

	// Radio de las partes del cuerpo
	var rCuerpo = 70 * size;
	var rCabeza = 35 * size;
	var rPieIzq = 20 * size;
	var rPieDer = 20 * size;
	var rBrazoIzq = 10 * size;
	var rBrazoDer = 10 * size;

	var posX = bomberGlobal.getPosX() + rCuerpo + rBrazoIzq + 2;
	var posY = bomberGlobal.getPosY() + rCuerpo + rCabeza;

	// Se almacena el ancho y alto del Bomber
	var anchoBomber = rCuerpo + rBrazoDer + 2 + rCuerpo + rBrazoIzq + 2;
	var altoBomber = rCuerpo + rCabeza + rCuerpo + rCabeza;

	// Se pasan los parámetros al objeto bomberGlobal
	bomberGlobal.setAncho(anchoBomber);
	bomberGlobal.setAlto(altoBomber);

	/*
	console.log("top es: " + bomberGlobal.calcularTop());
	console.log("right es: " + bomberGlobal.calcularRight());
	console.log("bottom es: " + bomberGlobal.calcularBottom());
	console.log("left es: " + bomberGlobal.calcularLeft());
	*/

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

function mapa(){
	for(i = 0; i < 14; i++){
		for(j = 0; j < 8; j++){
			if(i%2==0 && j%2==0){
				paredMetal(i, j);
			}
		}
	}
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

// Función para detectar las teclas
function doKeyDown(e) {
	//console.log("Se movio");
	// Derecha
	if (e.keyCode == 39){
		if (bomberGlobal.getPosX() < myCanvas.width - bomberGlobal.getAncho()){
			bomberGlobal.setPosX(bomberGlobal.getPosX() + move);
			if(chocoParedAzul() == true || chocoPared() == true){
				bomberGlobal.setPosX(bomberGlobal.getPosX() - move);
			}
		}
	}
	// Izquierda
	if (e.keyCode == 37){
		if (bomberGlobal.getPosX() > 0 ){
			bomberGlobal.setPosX(bomberGlobal.getPosX() - move);
			if(chocoParedAzul() == true || chocoPared() == true)
			{
				bomberGlobal.setPosX(bomberGlobal.getPosX() + move);
			}
		}
	}
	// Arriba
	if (e.keyCode == 38){
		if (bomberGlobal.getPosY() > 0 ){
			bomberGlobal.setPosY(bomberGlobal.getPosY() - move);
			if(chocoParedAzul() == true || chocoPared() == true)
			{
				bomberGlobal.setPosY(bomberGlobal.getPosY() + move);
			}
		}
	}
	// Abajo
	if (e.keyCode == 40){
		if (bomberGlobal.getPosY() < myCanvas.height - bomberGlobal.getAlto( )){
			bomberGlobal.setPosY(bomberGlobal.getPosY() + move);
			if(chocoParedAzul() == true || chocoPared() == true)
			{
				bomberGlobal.setPosY(bomberGlobal.getPosY() - move);
			}
		}
	}

	// Dibuja el cuerpo, mapa y paredGlobal
	body(size);
	mapa();
	paredGlobalAzul.dibujar();
}

// Función para detectar si chocó la pared
function chocoParedAzul(){
 	//console.log("Entro a chocoParedAzul");

	if(bomberGlobal.calcularLeft() < paredGlobalAzul.getRight() && bomberGlobal.calcularRight() > paredGlobalAzul.getLeft()){
	// if(leftBomber < rightPared && rightBomber > leftPared)
		if(bomberGlobal.calcularBottom() > paredGlobalAzul.getTop() && bomberGlobal.calcularTop() < paredGlobalAzul.getBottom()){
		// if(bottomBomber > topPared && topBomber < bottomPared)
			// Retorna verdadero si se cumplen las condiciones
			return true;
		}
	}
	return false;
}

function chocoPared(){
	for(i = 0; i < 14; i++){
		for(j = 0; j < 8; j++){
			if(i%2==0 && j%2==0){
				paredGlobal.setLeft(espaciamiento * i);
				paredGlobal.setRight((espaciamiento * i) + (pixelPared * size));
				paredGlobal.setTop(espaciamiento * j);
				paredGlobal.setBottom((espaciamiento * j) + (pixelPared * size));
				if(bomberGlobal.calcularLeft() < paredGlobal.getRight() && bomberGlobal.calcularRight() > paredGlobal.getLeft()){
					if(bomberGlobal.calcularBottom() > paredGlobal.getTop() && bomberGlobal.calcularTop() < paredGlobal.getBottom()){
						return true;
					}
				}
			}
		}
	}
	return false;
}

/*
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
	return false;
}

function dibujarParedAzul(){
		context.beginPath();
		context.fillStyle = "blue";
		context.fillRect(300, 500, 200, 200);
		context.fill();
		context.lineWidth = 1;
 		context.strokeStyle = "#000000";
 		context.stroke();
 		context.closePath();
}

left arrow		37
up arrow		38
right arrow 	39
down arrow		40
*/