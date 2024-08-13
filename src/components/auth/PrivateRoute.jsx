import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const user = localStorage.getItem('token');
    if(user === undefined) {
        return false;
    } else if(user) {
        return true
    } else {
        return false;
    }
}

const PrivateRoute = () => {
    let auth = {'token': useAuth()}

    return (
        auth.token ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoute