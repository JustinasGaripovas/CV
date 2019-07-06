var particles = [];
var boundSystem = new Boundry();
var distance=0;
const rangeLimit = 100;
var canvas;
var globalIndex = 0;
var entityLimit = 300;
var colors = [];

function setup() {
  colors = [color(56,47,145,45),color(38,99,188,45),color(41,171,226,45)];
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.background(0,0,0,255);
  canvas.position(0, 0);
  canvas.id('canvas');
  frameRate(40);
  for (let i = 0; i < 125; i++) {
    particles[i] = new Particle(random(1,360),null);
  }
}

function windowResized() {
 resizeCanvas(windowWidth, height);
}

function mouseClicked() {
  particles.push(new Particle(random(1,360),{mouseX,mouseY}));
  // prevent default
  return false;
}

function draw() {
  background(0);
  strokeWeight(3);
  for (let i = 0; i < particles.length; i++) {
    boundSystem.checkBounds(particles[i]);
    particles[i].update();
    particles[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Particle {
  constructor(angle, pos) {
    this.color = colors[round(random(0,2))];

    if(pos == null){
      this.pos = createVector(random(0,width), random(0,height))
    }else{
      this.pos = createVector(mouseX, mouseY);
    }

    this.connectionCount = 0;

    this.index = globalIndex++;

    this.angle = p5.Vector.fromAngle(angle).normalize();
    this.size = random(0,1);
  }

  update(){
      for (let i = 0; i < particles.length; i++) {

      distance = particles[i].pos.dist(this.pos);

      if(distance < rangeLimit && particles[i].index != this.index && distance != null)
      {
        stroke(this.color);
        line(particles[i].pos.x, particles[i].pos.y, this.pos.x, this.pos.y);
      }
    }

    this.pos = p5.Vector.add(this.pos, this.angle);

}

  show() {
    strokeWeight(3);
    stroke(this.color);
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  setAngle(angle)
  {
    this.angle = angle;
  }
}
