var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  var balloonPosition = database.ref('balloon/height');
  balloonPosition.on("value",readHeight)

  balloon.scale - 0.1

  
  if(keyDown(LEFT_ARROW)){
   balloon.addAnimation("hotAirBalloon",balloonImage2);
   updateHeight(-10,0)
   
    
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(10,0)
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,-10)
    balloon.scale = balloon.scale-0.01
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0, 10)
    balloon.scale = balloon.scale+0.01
  }

  drawSprites();
  fill("black");
  stroke("black");
  text("X position of Balloon:"+ height.x,10,30)
  text("Height of Balloon:"+ height.y,10,60)

}


function updateHeight(x,y){
database.ref('balloon/height').set({

  'x': height.x + x,
  'y': height.y + y


})

}



function readHeight(data){

height = data.val();
balloon.x = height.x
balloon.y = height.y


}