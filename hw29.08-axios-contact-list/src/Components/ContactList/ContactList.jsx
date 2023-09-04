import React, { useEffect, useState } from 'react';
import AddContactForm from '../AddContactForm/AddContactForm';
import './ContactList.scss';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) setContacts(storedContacts);
  }, []);

  useEffect(() => {
    if (contacts.length === 0) return;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='contact-list'>
      <AddContactForm setContacts={setContacts} />

      <div className='contacts'>
        {contacts.map((contact) => (
          // <li key={Math.random() + contact.phone}>
          //   {contact.name + '  ' + contact.email + '  ' + contact.phone}
          // </li>
          <li key={Math.random() + contact.phone}>
            <div>{contact.name}</div>
            <div>{contact.phone}</div>
            <div>{contact.email}</div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ContactList;

