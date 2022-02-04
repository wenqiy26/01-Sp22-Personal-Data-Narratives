//global variable
let ellipseX;
let ellipseY;
let mouthHeight = 100;
let furby;


function preload(){
  furby = loadImage('js/image/furby.png');
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  ellipseX = random(50,windowWidth-50);
  ellipseY = random(50,windowHeight-50);
  rectMode(CENTER);
  imageMode(CENTER);

}

function draw(){
  if(mouseIsPressed == true){
    background (252, 217, 207);
    mouthHeight=0;
  }
  else{
    //background(random(200,250), 187, 228);
    background(242, 187, 228);
    strokeWeight(5);
    mouthHeight = 100;

  }
  //ellipse(ellipseX, mouseY,200);
  //print(mouseX);
  if(keyIsPressed == true){
    strokeWeight(10);
    stroke(164, 132, 233);
  }
  else{
    strokeWeight(3);
    stroke(244, 136, 154);
  }
  //image (furby, mouseX, mouseY, mouseX,100);


  if(mouseX>windowWidth/2){
    fill(168, 222, 250);
  }
  else{
    fill(255, 242, 198);
  }
  ellipse(300,200,100);
  ellipse(850,200,100);
  line(250,130,350,130);
  line(750,120,950,120);
  //ellipse(ellipseX,ellipseY,100);
  rect(windowWidth/2,windowHeight/2,300,mouthHeight);


}
