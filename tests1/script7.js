let knopki = document.querySelectorAll('#test1 input[type="radio"]');

for (let r of knopki) {
	r.addEventListener('change', function() {
		let roditel = this.parentElement;
		
		if (this.hasAttribute('data-r')) {
			roditel.classList.add('r');
			roditel.classList.remove('wr');
		} else {
			roditel.classList.add('wr');
			roditel.classList.remove('r');
		}
	});
}


let knopka = document.querySelector('#proverit');

knopka.addEventListener('click', function() {
	let vibrannie = document.querySelectorAll('#test2 input[type="radio"]:checked');
	
	for (let r of vibrannie) {
		let roditel = r.parentElement;
		
		if (r.hasAttribute('data-r')) {
			roditel.classList.add('r');
			roditel.classList.remove('wr');
		} else {
			roditel.classList.add('wr');
			roditel.classList.remove('r');
		}
	}
});
