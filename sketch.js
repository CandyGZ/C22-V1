const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    //3. dale un atributo a la pelota

    //se crea el suelo
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    //1. crea la pelota con Bodies

}

function draw(){
    background("#00C5FA");
    Engine.update(engine);
    fill("#FAA300");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    
    //2. dibuja la pelota con una elipse (ellipse)"
    
}