import { useDispatch, useSelector } from 'react-redux';
import s from './contactList.module.css';
import { actions } from 'redux/contacts/contacts-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(actions.removeContact(id));
  };

  const elements = contacts.map(({ id, name, number }) => (
    <li key={id} className={s.item}>
      {name}: {number}
      <button onClick={() => removeContact(id)} className={s.btn}>
        Delete
      </button>
    </li>
  ));
  return <ul className={s.list}>{elements}</ul>;
};

export default ContactList;
