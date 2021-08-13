let currentIndex = 0;
const container = document.getElementById('card-Container');

window.setInterval(update, 4000);

function update() {
    currentIndex++;
    if (currentIndex == 4) {
        currentIndex = 0;
    }
    let x = -25 * currentIndex;

    container.style.left = `${x}em`;
}