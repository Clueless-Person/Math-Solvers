var x =.05;
var z = .05;
var s = 1;
createCamera()
function setup() {
  createCanvas(800, 600, WEBGL);
  background(100, 200, 100);
  translate(width / 2,height/2, 100)
  noStroke()

}

function draw() {
  x += .05
  z += .05
  rotateX(x)
  rotateZ(z)
  sphere(100)
  }
