// Оптимізувати минуле ДЗ із використанням babel

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

const tooltipBtn = document.querySelector ('.btn-tooltip');
const tooltip = new bootstrap.Tooltip(tooltipBtn, {
  placement: 'top',
  customClass: 'custom-tooltip',
  title: tooltipBtn.getAttribute('data-bs-title'),
});

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('alert-wrapper');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById('liveAlertBtn');
let alertVisible = false;

if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    if (alertVisible) {
      const alertEl = alertPlaceholder.querySelector('.alert-wrapper');

      if (alertEl) {
        alertEl.remove();
        alertVisible = false;
      }
    } else {
      appendAlert('Nice, you triggered this alert message!', 'success');
      alertVisible = true;
    }
  });
}
