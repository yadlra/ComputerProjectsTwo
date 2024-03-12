let bouncingImages = []; // Array to store images with properties and associated sounds

function preload() {
  for (let i = 1; i <= 7; i++) {
    
    let image = loadImage(`images/image${i}.jpg`); 
    let sound = loadSound(`sounds/sound${i}.mp3`); 
    bouncingImages.push({
      image: image,
      sound: sound,
      positionX: random(width),
      positionY: random(height),
      velocityX: random(-2, 2),
      velocityY: random(-2, 2)
    });
  }
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  
  bouncingImages.forEach(imageObj => {
    updatePosition(imageObj);
    displayImage(imageObj);
    bounceOffEdges(imageObj);
  });
}

function updatePosition(imageObj) {
  imageObj.positionX += imageObj.velocityX;
  imageObj.positionY += imageObj.velocityY;
}

function displayImage(imageObj) {
  image(imageObj.image, imageObj.positionX, imageObj.positionY, 100, 100); // Adjust size as needed
}

function bounceOffEdges(imageObj) {
  if (imageObj.positionX <= 0 || imageObj.positionX >= width - 100) { 
    imageObj.velocityX *= -1;
  }
  if (imageObj.positionY <= 0 || imageObj.positionY >= height - 100) { 
    imageObj.velocityY *= -1;
  }
}

function mousePressed() {
  bouncingImages.forEach(imageObj => {
    if (isImageClicked(imageObj)) { 
      imageObj.sound.play();
    }
  });
}

function isImageClicked(imageObj) {
  return mouseX >= imageObj.positionX && mouseX <= imageObj.positionX + 100 && mouseY >= imageObj.positionY && mouseY <= imageObj.positionY + 100;
}
