document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    document.getElementById('task-list').appendChild(taskItem);
    document.getElementById('new-task').value = '';

    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskItem.remove();
    });
});
