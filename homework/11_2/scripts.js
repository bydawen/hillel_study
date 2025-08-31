// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір.
// При повторному натисканні – повертається попередній колір

document.getElementById('color-changer').addEventListener('click', () => {
  document.querySelector('.color-block').classList.toggle('active');
});
