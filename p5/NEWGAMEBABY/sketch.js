

var myAngle = 30;
var myColor = '#eeee00';

var gui;

// function setup()
// {
// 	createCanvas(windowWidth, windowHeight);

//   // Create the GUI
//   sliderRange(0, 90, 1);
//   gui = createGui('cock');
//   gui.addGlobals('myColor', 'myAngle');
  
//   // Only call draw when then gui is changed
//   noLoop();
// }

// function draw() 
// {
// 	  // this is a piece of cake
//   background(0);
//   fill(myColor);
//   angleMode(DEGREES);
//   arc(width/2, height/2, 100, 100, myAngle/2, 360 - myAngle/2, PIE);
// }


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}



function listen(level,k)
{
	//if(keyIsDown(32))

}

function keyPressed()
{
	//if(keyCode === 75)

}


