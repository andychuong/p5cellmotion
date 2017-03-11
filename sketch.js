//declare variables that we'll be using for orientation and motion
	var alpha, beta, gamma; //Orientation
	var myX, myY;
	var xmotion, ymotion, zmotion; //Motion

// P5 STUFF


function setup() {
	createCanvas(windowWidth,windowHeight);
	background('cyan');
}

function draw() {
	//background('cyan');
	myY = map(gamma,-180,180,0,windowHeight);
	myX = map(beta,-180,180,0,windowWidth);


	// document.getElementById(sentx).innerHTML = ballX;
	// document.getElementById(senty).innerHTML = ballY;
	sendDrawing({
		'x':myX,
		'y':myY,
	});


}

function sendDrawing(message){
		socket.emit('drawing', message);
		//console.log(message);
}

function drawOther(someX, someY){
		fill('black');
		stroke('cyan');
		strokeWeight(40);
		ellipse(someX,someY,65,65);
}


//OTHER JAVASCRIPT DOWN HERE
// run this after the page has loaded

function init(){

	////ORIENTATION

	//function for orientation
	function handleOrientation(event){
		alpha = Math.floor(event.alpha);
		beta = Math.floor(event.beta);
		gamma = Math.floor(event.gamma);

		socket.emit('orientation', {
			'alpha': alpha,
			'beta': beta,
			'gamma': gamma
		});
	}

	//event listener for orientation (deviceorientation is built in)
	window.addEventListener('deviceorientation', handleOrientation, true);
}


window.addEventListener('load', init);



// Device Orientation - consistant numbers if not movie
//  - Alpha - 360
//  - Beta -180-180
//  - Gamma

// Device Motion (acceleration)
//  - x
//  - y
//  - z