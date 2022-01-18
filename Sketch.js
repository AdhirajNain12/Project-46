var player,playerImg,playerC
var jf,jfImg
var hf,hfImg
var back,backImg
var play,playImg,pause,pauseImg
var winSound
var up 
var down
var PLAY = 1
var END = 0
var gameState = PLAY
var score  = 0

function preload(){
	backImg = loadImage("jungle.jpg");
	playerImg = loadAnimation("a.png","b.png","c.png");
	playerC = loadAnimation("player_collided.png");
	jfImg = loadImage("jf-removebg-preview.png");
	hfImg = loadImage("hf-removebg-preview.png");
	playImg = loadImage("play.png");
	
}

function setup(){
	createCanvas(windowWidth,windowHeight);

	jfGroup = new Group();
	hfGroup = new Group();

	back = createSprite(0,0,windowWidth,windowHeight);
	back.scale = 3;
	back.addImage(backImg);
	back.velocityX = -2;

	player = createSprite(windowWidth-150,windowHeight-350,50,100);
	player.scale = 1.5;
	player.addAnimation("img",playerImg);
	player.addAnimation("change",playerC);

	jf = createSprite(windowWidth-850,windowHeight-450,35,35);
	jf.velocityY = 5;
	jf.visible = false;

	hf = createSprite(windowWidth-850,windowHeight-300,35,35);
	hf.velocityY = 5;
	hf.visible = false;
	
	play = createSprite(windowWidth-780,windowHeight-600,10,10);
	play.scale = 0.4;
	play.addImage(playImg);

	up = createSprite(windowWidth-750,windowHeight-0,2000,10)
	up.visible = false
	
	down = createSprite(windowWidth-750,windowHeight-850,2000,10);
	down.visible = false;
}

function draw(){
	
	background("#013C28");
	
	if(gameState === PLAY){
		play.visible = false
		
	if(frameCount%85 === 0){
		jf = createSprite(windowWidth-437,20,35,35)
		jf.x = random(50,windowWidth)
		jf.scale = 0.4
		jf.velocityY = 2
		jf.addImage(jfImg)
		jfGroup.add(jf)
		
	}