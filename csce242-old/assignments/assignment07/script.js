const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
const starCountInput = document.getElementById('starCount');
const drawButton = document.getElementById('drawStars');
const errorMessage = document.getElementById('error');
const starMessage = document.getElementById('starMessage');
canvas.width = 400;
canvas.height = 400;

let stars = [];

drawButton.addEventListener('click', drawStars);

function drawStars() {
  const starCount = parseInt(starCountInput.value);
  
  if (isNaN(starCount) || starCount <= 0) {
    errorMessage.textContent = 'Please enter a valid positive number of stars!';
    errorMessage.style.display = 'block';
    starMessage.style.display = 'none';
    clearCanvas();
    return;
  }
  
  errorMessage.style.display = 'none';
  starMessage.style.display = 'none';
  clearCanvas();
  stars = [];
  
  for (let i = 0; i < starCount; i++) {
    const star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 10,  
      number: i + 1
    };
    stars.push(star);
    drawStar(star);
  }
}

function drawStar(star) {
  const spikes = 5; // Number of points in the star
  const outerRadius = star.radius;
  const innerRadius = outerRadius / 2;
  const step = Math.PI / spikes;
  
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  
  let rotation = Math.PI / 2 * 3;
  let x = star.x;
  let y = star.y;
  
  ctx.moveTo(star.x, star.y - outerRadius);

  for (let i = 0; i < spikes; i++) {
    x = star.x + Math.cos(rotation) * outerRadius;
    y = star.y - Math.sin(rotation) * outerRadius;
    ctx.lineTo(x, y);
    rotation += step;

    x = star.x + Math.cos(rotation) * innerRadius;
    y = star.y - Math.sin(rotation) * innerRadius;
    ctx.lineTo(x, y);
    rotation += step;
  }

  ctx.lineTo(star.x, star.y - outerRadius);
  ctx.closePath();
  ctx.fill();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  stars.forEach(star => {
    const distance = Math.sqrt((x - star.x) ** 2 + (y - star.y) ** 2);
    if (distance < star.radius) {
      starMessage.textContent = `You clicked star number: ${star.number}`;
      starMessage.style.display = 'block';
    }
  });
});
