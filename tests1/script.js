let inputs = document.querySelectorAll('#test1 input');

for (let input of inputs) {
  input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      if (this.value === this.dataset.r) {
        this.classList.add('r');
        this.classList.remove('wr');
      } else {
        this.classList.add('wr');
        this.classList.remove('r');
      }
    }
  });
}

let knopka = document.querySelector('#proverka');
let voprosi = document.querySelectorAll('#test2 input');

knopka.addEventListener('click', function() {
  for (let input of voprosi) {
    if (input.value === input.dataset.r) {
      input.classList.add('r');
      input.classList.remove('wr');
    } else {
      input.classList.add('wr');
      input.classList.remove('r');
    }
  }
});
