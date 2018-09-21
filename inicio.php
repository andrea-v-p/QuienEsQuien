<!DOCTYPE html>
<html>
	<head>
		<title>Quien es quien?</title>

		<link rel="stylesheet" href="style.css">
		<script src="quien.js"></script>
	</head>
	<body>
		<div id="containerPrincipal">
			<div class="intent" id="intent">Intentos: 0</div>
			<!-- Atributos personalizados: data-sexo, data-pelo, data-gafas -->
			<div id="cartas">

			
		<?php
			$cartaSeleccionada = rand(1, 6);
			$col = 2;
			$fil = 3;
			$cont =0;

			$listaCartas = array(1, 2, 3, 4, 5, 6);
			$wid = 200;
			$hei = 240;
			

			/*
			*	$img1 = "data-sexo='m' data-pelo='rubio' data-gafas='si'";
			*	$img2 = "data-sexo='m' data-pelo='castaño' data-gafas='no'";
			*	$img3 = "data-sexo='m' data-pelo='moreno' data-gafas='si'";
			*	$img4 = "data-sexo='f' data-pelo='moreno' data-gafas='si'";
			*	$img5 = "data-sexo='f' data-pelo='castaño' data-gafas='no'";
			*	$img6 = "data-sexo='f' data-pelo='rubio' data-gafas='no'";
			*/

			$img  = array( 1 => " data-sexo='m' data-pelo='rubio' data-gafas='si'", 2 => " data-sexo='m' data-pelo='castaño' data-gafas='no'", 3 => " data-sexo='m' data-pelo='moreno' data-gafas='si'",4 => " data-sexo='f' data-pelo='moreno' data-gafas='si'",5 => " data-sexo='f' data-pelo='castaño' data-gafas='no'",6 => " data-sexo='f' data-pelo='rubio' data-gafas='no'");

				echo ('	
					<div class="container">
						<img src="Imagenes/'.$cartaSeleccionada.'.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="frontFlip" id="selecionada"'.$img[$cartaSeleccionada].'>
						<img src="Imagenes/dorso.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="backFlip" id="'.$cartaSeleccionada.'b">
						</div>
				');


					echo ("<div id='tabla'> <table>");
					
					for ($i=0; $i < $col ; $i++) { 
						echo ("<tr>");
						for ($x=0; $x < $fil ; $x++) {
							echo ('	<td><div class="container">
										<img src="Imagenes/'.$listaCartas[$cont].'.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="backFlip" id="'.$cont.'f"'.$img[$cont].'>
										<img src="Imagenes/dorso.png" style="width:'.$wid.'px;height:'.$hei.'px;" class="frontFlip" id="'.$cont.'b">
									</div></td>');
							$cont++;
						}
						echo ("</tr>");
					}
				echo ("</table>");		 
			?>

			<select id="atributos" name="atributos">
				<option value="chico">¿Es un chico?</option>
				<option value="chica">¿Es una chica?</option>
				<option value="moreno">¿Es moreno?</option>
				<option value="rubio">¿Es rubio?</option>
				<option value="castaño">¿Es castaño?</option>
				<option value="gafas">¿Lleva gafas?</option>
			</select>

			<button type="button" onclick="comprobar()">Comprobar</button> 

			</div>
		</div>
	</body>
</html>