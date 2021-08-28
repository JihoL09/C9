var codI;
function setup() {
  createCanvas(400,400);
  codI = createSprite(100,20,100,100);
}

function draw() 
{
  background("black");
  drawSprites();
  if(keyDown("right")){
    codI.x = codI.x + 5;
  }
  if(keyDown("left")){
    codI.x = codI.x - 5;
  }
}




