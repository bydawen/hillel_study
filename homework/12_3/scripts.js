// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань.
// Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.
//
// Покроковий план:
//
// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

'use strict'

let addButton = document.getElementById('add-button');
let addInput = document.getElementById('add-input');
let taskList = document.querySelector('.task-list');

addButton.addEventListener('click', () => {
  let taskName = addInput.value.trim();

  if (taskName) {
    const li = document.createElement('li');
    li.textContent = taskName + "  ";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add('delete-button');

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    addInput.value = "";
  }
});

taskList.addEventListener('click', (element) => {
  if (element.target.classList.contains('delete-button')) {
    element.target.parentElement.remove();
  }
});
