
var score = 0;

var floor;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
var terminator1, terminator2, terminator3, terminator4, terminator5, terminator6, terminator7
var character;
var final;

var stand, terminator, innerSquare;

var gameState;
var current;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);

    stroke("white");

    stand = new Group();
    terminator = new Group();
    innerSquare = new Group();

    stand1 = createSprite(1200,350,40,40);
    stand2 = createSprite(2200,350,40,40);
    stand3 = createSprite(2365, 330, 40, 80);
    stand4 = createSprite(2530, 310, 40, 120);
    stand5 = createSprite(2640, 350, 40, 40);
    stand6 = createSprite(2805, 350, 40, 40);
    stand7 = createSprite(3470, 330, 1000, 80);

    terminator1 = createSprite(1180, 350, 1, 30);
    terminator2 = createSprite(2180, 350, 1, 30);
    terminator3 = createSprite(2345, 330, 1, 70);
    terminator4 = createSprite(2510, 310, 1, 110);
    terminator5 = createSprite(2620, 350, 1, 30);
    terminator6 = createSprite(2785, 350, 1, 30);
    terminator7 = createSprite(2970, 330, 1, 70);

    in1 = createSprite(1200,350,38,38);
    in2 = createSprite(2200,350,38,38);
    in3 = createSprite(2365, 330, 38, 78);
    in4 = createSprite(2530, 310, 38, 118);
    in5 = createSprite(2640, 350, 38, 38);
    in6 = createSprite(2805, 350, 38, 38);
    in7 = createSprite(3470, 330, 998, 78);

    stand.add(stand1);
    stand.add(stand2);
    stand.add(stand3);
    stand.add(stand4);
    stand.add(stand5);
    stand.add(stand6);
    stand.add(stand7);

    terminator.add(terminator1);
    terminator.add(terminator2);
    terminator.add(terminator3);
    terminator.add(terminator4);
    terminator.add(terminator5);
    terminator.add(terminator6);
    terminator.add(terminator7);

    innerSquare.add(in1);
    innerSquare.add(in2);
    innerSquare.add(in3);
    innerSquare.add(in4);
    innerSquare.add(in5);
    innerSquare.add(in6);
    innerSquare.add(in7);

    character = createSprite(200, 350, 40, 40);
    floor = createSprite(600,395,1200,50);
    final = createSprite(3970, 200, 1, 400);

    character.shapeColor = "white";

    stand1.shapeColor = "white";
    stand2.shapeColor = "white";
    stand3.shapeColor = "white";
    stand4.shapeColor = "white";
    stand5.shapeColor = "white";
    stand6.shapeColor = "white";
    stand7.shapeColor = "white";

    in1.shapeColor = "black";
    in2.shapeColor = "black";
    in3.shapeColor = "black";
    in4.shapeColor = "black";
    in5.shapeColor = "black";
    in6.shapeColor = "black";
    in7.shapeColor = "black";

    floor.shapeColor = "rgb(79, 60, 42)";
}

function draw(){
    background("black");
    textSize(35);
    fill("white");
   
    fill("rgb(245,243,206)");
    noStroke();
    ellipse(600, -800, 2000, 2000);
    fill("rgb(237, 233, 164)");
    ellipse(150, 25, 80, 80);
    ellipse(1050, 55, 40, 40);
    ellipse(460, 130, 90, 90);
    ellipse(710, 75, 50, 50);
    ellipse(890, 15, 120, 120);
    ellipse(270, 50, 40, 40);
    ellipse(570, 10, 90, 90);

    fill("rgb(249, 215, 28)")
    ellipse(1161, 169, 10, 10);
    ellipse(493, 392, 10, 10);
    ellipse(819, 344, 10, 10);
    ellipse(364, 325, 10, 10);
    ellipse(227, 385, 10, 10);
    ellipse(501, 387, 10, 10);
    ellipse(1077, 220, 10, 10);
    ellipse(216, 312, 10, 10);
    ellipse(893, 185, 10, 10);
    ellipse(1059, 233, 10, 10);
    ellipse(328, 157, 10, 10);
    ellipse(890, 214, 10, 10);
    ellipse(548, 299, 10, 10);
    ellipse(1018, 172, 10, 10);
    ellipse(245, 385, 10, 10);
    ellipse(14, 17, 10, 10);
    ellipse(477, 184, 10, 10);
    ellipse(152, 170, 10, 10);
    ellipse(55, 123, 10, 10);
    ellipse(177, 293, 10, 10);
    ellipse(169, 589, 10, 10);

    stand.setVelocityXEach(-5);

    terminator.setVelocityXEach(-5);

    innerSquare.setVelocityXEach(-5);

    final.velocityX = -5;

    character.velocityY = character.velocityY + 0.8
    character.velocityX = 0;

    if(keyDown(UP_ARROW)){
        if(stand.isTouching(character)){
            gameState = "jump";
        } 
        if(floor.isTouching(character)){
            gameState = "jump";
        }
    }

    if(!keyDown(UP_ARROW)){
        current = World.frameCount;
        gameState = "normal";
    }

    if(gameState === "jump"){
        if(World.frameCount - current <= 3){
            character.velocityY = -12;
        } else if(stand.isTouching(character)){
            current = World.frameCount;
            gameState = "jump";
        } else if(floor.isTouching(character)){
            current = World.frameCount;
            gameState = "jump";
        }
    }

    if(character.isTouching(terminator)){
        character.x = 200;

        stand1.x = 1200;
        stand2.x = 2200;
        stand3.x = 2365;
        stand4.x = 2530;
        stand5.x = 2640;
        stand6.x = 2805;
        stand7.x = 3470;

        terminator1.x = 1180;
        terminator2.x = 2180;
        terminator3.x = 2345;
        terminator4.x = 2510;
        terminator5.x = 2620;
        terminator6.x = 2785;
        terminator7.x = 2970;

        in1.x = 1200;
        in2.x = 2200;
        in3.x = 2365;
        in4.x = 2530;
        in5.x = 2640;
        in6.x = 2805;
        in7.x = 3470;

        final.x = 3970;
    }

    character.collide(floor);

    character.collide(stand);

    drawSprites();
    final.visible = false;

    if(character.isTouching(final)){
        terminator.destroyEach();
        stand.destroyEach();
        innerSquare.destroyEach();
        final.velocityX = 0;
        character.velocityY = 0;
        fill("rgb(57, 255, 20)");
        text("CONGRATULATIONS!", 400, 300);
        character.visible = false;
    }
}
