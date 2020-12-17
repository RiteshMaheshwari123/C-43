var player,player_img
var background_img

function preload(){
    background_img = loadImage("images/map-image.png");
    player_img = loadImage("images/player.png");
}

function setup(){
    createCanvas(1000,1000);
    player = createSprite(200,200,50,50);
    player.addImage("player",player_img);
    player.scale = 0.05;

}

function draw(){
    image(background_img,0,0,5000,5000);
    drawSprites();
}