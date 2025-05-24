const iceCreamColumn = document.getElementById('ice-cream');
const iceCreamOutput = document.getElementById('iceCreamOutput');

iceCreamColumn.addEventListener('click', () => {
  const line = document.createElement('p');
  line.innerHTML = "<strong>I like IceCream!</strong>";
  iceCreamOutput.appendChild(line);
});


const slider = document.getElementById('iceCreamSlider');
const sliderOutput = document.getElementById('sliderOutput');

slider.addEventListener('input', () => {
  const value = slider.value;
  sliderOutput.textContent = `I want ${value} ice cream${value > 1 ? 's' : ''}!`;
});

const showImageBtn = document.getElementById('showImageBtn');
const imageContainer = document.getElementById('imageContainer');

showImageBtn.addEventListener('click', () => {
  const img = document.createElement('img');
  img.src = "images/icecream.jpg"; 
  img.alt = 'Ice Cream';
  img.style.width = '200px';
  img.style.height = '200px';
  imageContainer.appendChild(img);
  showImageBtn.style.display = 'none';
});
