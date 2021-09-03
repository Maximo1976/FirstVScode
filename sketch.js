
function setup() {
  createCanvas(400,400);
  var box = createSprite(200,200,13,13);
}

function draw() 
{
  background("red");

if (keyIsDown(RIGHT_ARROW)){
  box.postion.x = box.postion.x+1;

}
if (keyIsDown(LEFT_ARROW)){
  box.postion.x = box.postion.x-1;

}
if (keyIsDown(UP_ARROW)){
  box.postion.y = box.postion.y-1;

}
if (keyIsDown(DOWN_ARROW)){
  box.postion.y = box.postion.y+1;

}

drawSprites();
}




