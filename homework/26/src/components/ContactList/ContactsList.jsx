import React from "react";
import { FaTrash } from "react-icons/fa";

import './styles.scss';

export default function ContactsList({ contact, onDelete }) {
  return (
    <div className="contacts-list">
      <h2>Список контактів</h2>

      {contact.length === 0 ? (
        <div className="contacts-list-alert">
          Немає жодного контакту, створіть хоча б один!
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Ім’я</th>
              <th>Прізвище</th>
              <th>Телефон</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.firstName}
                </td>
                <td>
                  {item.lastName}
                </td>
                <td>
                  {item.phone}
                </td>
                <td>
                  <button onClick={() => onDelete(item.id)}>
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
