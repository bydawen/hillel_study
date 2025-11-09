export default function validateInput({ firstName, lastName, phone }) {
  const errors = {};

  if (!firstName.trim()) {
    errors.firstName = "Введіть імʼя";
  } else if (firstName.trim().length < 2) {
    errors.firstName = "Повинно бути мінімум 2 символи!";
  }

  if (!lastName.trim()) {
    errors.lastName = "Введіть призвіще";
  } else if (lastName.trim().length < 2) {
    errors.lastName = "Повинно бути мінімум 2 символи!";
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phone.trim()) {
    errors.phone = "Введіть номер телефону";
  } else if (!phoneRegex.test(phone)) {
    errors.phone = "Номер повинен бути у форматі +380123456789 та мати 9 цифр після +380..."
  }

  return errors;
}