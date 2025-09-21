// Створіть клас Coach, який буде представляти тренера. Додайте властивості, такі як ім'я, спеціалізація та рейтинг.
// Також реалізуйте метод для виведення інформації про тренера та його рейтинг.

'use strict'

class Coach {
  constructor(name, spec, rate) {
    this.name = name;
    this.spec = spec;
    this.rate = rate;
  }

  displayInfo() {
    console.log(`Coach: ${this.name}, Specialization: ${this.spec}, Rating: ${this.rate}`);
  }
}

const coach1 = new Coach("Bob", "Box", 55);
coach1.displayInfo();

const coach2 = new Coach("Sandra", "Yoga", 5);
coach2.displayInfo();
