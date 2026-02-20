let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && this.value.trim() !== '') {
    let li = document.createElement('li');
    
    let task = document.createElement('span');
    task.className = 'task';
    task.textContent = this.value;
    li.appendChild(task);

    // редактирование по двойному клику
    task.addEventListener('dblclick', function() {
      let edit = document.createElement('input');
      edit.value = this.textContent;
      this.textContent = '';
      this.appendChild(edit);
      edit.focus();
      edit.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          task.textContent = this.value;
        }
      });
    });

    let remove = document.createElement('span');
    remove.textContent = '(удалить)';
    remove.className = 'remove';
    remove.onclick = () => li.remove();
    li.appendChild(remove);

    let mark = document.createElement('span');
    mark.textContent = '(сделано)';
    mark.className = 'mark';
    mark.onclick = () => li.classList.toggle('done');
    li.appendChild(mark);

    list.appendChild(li);
    this.value = '';
  }
});
