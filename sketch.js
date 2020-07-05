const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot;
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    pig1 = new Pig(400,500);

    box1 = new Box(700,310);
    box2 = new Box(770,310);
    box3 = new Box(840,310);
    box4 = new Box(910,310);
    box5 = new Box(630,310);
    box6 = new Box(665,240);
    box7 = new Box(735,240);
    box8 = new Box(805,240);
    box9 = new Box(875,240);
    box10 = new Box(700,170);
    box11 = new Box(770,170);
    box12 = new Box(840,170);
    box13 = new Box(735,100);
    box14 = new Box(805,100);
    box15 = new Box(770,30);
    bird= new Bird(200,50);

    
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    
    rectMode(CENTER);
    background(backgroundImg);
    Engine.update(engine);
    
    text("SCORE:"+ score,850,40);
    
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    ground.display();
    bird.display();
    platform.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode = 32){
        slingshot.attach(bird.body)

    }
}
