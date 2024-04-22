import React, { useEffect } from 'react';
import { useNavigate, Outlet} from 'react-router-dom';
import isLoggedin from '../assets/isLoggedin';

const ProtectedRoute = () => {
const navigate = useNavigate();
const isLogin = true;

useEffect(() => {

if (!isLogin) {
navigate('/');
}
}, [isLogin, navigate]);

return <Outlet />;
};

export default ProtectedRoute;
