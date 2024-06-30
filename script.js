
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