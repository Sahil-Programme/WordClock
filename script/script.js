let currentIndex = -1;

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");

window.setInterval(update, 3000);

init_carousel();

function init_carousel() {
    img1.style.left = "20%";
    img2.style.left = "50%";
    img3.style.left = "80%";

    img1.style.zIndex = 50;
    img2.style.zIndex = 100;
    img3.style.zIndex = 75;

    img2.style.width = "375px";

    img4.style.left = "120%";
    img5.style.left = "1500%";
    currentIndex++;
}

function update() {

    if (currentIndex == 3)
        currentIndex = 0;
    if (currentIndex == 1) {
        img1.style.left = "80%";
        img2.style.left = "20%";
        img3.style.left = "50%";

        img3.style.width = "375px";
        img2.style.width = "275px";
        img1.style.width = "275px";

        img1.style.zIndex = 50;
        img2.style.zIndex = 75;
        img3.style.zIndex = 100;
    } else if (currentIndex == 2) {
        img1.style.left = "50%";
        img2.style.left = "80%";
        img3.style.left = "20%";

        img1.style.width = "375px";
        img3.style.width = "275px";
        img2.style.width = "275px";

        img1.style.zIndex = 100;
        img2.style.zIndex = 50;
        img3.style.zIndex = 75;
    } else {
        img1.style.left = "20%";
        img2.style.left = "50%";
        img3.style.left = "80%";

        img2.style.width = "375px";
        img3.style.width = "275px";
        img1.style.width = "275px";

        img1.style.zIndex = 75;
        img2.style.zIndex = 100;
        img3.style.zIndex = 50;
    }
    currentIndex++;
}