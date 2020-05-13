var r1 = 100;
var r2 = 100;
var m1 = 10; 
var m2 = 10;
var a1 = .1;
var a2 = 0;
var v1 = 0;
var v2 = 0;
var c1 = 0;
var c2 = 0;
var g = 1;


function setup() {
  createCanvas(600,600);
  frameRate(100);
}

function draw() {

  background(255);
  stroke(0);
  strokeWeight(2);

  translate(300,50);

  var x1 = r1 * sin(a1);
  var y1 = r1 * cos(a1);

  var x2 = r2 * sin(a2) + x1;
  var y2 = r2 * cos(a2) + y1;

  line(0, 0, x1, y1);
  fill(0);
  ellipse(x1, y1, m1, m1);
  
  line(x1, y1, x2, y2);
  fill(0);
  ellipse(x2, y2, m2, m2);

  var num1 = -g * (2*m1 + m2) * sin(a1);
  var num2 = -m2*g*sin(a1-2*a2);
  var num3 = -2*sin(a1-a2)*m2*(v2*v2*r2+v1*v1*r1*cos(a1-a2));
  var num4 = r1*(2*m1+m2-m2*cos(2*a1-2*a2));
  c1=(num1+num2+num3)/num4;

  var n1=2*sin(a1-a2)*(v1*v1*r1*(m1+m2)+g*(m1+m2)*cos(a1)+v2*v2*r2*m2*cos(a1-a2));
  var n2=r2*(2*m1+m2-m2*cos(2*a1-2*a2));
  c2=n1/n2;

  a1 += v1;
  a2 += v2;
  v1 += c1;
  v2 += c2;
}
