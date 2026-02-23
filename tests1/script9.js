let questions = [
	{
		text: 'Как называется самая маленькая планета?',
		r: 0,
		variants: ['Меркурий', 'Марс', 'Юпитер']
	},
	{
		text: 'Сколько материков на Земле?',
		r: 1,
		variants: ['5', '6', '7']
	},
	{
		text: 'Кто написал "Сказку о рыбаке и рыбке"?',
		r: 2,
		variants: ['Лермонтов', 'Толстой', 'Пушкин']
	},
];

let test_blok = document.querySelector('#test');
let knopka = document.querySelector('#proverka');

for (let i = 0; i < questions.length; i++) {
	let div = document.createElement('div');
	div.classList.add('vopros');
	
	let p = document.createElement('p');
	p.textContent = questions[i].text;
	div.appendChild(p);
	
	for (let j = 0; j < questions[i].variants.length; j++) {
		let label = document.createElement('label');
		let radio = document.createElement('input');
		
		radio.type = 'radio';
		radio.name = 'vopros' + i;
		
		label.appendChild(radio);
		label.append(questions[i].variants[j]);
		div.appendChild(label);
		div.appendChild(document.createElement('br'));
	}
	
	test_blok.appendChild(div);
}

knopka.addEventListener('click', function() {
	let blocks = document.querySelectorAll('.vopros');
	
	for (let i = 0; i < blocks.length; i++) {
		let radio_knopki = blocks[i].querySelectorAll('input[type="radio"]');
		let pravilniy_nomer = questions[i].r;
		
		for (let j = 0; j < radio_knopki.length; j++) {
			let radio = radio_knopki[j];
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
