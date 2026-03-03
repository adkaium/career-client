import React, { use } from 'react';
import { AuthContexts } from '../contexts/AuthContexts/AuthContexts';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user, loading} = use(AuthContexts);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>;
    }


    if(!user){
        return <Navigate to='/signIn' state={location.pathname}></Navigate>
    }
  
    return children
};

export default PrivetRoute;