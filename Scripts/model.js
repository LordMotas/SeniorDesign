// This namespace holds the Game model.
Game.model = (function(core, music){
	'use strict';

	//Variables for the game model go here
	var that = {};

	//This function initializes the Game model
	that.initialize = function(){
		console.log("Now initializing the game model...");
		that.level = 1;
		that.score = 0;
		that.balls = 3;
		that.hasTimeLimit = false;
		that.timeLimit = {
			name : "N/A",
			x : 0.4
		};
		that.objective = {
			text : "Find the Sorceror's Stone!",
			font : '42px Arial, sans-serif',
			fill : 'rgba(255, 255, 255, 1)',
			pos : { x : 0.3, y : 0.35 },
		};
		that.raw = "";
		that.parsed = "";
		that.timerActive = false;
		that.client = new XMLHttpRequest();
		that.timeLimitLabel = "Time Remaining";
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
				//Music update
				if(!audioStarted){
					Game.music.playMusic('Audio/menu');
				}
				var objectiveString = "";
				for(var i = 12; i < that.parsed.length; i++){
					objectiveString += " " + that.parsed[i];
				}
				that.updateObjective(objectiveString, that.parsed[3]);
			}
		}
		that.client.send();
	};

	function hideTimer(){
		that.timeLimitLabel = "";
		that.timeLimit.name = "";
	}

	function showTimer(){
		that.timeLimitLabel = "Time Remaining";
	}

	function setTimer(timeToSet){
		var timeAtTimerSet = performance.now();
		var min = (timeToSet/1000/60) << 0;
		var sec = (timeToSet/1000) % 60;
		that.timeLimit.name = pad(min) + ":" + pad(sec);
		updateTimer(min, sec);
	}

	function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
	}

	function updateTimer(prevMin, prevSec){
		setTimeout(function(){
			//Calculate the elapsed time from the last time
			if(prevSec === 0 && prevMin === 0){
				timerEnd();
				return;
			} else if(prevSec === 0 && prevMin !== 0){
				prevSec = 59;
				prevMin = prevMin - 1;
			} else {
				prevSec = prevSec - 1;
			}
			that.timeLimit.name = pad(prevMin) + ":" + pad(prevSec);
			updateTimer(prevMin, prevSec);
		}, 1000);
	}

	function timerEnd(){
		setTimeout(function(){
			that.timeLimit.name = "Time's Up!";
			that.timeLimit.x = 0.35;
			setTimeout(function(){
				that.timeLimit.name = "";
				setTimeout(function(){
					that.timeLimit.name = "Time's Up!";
					setTimeout(function(){
						that.timeLimit.name = "";
						setTimeout(function(){
							that.timeLimit.name = "Time's Up!";
							setTimeout(function(){
								that.timeLimit.name = "";
								setTimeout(function(){
									that.timeLimit.name = "N/A";
									that.timeLimit.x = 0.425;
								}, 500);
							}, 500);
						}, 500);
					}, 500);
				}, 500);
			}, 500);
		}, 500);
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

	that.updateObjective = function(currentObjective, currentLevel){
		that.objective = {
			text : currentObjective,
			fill : 'rgba(255, 255, 255, 1)',
		};
		var newX, newFontSize;
		switch(Number(currentLevel)){
			case 1:
				newX = 0.125;
				newFontSize = 42;
				break;
			case 2:
				newX = -0.15;
				newFontSize = 42;
				break;
			case 3:
				newX = 0.0;
				newFontSize = 42;
				break;
			case 4:
				newX = 0.0;
				newFontSize = 42;
				break;
			case 5:
				newX = -0.155;
				newFontSize = 42;
				break;
			case 6:
				newX = 0.125;
				newFontSize = 42;
				break;
			case 7:
				newX = -0.1;
				newFontSize = 42;
				break;
		}
		that.objective.font = Number(newFontSize) + 'px Arial, sans-serif',
		that.objective.pos = { x : newX, y : 0.35 };
	};

	//This function renders the Game model
	that.render = function(renderer){
		//Empty
	};

	return that;

}(Game.renderer.core, Game.music));
