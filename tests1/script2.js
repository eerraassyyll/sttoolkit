let otveti = [
	'Том',
	'25',
	'голубого',
];

let knopka = document.querySelector('#knopka');
let spisk_voprosov = document.querySelectorAll('#test input');

knopka.addEventListener('click', function() {
	for (let i = 0; i < spisk_voprosov.length; i++) {
		if (spisk_voprosov[i].value === otveti[i]) {
			spisk_voprosov[i].classList.add('r');
			spisk_voprosov[i].classList.remove('wr');
		} else {
			spisk_voprosov[i].classList.add('wr');
			spisk_voprosov[i].classList.remove('r');
		}
	}
});
