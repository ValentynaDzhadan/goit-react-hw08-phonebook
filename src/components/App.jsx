import { token } from 'http/http';
import { Contacts } from 'pages/Contacts/Contacts';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getUser } from 'redux/user/operaction.user';
import { Header } from './Header/Header';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const tokenValue = useSelector(state => state.auth.token);
  const { name, email } = useSelector(state => state.user);
  useEffect(() => {
    if (tokenValue && !name && !email) {
      // token.set(tokenValue);
      dispatch(getUser());
    }
  }, [token]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
