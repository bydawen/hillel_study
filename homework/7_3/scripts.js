// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) .
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.
// Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

function checkUserNumber() {
  let userInput = '';
  let userNumber = 0;

  for (let i = 0; i < 10; i++) {
    userInput = prompt("Введіть число більше за 100!");
    userNumber = parseInt(userInput);

    if (isNaN(userNumber)) {
      break;
    }

    if (userNumber <= 100) {
      alert("Число НЕ більше за 100 !! Введіть ще раз!");
    }

    if (userNumber > 100) {
      break;
    }
  }

  if (userNumber > 100) {
    console.log(`Ось таке ${userInput} число вводив юзер!!`);
  } else if (userInput) {
    console.log(`Юзер ввів таке "${userInput}" значення, замість коректного числа!`);
  } else {
    console.log(`Юзер взагалі нічого не вводив !!!`);
  }
}

checkUserNumber();
