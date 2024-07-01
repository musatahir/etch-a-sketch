
function generateGrid(size) {
    const gridContainer = document.querySelector(".grid-container");
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("grid-cell");
        cell.style.width = `calc(100% / ${size} )`;
        cell.style.height = `calc(100% / ${size} )`;
        gridContainer.appendChild(cell);
    }
}

generateGrid(16);
const grid = document.querySelector('.grid-container')

// using event delegation to handle all child nodes simultaneously
grid.addEventListener('mouseover', (e) => {
    if (e.target.matches('.grid-cell')) {
        e.target.style.backgroundColor = 'black';
    }
})