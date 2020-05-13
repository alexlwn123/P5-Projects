var scl = 10;

function setup() {
  createCanvas(400, 400);
  s = new Snake();
  frameRate(10);
  pickLoc();
}

function pickLoc() {
  var x;
  var y;
  do {
    x = random(width);
    x = x - (x % scl);
    y = random(height);
    y = y - (y % scl);
  } while (s.tail.includes(createVector(x, y)))

  food = createVector(x,y);
}


function draw() {
  background(51);
  s.update();
  s.show();
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  textAlign(LEFT);
  fill(255);
  text("Score: " + str(s.score), 4*width / 5, 30);
  text("High Score: " + str(s.hscore), 4*width / 5, 50);
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0,1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1,0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1,0);
  }

}

function Snake() {
  this.hscore = 0;
  this.x = 0;
  this.y = 0;
  this.vx = 1; 
  this.vy = 0;
  this.score = 0;
  this.tail = [];

  this.dir = (x,y) => {
    this.vx = x;
    this.vy = y;
  }

  this.checkIn = (x, y) => {
    for (var i = 1; i < this.tail.length; i++) {
      if (this.tail[i].equals(x, y)) {
        return true;
      }
    }
    return false;
  }

  this.update = () => {
    this.tail.push(createVector(this.x, this.y));
    this.x = this.x + this.vx * scl;
    this.y = this.y + this.vy * scl;

    if (this.x === food.x && this.y === food.y) {
      this.score += 1;
      pickLoc();
    } else {
      this.tail.shift();
    }

    if ((this.x != constrain(this.x, 0, width - scl)
      || this.y != constrain(this.y, 0, height - scl))
      || this.checkIn(this.x, this.y)
    ) {
      this.tail = [];
      this.x = 0;
      this.y = 0;
      this.hscore = max(this.score, this.hscore) ;
      this.score = 0;
      this.vx = 1;
      this.vy = 0;
      pickLoc();
    }
  }

  this.show = () => {
    fill(255);
    rect(this.x, this.y, 10, 10);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, 10, 10);
    }
  }


}
