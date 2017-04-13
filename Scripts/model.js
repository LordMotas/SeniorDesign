// This namespace holds the Game model.
Game.model = (function(components){
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
		that.timeLimit = "N/A"; //Measured in milliseconds
		that.objective = "Get the Sorcerer's Stone!";
		that.raw = "";
		that.parsed = "";
		that.timerActive = false;
		that.client = new XMLHttpRequest();
		that.min = 0;
		that.sec = 0;
	};

	//This function is used to update the state of the Game model
	that.update = function(elapsedTime){
		console.log('updating...');
		that.client.open('GET', './data.txt'+'?n='+Date());
		that.client.onreadystatechange = function(){
			that.raw = that.client.responseText;
			//This is what needs to be parsed
			that.parsed = that.raw.split(" ");
			console.log(that.parsed);
			if(that.parsed[1] != undefined){
				that.updateScore(that.parsed[1]);
				that.updateLevel(that.parsed[3]);
				that.updateBalls(that.parsed[5]);
				if(that.parsed[7] == "true"){
					//The timer should be set
					//that.showTimer();
					if(that.timerActive == false){
						console.log("Activating Timer");
						//that.setTimer(parsed[9]);
						that.timerActive = true;
					}
				} else if(that.parsed[7] == "false"){
					//Hide the timer since there isn't one
					//that.hideTimer();
					that.timerActive = false;
				}
			}
			//parsed[11] to the end is the objective
			//console.log(parsed);
		}
		that.client.send();
	};

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
		that.objective = currentObjective;
	};

	//This function renders the Game model
	that.render = function(renderer){
		//Empty
	};

	return that;

}(Game.components));
