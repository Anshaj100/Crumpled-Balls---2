
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20)
    dustbin1=new Dustbin(650,660,150,20);
	dustbin2=new Dustbin(570,600,20,150);
	dustbin3=new Dustbin(720,600,20,150);
	paper = new Paper (50,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	paper.display();
  drawSprites();
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-450})
	}
}


