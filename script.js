
const gridContainer = document.querySelector(".grid-container");
let sizeDisplay = document.querySelector(".grid-size");
let inputSlider = document.querySelector("input");
let applyButton = document.querySelector(".apply");
let gridSize = 16;
generateGrid(gridSize)



function generateGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("grid-cell");
        cell.style.width = `calc(100% / ${size} )`;
        cell.style.height = `calc(100% / ${size} )`;
        gridContainer.appendChild(cell);
    }
}


function resetGrid() {
    gridContainer.innerHTML = '';
    generateGrid(gridSize);

}


// using event delegation to handle all child nodes simultaneously
gridContainer.addEventListener('mouseover', (e) => {
    if (e.target.matches('.grid-cell')) {
        e.target.style.backgroundColor = 'black';
    }
})

inputSlider.addEventListener('input', (e) => {
    gridSize = e.target.value;
    sizeDisplay.innerHTML = `${gridSize}x${gridSize}`;
})

applyButton.addEventListener('click', () => {
    resetGrid()
})



