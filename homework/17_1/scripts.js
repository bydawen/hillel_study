// Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій:
// додавання, віднімання, множення та ділення.

'use strict'

class Calculator {
  add(argument1, argument2) {
    return argument1 + argument2;
  }

  subtract(argument1, argument2) {
    return argument1 - argument2;
  }

  multiply(argument1, argument2) {
    return argument1 * argument2;
  }

  divide(argument1, argument2) {
    return argument1 / argument2;
  }
}

const calc = new Calculator();
console.log(calc.add(5,15));
console.log(calc.subtract(15,3));
console.log(calc.multiply(4,8));
console.log(calc.divide(24,5));
