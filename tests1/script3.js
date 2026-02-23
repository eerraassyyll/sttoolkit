let otveti = [
	'Земля',
	'20',
	'зеленая'
];

let knopka = document.querySelector('#knopka');
let polya = document.querySelectorAll('#test input');

knopka.addEventListener('click', function() {
	for (let i = 0; i < polya.length; i++) {
		if (polya[i].value === otveti[i]) {
			polya[i].classList.add('r');
			polya[i].classList.remove('wr');
		} else {
			polya[i].classList.add('wr');
			polya[i].classList.remove('r');
		}
	}
});
