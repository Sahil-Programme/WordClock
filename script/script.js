const carouselImages = document.querySelector('.carousel-images');
const backButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const numberOfImages = document.querySelectorAll('.carousel-images img').length;
let imageIndex = 1;
let translateX = 0;



nextButton.addEventListener('click', event => {
    if (imageIndex != numberOfImages) {
        imageIndex++;
        translateX -= 16.5;
    }

    carouselImages.style.transform = `translateX(${translateX}em)`;
});
backButton.addEventListener('click', event => {
    if (imageIndex != 1) {
        imageIndex--;
        translateX += 16.5;
    }

    carouselImages.style.transform = `translateX(${translateX}em)`;
});