const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisons = [];

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);
  rectMode(CENTER);

  for (let k = 0; k <= width; k += 80) {
    divisons.push(new Divison(k));
  }

  ground = new Ground(240,795);

  for (var j = 40; j <= width; j += 50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <= width; j += 50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 40; j <= width; j += 50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 15; j <= width; j += 50) {
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  Engine.update(engine);
  background("black");

  rectMode(CENTER);
  ground.display();

  for (let j = 0; j < divisons.length; j++) {
    divisons[j].display();
  }

  for (let k = 0; k < plinkos.length; k++) {
    plinkos[k].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for (let j = 0; j < particles.length; j++) {
    particles[j].display();
  } 
}