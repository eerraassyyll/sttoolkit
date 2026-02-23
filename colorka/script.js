let rows = 3;
let cols = 3;
let colors = ['red', 'green', 'blue'];
let moves = 0;

function getRandomElement(arr) {
let index = Math.floor(Math.random() * arr.length);
return arr[index];
}

function getNextElement(arr, elem) {
let index = arr.indexOf(elem);
if (index === -1) return arr[0];
return arr[(index + 1) % arr.length];
}

function checkVictory(table, targetColor) {
const cells = table.getElementsByTagName("td");
for (let cell of cells) {
    if (cell.className !== targetColor) {
    return false;
    }
}
return true;
}

function updateCounter() {
document.getElementById("counter").textContent = "Ходы: " + moves;
}

function createField(rows, cols) {
const table = document.getElementById("field");

for (let r = 0; r < rows; r++) {
    const tr = document.createElement("tr");
    for (let c = 0; c < cols; c++) {
    const td = document.createElement("td");
    td.className = getRandomElement(colors);

    td.addEventListener("click", function() {
        let currentColor = td.className;
        let nextColor = getNextElement(colors, currentColor);
        td.className = nextColor;

        moves++;
        updateCounter();

        if (checkVictory(table, nextColor)) {
        alert("Победа за " + moves + " ходов!");
        }
    });

    tr.appendChild(td);
    }
    table.appendChild(tr);
}
}

createField(rows, cols);
