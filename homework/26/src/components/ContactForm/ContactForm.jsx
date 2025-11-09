import React, { useState, useEffect } from "react";
import ContactInput from "../ContactInput/ContactInput";
import validateInput from "./validation";

import './style.scss';

export default function ContactForm({ addNewContact, onCancel }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setError] = useState({});

  useEffect(() => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setError({});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateInput({ firstName, lastName, phone });
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    const newContact = {
      firstName,
      lastName,
      phone,
    };

    addNewContact(newContact);
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  }

  return (
    <div className="add-contact-form">
      <h2>Додати контакт</h2>
      <form onSubmit={handleSubmit}>
        <ContactInput
          label="Ім’я:"
          id="firstName"
          type="text"
          value={firstName}
          placeholder="Введіть ім’я"
          onChange={(e) => setFirstName(e.target.value)}
          onError={errors.firstName}
        />

        <ContactInput
          label="Прізвище:"
          id="lastName"
          type="text"
          value={lastName}
          placeholder="Введіть прізвище"
          onChange={(e) => setLastName(e.target.value)}
          onError={errors.lastName}
        />

        <ContactInput
          label="Телефон:"
          id="phone"
          type="tel"
          value={phone}
          placeholder="+380..."
          maxLength={13}
          onChange={(e) => setPhone(e.target.value)}
          onError={errors.phone}
        />

        <div className="form-actions">
          <button type="button" onClick={handleCancel}>Відміна</button>
          <button type="submit">Зберегти</button>
        </div>
      </form>
    </div>
  );
}
