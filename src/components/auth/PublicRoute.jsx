import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const user = localStorage.getItem('token');
    if(user == undefined) {
        return false;
    } else if(user) {
        return true
    } else {
        return false;
    }
};

const PublicRoute = () => {
    const isAuthenticated = useAuth();

    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;