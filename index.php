<?php 
echo "<html lang='en-US'>
	<head>
	  <!--Set the default character set-->
	  <meta charset='UTF-8'>
	  <!--Import the stylesheet-->
	  <link rel='stylesheet' href='styles.css'>
	  <!--Import the javascript/jquery-->
	  <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
	  <script src='script.js'></script>
	</head>
	<body>
		<!--The container is the entire screen and will have a background image from Harry Potter-->
		<div class='container'>
			<!--Orientation: Top center-->
			<div class='title'>Harry Potter Pinball</div>
			
			<!--Orientation: Top Left-->
			<div class='level'>Level
				<div class='levelValue'>1</div>
			</div>

			<!--Orientation: Top Right-->
			<div class='balls'>Balls
				<div class='ballsValue'>3</div>
			</div>

			<!--Orientation: Center-->
			<div class='objective'>Objective
				<div class='objectiveValue'>Find the Sorceror's Stone!</div>
			</div>

			<!--Orientation: Bottom Left-->
			<div class='time'>Time Remaining
				<div class='timeValue'>N/A</div>
			</div>

			<!--Orientation: Bottom Center-->
			<div class='score'>Score
				<div class='scoreValue'>6153428</div>
			</div>";
				$myfilename = "./data.txt";
				if(file_exists($myfilename)){
					while(true){
						$fileContents = file_get_contents($myfilename);
						//Parse the string and update the page with the new data
						//This probably means call a javascript function
				}
				} else {
					var_dump("No file found...");
				}
echo "		</div>
	</body>
</html>";

?>
