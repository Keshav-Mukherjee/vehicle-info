var ALH
var DHTON
var gypsy
var armyMan
var list 

function preload(){
ALHImage = loadImage("alh.jpg")
DHTONImage = loadImage("images.jpeg")
gypsyImage = loadImage("download.jpeg")
camoImage = loadImage("camo.jpeg")
armyImage = loadImage("armyman.jpeg")
listImages = loadImage("list.png")
}

function setup() {
createCanvas(windowWidth,windowHeight);
background(camoImage)

ALH = createSprite(200,180,150,100)
ALH.addImage("ALH",ALHImage)
ALH.scale = 0.3

DHTON = createSprite(600,180,150,100)
DHTON.addImage("DHTON",DHTONImage)
DHTON.scale = 1.5

gypsy = createSprite(1020,180,150,100)
gypsy.addImage("gypsy",gypsyImage)
gypsy.scale = 1.4

armyMan = createSprite(170,650,150,100)
armyMan.addImage("armyMan",armyImage)
armyMan.scale = 1.3

list = createSprite(1650,400,200,1000)
list.addImage("list",listImages)
list.scale = 3.0

}

function draw(){
    textSize(30);
    textAlign(CENTER, TOP);
    textFont("Impact");
    fill("black");
    stroke("white");
    strokeWeight(5);
    text("ALH = name of person , name of car , date of servicing",0,400, 400, 400);

    textSize(30);
    textAlign(CENTER, TOP);
    textFont("Impact");
    fill("black");
    stroke("white");
    strokeWeight(5);
    text("2.5 ton = name of person , name of car , date of servicing",400,400, 400, 400)

    textSize(30);
    textAlign(CENTER, TOP);
    textFont("Impact");
    fill("black");
    stroke("white");
    strokeWeight(5);
    text("Gypsy = name of person , name of car , date of servicing",800,400, 400, 400)

    textSize(30);
    textAlign(CENTER, TOP);
    textFont("Impact");
    fill("black");
    stroke("white");
    strokeWeight(5);
    text("Soldier name , year of commision ",400,650, 400, 400)
    

drawSprites();
}