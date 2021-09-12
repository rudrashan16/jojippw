var maze, maze1;

function preload() {
boyImage=loadImage("infected_human.png");
slug1=loadImage("Slug.png");
slug2=loadImage("goul1.png")
smileImage=loadImage("smile.png");
injectionImage=loadImage("injection.png")

 }

function setup() {
  createCanvas(500,500);

  var boy = createSprite(480,25,30,30);
  boy.addImage("boy",boyImage);
  boy.scale=0.1;

  var injection = createSprite(35,190,30,30);
  injection.addImage("injection",injectionImage);
  injection.scale=0.18;

  var monster1 =createSprite(390,450,40,40);
monster1.addImage("slug",slug1);
monster1.scale =0.3;

var monster =createSprite(160,65,40,40);
monster.addImage("monster",slug2);
monster.scale =0.1;

  var maze=createSprite(250,3,500,5) 
  maze.shapeColor=("brown");

  var maze1=createSprite(495,277,5,450) 
  maze1.shapeColor=("brown");

  var maze2=createSprite(472,51,50,5) 
  maze2.shapeColor=("brown");
  
  var maze3=createSprite(390,50,5,90) 
  maze3.shapeColor=("brown");

  var maze4=createSprite(413,95,50,5) 
  maze4.shapeColor=("brown");

  var maze5=createSprite(437,113,5,40) 
  maze5.shapeColor=("brown");

  var maze6=createSprite(465,180,60,5) 
  maze6.shapeColor=("brown");

  var maze7=createSprite(470,250,50,5) 
  maze7.shapeColor=("brown");

  var maze7=createSprite(470,310,100,5) 
  maze7.shapeColor=("brown");

  var maze7=createSprite(435,355,5,95) 
  maze7.shapeColor=("brown");

  var maze8=createSprite(375,370,5,65) 
  maze8.shapeColor=("brown");

  var maze9=createSprite(415,400,80,5) 
  maze9.shapeColor=("brown");

  var maze10=createSprite(245,498,500,5) 
  maze10.shapeColor=("brown");

  var maze11=createSprite(460,440,65,5) 
  maze11.shapeColor=("brown");

  var maze12=createSprite(455,490,5,70) 
  maze12.shapeColor=("brown");

  var maze13=createSprite(365,50,50,5) 
  maze13.shapeColor=("brown");

  var maze14=createSprite(340,150,40,5) 
  maze14.shapeColor=("brown");

  var maze15=createSprite(387,167,5,40) 
  maze15.shapeColor=("brown");

  var maze16=createSprite(375,185,30,5) 
  maze16.shapeColor=("brown");

  var maze17=createSprite(390,233,5,100) 
  maze17.shapeColor=("brown");

  var maze18=createSprite(377,281,30,5) 
  maze18.shapeColor=("brown");

  var maze19=createSprite(360,267,5,30) 
  maze19.shapeColor=("brown");

  var maze20=createSprite(335,252,50,5) 
  maze20.shapeColor=("brown");

  var maze21=createSprite(307,262,5,70) 
  maze21.shapeColor=("brown");

  var maze22=createSprite(285,297,50,5) 
  maze22.shapeColor=("brown");

  var maze23=createSprite(273,40,80,5) 
  maze23.shapeColor=("brown");

  var maze24=createSprite(309,10,5,60) 
  maze24.shapeColor=("brown");

  var maze25=createSprite(279,115,5,150) 
  maze25.shapeColor=("brown");

  var maze26=createSprite(297,190,120,5) 
  maze26.shapeColor=("brown");

  var maze27=createSprite(354,203,5,30) 
  maze27.shapeColor=("brown");

  var maze28=createSprite(239,223,5,70) 
  maze28.shapeColor=("brown");

  var maze29=createSprite(200,223,80,5); 
  maze29.shapeColor=("brown");

  var maze30=createSprite(160,270,5,100); 
  maze30.shapeColor=("brown");

  var maze31=createSprite(5,360,5,280); 
  maze31.shapeColor=("brown");

  var maze32=createSprite(5,0,5,300); 
  maze32.shapeColor=("brown");

  var maze33=createSprite(50,220,80,5); 
  maze33.shapeColor=("brown");

  var maze33=createSprite(40,150,80,5); 
  maze33.shapeColor=("brown");


  var maze34=createSprite(50,90,5,120); 
  maze34.shapeColor=("brown");

  var maze35=createSprite(87,90,70,5); 
  maze35.shapeColor=("brown");

  var maze36=createSprite(120,90,5,120); 
  maze36.shapeColor=("brown");

  var maze37=createSprite(230,90,120,5); 
  maze37.shapeColor=("brown");

  var maze38=createSprite(90,244,5,50); 
  maze38.shapeColor=("brown");

  var maze39=createSprite(100,445,5,100); 
  maze39.shapeColor=("brown");

  var maze40=createSprite(100,395,100,5); 
  maze40.shapeColor=("brown");
  
  var maze41=createSprite(100,370,5,50); 
  maze41.shapeColor=("brown");

  var maze42=createSprite(250,425,5,150); 
  maze42.shapeColor=("brown");

  var maze44=createSprite(250,425,200,5); 
  maze44.shapeColor=("brown");

  var maze45=createSprite(30,455,50,5); 
  maze45.shapeColor=("brown");

  var maze46=createSprite(30,320,50,5); 
  maze46.shapeColor=("brown");

  var maze47=createSprite(55,320,5,70); 
  maze47.shapeColor=("brown");

  var maze48=createSprite(170,450,5,100); 
  maze48.shapeColor=("brown");

  var maze49=createSprite(340,450,5,100); 
  maze49.shapeColor=("brown");

  var maze50=createSprite(250,350,100,5); 
  maze50.shapeColor=("brown");

  var maze51=createSprite(200,150,5,50); 
  maze51.shapeColor=("brown");

  var maze52=createSprite(200,150,50,5); 
  maze52.shapeColor=("brown");



}

function draw() {
  background("lightblue");
  if (keyDown(RIGHT_ARROW)) {
    boyImage.x =boyImage.x+5;
    
    }

    if (keyDown(LEFT_ARROW)) {
      boyImage.x =boyImage.x-5;
      
      }

      if (keyDown(UP_ARROW)) {
        boyImage.x =boyImage.x-5;
        
        }

        if (keyDown(DOWN_ARROW)) {
          boyImage.x =boyImage.x+5;
          
          }

  drawSprites();
}