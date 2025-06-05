const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return alert('Please enter a task!');
    addTask(taskText);
    taskInput.value = '';
    taskInput.focus();
});

function addTask(text) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = text;

    // Toggle completed on click
    span.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');
    delBtn.textContent = '✕';

    delBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
}

// Allow enter key to add task
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});
