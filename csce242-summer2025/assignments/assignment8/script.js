const images = [
  { title: "Birthday Party", file: "birthday.jpg" },
  { title: "Clowning Around", file: "clown.jpg" },
  { title: "It's Raining", file: "rain.jpg" },
  { title: "Reading Time", file: "read.jpg" },
  { title: "Gardening Fun", file: "shovel.jpg" },
  { title: "Work from Home", file: "work.jpg" }
];

const grid = document.getElementById("image-grid");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const closeBtn = document.getElementById("close");

images.forEach(({ title, file }) => {
  const box = document.createElement("div");
  box.className = "image-box";

  const img = document.createElement("img");
  img.src = `images/${file}`;
  img.alt = title;

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.textContent = title;

  box.appendChild(img);
  box.appendChild(overlay);

  box.addEventListener("click", () => {
    popupImg.src = `images/${file}`;
    popupTitle.textContent = title;
    popup.classList.remove("hidden");
  });

  grid.appendChild(box);
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});
