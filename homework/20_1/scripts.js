// 1) Bootstrap:
// Вивести на сторінку кнопку (застосувати стилі бутстрапа), при натисканні на яку, відкривається дефолтне модальне вікно із деякими даними
// Повісити на цю кнопку Tooltip із довільним текстом
// Створити поруч ще одну кнопку, при натисканні на яку, відображається бутстрапівський алерт. При повторному натисканні - він зникає

'use strict'

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
