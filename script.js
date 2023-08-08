const buttonNewTask = document.querySelector('.new-task button');
const taskBox = document.querySelector('.task-box');

const changeTaskInput = document.querySelector('#change-task');

buttonNewTask.addEventListener('click', addTask);

function addTask() {
    event.preventDefault();

    const taskItem = document.createElement('label');
    taskItem.classList.add('task-item');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';

    const fakeIconCheck = document.createElement('i')
    fakeIconCheck.classList.add('ph');
    fakeIconCheck.classList.add('ph-check-fat');

    const fakeCheckBoxInput = document.createElement('span');
    fakeCheckBoxInput.classList.add('fake-checkbox');
    
    const textItem = document.createElement('p');
    textItem.innerText = changeTaskInput.value;
    
    const buttonTrash = document.createElement('button');
    
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('ph');
    trashIcon.classList.add('ph-trash');
    
    taskItem.appendChild(checkboxInput);
    taskItem.appendChild(fakeCheckBoxInput);
    taskItem.appendChild(textItem);
    taskItem.appendChild(buttonTrash);
    buttonTrash.appendChild(trashIcon);
    fakeCheckBoxInput.appendChild(fakeIconCheck);
    taskBox.appendChild(taskItem);

    buttonTrash.addEventListener('click', deleteTask);
    checkboxInput.addEventListener('click', completTask);

    changeTaskInput.value = '';
}

function deleteTask(e) {
    e.target.parentElement.parentElement.remove();
}

function completTask(e) {
    e.target.parentElement.classList.toggle('complete');
}