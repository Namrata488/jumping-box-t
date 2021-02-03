var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = _________;

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = ___________;

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = ___________;

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = ___________;

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = ___________;
    ball.velocityX = ___;
    ball.velocityY = ___;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(_______);

    if(block1.isTouching(ball) && ball.bounceOff(______)){
        ball.shapeColor = ____________;
        //DO:-play the music
        ____________;
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = _____________;

        //DO:- give zero velocity to ball
        ball.velocityX = __;
        ball.velocityY = __;

        //DO:- stop the music
        ____________;
    }

    if(block3.isTouching(ball) && ball.bounceOff(______)){
        ball.shapeColor = __________;
    }

    if(block4.isTouching(ball) && ball.bounceOff(_______)){
        ball.shapeColor = ____________;
    }

    drawSprites();
}
