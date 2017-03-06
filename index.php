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
		<div id='first-title' class='title'>Harry Potter Pinball</div>
		<div id='main-menu' class='screen active'>
			<ul class = 'menu'>
				<li id = 'id-new-game'>New&nbsp;Game</li>
				<li id = 'id-high-scores'>High&nbsp;Scores</li>
				<li id = 'id-help'>Help</li>
				<li id = 'id-about'>About</li>
			</ul>
		</div>
		<!--The container is the entire screen and will have a background image from Harry Potter-->
		<div id='game-play' class='screen'>
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
		<div id='high-scores' class='screen'>
			<h1>High Scores</h1>
			<table class='table1'>
				<th>Name</th>
				<th>Score</th>
				<tr>
					<td>Motas</td>
					<td>10000</td>
				</tr>
				<tr>
					<td>Motas</td>
					<td>9000</td>
				</tr>
				<tr>
					<td>Motas</td>
					<td>8000</td>
				</tr>
				<tr>
					<td>Motas</td>
					<td>7000</td>
				</tr>
				<tr>
					<td>Motas</td>
					<td>6000</td>
				</tr>
			</table>
			<table class='table2'>
				<th>Name</th>
				<th>Score</th>
				<tr>
					<td>Motas</td>
					<td>5000</td>
				</tr>
				<tr>
					<td>Motas</td>
					<td>4000</td>
				</tr>
				<tr>
					<td>Motas</td>
					<td>3000</td>
				</tr>
				<tr>
					<td>Motas</td>
					<td>2000</td>
				</tr>
				<tr>
					<td>Motas</td>
					<td>1000</td>
				</tr>
			</table>
			<ul class='menu'>
				<li id='id-high-scores-back'>Back</li>
			</ul>
		</div>
		<div id='help' class='screen'>
			<h1>Help</h1>
			<p>This is some help on how to play the game</p>
			<ul class='menu'>
				<li id='id-help-back'>Back</li>
			</ul>
		</div>
		<div id='about' class='screen'>
			<h1>About</h1>
			<p>Developed by</p>
			<p>Jordan Haws, Joshua Lake, and Tanner Olsen</p>
			<ul class='menu'>
				<li id='id-about-back'>Back</li>
			</ul>
		</div>
		<script src = 'scripts/game.js?n=1'></script>
		<script src = 'scripts/mainmenu.js'></script>
		<script src = 'scripts/gameplay.js'></script>
		<script src = 'scripts/highscores.js'></script>
		<script src = 'scripts/help.js'></script>
		<script src = 'scripts/about.js'></script>
	</body>
</html>";
?>
