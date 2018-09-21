//contador de intentos que se ha hecho en la partida
var intentos = 0;

// Funcion distribuidora
function comprobar(){
	var pregunta = document.getElementById("atributos").value;
	comprobarAtributos();
}

function comprobarAtributos(){
	var cartasActivas = document.getElementsByClassName("backFlip");

}

// Cambia la clase de la carta que se han descartado evitando que se puedan volver a girar
function bloquear(idCard){
	document.getElementById(idCard+"b").className = "backFlip2";
	document.getElementById(idCard+"f").className = "frontFlip2";
}

// Devuelve las parejas que has fallado boca abajo
function dobleFlip(idCards){
	document.getElementById(idCards[0]+"b").className = "backFlip";
	document.getElementById(idCards[0]+"f").className = "frontFlip";

	document.getElementById(idCards[1]+"b").className = "backFlip";
	document.getElementById(idCards[1]+"f").className = "frontFlip";
}