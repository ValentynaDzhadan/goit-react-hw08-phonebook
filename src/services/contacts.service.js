import { privateApi } from 'http/http';

export const getContacts = async () => {
  const { data } = await privateApi.get(
    'https://connections-api.herokuapp.com/contacts'
  );
  return data;
};

export const addContactService = async body => {
  const { data } = await privateApi.post(
    'https://connections-api.herokuapp.com/contacts',
    body
  );
  return data;
};

export const deleteContactService = id => {
  return privateApi.delete(
    'https://connections-api.herokuapp.com/contacts/' + id
  );
};
