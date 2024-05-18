import React from 'react';
import { ContactProvider } from './context/ContactContext';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';

const App = () => {
  return (
    <ContactProvider>
      <div className="app-container">
        <h1>Contact List</h1>
        <AddContact />
        <ContactList />
      </div>
    </ContactProvider>
  );
};

export default App;
