const palette = ["db2763", "b0db43", "12eaea", "bce7fd", "c492b1"].map(
  (s) => `#${s}`
);

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background("black");

  const circlesArray: CircleData[] = calculatePackedCircles(
    width,
    height,
    10,
    20,
    10
  );

  for (const c of circlesArray) {
    drawCircle(c);
  }
}

function drawCircle(c: CircleData) {
  fill(random(palette));
  noStroke();
  circle(c.position.x, c.position.y, c.radius * 2);
}

function mousePressed() {
  redraw();
}
