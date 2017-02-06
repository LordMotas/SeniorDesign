//Global variables
isGameOver = false;

//Start the function when the page loads
window.onload = startGame;

function gameState(){
	this.level = 1;
	this.score = 0;
	this.balls = 3;
	this.hasTimeLimit = false;
	this.timeLimit = 300000; //Measured in milliseconds
	this.objective = "Get the Sorcerer's Stone!";
};

var game = new gameState();

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
}
