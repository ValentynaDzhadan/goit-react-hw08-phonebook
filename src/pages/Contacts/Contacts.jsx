import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { fetchContacts } from 'redux/contacts/operations.contacts';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  useEffect(() => {
    if (isAuth) {
      dispatch(fetchContacts());
    }
  }, [isAuth, dispatch]);

  const { items, isLoading, error } = useSelector(state => state.contacts);

  if (error) return <p>Error</p>;

  return (
    <>
      <UserMenu />
      <h2>Phonebook</h2>
      <ContactForm contacts={items} />
      <h2>Contacts</h2>
      <Filter></Filter>

      {isLoading ? <Loader /> : <ContactList contacts={items} />}
    </>
  );
};
