let bazu_dannih = [
	{
		text: 'Как зовут кота в "Том и Джерри"?',
		right: 'Том',
	},
	{
		text: 'Сколько ног у паука?',
		right: '8',
	},
	{
		text: 'Цвет апельсина?',
		right: 'оранжевый',
	}
];

let blok2 = document.querySelector('#test2');
let knopka2 = document.querySelector('#knopka2');

for (let element of bazu_dannih) {
	let div = document.createElement('div');
	let p = document.createElement('p');
	p.textContent = element.text;
	div.appendChild(p);
	
	let input = document.createElement('input');
	input.dataset.right = element.r;
	div.appendChild(input);
	
	blok2.appendChild(div);
}

knopka2.addEventListener('click', function() {
	let polya = blok2.querySelectorAll('input');
	for (let pole of polya) {
		if (pole.value === pole.dataset.r) {
			pole.classList.add('r');
			pole.classList.remove('wr');
		} else {
			pole.classList.add('wr');
			pole.classList.remove('r');
		}
	}
});
