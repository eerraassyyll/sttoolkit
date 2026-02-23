let otveti = [2, 1, 2]; 

let knopka = document.querySelector('#knopka');
let blocks = document.querySelectorAll('.vopros');

knopka.addEventListener('click', function() {
	for (let i = 0; i < blocks.length; i++) {
		let radio_v_voprose = blocks[i].querySelectorAll('input[type="radio"]');
		let pravilniy_nomer = otveti[i];
		
		for (let j = 0; j < radio_v_voprose.length; j++) {
			let radio = radio_v_voprose[j];
			let roditel = radio.parentElement;
			
			roditel.classList.remove('r', 'wr');
			
			if (radio.checked) {
				if (j === pravilniy_nomer) {
					roditel.classList.add('r');
				} else {
					roditel.classList.add('wr');
				}
			}
		}
	}
});
