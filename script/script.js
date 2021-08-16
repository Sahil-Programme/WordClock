let currentIndex = 0;

let img = [
    document.getElementById("img1"),
    document.getElementById("img2"),
    document.getElementById("img3"),
    document.getElementById("img4"),
    document.getElementById("img5")
];

//let img1 = document.getElementById("img1");
//let img2 = document.getElementById("img2");
//let img3 = document.getElementById("img3");
//let img4 = document.getElementById("img4");
//let img5 = document.getElementById("img5");

window.setInterval(update, 3000);

init_carousel();

function init_carousel() {

    for (var x = 0; x < 5; x++) {

        img[x].style.width = x == 4 ? '375px' : '275px';
        img[x].style.zIndex =
            x == 4 ?
            '100' : x < 4 ?
            '50' : '75';

        img[x].style.opacity = '100%';
    }

    img[4].style.left = '50%';
    img[0].style.left = '80%';
    img[1].style.left = '120%';
    img[2].style.left = '-120%';
    img[3].style.left = '20%';

    img[1].style.opacity = '0';
    img[2].style.opacity = '0';
}

function update() {

    if (currentIndex == 5) {
        currentIndex = 0;
    }

    for (var x = 0; x < 5; x++) {

        img[x].style.width = x == currentIndex ? '375px' : '275px';
        img[x].style.zIndex =
            x == currentIndex ?
            '100' : x < currentIndex ?
            '50' : '75';

        img[x].style.opacity = '100%';
    }

    console.log('index = ' + currentIndex);
    if (currentIndex == 0) {

        img[0].style.left = '50%';
        img[1].style.left = '80%';
        img[2].style.left = '120%';
        img[3].style.left = '-120%';
        img[4].style.left = '20%';

        img[2].style.opacity = '0';
    } else if (currentIndex == 1) {
        img[1].style.left = '50%';
        img[2].style.left = '80%';
        img[3].style.left = '120%';
        img[4].style.left = '-120%';
        img[0].style.left = '20%';

        img[3].style.opacity = '0';
    } else if (currentIndex == 2) {
        img[2].style.left = '50%';
        img[3].style.left = '80%';
        img[4].style.left = '120%';
        img[0].style.left = '-120%';
        img[1].style.left = '20%';

        img[4].style.opacity = '0';
    } else if (currentIndex == 3) {
        img[3].style.left = '50%';
        img[4].style.left = '80%';
        img[0].style.left = '120%';
        img[1].style.left = '-120%';
        img[2].style.left = '20%';

        img[0].style.opacity = '0';
    } else {
        img[4].style.left = '50%';
        img[0].style.left = '80%';
        img[1].style.left = '120%';
        img[2].style.left = '-120%';
        img[3].style.left = '20%';

        img[1].style.opacity = '0';
    }
    currentIndex++;
}