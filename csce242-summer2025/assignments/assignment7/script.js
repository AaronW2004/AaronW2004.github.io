const drawBtn = document.getElementById("draw-btn");
const townContainer = document.getElementById("town-container");
const exerciseArea = document.getElementById("exercise-area");
const stickmanImg = document.getElementById("stickman");
const exerciseBtn = document.getElementById("exercise-btn");

const stretches = [
  "images/1 (1).png",
  "images/2 (1).png",
  "images/3 (2).png",
  "images/4 (2).png",
  "images/5 (1).png",
  "images/6.png"
];

drawBtn.addEventListener("click", () => {
  townContainer.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const house = document.createElement("div");
    house.className = "house";

    const door = document.createElement("div");
    door.className = "door";
    house.appendChild(door);

    townContainer.appendChild(house);
  }

  stickmanImg.src = "images/1 (1).png";
  exerciseArea.style.display = "block";
});

exerciseBtn.addEventListener("click", () => {
  let i = 0;
  const interval = setInterval(() => {
    stickmanImg.src = stretches[i];
    i++;
    if (i >= stretches.length) {
      clearInterval(interval);
    }
  }, 800); 
});
