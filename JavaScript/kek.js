

function kek(locx, locy, kw, kh, speed, kcolor)
{
	this.x = locx;
	this.y = locy;
	this.speed = speed;
	this.kw = kw;
	this.kh = kh;
	this.color = kcolor;

	this.move = function()
	{
		if(keyIsDown(LEFT_ARROW) && edgeC[0]===false)
		{
			this.x-=this.speed;
		}
		if(keyIsDown(UP_ARROW) && edgeC[1]===false)
		{
			this.y-=this.speed;
		}   
		if(keyIsDown(RIGHT_ARROW) && edgeC[2] === false)
		{
			this.x+=this.speed;
		}
		if(keyIsDown(DOWN_ARROW) && edgeC[3] === false)
		{
			this.y+=this.speed;
		}
	}

	this.gravity = function()
	{
		if(this.y+this.kw>height === false)
		{
			this.y += g;
		}
	}

	this.show = function(){
		background(BACKGROUNDCOLOR[0],BACKGROUNDCOLOR[1],BACKGROUNDCOLOR[2]);
		fill(KEKCOLOR[0],KEKCOLOR[1],KEKCOLOR[2]);
		strokeWeight(1);
		ellipse(this.x,this.y,kw,kh);
	}

	
}

function laser(level, kek)
{
	
	this.level = level;
	this.x = k.x-5;
	this.y = k.y-kh*1.5;
	var laserWidth = kw/3;
	var laserLength = kh;
	this.laserX = [this.x,this.y,this.x+laserWidth,this.y+laserLength]; //leftedge,topedge,rightedge,bottomedge
	this.gravity = function()
	{
		this.y -= 5;
	}

	this.show = function()
	{
		fill(LASERCOLOR[0], LASERCOLOR[1], LASERCOLOR[2]);
		rect(this.x, this.y, laserWidth, laserLength);
	}
	
}


function ball()
{
	const index = ballCount;
	this.heartKek = 0;
	this.heartFloor = 0;
	this.x = Math.floor(Math.random()*(width - 150))+100;
	this.y = -40;
	this.radius = Math.floor(Math.random()*80 + 25);
	this.speed = Math.floor(Math.random()*3+2);
	this.rounded = 1;
	ballCount++;
	this.ballShow = function()
	{
		fill(ENEMYCOLOR[0],ENEMYCOLOR[1],ENEMYCOLOR[2]);
		if(this.rounded === 1)
		{
			rect(this.x,this.y,this.radius,this.radius,this.radius/4);
		}
		else if(this.rounded === 0)
		{
			rect(this.x,this.y,this.radius,this.radius);
						
		}
		
	}

	this.ballGrav = function()
	{
		this.y+= this.speed;
	}

}

// function button(x,y,width,height){	//button object

// 	this.x = x;
// 	this.y = y;
// 	this.width = width;
// 	this.height = height;

// 	fill(0,255,0);
// 	rect(this.x,this.y,this.width,this.height);

// 	this.highlight = function(){

// 	}

// 	this.buttonDraw = function(){

// 	}

// 	this.buttonHide = function(){

// 	}

// 	this buttonResize()
// 	{

// 	}
// }


function spawnBalls()
{
	var firstLoop = 0;
	var ballsSpawned;
	if(ballsSpawned==='undefined')
	{
		ballsSpawned = 0;
		
	}
	this.dummy = 0;
	if(loopCount >240)
	{
		firstLoop =1;
	}
	if(firstLoop === 1)
	{
		if(ballsSpawned < 20 || true)
		{
			if(loopCount % 50 === 0)
			{
				append(balls,new ball());
				ballsSpawned++;
			}
		}
	}
}

function spawnPreview(){
	//console.log();
	loopCount++;
	rectx = previewKek.x - previewKek.kw;
	recty += g;

	laserx = previewKek.x-5;
	lasery -= 3;
	//console.log(laserColor);

	fill(ENEMYCOLOR[0],ENEMYCOLOR[1],ENEMYCOLOR[2]);
	rect((rectx) , (recty),60,60,60/4);

	fill(LASERCOLOR[0], LASERCOLOR[1], LASERCOLOR[2]);
	rect(laserx, lasery, kw/3, kh);

	if(lasery <= (recty + 63))
	{
		loopCount = 0;
		recty = -65;
		lasery =600-kh*1.5;
	}
}