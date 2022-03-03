let ballX;
let ballY;
let mouseCollide;
let ballSpeedX;
let ballSpeedY;
let score = 0;
function setup(){
  createCanvas(windowWidth,windowHeight);
  ballX = random(15,windowWidth-15);
  ballY = random(15,windowWidth-15);
  ballSpeedX = 2;
  ballSpeedY = 2;
  textAlign(CENTER);
}

function draw (){
  background(0);
  fill(255);
  textSize(40);
  text("Score: "+score+"00",windowWidth/2,80);
  mouseCollide = dist(ballX,ballY,mouseX,mouseY);
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;
  if(ballX >= windowWidth-15 || ballX <= 15){
    ballSpeedX = ballSpeedX * -1;

  }
  if(ballY >= windowHeight-15 || ballY <= 15){
    ballSpeedY = ballSpeedY * -1;

  }
  if(mouseCollide < 25){
    score++;
    ballX = random(15,windowWidth-15);
    ballY = random(15,windowHeight-15);
    ballSpeedX = ballSpeedX*1.2;
    ballSpeedY = ballSpeedY*1.2;
  }

  ellipse(ballX, ballY,30,30);
  //print(ballX);
  //print(mouseCollide);

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
