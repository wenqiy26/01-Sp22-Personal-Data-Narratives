function setup(){
  createCanvas(windowWidth,windowHeight);
  for(let i=0;i<windowWidth;i+=10){
    line(i,0,i,windowHeight);
    //print(i);

  }
  for(let i=0;i<windowWidth;i+=10){
    line(0,1,i,windowWidth,i);
  }
}
function draw(){

}
