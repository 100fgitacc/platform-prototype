import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem('auth') === 'true'; 

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
