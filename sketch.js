var golfBall;
var golfBackground;
var golfGrass;
var engine;
var world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  	golfBall = loadImage("./Assets/ball.png")
    golfBackground = loadImage("./Assets/golfbackground-removebg-preview (1).png")
	golfGrass = loadImage("./Assets/golfgrass.jpg")
}

function setup() {
	canvas = createCanvas(800, 700);
    engine = Engine.create();
	world = engine.World;

	angleMode(DEGREES);
	angle = 15;

	ground = Bodies.rectangle(0, height - 1, width*2, 1, { isStatic: true});
	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  image(golfBackground,-100,0,1000,700);
  
  drawSprites();
 
}

display()
{
	console.log(this.angle)
	if (keyIsDown(RIGHT_ARROW)){
		this.angle +=1;
	}

	if (keyIsDown(LEFT_ARROW)) {
		this.angle -= 1;
	}
	var pos = this.body.position;
	push();
	rotate(this.angle);
	imageMode(CENTER);
	image(this.image, pos.x, pos.y, this.r, this,r);
	pop();
}

golfBall.display();

