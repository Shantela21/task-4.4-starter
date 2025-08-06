const root = document.getElementById('root');

// Input field
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter a task';

// Add button
const button = document.createElement('button');
button.textContent = 'Add Task';

// Task list
const taskList = document.createElement('ul');

// Task count message
const taskCountMsg = document.createElement('p');
taskCountMsg.textContent = 'Tasks left: 0';
root.appendChild(input);
root.appendChild(button);
root.appendChild(taskList);
root.appendChild(taskCountMsg);

// Function to update task count
function updateTaskCount() {
  const totalTasks = taskList.querySelectorAll('li').length;
  taskCountMsg.textContent = `Tasks left: ${totalTasks}`;
}
button.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '10px';
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';

    // Toggle line-through on checkbox
    checkbox.addEventListener('change', () => {
      taskSpan.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    // Delete task
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
      updateTaskCount();
    });
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    input.value = '';
    updateTaskCount();
  } else {
    alert('Please enter a task!');
  }
});

