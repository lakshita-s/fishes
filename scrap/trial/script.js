const gifContainer = document.querySelector('.gif-collage');
const gifSrc = '../images/fishes.gif';
let gridSize = 4; // starts as 4x4

function createGif(row, col) {
    const img = document.createElement('img');
    img.className = 'gif';
    img.src = gifSrc;
    img.style.gridRow = row;
    img.style.gridColumn = col;
    img.addEventListener('click', growGrid);
    gifContainer.appendChild(img);
}

function setGridTemplate() {
    gifContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gifContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

function growGrid() {
    const newSize = gridSize + 1;

    // new column (rows 1 through old gridSize, at the new last column)
    for (let row = 1; row <= gridSize; row++) {
        createGif(row, newSize);
    }
    // new row (columns 1 through old gridSize, at the new last row)
    for (let col = 1; col <= gridSize; col++) {
        createGif(newSize, col);
    }
    // corner piece
    createGif(newSize, newSize);

    gridSize = newSize;
    setGridTemplate();
}

// initial 4x4 grid
for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
        createGif(row, col);
    }
}
setGridTemplate();