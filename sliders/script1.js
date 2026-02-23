let spisk_tekstov = ['text1', 'text2', 'text3', 'text4'];
let blok = document.querySelector('#slider');

let i = 0;

blok.textContent = spisk_tekstov[i];

setInterval(function() {
	i++;
	
	if (i === spisk_tekstov.length) {
		i = 0;
	}
	
	blok.textContent = spisk_tekstov[i];
}, 1000);
