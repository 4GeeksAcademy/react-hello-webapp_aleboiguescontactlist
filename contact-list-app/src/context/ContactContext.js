import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Mike Anamendolla",
      address: "5842 Hillcrest Rd",
      phone: "(870) 288-4149",
      email: "mike.ana@example.com",
      image: "https://via.placeholder.com/150"
    }
  ]);

  const addContact = (contact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...contact, id: prevContacts.length + 1 }
    ]);
  };

  const removeContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
  };

  const updateContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, removeContact, updateContact }}>
      {children}
    </ContactContext.Provider>
  );
};
