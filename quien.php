<!DOCTYPE html>
<html>
	<head>
		<title>Quien es quien?</title>

		<link rel="stylesheet" href="style.css">
		<script src="quien.js"></script>
	</head>
	<body onload="alCargar()">	

		<?php
			$cartaSeleccionada = rand(1, 12);
			$col = 2;
			$fil = 6;
			$cont =0;

			$listaCartas = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
			$wid = 90;
			$hei = 130;
			
			/*
			*	$img1 = "data-sexo='m' data-pelo='rubio' data-gafas='si'";
			*	$img2 = "data-sexo='m' data-pelo='castaño' data-gafas='no'";
			*	$img3 = "data-sexo='m' data-pelo='moreno' data-gafas='si'";
			*	$img4 = "data-sexo='f' data-pelo='moreno' data-gafas='si'";
			*	$img5 = "data-sexo='f' data-pelo='castaño' data-gafas='no'";
			*	$img6 = "data-sexo='f' data-pelo='rubio' data-gafas='no'";
			*	$img7 = "data-sexo='m' data-pelo='castaño' data-gafas='si'";
			*	$img8 = "data-sexo='m' data-pelo='moreno' data-gafas='no'";
			*	$img9 = "data-sexo='m' data-pelo='rubio' data-gafas='no'";
			*	$img10 = "data-sexo='f' data-pelo='moreno' data-gafas='no'";
			*	$img11 = "data-sexo='f' data-pelo='rubio' data-gafas='si'";
			*	$img12 = "data-sexo='f' data-pelo='castaño' data-gafas='si'";
			*/

			$img  = [1 => " data-sexo='m' data-pelo='rubio' data-gafas='si'", 
					2 => " data-sexo='m' data-pelo='castanyo' data-gafas='no'", 
					3 => " data-sexo='m' data-pelo='moreno' data-gafas='si'",
					4 => " data-sexo='f' data-pelo='moreno' data-gafas='si'",
					5 => " data-sexo='f' data-pelo='castanyo' data-gafas='no'",
					6 => " data-sexo='f' data-pelo='rubio' data-gafas='no'",
					7 => " data-sexo='m' data-pelo='castanyo' data-gafas='si'",
					8 => " data-sexo='m' data-pelo='moreno' data-gafas='no'",
					9 => " data-sexo='m' data-pelo='rubio' data-gafas='no'",
					10 => " data-sexo='f' data-pelo='moreno' data-gafas='no'",
					11 => " data-sexo='f' data-pelo='rubio' data-gafas='si'",
					12 => " data-sexo='f' data-pelo='castanyo' data-gafas='si'"];

			if (isset($_POST['easy'])) {
				// Atributos personalizados: data-sexo, data-pelo, data-gafas
				echo ('	<div id="containerPrincipal">
				<div class="intent"><p id="intent">Intentos: 0</p></div>
				<a href="inicio.html"><img id="home" src="home.png"></a>
				<p id="dificultad">easy</p>

				<div id="cartas">');
					echo ('	
						<div id="elegida">
							<img src="Imagenes/'.$cartaSeleccionada.'.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="frontFlipP" id="selecionada"'.$img[$cartaSeleccionada].'>
							<img src="Imagenes/dorso.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="backFlipP" id="selecionadaB">
						</div>
					');


						echo ("<div id='tabla'> <table>");
						$contId = 1;
						for ($i=0; $i < $col ; $i++) { 
							echo ("<tr>");
							for ($x=0; $x < $fil ; $x++) {
								echo ('<td><div class="container">
											<img src="Imagenes/'.$listaCartas[$cont].'.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="backFlip" id="'.$contId.'f"'.$img[$contId].'>
											<img src="Imagenes/dorso.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="frontFlip" id="'.$contId.'b">
										</div></td>');
								$cont++; 
								$contId++;
							}
							echo ("</tr>");
						}
					echo ("</table>
						</div>");

			}elseif (isset($_POST['normal'])) {
				echo ('<div id="containerPrincipal">
				<div class="intent"><p id="intent">Intentos: 0</p></div>
				<a href="inicio.html"><img id="home" src="home.png"></a>
				<p id="dificultad">normal</p>

				<div id="cartas">');
					echo ('	
						<div id="elegida">
							<img src="Imagenes/'.$cartaSeleccionada.'.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="frontFlipP" id="selecionada"'.$img[$cartaSeleccionada].'>
							<img src="Imagenes/dorso.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="backFlipP" id="selecionadaB">
						</div>
					');


						echo ("<div id='tabla'> <table>");
						$contId = 1;
						for ($i=0; $i < $col ; $i++) { 
							echo ("<tr>");
							for ($x=0; $x < $fil ; $x++) {
								echo ('<td><div class="container" onclick="clickNormal(\''.$contId.'f\')">
											<img src="Imagenes/'.$listaCartas[$cont].'.png"  style="width:'.$wid.'px;height:'.$hei.'px;" class="backFlip" id="'.$contId.'f"'.$img[$contId].'>
											<img src="Imagenes/dorso.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="frontFlip" id="'.$contId.'b">
										</div></td>');
								$cont++; 
								$contId++;
							}
							echo ("</tr>");
						}
					echo ("</table>
						</div>");

             } elseif (isset($_POST['hard'])) {                
             	echo (' <div id="containerPrincipal"> <div class="info"><p id="intent">Intentos: 0</p>
             		<a href="inicio.html"><img id="home" src="home.png"></a>
             		<p id="contador">20</p></div>
             		<p id="dificultad">hard</p>

				<div id="cartas">');
					echo ('	
						<div id="elegida">
							<img src="Imagenes/'.$cartaSeleccionada.'.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="frontFlipP" id="selecionada"'.$img[$cartaSeleccionada].'>
							<img src="Imagenes/dorso.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="backFlipP" id="selecionadaB">
						</div>
					');


						echo ("<div id='tabla'> <table>");
						$contId = 1;
						for ($i=0; $i < $col ; $i++) { 
							echo ("<tr>");
							for ($x=0; $x < $fil ; $x++) {
								echo ('<td><div class="container" onclick="clickHard(\''.$contId.'f\')">
											<img src="Imagenes/'.$listaCartas[$cont].'.png"  style="width:'.$wid.'px;height:'.$hei.'px;" class="backFlip blocked" id="'.$contId.'f"'.$img[$contId].'>
											<img src="Imagenes/dorso.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="frontFlip" id="'.$contId.'b">
										</div></td>');
								$cont++; 
								$contId++;
							}
							echo ("</tr>");
						}
					echo ("</table>
						</div>");
			 }

			?>
			

			<div id="comprobaciones">
				<textarea rows="10" cols="30" readonly id="texto"></textarea>
				<br>
				<select id="atributos" name="atributos">
					<option value="chico">¿Es un chico?</option>
					<option value="chica">¿Es una chica?</option>
					<option value="moreno">¿Es moreno?</option>
					<option value="rubio">¿Es rubio?</option>
					<option value="castanyo">¿Es castaño?</option>
					<option value="gafas">¿Lleva gafas?</option>
				</select>

				<button type="button" onclick="distribuir()">Comprobar</button> 
				</div>
			</div>
		</div>
		
	</body>
</html>