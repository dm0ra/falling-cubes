let width = 800;
let height = 800;
var loopCount = 0;
var g = 9.8;
var value = 126;
var dir = [false,false,false,false];  // left,up,right.down
var kw = 30;
var kh = 30;
var collide = 0;
var topC = false;
var rightC = false;
var bottomC = false;
var leftC = false;
var edgeC = [false,false,false,false]; // left,up,right,down
var scoreSize = 48;
var score = 0;
var dirCount = 0;


function setup()
{
	createCanvas(width, height);
	k = new kek(Math.floor(Math.random()*(width-kw)), Math.floor(Math.random()*(height-kh)),kw, kh);
	frameRate(60);

}

function draw() 
{
	background(0,180,255);
	fill(value);
	rect(k.x,k.y,kw,kh);
	fill(255,255,255);
	textSize(scoreSize);
	text(score,width-scoreSize-45,scoreSize);
	k.gameStatus();
	k.move();
}

function kek(locx, locy, kw, kh)
{
	this.x = locx;
	this.y = locy;
	this.speed = 2;
	this.kw = kw;
	this.kh = kh;
	this.leftE = this.x - this.speed;
	this.rightE = this.x + kw + this.speed;
	this.bottomE = this.y + kh + this.speed;
	this.topE = this.y - this.speed;


	this.move = function()
	{

		if(collide === 0 )
		{
			

	/*		if(dir[0] === "left"  && leftC == false)
			{
				this.x -= this.speed;
			}
			else if(dir[0] === "right" && rightC == false)
			{
				this.x += this.speed;
			}
			else if(dir[0] === "up" && topC == false)
			{
				this.y -= this.speed;
			}
			else if(dir[0] === "down" && bottomC == false)
			{
				this.y += this.speed;
			}
			else if(dir[dirCount] === "release")
			{
				
			}*/

			/*for(var i = 0; i<4; i++)
			{
				if(dir[0] === true  && leftC == false)
				{
					this.x -= this.speed;
				}
				else if(dir[1] === true && topC == false)
				{
					this.y -= this.speed;
				}
				else if(dir[2] === true && rightC == false)
				{
					this.x += this.speed;
				}
				else if(dir[3] === true && bottomC == false)
				{
					this.y += this.speed;
				}
			}*/


			for(var i = 0; i<4; i++)
			{
				if(dir[i] === true && edgeC[i] === false)
				{
					//text("test",40,80);
					if(i === 0)
					{
						this.x -= this.speed;
					}

					else if(i === 1)
					{
						this.y -= this.speed;
					}

					else if(i === 2)
					{
						this.x += this.speed;
					}

					else if(i === 3)
					{
						this.y += this.speed;
					}
				}
			}
		}
		

}



	this.gameStatus = function()
	{
		this.leftE = this.x;
		this.rightE = this.x + kw;
		this.bottomE = this.y + kh;
		this.topE = this.y;
		topC = this.topE < 0;
		bottomC = this.bottomE > height;
		rightC = this.rightE > width;
		leftC = this.leftE < 0;
		edgeC[0] = leftC;
		edgeC[1] = topC;
		edgeC[2] = rightC;
		edgeC[3] = bottomC;

	/*	if(this.leftE <= 0 || this.rightE >= width || this.topE <= 0 || this.bottomE >= height)
		{
			collide = 1;
		}
		else
		{
			collide = 0;
		}*/
	}

}

function keyPressed()
{
	if(collide === 0)
	{

			if (keyCode === LEFT_ARROW)
			{
				dirCount++;
				dir[0] = true;
			}
			else if (keyCode === RIGHT_ARROW)
			{
				//dir[0] = "right";
				dirCount++
				dir[2] = true;
				}
			else if(keyCode ===DOWN_ARROW)
			{
				//dir[0] = "down";
				dirCount++;
				dir[3] = true;
			}
			else if(keyCode === UP_ARROW)
			{
				//dir[0] = "up";
				dirCount++;
				dir[1] = true;
			}
		
	}

  return false; // prevent default
}

function keyReleased()
{
	dirCount--;
	if(dirCount === 0)
	{
		for(var i = 0; i<4; i++)
		{
			dir[i] = false;
		}
	}
}

/*function keyTyped()
{
	dirCount++;
	if(key === 'a')
	{
		dir[0] = "left";
	}
	else if(key === 'w')
	{
		dir[1] = "up";
	}
	else if(key === 'd')
	{
		dir[2] = "right";
	}
	else if(key === 's')
	{
		dir[3] = "down";
	}


	//return default;
}*/



function walls(xStart, yStart, xEnd, yEnd, color)
{
	this.w = xStart;
	this.h = yStart;
	this.x = xEnd;
	this.y = yEnd;
	this.wallColor = color;
}