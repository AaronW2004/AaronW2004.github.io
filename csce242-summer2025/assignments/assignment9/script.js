class HotDog {
  constructor(name, meat, toppings, bun, imgFile) {
    this.name = name;
    this.meat = meat;
    this.toppings = toppings;
    this.bun = bun;
    this.imgFile = imgFile;
  }

  getSection() {
    const section = document.createElement("div");
    section.classList.add("hotdog-card");

    const img = document.createElement("img");
    img.src = `images/${this.imgFile}`;
    img.alt = this.name;

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerText = this.name;

    section.appendChild(img);
    section.appendChild(overlay);

    section.addEventListener("click", () => this.showModal());

    return section;
  }

  showModal() {
    const modal = document.getElementById("hotdogModal");
    const content = document.getElementById("modal-content");
    content.innerHTML = `
      <h3>${this.name}</h3>
      <p><strong>Meat:</strong> ${this.meat}</p>
      <p><strong>Toppings:</strong> ${this.toppings.join(", ")}</p>
      <p><strong>Bun:</strong> ${this.bun}</p>
    `;
    modal.style.display = "block";
  }
}

const hotdogs = [
  new HotDog("Chicago Dog", "Beef", ["Mustard", "Onions", "Pickles", "Sport Peppers"], "Poppy Seed", "chicago.jpg"),
  new HotDog("BLT", "Beef", ["Bacon", "Lettuce", "Tomato", "Mayo"], "Traditional", "blt.jpg"),
  new HotDog("Chili Cheese", "Beef", ["Chili", "Cheddar", "Ketchup"], "Sesame", "chili.jpg"),
  new HotDog("Grilled Onion", "Pork", ["Grilled Onions", "Mustard", "Pickles"], "Potato", "onion.jpg")
];

const container = document.getElementById("hotdog-container");
hotdogs.forEach(hd => {
  container.appendChild(hd.getSection());
});
