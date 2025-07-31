let n = Number(prompt("Введіть число більше 0"));
let counter = 0;
let sum = 0;

if (n <= 0) {
  alert("Увага! Ви вели число яке НЕ більше 0 !!!");
} else if (isNaN(n)) {
  alert("Увага! Введіть число, а не строку !!");
} else {
  document.write(`Список усіх дільників числа ${n}:<br>`);
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      document.write(i + `<br>`);
      if (i % 2 === 0) {
        counter++;
        sum = sum +  i;
      }
    }
  }

  document.write('<br>');
  document.write(`Кількість парних дільників: ${counter}<br>`);
  document.write('<br>');
  document.write(`Сума парних дільників: ${sum}<br>`);
}
