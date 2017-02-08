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

function update(override){
	var client = new XMLHttpRequest();
	client.open('GET', './data.txt'+'?n='+Date());
	client.onreadystatechange = function(){
		//Changes to the data is here
		game.raw = client.responseText;
		//This is what needs to be parsed
		console.log(game.raw);
	}
	client.send();
}

setInterval('update()',5000); //Loop every 0.5 seconds

console.log("Does this work?");

function updateScore(currentScore){
	console.log("current score is now:"+currentScore);
}

function updateBalls(currentBalls){

}

function updateLevel(currentLevel){

}

function updateObjective(currentObjective){

}

function startTimer(){

}

//Don't worry about this lower stuff for now...

//Global variables
/*isGameOver = false;

//Start the function when the page loads
window.onload = startGame;

//The game loop that runs until program completion
function gameLoop(){
	
	//Updates the data in the gameState object
	update();
	
	//Renders the gameState object to the screen for the user
	render();

	//Check and see if the game needs to be terminated
	if(isGameOver){
		
	} else {
		//Calls the gameLoop function again
		requestAnimationFrame(gameLoop);
	}
}
 
function update(){
	//Open the file that contains the data
	
	//Set the new properties of the object
		
}
 
function render(){
	//Show the updated values to the screen (every time)
	
}

function startGame(){
	gameLoop();
}*/
