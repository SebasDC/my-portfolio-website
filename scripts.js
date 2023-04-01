const images = document.querySelectorAll('.image');
const imageText = document.querySelector('.image-text');
let currentIndex = 0;

// define an array of color gradients
const gradients = [
  "linear-gradient(to right, red, orange, yellow)",
  "linear-gradient(to right, green, blue, indigo)",
  "linear-gradient(to right, purple, pink, red)"
];
// define a variable to keep track of the current gradient index
let currentGradient = 0;

function changeImage() {
    images.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });
    imageText.textContent = images[currentIndex].dataset.title;
    currentIndex = (currentIndex + 1) % images.length;

// get the current gradient and apply it to the .image-text element
const gradient = gradients[currentGradient % gradients.length];
document.querySelector(".image-text").style.backgroundImage = gradient;
// update the current gradient index
currentGradient++;
}

changeImage();
let interval = setInterval(changeImage, 500);

document.querySelector('#image-container').addEventListener('mousemove', () => {
    clearInterval(interval);
    interval = setInterval(changeImage, 1000);
});

document.querySelector('#contact-btn').addEventListener('click', () => {
    // Add your contact functionality here
    alert('Send us your email to...');
});
