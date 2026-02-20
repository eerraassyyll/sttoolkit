let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');

function createCell(tr, value, className) {
    let td = document.createElement('td');
    td.textContent = value;
    td.classList.add(className);
    tr.appendChild(td);
    return td;
}

function recountTotal() {
    let costs = table.querySelectorAll('.cost');
    let sum = 0;
    costs.forEach(cost => {
        sum += Number(cost.textContent);
    });
    total.textContent = sum;
}

function allowEdit(td) {
    td.addEventListener('dblclick', function() {
        let oldText = td.textContent;
        td.textContent = '';
        
        let input = document.createElement('input');
        input.value = oldText;
        td.appendChild(input);
        input.focus();
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                td.textContent = this.value;
                
                if (td.classList.contains('price') || td.classList.contains('amount')) {
                    let tr = td.parentElement;
                    let price = Number(tr.querySelector('.price').textContent);
                    let amount = Number(tr.querySelector('.amount').textContent);
                    tr.querySelector('.cost').textContent = price * amount;
                    recountTotal();
                }
            }
        });
    });
}

add.addEventListener('click', function() {
    if (!name.value || !price.value || !amount.value) return;
    
    let tr = document.createElement('tr');
    
    allowEdit(createCell(tr, name.value, 'name'));
    allowEdit(createCell(tr, price.value, 'price'));
    allowEdit(createCell(tr, amount.value, 'amount'));
    createCell(tr, price.value * amount.value, 'cost');
    
    createCell(tr, '(удалить)', 'remove').addEventListener('click', function() {
        tr.remove();
        recountTotal();
    });
    
    table.appendChild(tr);
    recountTotal();
    
    name.value = '';
    price.value = '';
    amount.value = '';
});
