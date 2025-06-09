fetch("https://aaronw2004.github.io/csce242-summer2025/projects/part5/scripts/graduates.json")
  .then(response => response.json())
  .then(graduates => {
    const container = document.getElementById("graduate-container");

    graduates.forEach(grad => {
      const card = document.createElement("div");
      card.className = "graduate-card";
      card.innerHTML = `
        <img src="${grad.img_name}" alt="${grad.name}" class="graduate-thumb" />
        <p class="graduate-name">${grad.name}</p>
      `;

      card.addEventListener("click", () => {
        document.getElementById("modal-img").src = grad.img_name;
        document.getElementById("modal-name").textContent = grad.name;
        document.getElementById("modal-classification").textContent = grad.classification;
        document.getElementById("modal-major").textContent = grad.major;
        document.getElementById("modal-awards").textContent = grad.awards;
        document.getElementById("modal-honors").textContent = grad.latinHonors;
        document.getElementById("grad-modal").style.display = "flex";
      });

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading graduate data:", error));

document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("grad-modal").style.display = "none";
});
