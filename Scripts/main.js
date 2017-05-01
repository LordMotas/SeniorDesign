//This namespace provides the simulation loop for the Touhou Game.
Game.main = (function(renderer, input, menu, model){
	'use strict';
	var lastTimeStamp = performance.now();

	//Process any captured input
	function processInput(elapsedTime){
		myKeyboard.update(elapsedTime);
	}

	//Update the simulation
	function update(elapsedTime){
		menu.update(elapsedTime);
	}

	//Render the game
	function render(elapsedTime){
		renderer.core.clearCanvas();
		//console.log(videoFinished);
		if(!videoFinished)
			renderer.core.renderVideo();
		else
			menu.render(Game.renderer);
	}

	//The gameloop
	function gameLoop(time){
		var elapsedTime = (time - lastTimeStamp);
		lastTimeStamp = time;

		processInput(elapsedTime);
		update(elapsedTime);
		render(elapsedTime);

		requestAnimationFrame(gameLoop);
	}

	//The initialization of the game
	function initialize(){
		renderer.core.initialize();
		menu.initialize();

		//Let's listen to a few keyboard inputs to control the simulation
		myKeyboard.registerHandler(function(){
				menu.toggleMenuDown();
			},
			input.KeyEvent.DOM_VK_DOWN, false
		);
		myKeyboard.registerHandler(function(){
				menu.toggleMenuUp();
			},
			input.KeyEvent.DOM_VK_UP, false
		);
		myKeyboard.registerHandler(function(){
				menu.selectMenu(myKeyboard);
			},
			input.KeyEvent.DOM_VK_RETURN, false
		);
		myKeyboard.registerHandler(function(){
				menu.cancelButton(myKeyboard);
			},
			input.KeyEvent.DOM_VK_X, false
		);

		//Get the gameloop started
		requestAnimationFrame(gameLoop);
	}

	//Expose only the ability to initialize the Game
	return {
		initialize: initialize
	};

}(Game.renderer, Game.input, Game.menu, Game.model));
