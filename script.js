function createGrid(gridSize) {
    const flexBasis = 1/(gridSize+1)*100;

    for (let i = 0; i < (gridSize*gridSize); i++) {
        const div = document.createElement("div");
        div.textContent = i+1;
        container.appendChild(div);
        div.style.flexBasis = `${flexBasis}%`;
    }
}

const container = document.querySelector("#container");
createGrid(10);

