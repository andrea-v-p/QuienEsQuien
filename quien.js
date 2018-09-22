//contador de intentos que se ha hecho en la partida
var intentos = 0;

//FUNCION DISTRIBUIDORA
function distribuir(){
	var pregunta = comprobarPregunta();
	var respuestaSelecionada;

	if (pregunta === "f" || pregunta === "m") {
		respuestaSelecionada = comprobarSexo("selecionada");
		escribirPreguntas(pregunta, respuestaSelecionada);
		comprobarRestantes("sexo", respuestaSelecionada, pregunta);
	}
	else if (pregunta === "moreno" || pregunta === "castanyo" || pregunta === "rubio") {
		respuestaSelecionada = comprobarPelo("selecionada");
		escribirPreguntas(pregunta, respuestaSelecionada);
		comprobarRestantes("pelo", respuestaSelecionada, pregunta);
	}
	else if (pregunta === "si" || pregunta === "no") {
		respuestaSelecionada = comprobarGafas("selecionada");
		escribirPreguntas(pregunta, respuestaSelecionada);
		comprobarRestantes("gafas", respuestaSelecionada, pregunta);
	}
}


function comprobarRestantes(tipo, selecionada, pregunta){
	var cartasActivas = document.getElementsByClassName("backFlip");
	var sexo;

	//Falla al quitar elementos de la array
	var cartasId = [];

	var largo1 = cartasActivas.length;

	for (var x = 0; x < largo1 ; x++) {
		cartasId.push(cartasActivas[x].id);
	}

	var largo2 = cartasId.length;

	for (var i = 0; i < largo2 ; i++) {
		if (tipo == "sexo") {
			sexo = comprobarSexo(cartasId[i]);
			if( sexo != selecionada){
				flip(cartasId[i]);
			}
		}
		else if (tipo == "pelo"){
			if (selecionada == pregunta) {
				if(comprobarPelo(cartasId[i]) != selecionada){
					flip(cartasId[i]);
				}
			}
			else if (selecionada != pregunta){
				if(comprobarPelo(cartasId[i]) == pregunta){
					flip(cartasId[i]);
				}
			}
		}
		else if (tipo == "gafas"){
			if(comprobarGafas(cartasId[i]) != selecionada){
				if( gafas != selecionada){
					flip(cartasId[i]);
				}
			}
		}
	}
}

//Escribe en el textarea las preguntas que se han formulado con su respuesta
function escribirPreguntas(pregunta, selecionada){
	var preguntaCompleta;
	var respuesta;

	if (pregunta == selecionada){
		respuesta = "Si";
	}else {
		respuesta = "no";
	}

	if (pregunta == "m") {
		preguntaCompleta = "¿Es un chico?";
	}else if(pregunta == "f"){
		preguntaCompleta = "¿Es una chica?";
	}else if(pregunta == "moreno"){
		preguntaCompleta = "¿Es moreno?";
	}else if (pregunta == "rubio"){
		preguntaCompleta = "¿Es rubio?";
	}else if (pregunta == "castanyo"){
		preguntaCompleta = "¿Es castaño?";
	}else if (pregunta == "gafas"){
		preguntaCompleta = "¿Lleva gafas?";
	}

	document.getElementById("texto").value += preguntaCompleta+ '\n';
	document.getElementById("texto").value += respuesta+ '\n';
}

//Comprueba la pregunta que se ha formulado
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

//comprueba el valor del atributo pelo
function comprobarPelo(carta){
	var peloDef = document.getElementById(carta).dataset.pelo;
	
	return peloDef;
}

//comprueba el valor del atributo sexo
function comprobarSexo(carta){
	var sexoDef = document.getElementById(carta).dataset.sexo;
	
	return sexoDef;
}

//comprueba el valor del atributo gafas
function comprobarGafas(carta){
	var gafasDef = document.getElementById(carta).dataset.gafas;

	return gafasDef;
}


// Cambia la clase de la carta que se han descartado evitando que se puedan volver a girar
function flip(idCard){
	var num = idCard.substring(0, 1);

	document.getElementById(num+"b").className = "frontFlip2";
	document.getElementById(num+"f").className = "backFlip2";
}
