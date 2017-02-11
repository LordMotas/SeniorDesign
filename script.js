function gameState(){
	this.level = 1;
	this.score = 0;
	this.balls = 3;
	this.hasTimeLimit = false;
	this.timeLimit = 300000; //Measured in milliseconds
	this.objective = "Get the Sorcerer's Stone!";
	this.raw = "";
};

var game = new gameState();
var parsed = "";
var timerActive = false;

function update(override){
	var client = new XMLHttpRequest();
	client.open('GET', './data.txt'+'?n='+Date());
	client.onreadystatechange = function(){
		//Changes to the data is here
		game.raw = client.responseText;
		//This is what needs to be parsed
		//console.log(game.raw);
		parsed = game.raw.split(" ");
		if(parsed[1] != undefined){
			updateScore(parsed[1]);
			updateLevel(parsed[3]);
			updateBalls(parsed[5]);
			if(parsed[7] == "true"){
				//The timer should be set
				showTimer();
				if(timerActive == false){
					console.log("Activating Timer");
					setTimer(parsed[9]);
					timerActive = true;
				}
			} else if(parsed[7] == "false"){
				//Hide the timer since there isn't one
				hideTimer();
				timerActive = false;
			}
		}
		//parsed[11] to the end is the objective
		console.log(parsed);
	}
	client.send();
}

setInterval('update()', 5000); //Loop every 0.5 seconds

function updateScore(currentScore){
	//console.log("current score is now:"+currentScore);
	document.getElementById("scoreValue").innerHTML = currentScore;
}

function updateBalls(currentBalls){
	//console.log("current balls is now:"+currentBalls);
	document.getElementById("ballsValue").innerHTML = currentBalls;
}

function updateLevel(currentLevel){
	//console.log("current level is now:"+currentLevel);
	document.getElementById("levelValue").innerHTML = currentLevel;
}

function updateObjective(currentObjective){
	//console.log("current objective is now:"+currentObjective);
	document.getElementById("objectiveValue").innerHTML = currentObjective;
}

function showTimer(){
	//console.log("Showing the timer");
	document.getElementById("time").style.display = "block";
}

function hideTimer(){
	//console.log("Hiding the timer");
	document.getElementById("time").style.display = "none";
}

function setTimer(timeToSet){
	//console.log("Setting the timer");
	timeAtTimerSet = performance.now();
	let min = (timeToSet/1000/60) << 0;
	let sec = (timeToSet/1000) % 60;
	document.getElementById("timeValue").innerHTML = min + ':' + sec;
	updateTimer(min, sec);
}

function updateTimer(prevMin, prevSec){
	setTimeout(function() {
		//Calculate the elapsed time from the last time
		if(prevSec == 0 && prevMin == 0){
			//Timer is finished
			return;
		} else if(prevSec == 0 && prevMin != 0){
			prevSec = 59;
			prevMin = prevMin - 1;
		} else {
			prevSec = prevSec - 1;
		}
		document.getElementById("timeValue").innerHTML = prevMin + ':' + prevSec;
		updateTimer(prevMin, prevSec);
	}, 1000);
}
