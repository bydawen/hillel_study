import { useState, useEffect } from 'react'
import './App.scss'

import ContactsList from './components/ContactList/ContactsList';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [view, setView] = useState("list");
  const [contacts, setContacts] = useState([]);

  const handleViewList = () => setView("list");
  const handleViewForm = () => setView("form");

  const handleAddNewContact = (newItem) => {
    setContacts([...contacts, {...newItem, id: crypto.randomUUID()}]);
    setView("list");
  }

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((item) => item.id !== id));
  }

  useEffect(() => {
    const contactsLibrary = localStorage.getItem("contacts");

    if (contactsLibrary) {
      setContacts(JSON.parse(contactsLibrary));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>
        Homework 26
      </h1>

      <div className="view-buttons">
        <button
          onClick={handleViewList}
          className={view === "list" ? "active" : ""}
        >
          Список контактів
        </button>
        <button
          onClick={handleViewForm}
          className={view === "form" ? "active" : ""}
        >
          Створити новий контакт
        </button>
      </div>

      <div className="view-container">
        {view === "list" &&
          <ContactsList contact={contacts} onDelete={handleDeleteContact} />
        }

        {view === "form" &&
          <ContactForm onCancel={handleViewList} addNewContact={handleAddNewContact} />
        }
      </div>
    </>
  )
}

export default App
