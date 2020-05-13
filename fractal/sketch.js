function setup() {
	createCanvas(800, 800);
  slider_ang = createSlider(0, TWO_PI, PI/4, 0.1);
  slider_len = createSlider(0, 400, 100, 0.1);
  slider_factor = createSlider(0, 0.7, 1/2, 0.05);
  
}

function draw() {
  background(51);
  var len = slider_len.value();
  var angle = slider_ang.value();
  var factor = slider_factor.value();
  stroke(255);
  translate(width/2, height);

  branch(len, angle, factor);
}

function branch(len, angle, factor)  {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len < 5) return;
  push();
  rotate(angle);
  branch(len*factor, angle, factor);
  pop();
  push();
  rotate(-angle);
  branch(len*factor, -angle, factor);
  pop();

  } 
