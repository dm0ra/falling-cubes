let width = 960;
let height = 740;
var value = 0;
var kw = 30;
var kh = 30;
var edgeC = [false,false,false,false]; // left,up,right,down
var scoreSize = 28;
var score = 0;
var loopCount = 0;
var g = 2;
var lasers = [];
var laserCount = 0;
var level = 0;
var time = 0;
var mult = 0;
var drawK = [true, true];
var state = 0;
var balls = [];
var img;
var ballCount = 0;
var hearts = 3;
var over = 0;
var border = 100;
var mainSetupFlag = 1;
var mainFirstSetupFlag = 1;
var buttonText = ["Game Select", "High Scores", "Settings", "Credits"];
var buttonArray = [];
var gameSelectButton;
var highScoreButton;
var settingsButton;
var creditsButton;
var BACKGROUNDCOLOR = [0,30,200];
var TITLETEXTCOLOR = [0,255,0];
var KEKCOLOR = [0,255,0];
var ENEMYCOLOR = [0,255,0];
var LASERCOLOR = [0,255,0];
var UPFLAG = 0, DOWNFLAG = 0, RIGHTFLAG = 0, LEFTFLAG = 0, ENTERFLAG = 0;
var buttonHighlight = 0;
var titleButton;
var SFLAG = 0;
var test = 0;
var gui;
kekSpeed = 5.5;
var loops = 0;
var recty = -65;
lasery = 600-kh*1.5;


var KekColor = "#00ff00";
var lasthexKekColor = "#00ff00";
var laserColor = "#00ff00";
var lastLaserColor = "#00ff00";
var EnemyColor = "#00ff00";
var lastEnemyColor = "#00ff00";
var BackgroundColor = "#0000ff";
var lastBackgroundColor = "#0000ff";

//var mainGUI;



function setup()
{
	//preLoad();
	//image(img,0,0);
	frameRate(60);
	createCanvas(width, height+border);
	setupKek(drawK[0]);
	//saveStrings(buttonText, 'highscores.txt');
	gui = createGui('settings');
	gui.addGlobals('KekColor', 'laserColor','EnemyColor', 'BackgroundColor');
	//gui.setSize(10, 5);
	gui.hide();

	// gui.setWidth(10);
	// gui.setHeight(30);

}

function draw() 
{
	//console.log(KEKCOLOR[0] + ","+ KEKCOLOR[1] + "," + KEKCOLOR[2]);
	//preload();
	switch(state){

		case 0:

		mainScreen();
		break;

		case 1:
		heartCheck();
		drawKek(drawK[1]);
		drawGameOver(over);
		break;

		case 2:
		highscoreScreen();
		break;

		case 3:
		settingsScreen();
		break;

		case 4:
		creditsScreen();
		break;

		case 5:

		break;

		default:
		//yeet
	}


}

function drawKek(drawK){

	if(drawK === true)
	{
		loopCount++;
		if(loopCount % 60 === 0)
		{
			time++;
		}
		background(BACKGROUNDCOLOR[0],BACKGROUNDCOLOR[1],BACKGROUNDCOLOR[2]);
		fill(KEKCOLOR[0],KEKCOLOR[1],KEKCOLOR[2]);
		strokeWeight(1);
		ellipse(k.x,k.y,kw,kh);
		fill(255,255,255);
		
		inbound();
		k.move();
		spawnBalls();
		listen(1,k);
		checkCollision();
		borderSetUp();
	}	
}

function borderSetUp()		//sets up the border that holds the score and other info
{
	fill(255,100,0);														//sets color of border
	rect(0,height,width,border);										//draws border
	fill(255,255,255);													//sets color of text
	textSize(scoreSize);		
	strokeWeight(3);										//sets size of text
	text(score,width-scoreSize-150,scoreSize+height+border/3);			//display score
	text(laserCount,width/3 + scoreSize,scoreSize+height+border/3);  //display lasers shot
	text(hearts, 50, scoreSize+height+border/3);								//heartcount
	text("Lives",50,height+border/3);								
	text("Lasers Shot",width/3 +scoreSize,height+border/3);
	text("Balls Eliminated",width-scoreSize-150,height+border/3);
}

function heartCheck()
{
	if(hearts <= 0)
	{
		over = 1;
		drawK[0] = "false";
		drawK[1] = "false";
	}
}

function drawGameOver(over)
{
	if(over === 1)
	{
		background(255,0,0);
		strokeWeight(4);
		textSize(100);
		textAlign(CENTER);
		text("GAME OVER", width/2, 300);
		textSize(50);
		text("SCORE:  " + score,width/2,400);
		text("PRESS \"ENTER\"",width/2,500);
		text("TO RETRY",width/2,600);
	}
	else
		return;
}

function setupKek(drawK)
{

	k = new kek(Math.floor(Math.random()*(width-kw)), Math.floor(Math.random()*(height-kh)),kw, kh, 5, KEKCOLOR);
	previewKek = new kek( (550) , (600), kw, kh, 5, KEKCOLOR);
}





function listen(level,k)
{
	if(keyIsDown(32))	//spacebar
	{

		if(mult % 30 === 0 && lasers.length < 8)
		{
			append(lasers,new laser(level,k));
			laserCount++;
			mult++;
 		}
		mult++;

	}

	for(var i =0;i<lasers.length;i++)
	{
		lasers[i].show();
		lasers[i].gravity();
		if(lasers[i].y < -10)
		{
			lasers.splice(i,1);		
			i--;
		}
	}

	
	if(balls.length>0)		//shrinks the balls once they go off screen and 
							//removes balls once they go off screen.
	{
		for(var j = 0;j<balls.length;j++)
		{
			
			if(balls[j].y+balls[j].radius>height)
			{
				balls[j].rounded =0;
				balls[j].radius-=1;
				balls[j].x+=0.5;
				balls[j].y-=balls[j].speed;
				//console.log(ball[i].index, + " " + i);
			}
			balls[j].ballShow();
			balls[j].ballGrav();

			if(balls[j].y-10>height)
			{
				balls.splice(j,1);
				j--;
			}
		}
	}

	if(keyIsDown(32)===false)
	{
		mult =0;
	}
}

function keyPressed()
{
	switch(state){
		case 0:  	//main screen 
		if(keyCode === (48+1)){
		state = 1;
		}
		if(keyCode === (UP_ARROW)){
			UPFLAG = 1;
		}
		if(keyCode === (DOWN_ARROW)){
			DOWNFLAG = 1;
		}
		if(keyCode === ENTER){
			ENTERFLAG = 1;
		}
		break;

		case 1: 	//first game ball shooter (kek)
		if ((over === 1 && keyCode === ENTER) || keyCode === 27){
			//console.log("test");
			over = 0;
			hearts = 3;
			score = 0;
			laserCount = 0;
			drawK[0] = true;
			drawK[1] = true;
			loopCount = 0;
			hexToRgb(KekColor);

			for(var i =0;i<lasers.length;i++){
				lasers.splice(i,1);
					i--;
			}

			for(var j = 0;j<balls.length;j++){
				balls.splice(j,1);
				j--;
			}
		}

		if((over === 1) && (SFLAG === 1)){
			SFLAG = 0;
			//console.log('yolo');
			save();
		}


		if(keyCode === (ESCAPE)){
		state = 0;
		mainSetupFlag =1;
		}
		break;

		case 2:
		if(keyCode === ESCAPE){
			state = 0;
			mainSetupFlag = 1;
		}
		break;

		case 3:
		if(keyCode === ESCAPE){
			state = 0;
			mainSetupFlag = 1;
			gui.hide();
		}

		break;

		case 4:
		if(keyCode === ESCAPE){
			state = 0;
			mainSetupFlag = 1;
		}
		break;

		case 5:

		break;

		default:
	}
	if(keyCode === 75){
		//console.log('yeeeet');
		drawK[1] = true;
		drawK[0] = true;
	}
	if(keyCode === 83){
		SFLAG = 1;
		//console.log('yeet');
	}


}




