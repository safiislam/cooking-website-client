import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const  loaction = useLocation()
    const {user,loader} = useContext(AuthContext)
    if(loader){
        return <progress className="progress w-56"></progress>
    
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:loaction}} replace ></Navigate>;
};

export default PrivetRout;