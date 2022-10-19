
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ball_options;
var groundObj, leftSide, rightSide;
function toss(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:1});
}


function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	groundObj= new Ground(width/2,470,width,20);
	leftSide= new Ground(1100,400,20,120);
	rightSide= new Ground(1150,400,20,120);

	Engine.run(engine);
	
	ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(100,400,10,ball_options);
	World.add(world,ball);
}


function draw() {
  rectMode(CENTER);
  console.log(ball.position.y);
  console.log(ball.position.x);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
  ellipse(ball.position.x,ball.position.y,10);

  if(keyDown("UP_ARROW")){
	toss();
  }
 
}



