let currentIndex = 0;

const img1 = document.getElementById('image-1');
const img2 = document.getElementById('image-2');
const img3 = document.getElementById('image-3');

window.setInterval(update, 2000);

function update() {

    var styles = '';
    styles += `.r0c0 {
        color: rgb(80, 80, 255);
      }`
    var styleSheet = document.createElement("style")
    styleSheet.innerText += styles
    document.head.appendChild(styleSheet)

    currentIndex++;
    if (currentIndex == 3) {
        currentIndex = 0;
    }

    if (currentIndex == 1) {
        img1.style.left = `20%`;
        img2.style.left = `50%`;
        img3.style.left = `80%`;
    } else if (currentIndex == 2) {
        img1.style.left = `80%`;
        img2.style.left = `20%`;
        img3.style.left = `50%`;
    } else {
        img1.style.left = `50%`;
        img2.style.left = `80%`;
        img3.style.left = `20%`;
    }




}