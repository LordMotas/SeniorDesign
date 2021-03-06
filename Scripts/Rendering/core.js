//This namespace provides the core rendering code for the game
Game.renderer.core = (function(input){
	'use strict';
	var canvas = null,
		context = null,
		//video = null,
		world = {
			size: 0,
			top: 0,
			left: 0
		};

	//Used to set the size of the canvas to match the size of the browser
	function resizeCanvas(){
		var smallestSize = 0,
			handler = null;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		//Find the upper left corner of the world
		if(canvas.width < canvas.height){
			smallestSize = canvas.width;
			world.size = smallestSize * 0.9;
			world.left = Math.floor(canvas.width * 0.05);
			world.top = (canvas.height - world.size) / 2;
		}else {
			smallestSize = canvas.height;
			world.size = smallestSize * 0.9;
			world.top = Math.floor(canvas.height * 0.05);
			world.left = (canvas.width - world.size) / 2;
		}
	}

	//Allow other parts of the code to know when a resize event occurs
	function notifyResize(handler){
		resizeHandlers.push(handler);
	}

	//Clear the whole canvas
	function clearCanvas(){
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	//The initialization of the canvas
	function initialize(){
		canvas = document.getElementById('canvas-main');
		context = canvas.getContext('2d');
		//video = document.getElementById('theVideo');

		window.addEventListener('resize', function(){
			resizeCanvas();
		}, false);
		window.addEventListener('orientationchange', function(){
			resizeCanvas();
		}, false);
		window.addEventListener('deviceorientation', function(){
			resizeCanvas();
		}, false);

		//Resize the canvas to be the correct size
		resizeCanvas();
	}

	/*function renderVideo(){
		drawVideo(video, canvas.width, canvas.height);
	}

	function pauseVideo(){
		video.muted = true;
		video.pause();
	}

	function setUpVideo(){
		video.addEventListener('ended', function(){
			videoFinished = true;
			videoStarted = false;
		}, false);
		video.addEventListener('timeupdate', function(){
			console.log("video is running");
		}, false);
		console.log("Setting up the video");
	}

	function drawVideo(video, width, height){
		if(width > canvas.width)
			width = canvas.width;
		if(height > canvas.height)
			height = canvas.height;
		context.drawImage(video, 0, 0, width, height);
	}

	function setVideoSource(fileName){
		video.src = fileName;
		video.load();
		video.oncanplay = function(){
			video.muted = false;
			video.play();
			videoStarted = true;
			videoFinished = false;
		}
	}*/

	//Renders the text based on the provided spec
	function drawText(spec){
		context.font = spec.font;
		context.fillStyle = spec.fill;
		context.textBaseline = 'top';

		context.fillText(
			spec.text,
			world.left + spec.pos.x * world.size,
			world.top + spec.pos.y * world.size);
	}

	//This returns the height of the specified font
	function measureTextHeight(spec){
		var height = 0;
		context.save();

		context.font = spec.font;
		context.fillStyle = spec.fill;

		height = context.measureText('m').width / world.size;

		context.restore();

		return height;
	}

	//This returns the width of the specified font
	function measureTextWidth(spec){
		var width = 0;
		context.save();

		context.font = spec.font;
		context.fillStyle = spec.fill;

		width = context.measureText(spec.text).width / world.size;

		context.restore();

		return width;
	}

	//Draw a line segment
	function drawLine(style, pt1, pt2){
		context.strokeStyle = style;
		context.beginPath();
		context.moveTo(
			0.5 + world.left + (pt1.x * world.size),
			0.5 + world.top + (pt1.y * world.size));
		context.lineTo(
			0.5 + world.left + (pt2.x * world.size),
			0.5 + world.top + (pt2.y * world.size));
		context.stroke();
	}

	//Draw a circle
	function drawCircle(style, center, radius){
		//0.5, 0.5 is to ensure an actual 1 pixel line is drawn.
		context.strokeStyle = style;
		context.beginPath();
		context.arc(
			0.5 + world.left + (center.x * world.size),
			0.5 + world.top + (center.y * world.size),
			radius * world.size,
			0, 2 * Math.PI);
		context.stroke();
	}

	//Draws a rectangle
	function drawRectangle(style, left, top, width, height){
		//0.5, 0.5 is to ensure an actual 1 pixel line is drawn.
		context.strokeStyle = style;
		context.strokeRect(
			0.5 + world.left + (left * world.size),
			0.5 + world.top + (top * world.size),
			width * world.size,
			height * world.size);
	}

	return {
		initialize: initialize,
		clearCanvas: clearCanvas,
		drawText: drawText,
		measureTextHeight: measureTextHeight,
		measureTextWidth: measureTextWidth,
		drawLine: drawLine,
		drawRectangle: drawRectangle,
		drawCircle: drawCircle,
		notifyResize: notifyResize,
		/*renderVideo: renderVideo,
		setUpVideo: setUpVideo,
		setVideoSource: setVideoSource,
		pauseVideo: pauseVideo*/
	};

}(Game.input));
