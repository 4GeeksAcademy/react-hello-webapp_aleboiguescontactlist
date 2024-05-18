import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import ContactCard from './ContactCard';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
