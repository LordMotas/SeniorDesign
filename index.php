<?php
echo "<html lang='en-US'>
	<head>
		<!--Set the default character set-->
		<meta charset='UTF-8'>
		<meta http-equiv-'cache-control' content='no-cache'>
		<meta http-equiv='expires' content='0'>
		<meta http-equiv='pragma' content='no-cache'>
		<!--Import the stylesheet-->
		<link rel='stylesheet' href='styles.css'>
		<!--Import the javascript/jquery-->
	</head>
	<body class='content'>
		<!--The container is the entire screen and will have a background image from Harry Potter-->
		<div class='container'>
			<!--Orientation: Top center-->
			<div class='title'>Harry Potter Pinball</div>

			<!--Orientation: Top Left-->
			<div class='level'>Level
				<div class='levelValue' id='levelValue'>1</div>
			</div>

			<!--Orientation: Top Right-->
			<div class='balls'>Balls
				<div class='ballsValue' id='ballsValue'>3</div>
			</div>

			<!--Orientation: Center-->
			<div class='objective'>Objective
				<div class='objectiveValue' id='objectiveValue'>Find the Sorceror's Stone!</div>
			</div>

			<!--Orientation: Bottom Left-->
			<div class='time' id='time'>Time Remaining
				<div class='timeValue' id='timeValue'>N/A</div>
			</div>

			<!--Orientation: Bottom Center-->
			<div class='score'>Score
				<div class='scoreValue' id='scoreValue'>0</div>
			</div>
		</div>
	</body>
</html>
<video id='my-video' class='video' muted='' width='300' height='150'>
	<source src='demo.mp4' type='video/mp4' />
	<source src='demo.ogv' type='video/ogg' />
	<source src='demo.webm' type='video/webm' />
</video>
<script src='script.js?n=1'></script>";
?>
