const gridElement = document.getElementById('grid');
const hintElement = document.getElementById('hint');
let treasureX, treasureY;
let gameOver = false;

function initGame() {
    gridElement.innerHTML = '';
    hintElement.textContent = 'Haz clic en una casilla para comenzar a buscar';
    hintElement.style.color = '#ffffff';
    gameOver = false;

    treasureX = Math.floor(Math.random() * 10);
    treasureY = Math.floor(Math.random() * 10);

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', checkCell);
            gridElement.appendChild(cell);
        }
    }
}

function checkCell(e) {
    if (gameOver) return;

    const cell = e.target;
    if (cell.classList.contains('miss') || cell.classList.contains('found')) return;

    const clickedRow = parseInt(cell.dataset.row);
    const clickedCol = parseInt(cell.dataset.col);

    if (clickedRow === treasureY && clickedCol === treasureX) {
        cell.classList.add('found');
        hintElement.textContent = '¡Felicidades! Encontraste el tesoro.';
        hintElement.style.color = '#eab308';
        gameOver = true;
    } else {
        cell.classList.add('miss');
        const direction = getDirection(clickedRow, clickedCol);
        hintElement.textContent = `Espacio vacío. Dirígete hacia el: ${direction}`;
    }
}

function getDirection(currentY, currentX) {
    let vertical = '';
    let horizontal = '';

    if (treasureY < currentY) {
        vertical = 'norte';
    } else if (treasureY > currentY) {
        vertical = 'sur';
    }

    if (treasureX > currentX) {
        horizontal = 'este';
    } else if (treasureX < currentX) {
        horizontal = 'oeste';
    }

    return vertical + horizontal;
}

window.onload = initGame;