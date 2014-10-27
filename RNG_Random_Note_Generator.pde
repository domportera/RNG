boolean allowSwitch=false;boolean allowIncrement=false;boolean accidentals=true;int incrementTimer=30;int counterValue=240;int counter=0;int randomNumber;int pRandomNumber=-1;int letterFontSize=400;int accidentalFontSize=300;int noteOffset=letterFontSize/2;PFont letterFont=createFont("Times New Roman",letterFontSize);PFont accidentalFont=createFont("Palatino Linotype",accidentalFontSize);PFont timeFont=createFont("Palatino Linotype",40);int buttonPressColor=235;boolean shade1=false;boolean shade2=false;int buttonSize=50;int windowWidth=600;int windowHeight=600;int x1=windowWidth/10;int x2=x1+70;int y1=windowHeight/10;int y2=y1;void setup(){background(255);size(600,600);rectMode(CENTER);}
void draw(){programBasics();drawGUI();}
void mousePressed(){allowIncrement=true;incrementTimer=30;if(mouseX>x1&&mouseX<x1+buttonSize&&mouseY>y1&&mouseY<y1+buttonSize){if(counterValue>12)
counterValue-=12;shade1=true;}else if(mouseX>x2&&mouseX<x2+buttonSize&&mouseY>y2&&mouseY<y2+buttonSize){if(counterValue<600)
counterValue+=12;shade2=true;}
if(mouseX>width-x1-buttonSize&&mouseX<width-x1&&mouseY>y1&&mouseY<y1+buttonSize){if(accidentals)
accidentals=false;else
accidentals=true;}}
void mouseReleased(){allowIncrement=false;shade1=false;shade2=false;}
void accidentals(){stroke(255);fill(255);rectMode(CORNERS);rect(width-x1-buttonSize-20,0,width-x1+20,y1);stroke(0);fill(255);rectMode(CORNER);rect(width-x1-buttonSize,y1,buttonSize,buttonSize);if(accidentals){stroke(20,160,20);line(width-x1-buttonSize,y1,width-x1,y1+buttonSize);line(width-x1,y1,width-x1-buttonSize,y1+buttonSize);}
fill(0);textAlign(CENTER);textFont(timeFont);text("#/b",width-x1-buttonSize/2,y1-10);}
void speedButtons(){int color1=255;int color2=255;if(shade1)
color1=buttonPressColor;if(shade2)
color2=buttonPressColor;stroke(255);fill(255);rectMode(CORNERS);rect(0,0,x2+buttonSize,y2+buttonSize);stroke(0);fill(color1);rectMode(CORNER);rect(x1,y1,buttonSize,buttonSize);line(x1+buttonSize-10,y1+10,x1+10,y1+buttonSize/2);line(x1+buttonSize-10,y1+buttonSize-10,x1+10,y1+buttonSize/2);fill(color2);rect(x2,y2,buttonSize,buttonSize);line(x2+10,y1+10,x2+buttonSize-10,y1+buttonSize/2);line(x2+10,y1+buttonSize-10,x2+buttonSize-10,y1+buttonSize/2);incrementTimer-=1;if(mousePressed&&allowIncrement&&incrementTimer<1){if(mouseX>x1&&mouseX<x1+buttonSize&&mouseY>y1&&mouseY<y1+buttonSize){if(counterValue>12)
counterValue-=12;}else if(mouseX>x2&&mouseX<x2+buttonSize&&mouseY>y2&&mouseY<y2+buttonSize){if(counterValue<600)
counterValue+=12;}}
fill(0);textFont(timeFont);textAlign(CENTER);text((float)counterValue/60+"s",(x1+x2+buttonSize)/2,y1-10);}
void drawGUI(){speedButtons();accidentals();}
void programBasics(){--counter;if(counter<=0){allowSwitch=true;counter=counterValue;}
if(allowSwitch==true){textAlign(LEFT);drawLetter();}}
void drawLetter(){do{if(accidentals)
randomNumber=(int(random(12)));else
randomNumber=(int(random(7)));}while(randomNumber==pRandomNumber);pRandomNumber=randomNumber;allowSwitch=false;textFont(letterFont);stroke(0);fill(0);switch(randomNumber){case 0:background(255);text("C",width/2-noteOffset,height/2+150);break;case 1:background(255);text("D",width/2-noteOffset,height/2+150);break;case 2:background(255);text("E",width/2-noteOffset,height/2+150);break;case 3:background(255);text("F",width/2-noteOffset,height/2+150);break;case 4:background(255);text("G",width/2-noteOffset,height/2+150);break;case 5:background(255);text("A",width/2-noteOffset,height/2+150);break;case 6:background(255);text("B",width/2-noteOffset,height/2+150);break;case 7:background(255);int randomBool=int(random(2));if(randomBool==1){textFont(letterFont);text("C",width/2-noteOffset,height/2+150);textFont(accidentalFont);text("#",width/2-noteOffset+2*letterFontSize/3,height/2+50);}else{textFont(letterFont);text("D",width/2-noteOffset,height/2+150);textFont(accidentalFont);text("b",width/2-noteOffset+2*letterFontSize/3,height/2+50);}
break;case 8:background(255);int randomBool2=int(random(2));if(randomBool2==1){textFont(letterFont);text("D",width/2-noteOffset,height/2+150);textFont(accidentalFont);text("#",width/2-noteOffset+2*letterFontSize/3,height/2+50);}else{textFont(letterFont);text("E",width/2-noteOffset,height/2+150);textFont(accidentalFont);text("b",width/2-noteOffset+2*letterFontSize/3,height/2+50);}
break;case 9:background(255);int randomBool3=int(random(2));if(randomBool3==1){textFont(letterFont);text("F",width/2-noteOffset,height/2+150);textFont(accidentalFont);text("#",width/2-noteOffset+2*letterFontSize/3,height/2+50);}else{textFont(letterFont);text("G",width/2-noteOffset,height/2+150);textFont(accidentalFont);text("b",width/2-noteOffset+2*letterFontSize/3,height/2+50);}
break;case 10:background(255);int randomBool4=int(random(2));if(randomBool4==1){textFont(letterFont);text("G",width/2-noteOffset,height/2+150);textFont(accidentalFont);text("#",width/2-noteOffset+2*letterFontSize/3,height/2+50);}else{textFont(letterFont);text("A",width/2-noteOffset,height/2+150);textFont(accidentalFont);text("b",width/2-noteOffset+2*letterFontSize/3,height/2+50);}
break;case 11:background(255);int randomBool5=int(random(2));if(randomBool5==1){textFont(letterFont);text("A",width/2-noteOffset,height/2+150);textFont(accidentalFont);text("#",width/2-noteOffset+2*letterFontSize/3,height/2+50);}else{textFont(letterFont);text("B",width/2-noteOffset,height/2+150);textFont(accidentalFont);text("b",width/2-noteOffset+2*letterFontSize/3,height/2+50);}
break;}}
