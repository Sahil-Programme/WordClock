let currentIndex = 0;

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

const imageSource1 = '../images/no bg/1NoBG.png';
const imageSource2 = '../images/no bg/2NoBG.png';
const imageSource3 = '../images/no bg/3NoBG.png';

window.setInterval(update, 1000);

init_carousel();

function init_carousel() {
    img1.src = imageSource1;
    img2.src = imageSource2;
    img3.src = imageSource3;
    currentIndex++;
}

function update() {
    if (currentIndex == 3)
        currentIndex = 0;

    if (currentIndex == 0) {
        img1.src = imageSource1;
        img2.src = imageSource2;
        img3.src = imageSource3;
    } else if (currentIndex == 1) {
        img1.src = imageSource3;
        img2.src = imageSource1;
        img3.src = imageSource2;
    } else {
        img1.src = imageSource2;
        img2.src = imageSource3;
        img3.src = imageSource1;
    }
    currentIndex++;
}