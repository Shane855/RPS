# RPS
//Creates a 16x16 Grid
function createPixels(size) {
//Selects the div with the class container
let container = document.querySelector(".container");
//A loop that multiplies the parametre SIZE with itself
for (currentPixel = 0; currentPixel < size * size; currentPixel++) {
//Creates a new div with the class pixel
let pixel = document.createElement("div");
pixel.setAttribute("class", "pixel");
pixel.addEventListener("pointerover", addRgb);
//Appends pixel to container
container.appendChild(pixel);
}
}


// Colors the pixels
function addRgb(para) {
para.target.style = 'background-color:#000000';
para.target.removeEventListener("pointerover", addRgb);
}

createPixels(25);

//function resetContainer() {
// let allPixels = document.querySelectorAll(".pixel");
//allPixels.forEach(pixel => pixel.parentNode.removeChild(pixel));
//}

h1 {
text-align: center;
margin: 20px;
}

.container {
width: 65vh;
height: 65vh;
margin: 0 auto;
border-style: solid;
border-width: 2px;
display: grid;
grid-template: repeat(25, 1fr) / repeat(25, 1fr);
}

.pixel {
width: 1fr;
height: 1fr;
border-style: solid;
border-width: 2px;
}

.reset-button {
display: block;
max-width: 80px;
margin: 10px auto;
}

