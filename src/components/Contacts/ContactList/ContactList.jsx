import PropTypes from 'prop-types';
import s from './contactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
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

ContactList.defaultProps = {
  contacts: [],
  removeContact: function () {},
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
