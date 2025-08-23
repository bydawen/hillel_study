// Створіть об'єкт, який матиме одну властивість з масивом об'єктів.
// Які представляють контакти у вашій контактній книзі.
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти.
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

'use strict'

let contactsList = {
  contacts: [
    { name: "John", phone: "+1234567890", email: "john@example.com" },
    { name: "Mike", phone: "+0987654321", email: "mike@example.com" },
    { name: "Bob", phone: "+0679034561", email: "bob@example.com" },
    { name: "Alice", phone: "+32154567", email: "alice@example.com" },
    { name: "Jeff", phone: "+234567890", email: "jeff@example.com" },
    { name: "Donald", phone: "+05004392", email: "donald@example.com" },
    { name: "Kate", phone: "+9800233145", email: "kate@example.com" }
  ],

  findContact(name) {
    return this.contacts.find(contact => contact.name === name);
  },

  addNewContact(name, phone, email) {
    let newContact = {
      name: name,
      phone: phone,
      email: email,
    };

    this.contacts.push(newContact);
  }
};

console.log(contactsList.findContact('Kate'));
console.log(contactsList.findContact('Bob'));

contactsList.addNewContact("Sarah", "+111223344", "sarah@example.com");
contactsList.addNewContact("Trump", "+493409230", "trump@example.com");
console.log(contactsList.contacts);
