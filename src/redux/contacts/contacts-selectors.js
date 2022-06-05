export const getContacts = store => store.contacts;
export const getFilteredContacts = store => {
  if (store.filter === '') return store.contacts;
  const filterToLowerCase = store.filter.toLowerCase();
  return store.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );
};
