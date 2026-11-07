let backgroundImg;
let pumpkinImg;
let batImg;
let hauntedHouseImg;

let pumpkinX = 100;
let batY = 100;

function preload() {
  backgroundImg = loadImage('background.png');
  pumpkinImg = loadImage('pumpkin.png');
  batImg = loadImage('bat.png');
  hauntedHouseImg = loadImage('hauntedhouse.png');
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Background image
  image(backgroundImg, 0, 0, 600, 400);

  // Haunted house
  image(hauntedHouseImg, 200, 100, 300, 300);

  // Pumpkin moving across the screen
  image(pumpkinImg, pumpkinX, 300, 70, 70);
  pumpkinX += 2;

  if (pumpkinX > width) {
    pumpkinX = -70;
  }

  // Bat moving down the screen
  image(batImg, 100, batY, 80, 50);
  batY += 1;

  if (batY > height) {
    batY = -50;
  }
}