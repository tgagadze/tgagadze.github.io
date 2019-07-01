function setup() {
  angleMode(DEGREES);
  createCanvas(600, 600);
}

function draw() {
  translate(300, 300);
  rotate(-90);
  background(122);

  let s = second();
  let mapval = map(s, 0, 60, 0, 360);
  strokeWeight(10);
  stroke(244, 67, 54);
  arc(0, 0, 300, 300, 360, mapval);
  push();
  rotate(mapval);
  line(0, 0, 90, 0);
  pop();

  let m = minute();
  let mapval2 = map(m, 0, 60, 0, 360);
  stroke(73, 175, 80);
  strokeWeight(10);
  arc(0, 0, 250, 250, 360, mapval2);
  push();
  rotate(mapval2);
  line(0, 0, 75, 0);
  pop();

  let h = hour();
  let mapval3 = map(h, 0, 60, 0, 360);
  stroke(33, 150, 243);
  strokeWeight(10);
  arc(0, 0, 200, 200, 360, mapval3);
  push();
  rotate(mapval3);
  line(0, 0, 60, 0);
  pop();
  noStroke();
  fill(255);
  ellipse(0, 0, 10, 10);
  rotate(90);
  stroke(255);
  noFill();
  strokeWeight(4);
  textSize(28);
  text("12", -15, -170);
  textSize(32);
  text("6", -15, 180);
  textSize(32);
  text("3", 170, 15);
  textSize(32);
  text("9", -180, 15);
}

function stop() {
  noLoop();
}
