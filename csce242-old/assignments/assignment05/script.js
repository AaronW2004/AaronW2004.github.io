const column1 = document.getElementById('column1');
const number = document.getElementById('number');
const column2 = document.getElementById('column2');
const image = document.getElementById('image');
const column3 = document.getElementById('column3');
const slider = document.getElementById('slider');
const sliderThumb = document.getElementById('slider-thumb');
const square = document.getElementById('square');

let count = 0;
// add to the count
column1.addEventListener('click', () => {
    count++;
    number.textContent = count;
});

image.addEventListener('click', () => {
    location.reload(); // refresh the page when the image is clicked
});

slider.addEventListener('input', () => {
    const value = slider.value;
    const proportion = value / 100; 
    const trackWidth = slider.offsetWidth; 
    const left = proportion * trackWidth - 50; 
    const size = 50 + proportion * 50; 

    sliderThumb.style.left = proportion * trackWidth + 'px'; 
    square.style.width = size + 'px'; 
    square.style.height = size + 'px'; 
    square.style.left = left + 'px'; 
});
