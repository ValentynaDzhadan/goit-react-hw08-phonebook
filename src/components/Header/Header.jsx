import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <header>
      <nav>
        <ul>
          {isAuth ? (
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
