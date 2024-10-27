async function loadGameSchedule() {
    const response = await fetch('./json/GameSchedule.json');
    const games = await response.json();

    const scheduleContainer = document.getElementById('schedule');
    
    games.forEach(game => {
        const gameBox = document.createElement('div');
        gameBox.classList.add('game-box');

        gameBox.innerHTML = `
            <h2>${game.team} vs. ${game.opponent}</h2>
            <div class="game-details">Date: ${game.date}</div>
            <div class="game-details">Time: ${game.time}</div>
            <div class="game-details">Place: ${game.place}</div>
            <div class="game-details">Records: ${game.teamRecord} - ${game.opponentRecord}</div>
        `;

        scheduleContainer.appendChild(gameBox);
    });
}

loadGameSchedule();
