///When an event expires, it must be removed from the internal data structure holding it.
///Technical requirement: Must be able to have several active events running concurrently

//The data structure to hold the objects
var eventArray = [];

//The previously logged time
var prevTime;

//The currently logged time
var currTime;

//Start the function when the page loads
window.onload = gameLoop;

var nextDiv = 1;
//Event object that is reported and used
function eventObject(){
	this.name = "";
	this.interval = 0;
	this.elapsedTime = 0;
	this.times = 1;
	this.render = false;
};

///Create a function named gameLoop in which you update the elapsed time since the last time the function was called
function gameLoop(){
	//Calculate the elapsed time
	currTime = performance.now();
	var deltaT = currTime - prevTime;
	
	///The function will make a call to another function named update, which accepts the elapsed time as a parameter.
	update(deltaT);
	
	///The function will make a call to another function named render.
	render();
	
	//Update the elapsed time
	prevTime = currTime;
	
	///This function must use requestAnimationFrame to invoke the gameLoop function again.
	requestAnimationFrame(gameLoop);
}

function update(deltaT){
	  //Update the event (i.e. reduce the count by one)
	  //Loop through the array and check each one to see if it works
	  for(var i = 0; i < eventArray.length; i++){
		  eventArray[i].render = false;
		  eventArray[i].elapsedTime += deltaT;
		  if(eventArray[i].elapsedTime - eventArray[i].interval >= 0.0){
			  eventArray[i].elapsedTime = eventArray[i].elapsedTime - eventArray[i].interval;
			  eventArray[i].times--;
			  eventArray[i].render = true;
			  if(eventArray[i].times == -1){
				  eventArray.splice(i, 1);
			  }
		  }
	  }
}
 
function render(){
	//Report the data corresponding to the event
	for(var i = 0; i < eventArray.length; i++){
		if(eventArray[i].render == true){
			var node = document.getElementById('leftPane');
			nextDiv++;
			node.innerHTML += "<div id='nextElement"+nextDiv+"'>Event: "+eventArray[i].name+" ("+eventArray[i].times+" remaining)</div>";
			node.scrollTop = node.scrollHeight - node.clientHeight;
		}
	}
}

function pressButton(){
	//Get the data necessary and store it in a data structure
	var object = new eventObject();
	prevTime = performance.now();
	object.name = document.getElementById("name").value;
	object.interval = parseInt(document.getElementById("interval").value);
	object.times = parseInt(document.getElementById("times").value);
	eventArray.push(object);
}