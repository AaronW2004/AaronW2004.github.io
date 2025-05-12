document.addEventListener("DOMContentLoaded", () => {
    const toggleMenuBtn = document.querySelector('.toggle-menu');
    const menuItems = document.querySelector('.menu-items');
    const exercise1 = document.getElementById('exercise-1');
    const exercise2 = document.getElementById('exercise-2');
    const redSlider = document.getElementById('red-slider');
    const colorMessage = document.getElementById('color-message');

    toggleMenuBtn.addEventListener('click', () => {
        menuItems.classList.toggle('show');
    
        if (menuItems.classList.contains('show')) {
            toggleMenuBtn.textContent = '▲';  
        } else {
            toggleMenuBtn.textContent = '▼';  
        }
    });
    

    function activateExercise(activeExercise, inactiveExercise) {
        activeExercise.classList.remove('hidden');
        inactiveExercise.classList.add('hidden');

        activeExercise.classList.add('active');
        inactiveExercise.classList.remove('active');
    }

    
    menuItems.children[0].addEventListener('click', () => {
        activateExercise(exercise1, exercise2);
    });

    menuItems.children[1].addEventListener('click', () => {
        activateExercise(exercise2, exercise1);
    });

    redSlider.addEventListener('input', () => {
        const redValue = redSlider.value;
        exercise1.style.backgroundColor = `rgb(${redValue}, 0, 0)`;

        if (redValue < 85) {
            colorMessage.textContent = "Soft red.";
        } else if (redValue < 170) {
            colorMessage.textContent = "Medium red.";
        } else {
            colorMessage.textContent = "Bright red!";
        }
    });
});

function choosePicture(size) {
    const pictureDisplay = document.getElementById('picture-display');
    let width;
    
    switch(size) {
        case 'small':
            width = 200;
            break;
        case 'medium':
            width = 400;
            break;
        case 'large':
            width = 600;
            break;
    }
    
    pictureDisplay.src = `https://picsum.photos/${width}`;
}
