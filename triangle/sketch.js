var rot = 0;
function setup() {
	createCanvas(800, 800);
  slider_len = createSlider(0, 2000, 100, 1);
  var ang = 60;
}

function draw() {
  var len = slider_len.value();
  rot += 0.01;
  background(50);
  stroke(255);
  strokeWeight(1);
  fill(50);
  translate(width/3, 2*height/3);
  rotate(rot);
  tri(len);
}

function tri(len) {
  triangle(0,0,len/2,-sqrt(3)/2*len, len, 0);
  if (len < 10) return;
  tri(len/2);
  push();
  translate(len/2,0);
  tri(len/2);
  pop();
  push();
  translate(len/4, -sqrt(3)/4*len);
  tri(len/2);
  pop();

}
