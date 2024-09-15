// Get the elements
const column1 = document.getElementById('column1');
const number = document.getElementById('number');
const column2 = document.getElementById('column2');
const image = document.getElementById('image');
const column3 = document.getElementById('column3');
const slider = document.getElementById('slider');
const sliderThumb = document.getElementById('slider-thumb');
const square = document.getElementById('square');

// Initialize the count
let count = 0;

// Add event listener to column1
column1.addEventListener('click', () => {
    count++;
    number.textContent = count;
});

// Add event listener to image
image.addEventListener('click', () => {
    location.reload(); // refresh the page when the image is clicked
});

// Add event listener to slider
slider.addEventListener('input', () => {
    const value = slider.value;
    const proportion = value / 100; // calculate the proportion of the slider value
    const trackWidth = slider.offsetWidth; // Get the width of the slider track
    const left = proportion * trackWidth - 50; // Offset the left position to move the square farther left
    const size = 50 + proportion * 50; // set the size of the square from 50px to 100px

    sliderThumb.style.left = proportion * trackWidth + 'px'; // move the slider thumb
    square.style.width = size + 'px'; // adjust the width of the square
    square.style.height = size + 'px'; // adjust the height of the square
    square.style.left = left + 'px'; // move the square farther to the left
});
