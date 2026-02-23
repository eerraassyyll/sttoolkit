let voprosi = [
	'Как называется столица Франции?',
	'Сколько планет в Солнечной системе?',
	'Какое сейчас время года?'
];

let otveti = [
	'Париж',
	'8',
	'Зима'
];

let blok_test = document.querySelector('#test');
let knopka = document.querySelector('#knopka');

for (let vopros of voprosi) {
	let div = document.createElement('div');
	
	let p = document.createElement('p');
	p.textContent = vopros;
	div.appendChild(p);
	
	let input = document.createElement('input');
	div.appendChild(input);
	
	blok_test.appendChild(div);
}

knopka.addEventListener('click', function() {
	let spisk_inputov = blok_test.querySelectorAll('input');
	
	for (let i = 0; i < spisk_inputov.length; i++) {
		if (spisk_inputov[i].value === otveti[i]) {
			spisk_inputov[i].classList.add('r');
			spisk_inputov[i].classList.remove('wr');
		} else {
			spisk_inputov[i].classList.add('wr');
			spisk_inputov[i].classList.remove('r');
		}
	}
});
