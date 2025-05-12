// Associative array to store image sources, titles, and descriptions
const images = {
    'images/birthday.jpg': { title: 'Happy Birthday!', description: 'One of my favorite days in the year.' },
    'images/clown.jpg': { title: 'An Absolute Clown', description: 'What I look like thinking Im getting any sleep tonight.' },
    'images/rain.jpg': { title: 'It is pouring.', description: 'I cant believe we have class in this weather.' },
    'images/read.jpg': { title: 'Reading', description: 'My generation should start doing this more often.' },
    'images/shovel.jpg': { title: 'Shovel Guy', description: 'Either gardening or burying a body, who knows!' },
    'images/work.jpg': { title: 'Hard At Work', description: 'Have to get money somehow.' }
};

// Get references to HTML elements for title and description
const titleElement = document.querySelector('.image-title');
const descriptionElement = document.querySelector('.image-description');
const gallery = document.querySelector('.image-gallery');

// Function to load and display images dynamically
function loadImages() {
    for (const [src, info] of Object.entries(images)) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = info.title;

        // Add click event to display title and description when image is clicked
        img.addEventListener('click', () => {
            titleElement.textContent = info.title;
            descriptionElement.textContent = info.description;
        });

        // Append the image to the gallery container
        gallery.appendChild(img);
    }
}

// Load the images when the page loads
window.onload = loadImages;
