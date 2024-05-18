import React, { useState, useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const AddContact = () => {
  const { addContact } = useContext(ContactContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('https://via.placeholder.com/150');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, address, phone, email, image });
    setName('');
    setAddress('');
    setPhone('');
    setEmail('');
    setImage('https://via.placeholder.com/150');
  };

  return (
    <form onSubmit={handleSubmit} className="add-contact-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        required
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
