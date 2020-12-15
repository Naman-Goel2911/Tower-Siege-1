const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var base1, base2;
var polygon, rope;
var ground;

function setup()
{
    var canvas = createCanvas(1500, 700);

    engine = Engine.create();
    world = engine.world;

    block1 = new Box(1030, 235, 30, 40, "box.png");
    block2 = new Box(1060, 235, 30, 40, "bluebox.png");
    block3 = new Box(1090, 235, 30, 40, "greenbox.png");
    block4 = new Box(1120, 235, 30, 40, "bluebox.png");
    block5 = new Box(1150, 235, 30, 40, "box.png");

    block6 = new Box(1060, 195, 30, 40, "greenbox.png");
    block7 = new Box(1090, 195, 30, 40, "bluebox.png");
    block8 = new Box(1120, 195, 30, 40, "greenbox.png");

    block9 = new Box(1090, 155, 30, 40, "box.png");

    b1 = new Box(510, 575, 30, 40, "box.png");
    b2 = new Box(540, 575, 30, 40, "greenbox.png");
    b3 = new Box(570, 575, 30, 40, "bluebox.png");
    b4 = new Box(600, 575, 30, 40, "box.png");
    b5 = new Box(630, 575, 30, 40, "bluebox.png");
    b6 = new Box(660, 575, 30, 40, "greenbox.png");
    b7 = new Box(690, 575, 30, 40, "box.png");

    b8 = new Box(540, 535, 30, 40, "box.png");
    b9 = new Box(570, 535, 30, 40, "greenbox.png");
    b10 = new Box(600, 535, 30, 40, "bluebox.png");
    b11 = new Box(630, 535, 30, 40, "greenbox.png");
    b12 = new Box(660, 535, 30, 40, "box.png");

    b13 = new Box(570, 495, 30, 40, "box.png");
    b14 = new Box(600, 495, 30, 40, "greenbox.png");
    b15 = new Box(630, 495, 30, 40, "box.png");

    b16 = new Box(600, 455, 30, 40, "box.png");

    base1 = new Ground(1090, 265, 200, 10);
    base2 = new Ground(600, 600, 260, 10);

    polygon = new Polygon(200, 550, 20);

    rope = new SlingShot(polygon.body, {x: 200, y: 550});

    ground = new Ground(750, 690, 1500, 20);
}

function draw()
{
    background(0);

    Engine.update(engine);

    ground.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    b10.display();

    b16.display();
    b15.display();
    b14.display();
    b13.display();
    b12.display();
    b11.display();
    b10.display();
    b9.display();
    b8.display();
    b7.display();
    b6.display();
    b5.display();
    b4.display();
    b3.display();
    b2.display();
    b1.display();

    rope.display();
    polygon.display();

    base1.display();
    base2.display();

}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
    rope.fly();
}