

function button(x, y, buttonWidth, buttonHeight){	//button object

	this.x = x;
	this.y = y;
	this.buttonWidth = buttonWidth;
	this.buttonHeight = buttonHeight;
	this.textFlag = 0;
	this.textString = ' ';
	this.size = 0;
	this.highlightFlag = 0;
	this.unhighlightFlag = 1;
	this.highlightThickness = 4;

	 // fill(0,255,0);
	 // strokeWeight(4);
	 // rect(this.x,this.y,this.buttonWidth,this.buttonHeight);
	//this.buttonDraw();

	this.highlight = function(){
		this.highlightFlag = 1;
		this.unhighlightFlag = 0;
		// fill(0,0,0);
		// strokeWeight(0);
		// rect(this.x-this.highlightThickness,this.y-this.highlightThickness,this.buttonWidth+this.highlightThickness*2,this.buttonHeight+this.highlightThickness*2);//draws button


		fill(255,100,0);
		stroke(0);		//sets border color to white
		strokeWeight(this.highlightThickness);
		rect(this.x,this.y,this.buttonWidth,this.buttonHeight);//draws button

		if(this.textFlag === 1){	//checks if there is text
			this.setText(this.textString, this.size);	//redraws text
		}
		strokeWeight(1);
	}

	this.unhighlight = function(){
		this.highlightFlag = 0;
		this.unhighlightFlag = 1;
		stroke(0);		//sets border color to white
		strokeWeight(this.highLightThickness);
		fill(BACKGROUNDCOLOR[0],BACKGROUNDCOLOR[1],BACKGROUNDCOLOR[3]);
		rect(this.x,this.y,this.buttonWidth,this.buttonHeight);//draws button
		this.buttonDraw();

		if(this.textFlag === 1){	//checks if there is text
			this.setText(this.textString, this.size);	//redraws text
		}

	}

	this.buttonDraw = function(){
		fill(0,255,40);	//sets button color to a greenish color
		strokeWeight(3);
		strokeCap(ROUND);
		rect(this.x,this.y,this.buttonWidth,this.buttonHeight);//draws button
	}

	// this.buttonHide = function(){

	// }

	// this buttonResize()
	// {

	// }

	this.setText = function(textString, size){
		this.textX = this.x+this.buttonWidth/2;
		this.textY = this.y+this.buttonHeight/2;
		this.textString = textString;
		this.size = size;	//sets variables and flags
		this.textFlag = 1;
		stroke(0);		//sets text color to black
		strokeWeight(0);
		fill(0,0,0);
		textSize(size);	
		textAlign(CENTER, CENTER);											//sets size of text
		text(textString,this.textX,this.textY);	
		
	}

	this.setTitleText = function(textString, size){
		this.textX = this.x+this.buttonWidth/2;
		this.textY = this.y+this.buttonHeight/2;
		this.textString = textString;
		this.size = size;	//sets variables and flags
		this.textFlag = 1;
		stroke(0);		//sets text color to black
		strokeWeight(5);
		fill(TITLETEXTCOLOR[0],TITLETEXTCOLOR[1],TITLETEXTCOLOR[2]);	
		textSize(size);	
		textAlign(CENTER, CENTER);											//sets size of text
		text(textString,this.textX,this.textY);	
		
	}
}