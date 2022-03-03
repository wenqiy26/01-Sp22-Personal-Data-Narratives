let furby;
let furbyBrushBool = false;
let ellipseBrushBool = false;
let counter;



function preload(){
  furby = loadImage("js/image/furby.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  background(246, 230, 131);
  imageMode(CENTER);
}

function draw(){

  if(ellipseBrushBool == true){
    ellipseBrush();
  }
  if(furbyBrushBool == true){
    furbyBrush();
  }

}

function furbyBrush(){
  if(mouseIsPressed == true){
    image(furby,mouseX,mouseY,40,40);
  }

}

function ellipseBrush(){
  if(mouseIsPressed == true){
    fill(random(255),random(255),random(255),50);
    ellipse(mouseX, mouseY,50,50);
  }
}

//function mouseClicked(){
//  print(counter++);
//}

function keyPressed(){
  if(key == "e"){
    ellipseBrushBool = true;
    furbyBrushBool = false;
  }

  if(key == 'f'){
    furbyBrushBool = true;
    ellipseBrushBool = false;
  }
  if(key == 'c'){
    background(246, 230, 131);
    furbyBrushBool = false;
    ellipseBrushBool = false;
  }
  if(key == 's'){
    save('paint.jpg');
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  background(246, 230, 131);
}
