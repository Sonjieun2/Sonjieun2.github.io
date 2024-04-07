const images = ["red.png", "green.png", "blue.png"];

const changeImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${changeImage}`;

document.body.appendChild(bgImage);