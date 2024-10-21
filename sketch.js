let data=[];
function preload() {
  data = loadTable("Tree-Census-2015.csv", "csv", "header");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();

  for(idx=0;idx<data.getRowCount();idx+=1){
let x=data.getNum(idx,"latitude" );
let y=data.getNum(idx,"longitude" );
let c=data.getString(idx, "health");
let posx=map(x, 40.5,40.91, 0, windowWidth);
let posY=map(y, -74.2,-73.7 ,windowHeight,0);
let Tcolor;
if(c=="Good"){
  Tcolor=color(0, 84, 11);
  push();
  strokeWeight(0.5);
  stroke(Tcolor);
ellipse(posx,posY,30);
pop();
}
if(c=="Fair"){
  Tcolor=color(255);
  push();
  strokeWeight(0.5);
  stroke(Tcolor);
ellipse(posx,posY,20);
pop();
}
if(c=="Poor"){
  Tcolor=color(230, 255, 41);
  push();
  strokeWeight(0.7);
  stroke(Tcolor);
rect(posx,posY,60);
pop();
}

}

  
}

function draw() {
}
