let values = [];
let Algs = ["bubbleSort", "selectionSort"];
let currentAlg = "Please Select an Algorithm";
let completed = false;
let currLine;
let i = 0;
let j = 0;

function setup() {
	createCanvas(600, 400);
  values = new Array(width/2);
  for (var i = 0; i < width/2; i++){ 
    values[i] = random(height);
  }
}

function selectionSort() {
  if (i === values.length) {
    finished();
    return;
  }
  let minind = -1;
  for (let j = values.length-1; j >= i; j--) {
    if (minind === -1 || values[j] > values[minind]) {
      minind = j;
    }
  }
  currLine = i; 
  let temp = values[minind];
  values[minind] = values[i];
  values[i] = temp;
  i++;

}


function bubbleSort() {
  if (i === values.length) {
    finished(); 
    return;
  }
  for (let j = 0; j < values.length-i-1; j++) {
    currLine = j
    if (values[j] < values[j+1]) {
      let temp = values[j];
      values[j] = values[j+1];
      values[j+1] = temp;
    }
  }
  i++;
}

function finished(){
  colorMode(RGB, 255);
  drawLines(color(127,255,0));
  i=0;
  noLoop();
}

function update() {
  if (currentAlg === "bubbleSort") bubbleSort();
  if (currentAlg === "selectionSort") selectionSort();
}

function resetBoard() {
  loop();
  for (let i = 0; i < width/2; i++){ 
    values[i] = random(height);
  }
  i = 0;
  noLoop();

}



function setAlg(nextAlg){
  console.log(nextAlg);
  if (!Algs.includes(nextAlg)) {
    console.log("ERROR, Does not support " + nextAlg);
  } else {
    resetBoard();
    currentAlg = nextAlg;
    loop();
    update();
  }
}

function navBar() {
  stroke(200);
  let res = createButton("Reset");
  res.size(50,50);
  res.position(50, height-50, 200);
  res.mousePressed(resetBoard);

  let stop = createButton("Stop");
  stop.size(50,50);
  stop.position(100, height-50, 200);
  stop.mousePressed(noLoop);

  let start = createButton("Start");
  start.size(50,50);
  start.position(150, height-50, 200);
  start.mousePressed(loop);

  let bubble = createButton("bubbleSort");
  bubble.size(100,50);
  bubble.position(200, height-50, 200);
  bubble.mousePressed(() => {
    currentAlg = "bubbleSort";
    resetBoard();
  });

  let quick = createButton("selectionSort");
  quick.size(100,50);
  quick.position(300, height-50, 200);
  quick.mousePressed(() => {
    currentAlg = "selectionSort";
    resetBoard();
  });

}

function draw() {
  navBar();
  background(0);
  update();
  drawLines();
  fill(200);
  stroke(0);
  textSize(16);
  text(currentAlg, width-100, 30, 90, 50);
}

function drawLines(color=255) { 
  stroke(color);
  for (let i = 0; i < values.length; i++) {
    if (abs(i-currLine) <=0 ) stroke(100);
    line(2*i, height, 2*i, height - values[i]);
    if (abs(i-currLine) <=0 ) stroke(color);
  }
}




