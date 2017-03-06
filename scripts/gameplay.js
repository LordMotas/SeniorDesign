MyGame.screens['game-play'] = (function(game) {
	'use strict';
	var cancelNextRequest = false;
	
	function initialize() {
		MyGame.gameState.myKeyboard.registerCommand(KeyEvent.DOM_VK_ESCAPE, function() {
			cancelNextRequest = true;
			game.showScreen('main-menu'); 
		});
	}

	//------------------------------------------------------------------
	//
	// This is the Game Loop function!
	//
	//------------------------------------------------------------------
	function gameLoop(time) {
		MyGame.gameState.update();
		MyGame.gameState.processInput();
		// update(elapsedTime);
		// render(elapsedTime);
		
		if (!cancelNextRequest) {
			requestAnimationFrame(gameLoop);
		}
	}
	
	function run() {
		// Start the animation loop
		cancelNextRequest = false;
		requestAnimationFrame(gameLoop);
	}
	
	return {
		initialize : initialize,
		run : run
	};
}(MyGame.game));
