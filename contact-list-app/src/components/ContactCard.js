import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const ContactCard = ({ contact }) => {
  const { removeContact } = useContext(ContactContext);

  return (
    <div className="contact-card">
      <img src={contact.image} alt={contact.name} className="contact-image" />
      <div className="contact-details">
        <h3>{contact.name}</h3>
        <p>{contact.address}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
      <button onClick={() => removeContact(contact.id)} className="delete-button">🗑️</button>
    </div>
  );
};

export default ContactCard;
