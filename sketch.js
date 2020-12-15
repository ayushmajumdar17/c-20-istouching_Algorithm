var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

}

function draw() {
  background(255,255,255);  
   movingRect.x = mouseX;
   movingRect.y = mouseY;

  if (Math.abs(movingRect.x-fixedRect.x) < fixedRect.width/2 + movingRect.width/2 && Math.abs(movingRect.y-fixedRect.y) < fixedRect.height/2 + movingRect.height/2) {
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  } else { 
   fixedRect.shapeColor = "green";
   movingRect.shapeColor = "green";

  }

    drawSprites();
}