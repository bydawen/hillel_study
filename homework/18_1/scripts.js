// Реалізувати таймер відліку:
// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:30
// Коли закінчився таймер зупинити його

'use strict'

let timer = 90;

function viewTimer() {
  let timerMin = String(Math.floor(timer / 60)).padStart(2, '0');
  let timerSec = String(timer % 60).padStart(2, '0');

  let timerTotal = timerMin + ':' + timerSec;

  const timerBlock = document.querySelector('.timer p');

  timerBlock.innerHTML = timerTotal;
}

let intervalTimer = setInterval(() => {
  timer--;

  if (timer <= 0) {
    clearInterval(intervalTimer);
  }

  viewTimer();
}, 1000);

viewTimer();
