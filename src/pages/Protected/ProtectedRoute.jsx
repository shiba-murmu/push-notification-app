import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../Data/MyContext';

const ProtectedRoute = ({ children }) => {
    const { User } = useContext(MyContext);

    // if user logged in then render the children components
    if (!User) {
        return <Navigate to="/" replace />;
    }
    // otherwise show the protected components  
    return children;
}
export default ProtectedRoute;
