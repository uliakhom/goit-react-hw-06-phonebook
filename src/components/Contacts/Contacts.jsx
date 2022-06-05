import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import s from './contacts.module.css';

const Contacts = () => {
  return (
    <div className={s.container}>
      <div className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={s.contacts}>
        <h2 className={s.contacts__title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
