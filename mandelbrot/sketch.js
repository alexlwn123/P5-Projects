let A = 2.5;
function setup() {
	createCanvas(600, 600);
  pixelDensity(1);
  sliderx = createSlider(-2.5,2.5,0, 0.001);
  slidery = createSlider(-2.5,2.5,0, 0.001);
  sliderr = createSlider(0,5,0,1);

}

function mouseWheel(event) {
  console.log(sliderx.value());
  console.log(slidery.value());
  A += event.delta/100/ pow(10,sliderr.value());
}

function draw() {
  loadPixels();
  var maxiters = 50;
  var X =  sliderx.value() -A;
  var X1 = sliderx.value()+A;
  var Y =  slidery.value()-A;
  var Y1 = slidery.value()+A;

  for (var x = 0; x < width; x++) {
    for (var y = 0; y < width; y++) {
      var a = map(x, 0, width,X,X1);
      var b = map(y, 0, width,Y,Y1);
     // var a = map(x, 0, width, minSlider.value(), maxSlider.value());
     // var b = map(y, 0, height, minSlider.value(), maxSlider.value());

      var ca = a;
      var cb = b;
      var n = 0;

      while (n < maxiters) {
        var aa = a*a - b*b;
        var bb = 2*a*b;
        a=aa+ca;
        b=bb+cb;

        if (abs(a+b) > 16) {
          break;
        }
        n++;
      }

      var bright = map(n, 0, maxiters, 0, 255);


      if (n == maxiters) bright = 0;


      var pix = (x + y*width) * 4;
      pixels[pix+0] = bright;
      pixels[pix+1] = bright;
      pixels[pix+2] = bright;
      pixels[pix+3] = 255;
    }
  }
  updatePixels();
}

