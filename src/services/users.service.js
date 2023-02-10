import { privateApi, publicApi } from 'http/http';

export const registerUser = async body => {
  const { data } = await publicApi.post(
    'https://connections-api.herokuapp.com/users/signup',
    body
  );
  return data;
};

export const loginUser = async body => {
  const { data } = await publicApi.post(
    'https://connections-api.herokuapp.com/users/login',
    body
  );
  return data;
};

export const logoutUser = async () => {
  const { data } = await privateApi.post(
    'https://connections-api.herokuapp.com/users/logout'
  );
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await privateApi.get(
    'https://connections-api.herokuapp.com/users/current'
  );
  return data;
};
