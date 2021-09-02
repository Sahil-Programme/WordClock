const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarlinks = document.getElementsByClassName('navbar-links')[0];
const ul = document.getElementById('u-list');
const radios = document.forms["about_form"].elements["about_selector"];

for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        console.log(this.value);
    }
}

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})
ul.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})

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

let maxImages = img.length;

//let img1 = document.getElementById("img1");
//let img2 = document.getElementById("img2");
//let img3 = document.getElementById("img3");
//let img4 = document.getElementById("img4");
//let img5 = document.getElementById("img5");

window.setInterval(update, 3000);

init_carousel();

function init_carousel() {

    let opacityIndex = currentIndex + 2;
    if (opacityIndex >= maxImages) opacityIndex = opacityIndex - maxImages;

    for (var x = 0; x < maxImages; x++) {
        let width = window.screen.width;

        img[x].style.maxWidth = x == currentIndex ? width > 700 ?
            '375px' : '300px' :
            width > 700 ? '275px' :
            '200px';
        //img[x].style.maxWidth = x == currentIndex ? '375px' : '275px';
        img[x].style.zIndex =
            x == currentIndex ?
            '100' : x < currentIndex ?
            '50' : '75';

        img[x].style.opacity = '100%';

        if (x == opacityIndex) {
            img[opacityIndex].style.opacity = '0';
        } else
            img[x].style.opacity = '100%';


        img[(currentIndex + 0) < maxImages ? currentIndex + 0 : (currentIndex + 0) - maxImages].style.left = '50%';
        img[(currentIndex + 1) < maxImages ? currentIndex + 1 : (currentIndex + 1) - maxImages].style.left = '80%';
        img[(currentIndex + 2) < maxImages ? currentIndex + 2 : (currentIndex + 2) - maxImages].style.left = '150%';
        img[(currentIndex + 3) < maxImages ? currentIndex + 3 : (currentIndex + 3) - maxImages].style.left = '150%';
        img[(currentIndex + 4) < maxImages ? currentIndex + 4 : (currentIndex + 4) - maxImages].style.left = '150%';
        img[(currentIndex + 5) < maxImages ? currentIndex + 5 : (currentIndex + 5) - maxImages].style.left = '-120%';
        img[(currentIndex + 6) < maxImages ? currentIndex + 6 : (currentIndex + 6) - maxImages].style.left = '20%';
    }
    currentIndex++;
}

function update() {

    if (currentIndex == maxImages) {
        currentIndex = 0;
    }
    let opacityIndex = currentIndex + 4;
    if (opacityIndex >= maxImages) opacityIndex = opacityIndex - maxImages;

    for (var x = 0; x < maxImages; x++) {

        let width = window.screen.width;

        img[x].style.maxWidth = x == currentIndex ? width > 700 ?
            '375px' : '300px' :
            width > 700 ? '275px' :
            '200px';
        img[x].style.zIndex =
            x == currentIndex ?
            '100' : x < currentIndex ?
            '75' : '50';

        img[x].style.opacity = '100%';

        if (x == opacityIndex) {
            img[opacityIndex].style.opacity = '0';
        } else
            img[x].style.opacity = '100%';

        img[(currentIndex + 0) < maxImages ? currentIndex + 0 : (currentIndex + 0) - maxImages].style.left = '50%';
        img[(currentIndex + 1) < maxImages ? currentIndex + 1 : (currentIndex + 1) - maxImages].style.left = '80%';
        img[(currentIndex + 2) < maxImages ? currentIndex + 2 : (currentIndex + 2) - maxImages].style.left = '150%';
        img[(currentIndex + 3) < maxImages ? currentIndex + 3 : (currentIndex + 3) - maxImages].style.left = '150%';
        img[(currentIndex + 4) < maxImages ? currentIndex + 4 : (currentIndex + 4) - maxImages].style.left = '150%';
        img[(currentIndex + 5) < maxImages ? currentIndex + 5 : (currentIndex + 5) - maxImages].style.left = '-120%';
        img[(currentIndex + 6) < maxImages ? currentIndex + 6 : (currentIndex + 6) - maxImages].style.left = '20%';
    }

    currentIndex++;
}