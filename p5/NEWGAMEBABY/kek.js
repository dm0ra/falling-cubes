

function kek(locx, locy, kw, kh, speed)
{
	this.x = locx;
	this.y = locy;
	this.speed = speed;
	this.kw = kw;
	this.kh = kh;

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
		fill(0,255,0);
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
		fill(255,180,0);
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


