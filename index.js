

function createTask(){
    const parentElement = document.getElementById('idlist');
    const newElement = document.createElement('li');
    newElement.textContent = document.getElementById('idtext').value;
    parentElement.append(newElement);
}
function checkTask(evt){
    if (evt.target.tagName === 'LI') {
        // Код, который будет выполнен при клике на элемент <li>
        evt.target.classList.toggle('completed');
      } 
}

const button = document.getElementById('idbutton');
button.addEventListener('click', createTask);

const list = document.getElementById('idlist');
list.addEventListener('click', checkTask);

