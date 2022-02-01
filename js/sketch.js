//stuff in setup runs once in you sketch
//only make 1 setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(38, 84, 222);
  rectMode(CENTER)
  print(windowWidth);
}

//stuff in draw runs over and over (60fps)
//only make 1 draw function
function draw() {
  background(38, 84, 222);
  stroke(30, 200, 100)
  strokeWeight(5)
  line(20, 40, 300, 200);

  stroke(200, 50, 180);
  strokeWeight(5)
  fill(0, 255, 0)
  noFill();
  ellipse(windowWidth/2, windowHeight/2, 50, 70);

  noStroke();
  fill(255, 0, 0)
  rect(mouseX, mouseY, 300, 50)
  // put drawing code here
  print(mouseX)
}
