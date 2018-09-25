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
	var sexo, gafas;

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
			gafas = comprobarGafas(cartasId[i]);
			if( gafas != selecionada){
				flip(cartasId[i]);
			}
			
		}
	}
	comprobarFinal();
}

//comprueba si se ha acabado el juego si ha acabado escribe final en el textArea
function comprobarFinal(){
	var cartasActivas = document.getElementsByClassName("backFlip");

	if (cartasActivas.length === 1) {
		document.getElementById("texto").value += "¡FINAL!\n";
		flipSelecionada();
		resultado(cartasActivas[0].id);
	}
}

//Voltea la ultima carta
function flipSelecionada(){
	document.getElementById("selecionada").className = "backFlipP";
	document.getElementById("selecionadaB").className = "frontFlipP";
}

//comprueba el resultado de la partida
function resultado(cartaId){
	var srcSelecionada = document.getElementById("selecionada").src;
	var srcUltima = document.getElementById(cartaId).src;

	if (srcSelecionada == srcUltima) {
		document.getElementById("texto").value += "¡Has ganado!";
	}else{
		document.getElementById("texto").value += "¡Has perdido!";
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
	}else if (pregunta == "si" || pregunta == "no"){
		preguntaCompleta = "¿Lleva gafas?";
	}

	document.getElementById("texto").value += preguntaCompleta;
	document.getElementById("texto").value += ' ' + respuesta+ '\n';
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

//Recopilacion de todas las funciones que se ejecutan al cargar
function alCargar(){
	limpiarTextArea();
	limpiarIntentos();
}

//ONLOAD --> Vacia el TextArea al principio de cada partida
function limpiarTextArea(){
	document.getElementById("texto").value = '';
}

//ONLOAD --> Pone a cero el numero de intentos al principio de cada partida
function limpiarIntentos(){
	intentos = 0;
	document.getElementById("intent").value = 'Intentos: 0';
}