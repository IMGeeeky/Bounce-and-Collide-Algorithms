var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 100);
  rect1.velocityX = -2;
  rect2 = createSprite(300, 100, 100, 50);
  rect3 = createSprite(200, 100, 50, 100);
  rect4 = createSprite(100, 100, 100, 50);

  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
}

function draw() {
  background(0,0,0); 
  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

if(collide(rect2, rect4)){
  rect4.shapeColor = "red";
  rect2.shapeColor = "red";
}else{
  rect4.shapeColor = "green";
rect2.shapeColor = "green";
}
  
bounce(rect2, rect1);

  drawSprites();
}
