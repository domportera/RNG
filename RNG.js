//Random Note Generator

var allowSwitch = false;
var allowIncrement = false;
var allowAccidentals = true;
var incrementTimer = 30;
var counterValue = 240;
var counter = 0;
var randomNumber;
var pRandomNumber = -1;
var letterFontSize = 400;
var accidentalFontSize = 300;
var noteOffset = letterFontSize/2;
var buttonPressColor = 235;
var shade1 = false;
var shade2 = false; // for shading in arrow buttons
var backgroundColor = 255;

var buttonSize = 50;
var windowWidth = 600;
var windowHeight = 600; 

// GUI variables
  var x1 = windowWidth/10;
  var x2 = x1 + 70;
  var y1 = windowHeight/10;
  var y2 = y1;

function setup(){
  background(backgroundColor);
  createCanvas(600,600);
  rectMode(CENTER);
}


function draw(){
  programBasics();
  drawGUI();
}

function mousePressed(){ // for interacting with GUI
  allowIncrement = true;
  incrementTimer = 30;
  
  //speed buttons
  if (mouseX > x1 && mouseX < x1 + buttonSize && mouseY > y1 && mouseY < y1 + buttonSize){
    if (counterValue > 12)
     counterValue -= 12;
     shade1 = true;
  }else if(mouseX > x2 && mouseX < x2 + buttonSize && mouseY > y2 && mouseY < y2 + buttonSize){
    if (counterValue < 600) 
      counterValue += 12; 
      shade2 = true;
  }
  
  //accidental button
  if (mouseX > width - x1 - buttonSize && mouseX < width - x1 && mouseY > y1 && mouseY < y1 + buttonSize){
    if (allowAccidentals)
      allowAccidentals = false;
    else
      allowAccidentals = true;
  }
  
}

function mouseReleased(){
  allowIncrement = false;  
  shade1 = false;
  shade2 = false;
}

function accidentals(){
  
  //clear part of canvas to redraw
  stroke(backgroundColor);
  fill(backgroundColor);
  rectMode(CORNERS);
  rect(width - x1 - buttonSize - 20, 0, width - x1 + 20, y1);
  
  stroke(0);
  fill(255);
  rectMode(CORNER);
  rect(width - x1 - buttonSize, y1, buttonSize, buttonSize);
  
  if (allowAccidentals){
    stroke(20,160,20);
    line(width - x1 - buttonSize, y1, width - x1, y1 + buttonSize);
    line(width - x1, y1, width - x1 - buttonSize, y1 + buttonSize);
    
  }
  
  fill(0);
  noStroke();
  textAlign(CENTER);
  textFont("Palatino Linotype");
  textSize(40);
  text("#/b", width - x1 - buttonSize/2, y1 - 10);
}


function speedButtons(){

  var color1 = 255;
  var color2 = 255;
  
  if (shade1)
    color1 = buttonPressColor;
  if (shade2)
    color2 = buttonPressColor;
  
  //clear part of canvas to redraw
  stroke(backgroundColor);
  fill(backgroundColor);
  rectMode(CORNERS);
  rect(0,0,x2 + buttonSize, y2 + buttonSize);

  stroke(0);
  fill(color1);
  rectMode(CORNER); 
  rect(x1,y1,buttonSize,buttonSize);
    line(x1 + buttonSize - 10, y1 + 10, x1 + 10, y1 + buttonSize/2);
    line(x1 + buttonSize - 10, y1 + buttonSize - 10, x1 + 10, y1 + buttonSize/2);
    
  fill(color2);
  rect(x2,y2,buttonSize,buttonSize);
    line(x2 + 10, y1 + 10, x2 + buttonSize - 10, y1 + buttonSize/2);
    line(x2 + 10, y1 + buttonSize - 10, x2 + buttonSize - 10, y1 + buttonSize/2);
    
   incrementTimer -= 1;
    
  if (mouseIsPressed && allowIncrement && incrementTimer < 1 ){
      if (mouseX > x1 && mouseX < x1 + buttonSize && mouseY > y1 && mouseY < y1 + buttonSize){
        if (counterValue > 12)
         counterValue -= 12;
      }else if(mouseX > x2 && mouseX < x2 + buttonSize && mouseY > y2 && mouseY < y2 + buttonSize){
        if (counterValue < 600) 
          counterValue += 12; 
      }
  }
  

  fill(0);
  noStroke();
  textFont("Palatino Linotype");
  textSize(40);
  textAlign(CENTER);
  text(counterValue/60 + "s", (x1 + x2 + buttonSize)/2, y1 - 10);
}


function drawGUI(){
  speedButtons();
  accidentals();
}

function programBasics(){ // allowing the program to run
    --counter;

  if (counter <= 0){
    allowSwitch = true;
    counter = counterValue;
  }
  
  if (allowSwitch == true){
     textAlign(LEFT);
     drawLetter();
  }
}

function drawLetter(){ //the main functionality of the program, switching and displaying letters
    
    do{
        if (allowAccidentals)
          randomNumber = (Math.floor(random(12)));
        else
          randomNumber = (Math.floor(random(7)));
    }while (randomNumber == pRandomNumber);
    
    pRandomNumber = randomNumber;
    
    allowSwitch = false;
    textFont("Times New Roman"); textSize(letterFontSize);
    noStroke();
    fill(0);
    
    switch (randomNumber){
           
      case 0:
        background(backgroundColor);
        text("C",width/2 - noteOffset,height/2 + 150);
      break;
      

      case 1:
      background(backgroundColor);
        text("D",width/2 - noteOffset,height/2 + 150);
      break;
     
      
      case 2:
      background(backgroundColor);
        text("E",width/2 - noteOffset,height/2 + 150);
      break;
      
      case 3:
      background(backgroundColor);
        text("F",width/2 - noteOffset,height/2 + 150);
      break;
      
      case 4:
      background(backgroundColor);
        text("G",width/2 - noteOffset,height/2 + 150);
      break;
      
      case 5:
      background(backgroundColor);
        text("A",width/2 - noteOffset,height/2 + 150);
      break;
      
      case 6:
      background(backgroundColor);
        text("B",width/2 - noteOffset,height/2 + 150);
      break;

      case 7:
      background(backgroundColor);
        var randomBool = Math.floor(random(2));
        if (randomBool == 1){
          textFont("Times New Roman"); textSize(letterFontSize);
          text("C",width/2 - noteOffset,height/2 + 150);
          textFont("Palatino Linotype"); textSize(accidentalFontSize);
          text("#",width/2 - noteOffset + 2*letterFontSize/3, height/2 + 50);
        }else{
          textFont("Times New Roman"); textSize(letterFontSize);
          text("D",width/2 - noteOffset,height/2 + 150);
          textFont("Palatino Linotype"); textSize(accidentalFontSize);
          text("b",width/2 - noteOffset + 2*letterFontSize/3, height/2 + 50);
        }
          
      break;

      case 8:
      background(backgroundColor);
      var randomBool2 = Math.floor(random(2));
        if (randomBool2 == 1){
          textFont("Times New Roman"); textSize(letterFontSize);
          text("D",width/2 - noteOffset,height/2 + 150);
          textFont("Palatino Linotype"); textSize(accidentalFontSize);
          text("#",width/2 - noteOffset + 2*letterFontSize/3, height/2 + 50);
        }else{
          textFont("Times New Roman"); textSize(letterFontSize);
          text("E",width/2 - noteOffset,height/2 + 150);
          textFont("Palatino Linotype"); textSize(accidentalFontSize);
          text("b",width/2 - noteOffset + 2*letterFontSize/3, height/2 + 50);
        }
        break; 
      
      case 9:
      background(backgroundColor);
      var randomBool3 = Math.floor(random(2));
        if (randomBool3 == 1){
          textFont("Times New Roman"); textSize(letterFontSize);
          text("F",width/2 - noteOffset,height/2 + 150);
          textFont("Palatino Linotype"); textSize(accidentalFontSize);
          text("#",width/2 - noteOffset + 2*letterFontSize/3, height/2 + 50);
        }else{
          textFont("Times New Roman"); textSize(letterFontSize);
          text("G",width/2 - noteOffset,height/2 + 150);
          textFont("Palatino Linotype"); textSize(accidentalFontSize);
          text("b",width/2 - noteOffset + 2*letterFontSize/3, height/2 + 50);
        }
      break;     
      
      case 10:
      background(backgroundColor);
        var randomBool4 = Math.floor(random(2));
        if (randomBool4 == 1){
          textFont("Times New Roman"); textSize(letterFontSize);
          text("G",width/2 - noteOffset,height/2 + 150);
          textFont("Palatino Linotype"); textSize(accidentalFontSize);
          text("#",width/2 - noteOffset + 2*letterFontSize/3, height/2 + 50);
        }else{
          textFont("Times New Roman"); textSize(letterFontSize);
          text("A",width/2 - noteOffset,height/2 + 150);
          textFont("Palatino Linotype"); textSize(accidentalFontSize);
          text("b",width/2 - noteOffset + 2*letterFontSize/3, height/2 + 50);
        }
      break;   
      
      case 11:
      background(backgroundColor);
        var randomBool5 = Math.floor(random(2));
        if (randomBool5 == 1){
          textFont("Times New Roman"); textSize(letterFontSize);
          text("A",width/2 - noteOffset,height/2 + 150);
          textFont("Palatino Linotype"); textSize(accidentalFontSize);
          text("#",width/2 - noteOffset + 2*letterFontSize/3, height/2 + 50);
        }else{
          textFont("Times New Roman"); textSize(letterFontSize);
          text("B",width/2 - noteOffset,height/2 + 150);
          textFont("Palatino Linotype"); textSize(accidentalFontSize);
          text("b",width/2 - noteOffset + 2*letterFontSize/3, height/2 + 50);
        }
      break;
    } 
}
