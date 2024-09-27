document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    if (taskInput.value) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = ''; // Input alanını temizle
    } else {
        alert('Lütfen bir görev girin!');
        
    }
});
