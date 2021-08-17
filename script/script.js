let currentIndex = 0;

let img = [
    document.getElementById("img1"),
    document.getElementById("img2"),
    document.getElementById("img3"),
    document.getElementById("img4"),
    document.getElementById("img5"),
    document.getElementById("img6"),
    document.getElementById("img7"),
];

//let img1 = document.getElementById("img1");
//let img2 = document.getElementById("img2");
//let img3 = document.getElementById("img3");
//let img4 = document.getElementById("img4");
//let img5 = document.getElementById("img5");

window.setInterval(update, 3000);

init_carousel();

function init_carousel() {

    let opacityIndex = currentIndex + 2;
    if (opacityIndex > 6) opacityIndex = opacityIndex - 7;

    for (var x = 0; x < 7; x++) {

        img[x].style.width = x == currentIndex ? '375px' : '275px';
        img[x].style.zIndex =
            x == currentIndex ?
            '100' : x < currentIndex ?
            '50' : '75';

        img[x].style.opacity = '100%';

        if (x == opacityIndex) {
            img[opacityIndex].style.opacity = '0';
        } else
            img[x].style.opacity = '100%';


        img[(currentIndex + 0) < 7 ? currentIndex + 0 : (currentIndex + 0) - 7].style.left = '50%';
        img[(currentIndex + 1) < 7 ? currentIndex + 1 : (currentIndex + 1) - 7].style.left = '80%';
        img[(currentIndex + 2) < 7 ? currentIndex + 2 : (currentIndex + 2) - 7].style.left = '150%';
        img[(currentIndex + 3) < 7 ? currentIndex + 3 : (currentIndex + 3) - 7].style.left = '150%';
        img[(currentIndex + 4) < 7 ? currentIndex + 4 : (currentIndex + 4) - 7].style.left = '150%';
        img[(currentIndex + 5) < 7 ? currentIndex + 5 : (currentIndex + 5) - 7].style.left = '-120%';
        img[(currentIndex + 6) < 7 ? currentIndex + 6 : (currentIndex + 6) - 7].style.left = '20%';
    }
    currentIndex++;
}

function update() {

    if (currentIndex == 7) {
        currentIndex = 0;
    }
    let opacityIndex = currentIndex + 4;
    if (opacityIndex >= 7) opacityIndex = opacityIndex - 7;

    for (var x = 0; x < 7; x++) {

        img[x].style.width = x == currentIndex ? '375px' : '275px';
        img[x].style.zIndex =
            x == currentIndex ?
            '100' : x < currentIndex ?
            '75' : '50';

        img[x].style.opacity = '100%';

        if (x == opacityIndex) {
            img[opacityIndex].style.opacity = '0';
        } else
            img[x].style.opacity = '100%';

        //img[currentIndex].style.left = '50%';
        /*
        img[1].style.left = '50%';
        img[2].style.left = '80%';
        img[3].style.left = '120%';
        img[4].style.left = '-120%';
        img[0].style.left = '20%';
        */
        img[(currentIndex + 0) < 7 ? currentIndex + 0 : (currentIndex + 0) - 7].style.left = '50%';
        img[(currentIndex + 1) < 7 ? currentIndex + 1 : (currentIndex + 1) - 7].style.left = '80%';
        img[(currentIndex + 2) < 7 ? currentIndex + 2 : (currentIndex + 2) - 7].style.left = '150%';
        img[(currentIndex + 3) < 7 ? currentIndex + 3 : (currentIndex + 3) - 7].style.left = '150%';
        img[(currentIndex + 4) < 7 ? currentIndex + 4 : (currentIndex + 4) - 7].style.left = '150%';
        img[(currentIndex + 5) < 7 ? currentIndex + 5 : (currentIndex + 5) - 7].style.left = '-120%';
        img[(currentIndex + 6) < 7 ? currentIndex + 6 : (currentIndex + 6) - 7].style.left = '20%';
    }

    console.log('index: ' + currentIndex);
    /*if (currentIndex == 0) {

        img[0].style.left = '50%';
        img[1].style.left = '80%';
        img[2].style.left = '120%';
        img[3].style.left = '-120%';
        img[4].style.left = '20%';

    } else if (currentIndex == 1) {
        img[1].style.left = '50%';
        img[2].style.left = '80%';
        img[3].style.left = '120%';
        img[4].style.left = '-120%';
        img[0].style.left = '20%';

    } else if (currentIndex == 2) {
        img[2].style.left = '50%';
        img[3].style.left = '80%';
        img[4].style.left = '120%';
        img[0].style.left = '-120%';
        img[1].style.left = '20%';

    } else if (currentIndex == 3) {
        img[3].style.left = '50%';
        img[4].style.left = '80%';
        img[0].style.left = '120%';
        img[1].style.left = '-120%';
        img[2].style.left = '20%';

    } else {
        img[4].style.left = '50%';
        img[0].style.left = '80%';
        img[1].style.left = '120%';
        img[2].style.left = '-120%';
        img[3].style.left = '20%';

    }*/
    currentIndex++;
}