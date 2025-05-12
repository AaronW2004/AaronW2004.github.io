// Bird Class Definition
class Bird {
    constructor(name, size, lifespan, food, habitat, interestingFact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.interestingFact = interestingFact;
        this.image = image;
    }

    getSection() {
        return `
            <div class="bird-box" onclick="showModal('${this.name}')">
                <h3>${this.name}</h3>
                <img src="images/${this.image}" alt="${this.name}">
            </div>
        `;
    }

    getExpandedSection() {
        return `
            <div id="${this.name}-modal" class="w3-modal">
                <div class="w3-modal-content">
                    <span onclick="closeModal('${this.name}')" class="w3-button w3-display-topright">&times;</span>
                    <h2>${this.name}</h2>
                    <img src="images/${this.image}" alt="${this.name}">
                    <p><strong>Size:</strong> ${this.size}</p>
                    <p><strong>Lifespan:</strong> ${this.lifespan}</p>
                    <p><strong>Food:</strong> ${this.food}</p>
                    <p><strong>Habitat:</strong> ${this.habitat}</p>
                    <p><strong>Interesting Fact:</strong> ${this.interestingFact}</p>
                </div>
            </div>
        `;
    }
}

// Array of Birds
const birds = [
    new Bird("Hummingbird", "2.5 inches", "3-5 years", "Nectar", "Trees", "They're nicknamed 'Hummers'", "hummingbird.jpg"),
    new Bird("Blue Jay", "9-12 inches", "7 years", "Insects and nuts", "Forests", "Blue Jays mimic the calls of hawks", "bluejay.jpg"),
    new Bird("Cardinal", "8-9 inches", "3 years", "Seeds and grains", "Woodlands", "The male cardinal is known for its bright red color", "cardinal.jpg"),
    new Bird("Robin", "10 inches", "2 years", "Worms and berries", "Gardens", "Robins are a sign of spring", "robin.jpg")
];

const birdContainer = document.getElementById('bird-container');
birds.forEach(bird => {
    birdContainer.innerHTML += bird.getSection();
    birdContainer.innerHTML += bird.getExpandedSection(); // Adds the modal for each bird
});

function showModal(birdName) {
    document.getElementById(`${birdName}-modal`).style.display = 'block';
}

function closeModal(birdName) {
    document.getElementById(`${birdName}-modal`).style.display = 'none';
}
