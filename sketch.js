const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundimg;
var maxSnow=100;
var snowfall=[];

function preload() {
  backgroundImg = loadImage("snow1.jpg");
}


function setup() {
  createCanvas(600,800);
  //createSprite(400, 200, 50, 50);

 engine = Engine.create();
 world = engine.world;

 for(var i=0; i<maxSnow; i++){
  snowfall.push(new Snow(random(0,600) , random(0,600)));
}


}

function draw() {
  Engine.update(engine);

  background(backgroundImg);  

  for(var i=0; i<maxSnow; i++){
    snowfall[i].display();
    snowfall[i].update();
}

  drawSprites();
}