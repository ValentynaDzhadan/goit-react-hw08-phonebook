import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations.contacts';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.search);

  const filteredContacts = useMemo(() => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [contacts, filter]);

  return (
    <ul>
      {filteredContacts.map(el => (
        <li key={el.id}>
          <span>
            {el.name} : {el.number}
          </span>
          <button
            onClick={() => {
              dispatch(deleteContact(el.id));
            }}
          >
            Delete
          </button>{' '}
        </li>
      ))}
    </ul>
  );
};
