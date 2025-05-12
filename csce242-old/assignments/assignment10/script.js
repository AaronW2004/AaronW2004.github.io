async function loadIceCreamData() {
    const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
    const iceCreamData = await response.json();
  
    const container = document.querySelector('.ice-cream-container');
  
    iceCreamData.forEach(item => {
      const iceCreamDiv = document.createElement('div');
      iceCreamDiv.classList.add('ice-cream');
  
      // Create image element
      const img = document.createElement('img');
      img.src = `https://portiaportia.github.io/json/images/ice-creams/${item.image}`;
      img.alt = item.name;
  
      // Create overlay element
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.textContent = item.name;
  
      // Append the image and overlay to the ice cream div
      iceCreamDiv.appendChild(img);
      iceCreamDiv.appendChild(overlay);
      
      // Append to container
      container.appendChild(iceCreamDiv);
    });
  }
  
  loadIceCreamData();
  