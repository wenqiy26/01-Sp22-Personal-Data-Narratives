let redBool = false;
let orangeBool = false;
let yellowBool = false;
let greenBool = false;
let blueBool = false;
let indigoBool = false;
let violetBool = false;
let eraserBool = false;
var button;
var input;
let weather;


function preload(){
  rainy = loadSound("js/audio/rain.mp3");
  windy = loadSound("js/audio/wind.mp3");
  stormy = loadSound("js/audio/storm.mp3");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(217, 255, 255);
  textAlign(CENTER);
  strokeWeight(1);
  textSize(40);
  fill (217, 255, 255);
  circle(windowWidth/2,windowHeight+30,900);
  for(let i=0;i<8;i++){
    circle(windowWidth/2,windowHeight+30,1000-100*i);

  }
  fill (0);
  textSize(20);
  text("Color by Number",windowWidth/2,80);
  text("Type Number 1-7 and Start Coloring!",windowWidth/2,110);
  text("e to erase and c to unselect any brush",windowWidth/2,140);
  text("Type 'rainy' 'windy' 'stormy' and See What Happends!",windowWidth/2,170);
  for(let j=1;j<8;j++){
    text(j,windowWidth/2,windowHeight-85-50*j);
  }
    //
    input = createInput();
    textAlign(CENTER);
    input.position(windowWidth/2-100, 200);
    input.size(200);

    //input.input(myInputEvent);
    textAlign(CENTER);
    button = createButton("submit");
    button.position(windowWidth/2+50, 200);
    button.mousePressed(changeWeather);


}

function changeWeather(){
  weather = input.value();
  if(weather == "rainy"){
      rainy.play();
  }
  if(weather == "windy"){
      windy.play();
  }
  if (weather == "stormy"){
      stormy.play();
  }

}


function draw(){

  if(redBool == true){
    redBrush();
  }
  if(orangeBool == true){
    orangeBrush();
  }
  if(yellowBool == true){
    yellowBrush();
  }
  if(greenBool == true){
    greenBrush();
  }
  if(blueBool == true){
    blueBrush();
  }
  if(indigoBool == true){
    indigoBrush();
  }
  if(violetBool == true){
    violetBrush();
  }
  if(eraserBool == true){
    eraser();
  }
}
function keyPressed(){
  if(key == '7'){
    redBool = true;
    orangeBool = false;
    yellowBool = false;
    greenBool = false;
    blueBool = false;
    indigoBool = false;
    violetBool = false;
    eraserBool = false;
  }

  if(key == '6'){
    redBool = false;
    orangeBool = true;
    yellowBool = false;
    greenBool = false;
    blueBool = false;
    indigoBool = false;
    violetBool = false;
    eraserBool = false;
  }
  if(key == '5'){
    redBool = false;
    orangeBool = false;
    yellowBool = true;
    greenBool = false;
    blueBool = false;
    indigoBool = false;
    violetBool = false;
    eraserBool = false;
  }
  if(key == '4'){
    redBool = false;
    orangeBool = false;
    yellowBool = false;
    greenBool = true;
    blueBool = false;
    indigoBool = false;
    violetBool = false;
    eraserBool = false;
  }
  if(key == '3'){
    redBool = false;
    orangeBool = false;
    yellowBool = false;
    greenBool = false;
    blueBool = true;
    indigoBool = false;
    violetBool = false;
    eraserBool = false;
  }
  if(key == '2'){
    redBool = false;
    orangeBool = false;
    yellowBool = false;
    greenBool = false;
    blueBool = false;
    indigoBool = true;
    violetBool = false;
    eraserBool = false;
  }
  if(key == '1'){
    redBool = false;
    orangeBool = false;
    yellowBool = false;
    greenBool = false;
    blueBool = false;
    indigoBool = false;
    violetBool = true;
    eraserBool = false;
  }
  if(key == 'e'){
    redBool = false;
    orangeBool = false;
    yellowBool = false;
    greenBool = false;
    blueBool = false;
    indigoBool = false;
    violetBool = false;
    eraserBool = true;
  }
  if(key == 'c'){
    redBool = false;
    orangeBool = false;
    yellowBool = false;
    greenBool = false;
    blueBool = false;
    indigoBool = false;
    violetBool = false;
    eraserBool = false;
  }
}
function redBrush(){
  if(mouseIsPressed == true){
    stroke(234, 85, 85);
    fill(234, 85, 85);
    ellipse(mouseX, mouseY,30,30);
  }
}
function yellowBrush(){
    if(mouseIsPressed == true){
      stroke(236, 208, 63);
      fill(236, 208, 63);
      ellipse(mouseX, mouseY,30,30);
  }
}
function orangeBrush(){
    if(mouseIsPressed == true){
      stroke(243, 156, 60);
      fill(243, 156, 60);
      ellipse(mouseX, mouseY,30,30);
  }
}
function greenBrush(){
    if(mouseIsPressed == true){
      stroke(110, 179, 94);
      fill(110, 179, 94);
      ellipse(mouseX, mouseY,30,30);
  }
}
function blueBrush(){
    if(mouseIsPressed == true){
      stroke(73, 150, 200);
      fill(73, 150, 200);
      ellipse(mouseX, mouseY,30,30);
  }
}
function indigoBrush(){
    if(mouseIsPressed == true){
      stroke(75, 84, 188);
      fill(75, 84, 188);
      ellipse(mouseX, mouseY,30,30);
  }
}
function violetBrush(){
    if(mouseIsPressed == true){
      stroke(119, 78, 216);
      fill(119, 78, 216);
      ellipse(mouseX, mouseY,30,30);
  }
}
function eraser(){
    if(mouseIsPressed == true){
      stroke(217, 255, 255);
      fill(217, 255, 255);
      ellipse(mouseX, mouseY,30,30);
  }
}

function myInputEvent() {
  //console.log('you are typing: ', this.value());
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  for(let i=0;i<8;i++){
    circle(windowWidth/2,windowHeight+30,1000-100*i);
    //print(i);

  }
  background(217, 255, 255);
}
