
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var rock;

function preload(){
	boy=loadImage("images/boy.png");
	rock=loadImage("image/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1150,120,30);
	mango2=new mango(1000,150,35);
	mango3=new mango(1105,130,40);
	mango4=new mango(1180,190,30);
    mango5=new mango(900,250,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
 
  image(boy ,200,370,200,300);
  image(rock,200,350,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
}
