//FALTA COMPROBAR ATRIBUTOS DE LA CARTA SELECCIONADA



//contador de intentos que se ha hecho en la partida
var intentos = 0;
function distribuir(){
	var pregunta = comprobarPregunta();

	if (pregunta === "f" || pregunta === "m") {
		var selecionada = comprobarSexo("selecionada");
		comprobarRestantes("sexo", selecionada);
	}
	else if (pregunta === "moreno" || pregunta === "castanyo" || pregunta === "rubio") {
		var selecionada = comprobarPelo("selecionada");
		comprobarRestantes("pelo", selecionada);
	}
	else if (pregunta === "si" || pregunta === "no") {
		var selecionada = comprobarGafas("selecionada");
		comprobarRestantes("gafas", selecionada);
	}
}

function comprobarRestantes(tipo, selecionada){
	var cartasActivas = document.getElementsByClassName("backFlip");
	var sexo;
	var i = 0;

	//Da por saco al actualizar la array
	
	var cartasId = [];

	for (var x = 0; x < largo ; x++) {
		cartasId.push(cartasActivas[x].id);
	}

	var largo = cartasId.length;

	for (i = 0; i <= largo ; i++) {
		if (tipo == "sexo") {
			sexo = comprobarSexo(cartasId[i]);
			if( sexo != selecionada){
				flip(cartasActivas[i].id);
			}
		}
		else if (tipo == "pelo"){
			if(comprobarPelo(cartasId[i]) != selecionada){
				flip(cartasActivas[i].id);
			}
		}
		else if (tipo == "gafas"){
			if(comprobarGafas(cartasId[i]) != selecionada){
				flip(cartasActivas[i].id);
			}
		}
	}
}

// Funcion distribuidora
function comprobarPregunta(){
	var pregunta = document.getElementById("atributos").value;

// POSIBLES VALUES ==> chico, chica, moreno, rubio, castaño, gafas
	switch(pregunta) {
		case "chico":
			return "m";
			break;

		case "chica":
			return "f";
			break;

		case "moreno":
			return "moreno";
			break;

		case "rubio":
			return"rubio";
			break;

		case "castanyo":
			return"castanyo";
			break;

		case "gafas":
			return"si";	
			break;
	default:
		return null;
	}
}


function comprobarPelo(carta){
	var pelo = document.getElementById(carta).dataset.pelo;
	
	return pelo;
}

function comprobarSexo(carta){
	var sexo = document.getElementById(carta).dataset.sexo;
	
	return sexo;
}

function comprobarGafas(carta){
	var gafas = document.getElementById(carta).dataset.gafas;

	return gafas;
}


// Cambia la clase de la carta que se han descartado evitando que se puedan volver a girar
function flip(idCard){
	var num = idCard.substring(0, 1);

	document.getElementById(num+"b").className = "frontFlip2";
	document.getElementById(num+"f").className = "backFlip2";
}
