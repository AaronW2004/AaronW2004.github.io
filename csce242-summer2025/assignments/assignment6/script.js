let bikeInterval;

function toggleMenu() {
  const menu = document.getElementById('menu');
  const arrow = document.querySelector('.toggle-arrow');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    arrow.innerHTML = '&#9660;';
  } else {
    menu.style.display = 'block';
    arrow.innerHTML = '&#9650;';
  }
}

function showSection(id) {
  document.getElementById('speeding').style.display = id === 'speeding' ? 'block' : 'none';
  document.getElementById('css-art').style.display = id === 'css-art' ? 'block' : 'none';
}

function goBike() {
  clearInterval(bikeInterval); // Stop any existing animation first
  const bike = document.getElementById('bike');
  const speed = 11 - document.getElementById('speedSlider').value;
  let position = 0;

  bikeInterval = setInterval(() => {
    position += 5;
    if (position > document.getElementById('bikeContainer').offsetWidth) {
      position = -150;
    }
    bike.style.left = position + 'px';
  }, speed * 20);
}


function stopBike() {
  clearInterval(bikeInterval);
}

function showArt(type) {
  const art = document.getElementById('art');
  art.innerHTML = "";

  if (type === "moon") {
    art.className = "art moon";
  } else if (type === "star") {
    art.className = "art star";
  } else if (type === "cloud") {
    art.className = "art cloud";
  }
}
