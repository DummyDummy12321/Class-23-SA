const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var engine, world;
var ground;
var box1,box2;

function setup()
{
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var prop = 
    {
        isStatic : true
    }
    ground = Bodies.rectangle(200,390,400,20, prop);
    World.add(world, ground);

    box1 = new Box(200,100,60,80);
    box2 = new Box(300,100,80,60);
 
}

function draw()
{
    background(0);
    Engine.update(engine);

    rectMode(CENTER);

    fill("green");
    rect(ground.position.x, ground.position.y, 400,20);

    box1.display();
    box2.display();


    
}