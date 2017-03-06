// ------------------------------------------------------------------
// 
// This is the game object.  Everything about the game is located in 
// this object.
//
// ------------------------------------------------------------------

var MyGame = {
	screens : {},
};

MyGame.input = (function(){
	'use strict';
	
	function Keyboard(){
		var that = {
			keys:{},
				handlers:[]
			},
			handler;
			
		function keyPress(e){
			console.log('Added a key to the list');
			that.keys[e.keyCode] = e.timeStamp;
		}
			
		function keyRelease(e){
			delete that.keys[e.keyCode];
		}
		
		that.registerCommand = function(key, handler){
			that.handlers.push({key:key, handler:handler});
		};
		
		that.update = function(elapsedTime){
			for(handler = 0; handler < that.handlers.length; handler++){
				if(that.keys.hasOwnProperty(that.handlers[handler].key)){
					that.handlers[handler].handler(elapsedTime);
				}
			}
		}
		
		window.addEventListener('keydown', keyPress);
		window.addEventListener('keyup', keyRelease);
		
		return that;
	}
	
	return {
		Keyboard : Keyboard
	}
}());


if (typeof KeyEvent == "undefined") {
    var KeyEvent = {
        DOM_VK_CANCEL: 3,
        DOM_VK_HELP: 6,
        DOM_VK_BACK_SPACE: 8,
        DOM_VK_TAB: 9,
        DOM_VK_CLEAR: 12,
        DOM_VK_RETURN: 13,
        DOM_VK_ENTER: 14,
        DOM_VK_SHIFT: 16,
        DOM_VK_CONTROL: 17,
        DOM_VK_ALT: 18,
        DOM_VK_PAUSE: 19,
        DOM_VK_CAPS_LOCK: 20,
        DOM_VK_ESCAPE: 27,
        DOM_VK_SPACE: 32,
        DOM_VK_PAGE_UP: 33,
        DOM_VK_PAGE_DOWN: 34,
        DOM_VK_END: 35,
        DOM_VK_HOME: 36,
        DOM_VK_LEFT: 37,
        DOM_VK_UP: 38,
        DOM_VK_RIGHT: 39,
        DOM_VK_DOWN: 40,
        DOM_VK_PRINTSCREEN: 44,
        DOM_VK_INSERT: 45,
        DOM_VK_DELETE: 46,
        DOM_VK_0: 48,
        DOM_VK_1: 49,
        DOM_VK_2: 50,
        DOM_VK_3: 51,
        DOM_VK_4: 52,
        DOM_VK_5: 53,
        DOM_VK_6: 54,
        DOM_VK_7: 55,
        DOM_VK_8: 56,
        DOM_VK_9: 57,
        DOM_VK_SEMICOLON: 59,
        DOM_VK_EQUALS: 61,
        DOM_VK_A: 65,
        DOM_VK_B: 66,
        DOM_VK_C: 67,
        DOM_VK_D: 68,
        DOM_VK_E: 69,
        DOM_VK_F: 70,
        DOM_VK_G: 71,
        DOM_VK_H: 72,
        DOM_VK_I: 73,
        DOM_VK_J: 74,
        DOM_VK_K: 75,
        DOM_VK_L: 76,
        DOM_VK_M: 77,
        DOM_VK_N: 78,
        DOM_VK_O: 79,
        DOM_VK_P: 80,
        DOM_VK_Q: 81,
        DOM_VK_R: 82,
        DOM_VK_S: 83,
        DOM_VK_T: 84,
        DOM_VK_U: 85,
        DOM_VK_V: 86,
        DOM_VK_W: 87,
        DOM_VK_X: 88,
        DOM_VK_Y: 89,
        DOM_VK_Z: 90,
        DOM_VK_CONTEXT_MENU: 93,
        DOM_VK_NUMPAD0: 96,
        DOM_VK_NUMPAD1: 97,
        DOM_VK_NUMPAD2: 98,
        DOM_VK_NUMPAD3: 99,
        DOM_VK_NUMPAD4: 100,
        DOM_VK_NUMPAD5: 101,
        DOM_VK_NUMPAD6: 102,
        DOM_VK_NUMPAD7: 103,
        DOM_VK_NUMPAD8: 104,
        DOM_VK_NUMPAD9: 105,
        DOM_VK_MULTIPLY: 106,
        DOM_VK_ADD: 107,
        DOM_VK_SEPARATOR: 108,
        DOM_VK_SUBTRACT: 109,
        DOM_VK_DECIMAL: 110,
        DOM_VK_DIVIDE: 111,
        DOM_VK_F1: 112,
        DOM_VK_F2: 113,
        DOM_VK_F3: 114,
        DOM_VK_F4: 115,
        DOM_VK_F5: 116,
        DOM_VK_F6: 117,
        DOM_VK_F7: 118,
        DOM_VK_F8: 119,
        DOM_VK_F9: 120,
        DOM_VK_F10: 121,
        DOM_VK_F11: 122,
        DOM_VK_F12: 123,
        DOM_VK_F13: 124,
        DOM_VK_F14: 125,
        DOM_VK_F15: 126,
        DOM_VK_F16: 127,
        DOM_VK_F17: 128,
        DOM_VK_F18: 129,
        DOM_VK_F19: 130,
        DOM_VK_F20: 131,
        DOM_VK_F21: 132,
        DOM_VK_F22: 133,
        DOM_VK_F23: 134,
        DOM_VK_F24: 135,
        DOM_VK_NUM_LOCK: 144,
        DOM_VK_SCROLL_LOCK: 145,
        DOM_VK_COMMA: 188,
        DOM_VK_PERIOD: 190,
        DOM_VK_SLASH: 191,
        DOM_VK_BACK_QUOTE: 192,
        DOM_VK_OPEN_BRACKET: 219,
        DOM_VK_BACK_SLASH: 220,
        DOM_VK_CLOSE_BRACKET: 221,
        DOM_VK_QUOTE: 222,
        DOM_VK_META: 224
    };
}



MyGame.gameState = (function(){
	var that = {};
	that.level = 1;
	that.score = 0;
	that.balls = 3;
	that.hasTimeLimit = false;
	that.timeLimit = 300000; //Measured in milliseconds
	that.objective = "Get the Sorcerer's Stone!";
	that.raw = "";
	that.parsed = "";
	that.timerActive = false;
	that.client = new XMLHttpRequest();
	that.min = 0;
	that.sec = 0;
	that.myKeyboard = MyGame.input.Keyboard();

	that.processInput = function(elapsedTime){
		that.myKeyboard.update(elapsedTime);
	};
		
	that.update = function(){
		console.log('updating...');
		that.client.open('GET', './data.txt'+'?n='+Date());
		that.client.onreadystatechange = function(){
			that.raw = that.client.responseText;
			//This is what needs to be parsed
			//console.log(game.raw);
			that.parsed = that.raw.split(" ");
			if(that.parsed[1] != undefined){
				that.updateScore(that.parsed[1]);
				that.updateLevel(that.parsed[3]);
				that.updateBalls(that.parsed[5]);
				if(that.parsed[7] == "true"){
					//The timer should be set
					that.showTimer();
					if(that.timerActive == false){
						console.log("Activating Timer");
						that.setTimer(parsed[9]);
						that.timerActive = true;
					}
				} else if(that.parsed[7] == "false"){
					//Hide the timer since there isn't one
					that.hideTimer();
					that.timerActive = false;
				}
			}
			//parsed[11] to the end is the objective
			//console.log(parsed);
		}
		that.client.send();
	};		
		
	that.updateScore = function(currentScore){
		//console.log("current score is now:"+currentScore);
		document.getElementById("scoreValue").innerHTML = currentScore;
	};

	that.updateBalls = function(currentBalls){
		//console.log("current balls is now:"+currentBalls);
		document.getElementById("ballsValue").innerHTML = currentBalls;
	};

	that.updateLevel = function(currentLevel){
		//console.log("current level is now:"+currentLevel);
		document.getElementById("levelValue").innerHTML = currentLevel;
	};

	that.updateObjective = function(currentObjective){
		//console.log("current objective is now:"+currentObjective);
		document.getElementById("objectiveValue").innerHTML = currentObjective;
	};

	that.showTimer = function(){
		//console.log("Showing the timer");
		document.getElementById("time").style.display = "block";
	};

	that.hideTimer = function(){
		//console.log("Hiding the timer");
		document.getElementById("time").style.display = "none";
	};

	that.setTimer = function(timeToSet){
		//console.log("Setting the timer");
		timeAtTimerSet = performance.now();
		min = (timeToSet/1000/60) << 0;
		sec = (timeToSet/1000) % 60;
		document.getElementById("timeValue").innerHTML = min + ':' + sec;
		updateTimer(min, sec);
	};

	that.updateTimer = function(prevMin, prevSec){
		setTimeout(function() {
			//Calculate the elapsed time from the last time
			if(prevSec == 0 && prevMin == 0){
				//Timer is finished
				timerEnd();
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
	};
	
	that.timerEnd = function(){
		var display = true;
		//Flash the "Time's Up!" message on the screen
		document.getElementById("timeValue").innerHTML = "Time's Up!";
		setTimeout(function(){
			if(display){
				document.getElementById("time").style.display = "none";
				display = false;
			} else {
				document.getElementById("time").style.display = "block";
				display = true;
			}
		},500);
	};
	
	return that;
	
})();


MyGame.game = (function(screens) {
	'use strict';
	//------------------------------------------------------------------
	//
	// This function is used to change to a new active screen.
	//
	//------------------------------------------------------------------
	function showScreen(id) {
		var screen = 0,
			active = null;
		//va
		// Remove the active state from all screens.  There should only be one...
		active = document.getElementsByClassName('active');
		for (screen = 0; screen < active.length; screen++) {
			active[screen].classList.remove('active');
		}
		//
		// Tell the screen to start actively running
		screens[id].run();
		//
		// Then, set the new screen to be active
		document.getElementById(id).classList.add('active');
	}

	//------------------------------------------------------------------
	//
	// This function performs the one-time game initialization.
	//
	//------------------------------------------------------------------
	function initialize() {
		var screen = null;
		//
		// Go through each of the screens and tell them to initialize
		for (screen in screens) {
			if (screens.hasOwnProperty(screen)) {
				screens[screen].initialize();
			}
		}
		
		//
		// Make the main-menu screen the active one
		showScreen('main-menu');
	}
	
	return {
		initialize : initialize,
		showScreen : showScreen
	};
}(MyGame.screens));