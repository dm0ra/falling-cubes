
	var kekE = [0,0,0,0];


	function inbound()
	{
		kekE[0] = k.x-(kw)/2-(k.speed)*2;
		kekE[2] = k.x + (kw)/2+(k.speed)*2;
		kekE[3] = k.y + (kw)/2+(k.speed)*2;
		kekE[1] = k.y - (kw)/2-(k.speed)*2;
		edgeC[0] = kekE[0] < 0;
		edgeC[1] = kekE[1] < 0;
		edgeC[2] = kekE[2] > width;
		edgeC[3] = kekE[3] > height;
		k.move();
	}

	function checkCollision()
	{
		var laserLeave = 0;
		var ballLeave = 0;
		for(var i = 0;i<balls.length;i++)
		{

			if(k.x < balls[i].x+balls[i].radius && k.x + 10 > balls[i].x && balls[i].heartKek === 0)
				{
					if(k.y > balls[i].y-balls[i].radius && k.y < balls[i].y + balls[i].radius/1.1 )
					{
						hearts -= 1;
						balls[i].heartKek = 1;
						background(255,0,0);
					}
				}

			if(balls[i].y+balls[i].radius > height && balls[i].heartFloor === 0)
			{
				hearts-= 1;
				balls[i].heartFloor = 1;
				background(255,0,0);
			}
			for(var j = 0;j<lasers.length;j++)
			{
				if(typeof balls[i] === 'undefined')
				{
					
					ballLeave = 1;
					i--;
				}
				if(typeof lasers[j] === 'undefined')
				{
					laserLeave = 1;
					j--;
				}

				if(lasers[j].x < balls[i].x+balls[i].radius && lasers[j].x + 10 > balls[i].x )
				{
					if(lasers[j].y > balls[i].y-balls[i].radius && lasers[j].y < balls[i].y + balls[i].radius/1.1 )
					{
						balls.splice(i,1);
						lasers.splice(j,1);
						j--;
						i--;
						score++;
						console.log("success");
					}
					break;
				}
				
			}
			
			
		}
	}
