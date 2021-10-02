/** selecting variables **/
const homePage = document.querySelector('.home-page'),
    startBtn = document.querySelector('input[type = "startButton"]'),
    gameboard = document.querySelector('.game'),
    gameContain = document.querySelector('.container-game'),
    axe = document.querySelector('.axe'),
    pickaxe = document.querySelector('.pickAxe'),
    shovel = document.querySelector('.shovel'),
    resetBtn = document.querySelector('.reset'),
    tGrass = document.querySelector('.tGrass'),
    tSoil = document.querySelector('.tSoil'),
    tRock = document.querySelector('.tRock'),
    tTreeLeaves = document.querySelector('.tTreeLeaves'),
    tTreeTrunck = document.querySelector('.tTreeTrunck');


gameboard.style.display = 'none';

/** obj that will contain all the tiles **/
let gameObj = {},
    inventory = {};
let currentTool = '';
let currentTile = '';




/** this section of functions initaialize the game **/
const startGame = () => {
    homePage.style.opacity = 0;
    homePage.style.transition = 'all 1s';
    setTimeout(() => {
        document.body.firstElementChild.remove();
    }, 1000)

    gameboard.style.display = 'grid';

};

const initSky = () => {
    for (let row = 0; row < 25; row++) {
        for (let column = 0; column < 30; column++) {
            let div = document.createElement('div');
            div.classList.add('box');
            div.classList.add('sky');
            gameContain.appendChild(div)
            gameObj[`${row}.${column}`] = div;
        }
    }
}

const createCloud = (Element) => {
    let mat = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    for (let row = 0; row < 6; row++) {
        for (let column = 0; column < 30; column++) {
            if (mat[row][column] === 1) {
                gameObj[`${row}.${column}`].classList.remove('sky')
                gameObj[`${row}.${column}`].classList.add(Element);
            }
        }
    }
}

const createGround = (Element1, Element2) => {
    for (let row = 0; row < 25; row++) {
        for (let column = 0; column < 30; column++) {
            if (row === 17) {
                gameObj[`${row}.${column}`].classList.remove('sky');
                gameObj[`${row}.${column}`].classList.add(Element1);
            }
            if (row > 17) {
                gameObj[`${row}.${column}`].classList.remove('sky');
                gameObj[`${row}.${column}`].classList.add(Element2);
            }
        }
    }
}

const createOtherTiles = (Element1, Element2, Element3) => {
        let mat = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 3, 3, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 3, 2, 3, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0]
        ];
        let i = 0;
        for (let row = 10; row < 17; row++) {
            let j = 0;
            for (let column = 0; column < 30; column++) {
                if (mat[i][j] === 1) {
                    gameObj[`${row}.${column}`].classList.remove('sky');
                    gameObj[`${row}.${column}`].classList.add(Element2);
                }

                if (mat[i][j] === 2) {
                    gameObj[`${row}.${column}`].classList.remove('sky');
                    gameObj[`${row}.${column}`].classList.add(Element1);
                }

                if (mat[i][j] === 3) {
                    gameObj[`${row}.${column}`].classList.remove('sky');
                    gameObj[`${row}.${column}`].classList.add(Element3);
                }
                j++
            }
            i++
        }
    }
    /** calling the function for initialize**/
initSky();
createCloud('cloud');
createGround('grass', 'soil');
createOtherTiles('treeTrunck', 'treeLeaves', 'rock');

startBtn.addEventListener('click', startGame);

/**updating the current tool */
function updateTool(event) {
    currentTile = '';
    if (event.currentTarget.textContent === 'axe') {
        axe.style.border = '5px solid rgb(46, 46, 70)';
        pickaxe.style.border = '1px solid grey';
        shovel.style.border = '1px solid grey';
        currentTool = axe.textContent;
    }
    if (event.currentTarget.textContent === 'pickAxe') {
        pickaxe.style.border = '5px solid rgb(46, 46, 70)';
        axe.style.border = '1px solid grey';
        shovel.style.border = '1px solid grey';
        currentTool = pickaxe.textContent;
    }
    if (event.currentTarget.textContent === 'shovel') {
        shovel.style.border = '5px solid rgb(46, 46, 70)';
        axe.style.border = '1px solid grey';
        pickaxe.style.border = '1px solid grey';
        currentTool = shovel.textContent;
    }
}

axe.addEventListener('click', updateTool);


pickaxe.addEventListener('click', updateTool);


shovel.addEventListener('click', updateTool);


/**updating the inventory */
function updateInventory(tile) {
    if (inventory[tile] === undefined) {
        inventory[tile] = 1;
    } else {
        inventory[tile] += 1;
    }

    if (tile === 'grass') {
        tGrass.innerHTML = inventory[tile];
    }
    if (tile === 'soil') {
        tSoil.innerHTML = inventory[tile];
    }
    if (tile === 'rock') {
        tRock.innerHTML = inventory[tile];
    }
    if (tile === 'treeLeaves') {
        tTreeLeaves.innerHTML = inventory[tile];
    }
    if (tile === 'treeTrunck') {
        tTreeTrunck.innerHTML = inventory[tile];
    }
}


/**removin the checked tile */
function checkIfToRemove(tile) {
    if (currentTool === 'pickAxe' && tile.currentTarget.classList.contains('rock')) {
        let tmp = tile.currentTarget.classList[1];
        tile.currentTarget.classList.remove('rock');
        tile.currentTarget.classList.add('sky');
        updateInventory(tmp);
    }
    if (currentTool === 'axe' && tile.currentTarget.classList.contains('treeTrunck')) {
        let tmp = tile.currentTarget.classList[1];
        tile.currentTarget.classList.remove('treeTrunck');
        tile.currentTarget.classList.add('sky');
        updateInventory(tmp);
    }
    if (currentTool === 'axe' && tile.currentTarget.classList.contains('treeLeaves')) {
        let tmp = tile.currentTarget.classList[1];
        tile.currentTarget.classList.remove('treeLeaves');
        tile.currentTarget.classList.add('sky');
        updateInventory(tmp);
    }
    if (currentTool === 'shovel' && tile.currentTarget.classList.contains('soil')) {
        let tmp = tile.currentTarget.classList[1];
        tile.currentTarget.classList.remove('soil');
        tile.currentTarget.classList.add('sky');
        updateInventory(tmp);
    }
    if (currentTool === 'shovel' && tile.currentTarget.classList.contains('grass')) {
        let tmp = tile.currentTarget.classList[1];
        tile.currentTarget.classList.remove('grass');
        tile.currentTarget.classList.add('sky');
        updateInventory(tmp);
    }
}


/** making eventlistener for all tiles **/
const alltiles = document.querySelectorAll('.box')
alltiles.forEach(element => {
    element.addEventListener('click', checkIfToRemove);
});

/**adding tiles to the world from the inventory**/
function addTile(event) {
    if (currentTile === 'grass') {
        if (inventory[currentTile] > 0) {
            event.currentTarget.classList.remove('sky');
            event.currentTarget.classList.add('grass');
            inventory[currentTile] -= 1;
            tGrass.innerHTML = inventory[currentTile];
        }
    }

    if (currentTile === 'soil') {
        if (inventory[currentTile] > 0) {
            event.currentTarget.classList.remove('sky');
            event.currentTarget.classList.add('soil');
            inventory[currentTile] -= 1;
            tSoil.innerHTML = inventory[currentTile];
        }
    }

    if (currentTile === 'rock') {
        if (inventory[currentTile] > 0) {
            event.currentTarget.classList.remove('sky');
            event.currentTarget.classList.add('rock');
            inventory[currentTile] -= 1;
            tRock.innerHTML = inventory[currentTile];
        }
    }

    if (currentTile === 'treeLeaves') {
        if (inventory[currentTile] > 0) {
            event.currentTarget.classList.remove('sky');
            event.currentTarget.classList.add('treeLeaves');
            inventory[currentTile] -= 1;
            tTreeLeaves.innerHTML = inventory[currentTile];
        }
    }

    if (currentTile === 'treeTrunck') {
        if (inventory[currentTile] > 0) {
            event.currentTarget.classList.remove('sky');
            event.currentTarget.classList.add('treeTrunck');
            inventory[currentTile] -= 1;
            tTreeTrunck.innerHTML = inventory[currentTile];
        }
    }


}

function removeStyle(tile) {
    if (currentTool === 'axe') { axe.style.border = '1px solid grey'; }
    if (currentTool === 'pickAxe') { pickaxe.style.border = '1px solid grey' };
    if (currentTool === 'shovel') { shovel.style.border = '1px solid grey' };
    currentTool = '';


}


/** eventlisteners for the inventory **/
tGrass.addEventListener('click', () => {
    currentTile = 'grass';
    removeStyle('grass');
    alltiles.forEach(element => {
        element.addEventListener('click', addTile);
    });
});

tSoil.addEventListener('click', () => {
    currentTile = 'soil';
    removeStyle('soil');
    alltiles.forEach(element => {
        element.addEventListener('click', addTile);
    });
});

tRock.addEventListener('click', () => {
    currentTile = 'rock';
    removeStyle('rock');
    alltiles.forEach(element => {
        element.addEventListener('click', addTile);
    });
});

tTreeLeaves.addEventListener('click', () => {
    currentTile = 'tTreeLeaves';
    removeStyle('tTreeLeaves');
    alltiles.forEach(element => {
        element.addEventListener('click', addTile);
    });
});

tTreeTrunck.addEventListener('click', () => {
    currentTile = 'treeTrunck';
    removeStyle('treeTrunck');
    alltiles.forEach(element => {
        element.addEventListener('click', addTile);
    });
});

resetBtn.addEventListener('click', (() => {
    window.location.reload();
}))