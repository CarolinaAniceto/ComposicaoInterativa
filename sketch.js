let corPerto;
let corMedio;
let corLonge;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  cores();  
}

function cores() {
  corPerto = color(random(80, 255), random(80, 255), random(80, 255));
  corMedio = color(random(80, 255), random(80, 255), random(80, 255));
  corLonge = color(random(80, 255), random(80, 255), random(80, 255));
}

function mousePressed() {
  cores();   
}

function mouseReleased() {
  cores(); 
}

function draw() {
  background(20);

  const espaco = 40;

  for (let x = espaco / 2; x < width; x += espaco) { 
    for (let y = espaco / 2; y < height; y += espaco) {

      const d = dist(mouseX, mouseY, x, y);

      if (d < 100) {
        fill(corPerto);
        circle(x, y, 34);
      } else if (d < 220) {
        fill(corMedio);
        circle(x, y, 22);
      } else {
        fill(corLonge);
        circle(x, y, 8);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
