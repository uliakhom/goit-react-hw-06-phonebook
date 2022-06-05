import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './contactForm.module.css';

import { actions } from '../../../redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const { name, number } = contact;

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const addContact = data => {
    const repeatedContact = contacts.find(
      contact => contact.number === data.number || contact.name === data.name
    );
    if (repeatedContact) {
      alert(`${data.name && data.number} is already in contacts!`);
      return;
    }
    const action = actions.addContact(data);
    dispatch(action);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ ...contact });
    setContact({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.container}>
        <label htmlFor={nanoid()} className={s.label}>
          Name
        </label>
        <input
          className={s.input}
          id={nanoid()}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          required
        />
      </div>
      <div className={s.container}>
        <label htmlFor={nanoid()} className={s.label}>
          Number
        </label>
        <input
          className={s.input}
          id={nanoid()}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
