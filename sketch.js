function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(0);  
translate(200,200);
rotate(-90);
  let hr = hour();
  let sec = second();
  let min = minute();

  stroke(255,100,150);
  strokeWeight(10);
  noFill();
  let end = map(sec,0,60,0,360)
  arc(0,0,320,320,0,end);
  push();
  rotate(end);
  stroke(255,100,150);
line(0,0,100,0);
pop()
  stroke(150,100,255);
  let end2 = map(min,0,60,0,360)
  arc(0,0,280,280,0,end2);
  push();
  stroke(150,100,255);
  rotate(end2)
  line(0,0,90,0);
  pop();
  stroke(150,255,255);
  let end3 = map(hr%12,0,12,0,360)
  arc(0,0,250,250,0,end3);
  push();
  stroke(150,255,255);
  rotate(end3)
  line(0,0,70,0);
pop();
 //strokeWeight(4);
 //stroke(225)
// noFill();
 //ellipse(200,200,300,300);
 //textColor("white")
text("My Clock not Yours",width/2,height/2);


  drawSprites();
}