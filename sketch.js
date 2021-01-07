const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var polygon, polygonImg;
var chain;
var platform;
var score = 0;
function preload(){
    polygonImg = loadImage("polygon.png");

}


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    

    
    ground = new Ground(450,390,900,20);
    platform = new Ground(410, 310, 250, 10);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360, 275, 30, 40);
    box4 = new Box(390,275,30, 40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480, 275,30,40);
    box8 =  new Box(330,235,30, 40);
    box9 = new Box(360,235,30, 40);
    box10 = new Box(390,235,30, 40);
    box11 = new Box(420,235,30, 40);
    box12 = new Box(450,235,30, 40);
    box13 = new Box(360,195,30, 40);
    box14 = new Box(390,195,30, 40);
    box15 = new Box(420,195,30, 40);
    box16 = new Box(390,155,30, 40);

    polygon = Bodies.circle(50,200, 20);
    World.add(world, polygon);

    chain = new Slingshot(this.polygon, {x:100, y:200});
    

}

function draw(){
    background(56, 44, 44);
    Engine.update(engine);
    textSize(35);
    text("Score:" + score, width-300, 50);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
    chain.display();
    platform.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
    if(keyCode === 32){
    chain.attach(this.polygon);
    }
}