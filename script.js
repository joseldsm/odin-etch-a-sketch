function createGrid(gridSize) {
    let squareColored = [0];
    const flexBasis = 100/gridSize;

    for (let i = 0; i < (gridSize*gridSize); i++) {
        const div = document.createElement("div");
        div.id = i;
        let j = i/gridSize;

        if (Number.isInteger(j) == true) {
            div.textContent = j+1;
        } else if (i<gridSize){
            div.textContent = i+1;
        }

        container.appendChild(div);
        div.style.width = `${flexBasis}%`;

        div.addEventListener('mouseenter', (event) => {
            if (squareColored.includes(div.id)) {
                //get current div backgroundColor
                const backgroundColor = window.getComputedStyle(div).backgroundColor;
                //get rgba values of the current div backgroundColor
                const rgba = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.?\d*))?\)/);
                //store the value of the alpha (opacity) of the current div backgroundColor
                let alpha = parseFloat(rgba[4]);
                if (alpha < 1) {
                    alpha += 0.1;
                    div.style.backgroundColor = `rgba(${rgba[1]}, ${rgba[2]}, ${rgba[3]}, ${alpha})`;
                }
            } else {
                div.style.backgroundColor = randomColor10();
                squareColored.push(div.id);
            }
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
    } while (!Number.isInteger(gridSize) || gridSize > 65 || gridSize <= 0);

    return gridSize;
}

function randomColor10() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue}, 0.1)`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

button.addEventListener('click', (event) => {
    resetContainer();
    createGrid(askForGridSize());
});