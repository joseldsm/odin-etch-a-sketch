function createGrid(gridSize) {
    const flexBasis = 100/gridSize;
    console.log(flexBasis);

    for (let i = 0; i < (gridSize*gridSize); i++) {
        const div = document.createElement("div");
        let j = i/gridSize;

        if (Number.isInteger(j) == true) {
            div.textContent = j+1;
        } else if (i<gridSize){
            div.textContent = i+1;
        }

        container.appendChild(div);
        div.style.width = `${flexBasis}%`;
        div.addEventListener('mouseenter', (event) => {
            div.style.backgroundColor = randomColor();
        });
    }
}

function resetContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function askForGridSize() {
    let gridSize = 0;

    do {
        gridSize = Number(prompt("Please enter the number of vertical and horizontal items for the grid you want (max : 60)"));
    } while (!Number.isInteger(gridSize) || gridSize > 65);

    return gridSize;
}

function randomColor() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

button.addEventListener('click', (event) => {
    resetContainer();
    createGrid(askForGridSize());
});