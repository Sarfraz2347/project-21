var car, wall, speed, weight, thickness;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
bullet = createSprite (100, 100, 20, 10);
wall = createSprite (700, 100, 30, 80);
speed = random(223,321);
weight = random (30,52);
bullet.velocityX=speed
thickness = random(22,83);
}

function draw() {
  background('white');  
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    bullet.x = wall.x
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
      text (deformation, 100,100);
      if (deformation>10)
      {
          wall.shapeColor = color(255,0,0);
      }
      
      if (deformation<10)
      {
          wall.shapeColor=color(0,255,0);
      }
  }
  
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletEdge = bullet.x + bullet.width
  wallEdge = wall.x 
  if (bulletEdge>wallEdge)
  {
    return true;
  }
  return false;
}