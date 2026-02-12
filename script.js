function calculate() {
    let inp = prompt('Введите оценки через запятую: 5,4,3,5');
    
    if (!inp) return;

    let otsenki = inp.split(',').map(s => s.trim()).filter(s => s !== "").map(Number);

    if (otsenki.some(isNaN) || otsenki.length === 0) {
        alert("ведите только числа через запятую!");
        return;
    }

    let sum = otsenki.reduce((a, b) => a + b, 0);
    let avg = (sum / otsenki.length).toFixed(2);
    let max = Math.max(...otsenki);
    let min = Math.min(...otsenki);
    
    alert(`Средний: ${avg}\nМин: ${min}\nМакс: ${max}\nВсего: ${otsenki.length}`);
}

function convert() {
    const val = parseFloat(document.getElementById('tempinpt').value);
    const mode = document.getElementById('conver').value;

    if (isNaN(val)) {
        alert('Введите числовое значение температуры');
        return;
    }

    let result;
    if (mode === "ctof") {
        result = (val * 9/5) + 32;
        alert(`${val}°C = ${result.toFixed(2)}°F`);
    } else {
        result = (val - 32) * 5/9;
        alert(`${val}°F = ${result.toFixed(2)}°C`);
    }
}

let tasks = []; 

function rendtasks() {
    const list = document.getElementById('todoList');
    if (!list) return; 
    list.innerHTML = '';

    tasks.forEach((task, index) => {
        const div = document.createElement('div');
        div.className = 'task-item';
        div.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="deltask(${index})">-</button>
        `;
        list.appendChild(div);
    });

}

function addtask() {
    const input = document.getElementById('taskInput');
    if (!input || input.value.trim() === "") return;

    tasks.push({
        text: input.value,
        completed: false
    });

    input.value = '';
    rendtasks();
}

function deltask(index) {
    tasks.splice(index, 1);
    rendtasks();
}

rendtasks();