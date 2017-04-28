// This namespace holds the Game model.
Game.model = (function(core){
	'use strict';

	//Variables for the game model go here
	var that = {};
	var numTimes = 5;

	//This function initializes the Game model
	that.initialize = function(){
		console.log("Now initializing the game model...");
		that.level = 1;
		that.score = 0;
		that.balls = 3;
		that.hasTimeLimit = false;
		that.timeLimit = "N/A"; //Measured in milliseconds
		that.objective = {
			text : "Find the Sorceror's Stone!",
			font : '42px Arial, sans-serif',
			fill : 'rgba(255, 255, 255, 1)',
			pos : { x : 0.10, y : 0.35 },
		};
		that.raw = "";
		that.parsed = "";
		that.timerActive = false;
		that.client = new XMLHttpRequest();
		that.timeLimitLabel = "";
	};

	//This function is used to update the state of the Game model
	that.update = function(elapsedTime){
		that.client.open('GET', './data.txt'+'?n=' + Date(), true);
		that.client.onreadystatechange = function(){
			that.raw = that.client.responseText;
			//This is what needs to be parsed
			that.parsed = that.raw.split(" ");
			if(that.parsed[1] != undefined){
				that.updateScore(that.parsed[1]);
				that.updateLevel(that.parsed[3]);
				that.updateBalls(that.parsed[5]);
				if(that.parsed[7] == "true"){
					//The timer should be set
					showTimer();
					if(that.timerActive == false){
						setTimer(that.parsed[9]);
						that.timerActive = true;
					}
				} else if(that.parsed[7] == "false"){
					//Hide the timer since there isn't one
					hideTimer();
					that.timerActive = false;
				}
				//that.parsed[9] is the amount of timer
				//that.parsed[11] is the objective
				var objectiveString = "";
				for(var i = 11; i < that.parsed.length; i++){
					objectiveString += " " + that.parsed[i];
				}
				that.updateObjective(objectiveString);
			}
		}
		that.client.send();
	};

	function hideTimer(){
		that.timeLimit = "";
		that.timeLimitLabel = "";
	}

	function showTimer(){
		that.timeLimitLabel = "Time Remaining";
	}

	function setTimer(timeToSet){
		var timeAtTimerSet = performance.now();
		var min = (timeToSet/1000/60) << 0;
		var sec = (timeToSet/1000) % 60;
		that.timeLimit = pad(min) + ":" + pad(sec);
		updateTimer(min, sec);
	}

	function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
	}

	function updateTimer(prevMin, prevSec){
		setTimeout(function(){
			//Calculate the elapsed time from the last time
			if(prevSec === 0 && prevMin === 0){
				timerEnd(numTimes, true);
				return;
			} else if(prevSec === 0 && prevMin !== 0){
				prevSec = 59;
				prevMin = prevMin - 1;
			} else {
				prevSec = prevSec - 1;
			}
			that.timeLimit = pad(prevMin) + ":" + pad(prevSec);
			updateTimer(prevMin, prevSec);
		}, 1000);
	}

	function timerEnd(timesRemaining, display){
		//Figure out how this works
		if(timesRemaining !== 0){
			if(display){
				that.timeLimit = "Time's Up!";
				showTimer();
				console.log("timer is Time's Up");
				display = false;
			} else {
				hideTimer();
				display = true;
			}
			setTimeout(timerEnd(timesRemaining--, display), 500);
		}
	}

	//Updating functions
	that.updateScore = function(currentScore){
		that.score = currentScore;
	};

	that.updateBalls = function(currentBalls){
		that.balls = currentBalls;
	};

	that.updateLevel = function(currentLevel){
		that.level = currentLevel;
	};

	that.updateObjective = function(currentObjective){
		that.objective = {
			text : currentObjective,
			font : '42px Arial, sans-serif',
			fill : 'rgba(255, 255, 255, 1)',
		};
		//Hard code the positions for each objective since there are only 7 of them
		that.objective.pos = { x : 0.1, y : 0.35 };
	};

	//This function renders the Game model
	that.render = function(renderer){
		//Empty
	};

	return that;

}(Game.renderer.core));
