import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operactions.auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.email);

  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
