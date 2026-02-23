let spisk_voprosov = {
	'2 + 2': '4',
	'Зимой и летом одним цветом': 'елка',
	'Столица России': 'Москва'
};

let blok1 = document.querySelector('#test1');
let knopka1 = document.querySelector('#knopka1');

for (let vopros in spisk_voprosov) {
	let div = document.createElement('div');
	let p = document.createElement('p');
	p.textContent = vopros;
	div.appendChild(p);
	
	let input = document.createElement('input');
	input.dataset.right = spisk_voprosov[vopros];
	div.appendChild(input);
	
	blok1.appendChild(div);
}

knopka1.addEventListener('click', function() {
	let inputi = blok1.querySelectorAll('input');
	for (let input of inputi) {
		if (input.value === input.dataset.r) {
			input.classList.add('r');
			input.classList.remove('wr');
		} else {
			input.classList.add('wr');
			input.classList.remove('r');
		}
	}
});
