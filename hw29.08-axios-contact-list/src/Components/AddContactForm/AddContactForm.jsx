import React from 'react';
import './AddContactForm.scss';
const AddContactForm = ({ setContacts }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('foo');

    const contact = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    setContacts((prev) => {
      return [...prev, contact];
    });

    e.target.name.value = '';
    e.target.email.value = '';
    e.target.phone.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name='name'
          type='text'
        />
      </label>
      <label>
        Phone
        <input
          name='phone'
          type='text'
        />
      </label>
      <label>
        Email
        <input
          name='email'
          type='text'
        />
      </label>

      <button type='submit'>Add new contact</button>
    </form>
  );
};

export default AddContactForm;

