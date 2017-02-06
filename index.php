<!DOCTYPE html>
<html lang='en-US'>
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
			<div class='level'>Level: </div>
			<!--Orientation: Bottom Center-->
			<div class='score'>Score: </div>
			<!--Orientation: Top Right-->
			<div class='balls'>Balls: </div>
			<!--Orientation: Center-->
			<div class='objective'>Objective:</div>
			&lt;?php	$myfilename = "./data.txt";
				var_dump("Stuff");
				if(file_exists($myfilename)){
					var_dump("Testing");
					var_dump(file_get_contents($myfilename));
				} else {
					var_dump("No file found...");
				}
				?&gt;
		</div>
	</body>
</html>