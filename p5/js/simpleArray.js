let squareNums = [25,36,49,64,81,100];
let squarePos = 10;


function setup(){
  createCanvas(windowWidth,windowHeight);
  //print(squareNums[0]);
  //ellipse(200, 200, squareNums[3], squareNums[5]);
  fill (200,30,100);

  for(let i =0; i<squareNums.length; i++){
    squarePos +=40;
    rect(0,squarePos,squareNums[i],20);
    print(squarePos);
    text(str(squareNums[i]),squareNums[i]+10,squarePos+10);

  }

  //print(squareNums.length);
}

function draw(){


}
