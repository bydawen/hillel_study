// Створіть клас BankAccount, який буде представляти банківський рахунок.
// Додайте властивість балансу та методи для внесення та зняття грошей.

'use strict'

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  getBalance() {
    console.log(this.balance);
  }

  deposit(number) {
    this.balance += number;
  }

  withdraw(number) {
    this.balance -= number;
  }

}

const account1 = new BankAccount(10500);
account1.getBalance();

account1.deposit(20);
account1.getBalance();

account1.withdraw(10000);
account1.getBalance();

account1.withdraw(20);
account1.getBalance();
