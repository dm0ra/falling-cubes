function mainScreen(){

	var buttonCount = 4;
	var buttonWidth = 300;
	var buttonHeight = 100;
	var buttonStroke = 5;
	var i = 0;
	var text = 2;
	


	if(mainSetupFlag === 1){
		background(BACKGROUNDCOLOR[0],BACKGROUNDCOLOR[1],BACKGROUNDCOLOR[2]);	//background color
		textSize(scoreSize);

		fill(0,255,0);
	
		for(i=0;i<buttonCount;i++){
			if(mainFirstSetupFlag === 1){
				buttonArray.push(new button(width/2 - buttonWidth/2,(i+1)*(height/buttonCount) - (buttonHeight/2),buttonWidth,buttonHeight));
				
			}
			buttonArray[i].buttonDraw();
			buttonArray[i].setText(buttonText[i], scoreSize);
		}

		if(mainFirstSetupFlag === 1){
				titleButton = new button(0,0,960,buttonArray[0].y);
		}

		if(mainSetupFlag === 1){
			//titleButton.buttonDraw();

			titleButton.setTitleText("Cool Game Title", 80);
			//console.log('sugma');
		}
		//console.log(buttonArray.length);

		//titleButton = new button(button[0].x/2,width/2,)

		switch(buttonHighlight)	//chooses which button to highlight, decided by keypresses
		{
			case 0:
			buttonArray[0].highlight();
			if(ENTERFLAG === 1){
				state = 1;
				ENTERFLAG = 0;
			}
			break;
			case 1:
			buttonArray[1].highlight();
			break;
			case 2:
			if(ENTERFLAG === 1){
				state = 3;
				gui.show();
				ENTERFLAG = 0;
			}
			buttonArray[2].highlight();
			break;
			case 3:
			if(ENTERFLAG === 1){
				state = 4;
				ENTERFLAG = 0;
			}
			buttonArray[3].highlight();
			break;
		}
		mainSetupFlag = 0;
		mainFirstSetupFlag = 0;
		ENTERFLAG = 0;
	}

	
	if(UPFLAG === 1){	//if the up arrow was pressed
		mainSetupFlag = 1;
		if(buttonHighlight > 0)
		{
			buttonHighlight--;
		}
		UPFLAG = 0;
	}
	if(DOWNFLAG === 1){	//if the down button was pressed
		mainSetupFlag = 1;
		if(buttonHighlight < 3)
		{
			buttonHighlight++;
		}
		DOWNFLAG = 0;
	}
	if(ENTERFLAG === 1){
		mainSetupFlag = 1;
		//ENTERFLAG = 0;
	}



}

function gameSelectScreen(){
	var gameCount = 2;
}

// function hexToRgb(hex) {
//     var bigint = parseInt(hex, 16);
//     console.log(hex);
//     KEKCOLOR[0] = (bigint >> 16) & 255;
//     KEKCOLOR[1] = (bigint >> 8) & 255;
//     KEKCOLOR[2] = bigint & 255;
//     console.log("YEET");
//     return 1;
// }

function hexToRgb(hex){
	var dummyColor = [0,0,0];
    hex = hex.replace('#','');
    dummyColor[0] = parseInt(hex.substring(0,2), 16);
    dummyColor[1] = parseInt(hex.substring(2,4), 16);
    dummyColor[2] = parseInt(hex.substring(4,6), 16);

    return dummyColor;
}

function clearScreen(){
	background(BACKGROUNDCOLOR[0],BACKGROUNDCOLOR[1],BACKGROUNDCOLOR[2]);
	//console.log("laser:" + laserColor + ", last laser: "+lastLaserColor);
	if(KekColor != lasthexKekColor){
		KEKCOLOR = hexToRgb(KekColor);
		lasthexKekColor = KekColor;
	}

	if(laserColor != lastLaserColor){
		LASERCOLOR = hexToRgb(laserColor);
		lastLaserColor = laserColor;
	}

	if(EnemyColor != lastEnemyColor){
		ENEMYCOLOR = hexToRgb(EnemyColor);
		lastEnemyColor = EnemyColor;
	}

	if(BackgroundColor != lastBackgroundColor){
		BACKGROUNDCOLOR = hexToRgb(BackgroundColor);
		lastBackgroundColor = BackgroundColor;
	}

	// if(hexKekColor != lasthexKekColor){
	// 	KEKCOLOR = hexToRgb(hexKekColor);
	// 	lasthexKekColor = hexKekColor;
	// }

	//console.log(KEKCOLOR[0],KEKCOLOR[1],KEKCOLOR[2]);
}

function creditsScreen(){
	clearScreen();
	textAlign(CENTER);
	textSize(50);
	text("andres made this trash game",width/2,height/2);
}

function settingsScreen(){

	//gui.show();
	clearScreen();
	settingsAnimationPreview();
}


function settingsAnimationPreview(){
	previewKek.show();
	spawnPreview();
}