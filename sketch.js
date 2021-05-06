const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  
 

  ground = new Ground(400,690,800,20);

  for(var i=0; i<=width; i = i+80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j=75; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j=50; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }

  for(var j=75; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 275));
  }

  for(var j=50; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 375));
  }
 
}

function draw() {
  rectMode(CENTER)
  background("black");  
  drawSprites();


  for(var n=0; n<divisions.lenght; n++){
    divisions[n].display();
  }

  if(frameCount %60 === 0){
    particles.push(new Particle( random(width/2-30, width/2+30),10,10));
  }

  for(var h=0; h<particles.lenght; h++){
    particles[h].display();
  }

  for(var j=0; j<plinkos.lenght; j++){
    plinkos[j].display();

    ground.display();
  }
}