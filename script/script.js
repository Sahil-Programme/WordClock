let currentIndex = -1;

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let parent_div_1 = document.getElementById("parent1");
let parent_div_2 = document.getElementById("parent2");
let parent_div_3 = document.getElementById("parent3");


const imageSource1 = '../images/no bg/1NoBG.png';
const imageSource2 = '../images/no bg/2NoBG.png';
const imageSource3 = '../images/no bg/3NoBG.png';

window.setInterval(update, 1000);

init_carousel();

function init_carousel() {

    parent_div_1.classList.add("image-1");
    parent_div_2.classList.add("image-2");
    parent_div_3.classList.add("image-3");

    img1.classList.add("side-crop");
    img2.classList.add("center-crop");
    img3.classList.add("side-crop");

    img1.src = imageSource1;
    img2.src = imageSource2;
    img3.src = imageSource3;
    currentIndex++;
}

function update() {

    var class1 = document.getElementsByClassName('col1');
    if (currentIndex == 3)
        currentIndex = 0;
    if (currentIndex == 0) {
        parent_div_1.image
            //
    } else if (currentIndex == 1) {
        //
    } else {
        //
    }
    currentIndex++;
}