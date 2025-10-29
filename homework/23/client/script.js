'use strict';

const inputText = document.getElementById('inputText');
const addTaskBtn = document.getElementById('addTaskBtn');
const showAllTaskBtn = document.getElementById('showAllTaskBtn');
const todoList = document.getElementById('todoList');
const clearDB = document.getElementById('clearDB');
const alertDB = document.getElementById('alertDB');

function addTodoToList(item) {
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

  if (item.status) {
    listItem.classList.add('is-completed');
  }

  listItem.innerHTML = `
    <span>${item.text}</span>
    <div class="d-flex gap-2 justify-content-between align-items-center task-info">
        <span class="badge bg-secondary">ID: ${item.id}</span>
        <button class="btn btn-success btn-sm" data-id="${item.id}">
            <i class="bi bi-check2"></i>
        </button>
    </div>
  `;

  todoList.appendChild(listItem);
}

addTaskBtn.addEventListener('click', async () => {
  const text = inputText.value.trim();
  if (!text) return;

  await fetch('http://localhost:3001/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  inputText.value = '';
  alertDB.classList.add('d-none');
});

showAllTaskBtn.addEventListener('click', async () => {
  const response = await fetch('http://localhost:3001/');
  const taskDB = await response.json();

  todoList.innerHTML = '';
  taskDB.forEach(addTodoToList);

  if (taskDB.length > 0) {
    clearDB.classList.remove('d-none');
  } else {
    clearDB.classList.add('d-none');
  }

  taskDB.length === 0 ? alertDB.classList.remove('d-none') : alertDB.classList.add('d-none');
});

clearDB.addEventListener('click', async () => {
  await fetch('http://localhost:3001/', {
    method: 'DELETE'
  });

  todoList.innerHTML = '';
  clearDB.classList.add('d-none');
  alertDB.classList.remove('d-none');
});

todoList.addEventListener('click', async (event) => {
  const button = event.target.closest('button[data-id]');
  if (!button) return;

  event.preventDefault();

  const listItem = button.closest('.list-group-item');
  listItem.classList.toggle('is-completed');

  const id = button.dataset.id;
  await fetch(`http://localhost:3001/${id}`, {
    method: 'PUT'
  });
});
