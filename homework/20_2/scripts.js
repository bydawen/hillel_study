// Moment.js
// Вивести дату вашого народження в довільному форматі із використанням бібліотеки moment.js
// Отримати від користувача дату його народження у форматі ДД/ММ/РРРР та через moment.js перетворити її в інший формат (напр., РРРР-ММ-ДД)
// реалізувати перевірку за допомогою регулярних виразів на коректність користувацького вводу
// якщо формат невірний - вивести помилку на сторінку (використати bootstrap стилі)

'use strict'

moment.locale('uk');

const myBirthDate = moment('1991-08-06');
const birthDateTitle = document.getElementById('birthDayTitle');

birthDateTitle.textContent = myBirthDate.format('DD MMMM YYYY');

const userData = document.getElementById('userData');
const btnUserData = document.getElementById('btnUserData');
const dataResult = document.querySelector('.data-result');

btnUserData.addEventListener('click', (e) => {
  let userInput = userData.value.trim();
  let userInputFormatted = moment(userInput, 'DD/MM/YYYY', true);

  if (userInputFormatted.isValid()) {
    dataResult.innerHTML = `
      <div class="alert alert-success" role="alert">
          Юзер ввів дату коректно!
          <br />
          <b>${userInputFormatted.format('MMMM D, YYYY')}</b>
      </div>
    `;
  } else if (!userInput) {
    dataResult.innerHTML = `
      <div class="alert alert-warning" role="alert">
          Юзер взагалі <b>НІЧОГО</b> не вводив!
      </div>
    `;
  } else {
    dataResult.innerHTML = `
      <div class="alert alert-danger" role="alert">
          Юзер ввів <b>${userData.value}</b> 
          <br />
          це <b>НЕ</b> у форматі <b>ДД/ММ/РРРР !</b>
      </div>
    `;
  }
});

