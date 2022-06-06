import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import s from './contacts.module.css';

import { actions } from 'redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/filter/filter-actions';
import { getFilter } from 'redux/filter/filter-selectors';

const Contacts = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const addContact = data => {
    const repeatedContact = contacts.find(
      contact => contact.number === data.number || contact.name === data.name
    );
    if (repeatedContact) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    const action = actions.addContact(data);
    dispatch(action);
  };

  const filteredContacts = useSelector(getFilteredContacts);

  const removeContact = id => {
    dispatch(actions.removeContact(id));
  };

  const filter = useSelector(getFilter);

  const filterContact = ({ target }) => {
    const action = changeFilter(target.value);

    dispatch(action);
  };

  return (
    <div className={s.container}>
      <div className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm addContact={addContact} />
      </div>
      <div className={s.contacts}>
        <h2 className={s.contacts__title}>Contacts</h2>
        <Filter filter={filter} filterContact={filterContact} />
        <ContactList
          contacts={filteredContacts}
          removeContact={removeContact}
        />
      </div>
    </div>
  );
};

export default Contacts;
