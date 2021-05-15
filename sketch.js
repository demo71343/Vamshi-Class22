//Namespacing

const Engine =  Matter.Engine;
const World =  Matter.World;
const Bodies =  Matter.Bodies;


var engine, world;

var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;



  var option ={
    isStatic:true
  } 


  ground = Bodies.rectangle(400,380,800,15,option);

  console.log(ground);

  World.add(world,ground);

 
}

function draw() {
  background("black");  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 800,15);

}