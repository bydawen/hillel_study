// Створити додаток по Зоряним війнам
// Реалізувати навігацію: Персонажі, Планети, Транспорт
// Виводити списки відповідних сутностей по кожному розділу
// Приділити увагу UI/UX (верстка, стилі, можна використовувати bootstrap або tailwind)
// Реалізувати пагінацію (підвантаження контента)
// Завдання з *: При кліці на сутність - відображати деталі по ній (персонаж, планета, транспорт)

'use strict'

let swapiPeople = 'https://swapi.dev/api/people';
let swapiPlanets = 'https://swapi.dev/api/planets';
let swapiStarships = 'https://swapi.dev/api/starships';

const btnViewPeople = document.getElementById('btnViewPeople');
const btnViewPlanets = document.getElementById('btnViewPlanets');
const btnViewStarships = document.getElementById('btnViewStarships');

const listPeople = document.querySelector('.is-people');
const listPlanets = document.querySelector('.is-planets');
const listStarships = document.querySelector('.is-starships');

const btnMorePeople = document.getElementById('btnMorePeople');
const btnMorePlanets = document.getElementById('btnMorePlanets');
const btnMoreStarships = document.getElementById('btnMoreStarships');

function loadData(api, list, moreBtn) {
  fetch(api)
    .then(response => response.json())
    .then(result => {
      console.log(result);

      viewItems(result.results, list);

      // TODO: ask for this
      api = result.next;

      if (result.next) {
        moreBtn.parentElement.classList.remove('d-none');
      } else {
        moreBtn.parentElement.classList.add('d-none');
      }
    })
}

function viewItems(items, listType) {
  items.forEach(item => {
    const listItem = document.createElement('a');

    listItem.classList.add('list-group-item', 'list-group-item-action');
    listItem.textContent = item.name;

    listType.appendChild(listItem);
  })
}
// TODO: ask for this
listPeople.addEventListener('click', (e) => {
  if (e.target.tagName === "A") {
    fetch(swapiPeople)
      .then(response => response.json())
      .then(result => {
        result.results.forEach(person => {
          document.querySelector('#peopleModal .modal-title').textContent = person.name;
        });
      })

    const modal = new bootstrap.Modal(document.getElementById('peopleModal'));
    modal.show();
  }
})

btnViewPeople.addEventListener('click', (e) => {
  loadData(swapiPeople, listPeople, btnMorePeople);
  e.target.setAttribute('disabled', 'disabled');
});

btnViewPlanets.addEventListener('click', (e) => {
  loadData(swapiPlanets, listPlanets, btnMorePlanets);
  e.target.setAttribute('disabled', 'disabled');
});

btnViewStarships.addEventListener('click', (e) => {
  loadData(swapiStarships, listStarships, btnMoreStarships);
  e.target.setAttribute('disabled', 'disabled');
});

btnMorePeople.addEventListener('click', (e) => {
  loadData(swapiPeople, listPeople, btnMorePeople);
});

btnMorePlanets.addEventListener('click', (e) => {
  loadData(swapiPlanets, listPlanets, btnMorePlanets);
});

btnMoreStarships.addEventListener('click', (e) => {
  loadData(swapiStarships, listStarships, btnMoreStarships);
});
