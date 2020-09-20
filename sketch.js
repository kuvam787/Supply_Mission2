var helicopterIMG, helicopterSprite, packageSprite,packageIMG,WALL1,WALL2,BASEWALLL;
var packageBody,ground,WALL1BODY,WALL2BODY,BASEWALLBODY;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 200,5);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

   WALL1 = createSprite(300,610,20,100)
   WALL1.shapeColor=color("red");

   WALL2 = createSprite(500,610,20,100)
   WALL2.shapeColor=color("red");

  BASEWALLL  = createSprite(width/2,650,200,20)
BASEWALLL.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.9, isStatic:true});
	World.add(world, packageBody);
	
	BASEWALLBODY = Bodies.rectangle(width/2,650,200,20, {isStatic:true} );
	World.add(world, BASEWALLBODY);

	WALL1BODY = Bodies.rectangle(300,610,20,100, {isStatic:true} );
	World.add(world,WALL1BODY);

	WALL2BODY = Bodies.rectangle(500,610,20,100, {isStatic:true} );
	World.add(world,WALL2BODY);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false)
}
}
