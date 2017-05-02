// This namespace holds the Game main menu
 Game.menu = (function(components, input, model){
 	'use strict';

 	var currentMenu,
 		textTemp,
 		highScoreArray = [],
 		mainMenu = [],
 		gamePlay = [],
 		highScoreMenu = [],
 		aboutMenu = [],
 		helpMenu = [],
 		menus = [],
 		textStart = {
 			text : 'New Game',
 			font : '50px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : 0.35, y : 0.35 },
 		},
 		textHighScores = {
 			text : 'High Scores',
 			font : '50px Arial, sans-serif',
 			fill : 'rgba(136, 136, 136, 1)',
 			pos : { x : 0.35, y : 0.50 },
 		},
 		textHelp = {
 			text : 'Help',
 			font : '50px Arial, sans-serif',
 			fill : 'rgba(136, 136, 136, 1)',
 			pos : { x : 0.35, y : 0.65 },
 		},
 		textAbout = {
 			text : 'About',
 			font : '50px Arial, sans-serif',
 			fill : 'rgba(136, 136, 136, 1)',
 			pos : { x : 0.35, y : 0.80 },
 		},
 		textTitle = {
 			text : 'Harry Potter Pinball',
 			font : '75px ParryHotter',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : 0.05, y : 0 },
 		},
 		textDeveloped = {
 			text : 'Developed By',
 			font : '50px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : 0.30, y : 0.50 },
 		},
 		textAboutInfo = {
 			text : 'Jordan Haws, Joshua Lake, and Tanner Olsen',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : -0.1, y : 0.65 },
 		},
 		textLevel = {
 			text : 'Level',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : -0.45, y : 0.0 },
 		},
 		textLevelValue = {
 			text : '1',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : -0.40, y : 0.1 },
 		},
 		textBalls = {
 			text : 'Balls',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : 1.25, y : 0.0 },
 		},
 		textBallsValue = {
 			text : '3',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : 1.30, y : 0.1 },
 		},
 		textObjective = {
 			text : 'Objective',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : 0.35, y : 0.25 },
 		},
 		textObjectiveValue = {
 			text : "Find the Sorceror's Stone!",
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : 0.10, y : 0.35 },
 		},
 		textTime = {
 			text : 'Time Remaining',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : -0.45, y : 0.45 },
 		},
 		textTimeValue = {
 			text : 'N/A',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : -0.25, y : 0.55 },
 		},
 		textScore = {
 			text : 'Score',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : 0.35, y : 0.75 },
 		},
 		textScoreValue = {
 			text : '0',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : 0.35, y : 0.85 },
 		},
 		textControls = {
 			text : 'The white button in the center is the power button.',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : -0.2, y : 0.50 },
 		},
 		textFlipperSummary = {
 			text : 'On either side of the machine you will find two white buttons.',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
			pos : { x : -0.3, y : 0.60 },
 		},
 		textLeftFlipper = {
 			text : 'The left button activates the left flipper.',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : 0.0, y : 0.70 },
 		},
 		textRightFlipper = {
 			text : 'The right button activates the right flipper.',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : -0.05, y : 0.80 },
 		},
 		textPlunger = {
 			text : 'Pull back the plunger and release it to launch the ball into play.',
 			font : '42px Arial, sans-serif',
 			fill : 'rgba(255, 255, 255, 1)',
 			pos : { x : -0.35, y : 0.90 },
 		},
 		menuSelection = 0,
 		previousSelection = 0,
 		previousMenuSelection;

 	var that = {

 	};

 	that.initialize = function(){
 		currentMenu = 0;

 		//Initialize each menu

 		//Initialize the main menu
 		mainMenu.push({text : textStart, select : 1});
 		mainMenu.push({text : textHighScores, select : 2});
 		mainMenu.push({text : textHelp, select : 3});
 		mainMenu.push({text : textAbout, select : 4});

 		//Initialize the gameplay section
 		gamePlay.push({text : textLevel});
 		gamePlay.push({text : textLevelValue});
 		gamePlay.push({text : textBalls});
 		gamePlay.push({text : textBallsValue});
 		gamePlay.push({text : textObjective});
 		gamePlay.push({text : textObjectiveValue});
 		gamePlay.push({text : textTime});
 		gamePlay.push({text : textTimeValue});
 		gamePlay.push({text : textScore});
 		gamePlay.push({text : textScoreValue});

 		//Initialize the high score page
 		highScoreArray = JSON.parse(localStorage.getItem('highScores'));
 		if(highScoreArray === null){
 			highScoreArray = [
 				{name : 'Motas', score : 1000},
 				{name : 'Motas', score : 800},
 				{name : 'Motas', score : 600},
 				{name : 'Motas', score : 400},
 				{name : 'Motas', score : 200}
 			];
 		}
 		for(var i = 0; i < highScoreArray.length; i++){
 			textTemp = {
 				text : highScoreArray[i].name + ': ' + highScoreArray[i].score,
 				font : '50px Arial, sans-serif',
 				fill : 'rgba(255, 255, 255, 1)',
 				pos : { x : 0.35, y : (i * 0.1) + 0.50 },
 			}
 			highScoreMenu.push({text : textTemp, back : 0});
 		}
 		//This is how to put the high score into local storage
 		//localStorage.setItem("highScores", JSON.stringify(highScoreArray));

 		//Initialize the help section
 		helpMenu.push({text : textControls, back : 0});
 		helpMenu.push({text : textFlipperSummary});
 		helpMenu.push({text : textLeftFlipper});
 		helpMenu.push({text : textRightFlipper});
 		helpMenu.push({text : textPlunger});

 		//Initialize the about section
 		aboutMenu.push({text : textDeveloped, back : 0});
 		aboutMenu.push({text : textAboutInfo});

 		//index 0
 		menus.push({
 			menuItem : mainMenu,
 			display : true,
 			reg : {
 				handlers : [function(){that.toggleMenuDown();}, function(){that.toggleMenuUp();}, function(){that.selectMenu(myKeyboard);}, function(){that.cancelButton(myKeyboard);}],
 				keys : [input.KeyEvent.DOM_VK_DOWN, input.KeyEvent.DOM_VK_UP, input.KeyEvent.DOM_VK_RETURN, input.KeyEvent.DOM_VK_X],
 			},
 		});

 		//index 1
 		menus.push({
 			menuItem : gamePlay,
 			display : false,
 			reg : {
 				handlers : [function(){videoFinished = true;}],
 				keys : [input.KeyEvent.DOM_VK_RETURN],
 			},
 			func : function(){model.initialize();}
 		});

 		//index 2
 		menus.push({
 			menuItem : highScoreMenu,
 			display : false,
 			subtitle : {
 				text : 'High Scores',
 				font : '60px ParryHotter',
 				fill : 'rgba(255, 255, 255, 1)',
 				pos : { x : 0.30, y : 0.25 },
 			},
 			reg : {
 				handlers : [function(){that.cancelButton(myKeyboard);}],
 				keys : [input.KeyEvent.DOM_VK_X],
 			}
 		});

 		//index 3
 		menus.push({
 			menuItem : helpMenu,
 			display : false,
 			subtitle : {
 				text : 'Controls',
 				font : '60px ParryHotter',
 				fill : 'rgba(255, 255, 255, 1)',
 				pos : { x : 0.35, y : 0.25 },
 			},
 			reg : {
 				handlers : [function(){that.cancelButton(myKeyboard);}],
 				keys : [input.KeyEvent.DOM_VK_X],
 			}
 		});

 		//index 4
 		menus.push({
 			menuItem : aboutMenu,
 			display : false,
 			subtitle : {
 				text : 'About',
 				font : '60px ParryHotter',
 				fill : 'rgba(255, 255, 255, 1)',
 				pos : { x : 0.40, y : 0.25 },
 			},
 			reg : {
 				handlers : [function(){that.cancelButton(myKeyboard);}],
 				keys : [input.KeyEvent.DOM_VK_X],
 			}
 		});
 	};

 	function changeSelectionVisual(currentMenu, oldID, newID){
 		menus[currentMenu].menuItem[oldID].text.fill = 'rgba(136, 136, 136, 1)';
 		menus[currentMenu].menuItem[newID].text.fill = 'rgba(255, 255, 255, 1)';
 	}

 	function updateTexts(){
 		gamePlay[1].text.text = model.level; //textLevelValue
 		gamePlay[3].text.text = model.balls; //textBallsValue
 		gamePlay[5].text = model.objective; //textObjectiveValue
 		gamePlay[6].text.text = model.timeLimitLabel;//textTime
 		gamePlay[7].text.text = model.timeLimit;//textTimeValue
 		gamePlay[9].text.text = model.score; //textScoreValue
 	}

	//This function is used to update the state of the Game model
	that.update = function(elapsedTime){
		//Update the menu item that is being hovered
		if(currentMenu == 0) //Only works on the main menu
			changeSelectionVisual(currentMenu, previousSelection, menuSelection);
		if(currentMenu == 1)
			model.update(elapsedTime);
		updateTexts();
	};

	that.toggleMenuDown = function(){
		//Move the menu selection down one
		if(menuSelection != menus[currentMenu].menuItem.length - 1){
			previousSelection = menuSelection;
			menuSelection++;
		}
	};

	that.toggleMenuUp = function(){
		//Move the menu selection up one
		if(menuSelection != 0){
			previousSelection = menuSelection;
			menuSelection--;
		}
	};

	//Selects the option currently highlighted
	that.selectMenu = function(myKeyboard){
		if(menus[currentMenu].menuItem[menuSelection].hasOwnProperty('select')){
			//Change the previous text color back to grey
			if(currentMenu == 0) //Only works on the main menu
				menus[currentMenu].menuItem[menuSelection].text.fill = 'rgba(136, 136, 136, 1)';
			menus[currentMenu].display = false;
			previousMenuSelection = menuSelection;
			currentMenu = menus[currentMenu].menuItem[menuSelection].select;
			if(menus[currentMenu].hasOwnProperty('func')){
				menus[currentMenu].func();
			}
			menus[currentMenu].display = true;
			menuSelection = 0;
			//Unregister all commands
			myKeyboard.unregisterAll();
			//Register commands in the list
			if(menus[currentMenu].hasOwnProperty('reg')){
				for(var i = 0; i < menus[currentMenu].reg.handlers.length; i++){
					myKeyboard.registerHandler(
						menus[currentMenu].reg.handlers[i],
						menus[currentMenu].reg.keys[i],
						false
					);
				}
			}
		}
	};

	//Traverses to the previous menu
	that.cancelButton = function(myKeyboard){
		//Cancel out of whatever menu we happen to be in
		if(menus[currentMenu].menuItem[menuSelection].hasOwnProperty('back')){
			if(currentMenu == 0)
				menus[currentMenu].menuItem[menuSelection].text.fill = 'rgba(136, 136, 136, 1)';
			menus[currentMenu].display = false;
			currentMenu = menus[currentMenu].menuItem[menuSelection].back;
			if(menus[currentMenu].hasOwnProperty('func')){
				menus[currentMenu].func();
			}
			menus[currentMenu].display = true;
			menuSelection = previousMenuSelection;
			//Unregister all commands
			myKeyboard.unregisterAll();
			//Register commands in the list
			if(menus[currentMenu].hasOwnProperty('reg')){
				for(var i = 0; i < menus[currentMenu].reg.handlers.length; i++){
					myKeyboard.registerHandler(
						menus[currentMenu].reg.handlers[i],
						menus[currentMenu].reg.keys[i],
						false
					);
				}
			}
		}
	}

	//This function renders the Game model
	that.render = function(renderer){
		//Draw the title
		renderer.core.drawText(textTitle);

		//Draw the correct menu
		for(var i = 0; i < menus[currentMenu].menuItem.length; i++){
			renderer.core.drawText(menus[currentMenu].menuItem[i].text);
		}
		//Draw the subtitle if applicable
		if(menus[currentMenu].hasOwnProperty('subtitle')){
			renderer.core.drawText(menus[currentMenu].subtitle);
		}
};

	return that;

}(Game.components, Game.input, Game.model));
