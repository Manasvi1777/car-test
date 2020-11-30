var car,wall,bg,bg_image;
var car_image1,car_image2,car_image3,car_image4,wall_image;
var speed,weight;

function preload() 
{
 car_image1= loadImage("car1(1).png");
 car_image2= loadImage("car2(1).png");
 car_image3= loadImage("car3(1).png");
 car_image4= loadImage("car4(1).png");

 wall_image= loadImage("wall.jpg");

 bg_image= loadImage("parking.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  background("lightblue");
  car=createSprite(0, 200, 50, 50);
  car.addImage(car_image1);
  car.addImage(car_image2);
  car.addImage(car_image3);
  car.debug=true;
 
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));

  wall=createSprite(windowWidth-1/20*windowWidth,windowHeight/2, 50, 80);
  wall.addImage(wall_image);
  wall.scale=2.7;
  wall.debug=true;

  car.velocityX=speed;
}

const newLocal = Fill("blue");
function draw() {
  background("lightblue");  

  if (isTouching(car,wall))
  {
    car.velocityX=0;
    var deformation = Math.round(0.5*weight*speed*speed/22509);
    textSize(40);
    text("deformation:"+deformation,width/2.9,height/3);

    if(deformation>180)
    {
      car.changeImage(car_image2);
      text("Lethal",width/2.5,height/2);
      textSize(80);
    }
    if(deformation<180&&deformation>100)
    {
      car.changeImage(car_image3);
      text("Average",width/2.5,height/2);
      textSize(80);
    }
    if(deformation<100)
    {
      car.changeImage(car_image4);
      textSize(80);
      text("Good",width/2.5,height/2);
     
    }
  }
  drawSprites();
}