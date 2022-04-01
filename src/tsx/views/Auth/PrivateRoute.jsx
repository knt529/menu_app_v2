import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const PrivateRoute = ({ element, exact, path }) => {
  const { user } = useAuthContext();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;