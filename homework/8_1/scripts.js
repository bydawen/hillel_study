// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
//
// let ladder = {
//   up: function () { // підніматиме вас на одну сходинку
//   },
//   down: function () { // опускатиме вас на одну сходинку
//   },
//   showStep: function () { // показує поточну сходинку
//   }
// };
//
// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
//
// ladder.up();
//
// ladder.up();
//
// ladder.down();
//
// ladder.showStep(); // 1
//
// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
//
// ladder.up().up().down().showStep(); // 1

let ladder = {
  currentStep: 0,

  up: function () {
    this.currentStep++;
    return this;
  },

  down: function () {
    this.currentStep--;
    return this;

  },

  showStep: function () {
    console.log(this.currentStep);
    return this;
  }
};

let arrowLadder = {
  currentStep: 0,

  up() {
    let self = this;

    let stepUp = () => {
      self.currentStep++;
      return self;
    };

    return  stepUp();
  },

  down() {
    let self = this;

    let stepDown = () => {
      self.currentStep--;
      return self;
    };

    return  stepDown();
  },

  showStep() {
    let self = this;

    let viewStep = () => {
      console.log(self.currentStep);
      return self;
    };

    return  viewStep();
  }
}
