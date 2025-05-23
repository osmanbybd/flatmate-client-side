import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return 
    }

    if(!user){
        return <Navigate state={location?.pathname} to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;