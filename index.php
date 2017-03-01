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
	<body  onload = 'MyGame.game.initialize();' class='content' id='game'>
		<!--The container is the entire screen and will have a background image from Harry Potter-->
		<div id='game-play' class='screen'>
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
		</div>
		<div id='main-menu' class='screen active'>
			<ul class = 'menu'>
				<li><button id = 'id-new-game'>New&nbsp;Game</button></li>
				<li><button id = 'id-high-scores'>High&nbsp;Scores</button></li>
				<li><button id = 'id-help'>Help</button></li>
				<li><button id = 'id-about'>About</button></li>
			</ul>
		</div>
		<div id='high-scores' class='screen'>
			<h1>High Scores</h1>
			<ol>
				<li>10000</li>
				<li>9000</li>
				<li>8000</li>
				<li>7000</li>
			</ol>
			<ul class='menu'>
				<li><button id='id-high-scores-back'>Back</button></li>
			</ul>
		</div>
		<div id='help' class='screen'>
			<h1>Help</h1>
			<p>This is some help on how to play the game</p>
			<ul class='menu'>
				<li><nutton id='id-help-back'>Back</button></li>
			</ul>
		</div>
		<div id='about' class='screen'>
			<h1>About</h1>
			<p>Developed by</p>
			<p>Jordan Haws, Joshua Lake, and Tanner Olsen</p>
			<ul class='menu'>
				<li><nutton id='id-about-back'>Back</button></li>
			</ul>
		</div>
		<script src='scripts/script.js?n=1'></script>
		<script src = 'scripts/game.js'></script>
		<script src = 'scripts/mainmenu.js'></script>
		<script src = 'scripts/gameplay.js'></script>
		<script src = 'scripts/highscores.js'></script>
		<script src = 'scripts/help.js'></script>
		<script src = 'scripts/about.js'></script>
	</body>
</html>
<!---
<video id='my-video' class='video' muted='' width='300' height='150'>
	<source src='demo.mp4' type='video/mp4' />
	<source src='demo.ogv' type='video/ogg' />
	<source src='demo.webm' type='video/webm' />
</video>--->";
?>
