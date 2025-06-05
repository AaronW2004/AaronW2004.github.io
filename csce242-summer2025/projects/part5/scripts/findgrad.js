fetch("https://aaronw2004.github.io/csce242-summer2025/projects/part5/scripts/graduates.json")
  .then(response => response.json())
  .then(graduates => {
    const container = document.getElementById("graduate-container");

    graduates.forEach(grad => {
      const card = document.createElement("div");
      card.className = "graduate-card";
      card.innerHTML = `
        <img src="${grad.img_name}" alt="${grad.name}" class="graduate-img" />
        <h3>${grad.name}</h3>
        <p><strong>Classification:</strong> ${grad.classification}</p>
        <p><strong>Major:</strong> ${grad.major}</p>
        <p><strong>Awards:</strong> ${grad.awards}</p>
        <p><strong>Latin Honors:</strong> ${grad.latinHonors}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading graduate data:", error));
