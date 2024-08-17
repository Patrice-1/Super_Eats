import React from 'react'
import { userAuth } from './Context/authContext';

function ProtectedRoute({children}) {
    const {user} = userAuth();
    if (!user) {
        return <Navigate to="/login" />
    }
  return children
}

export default ProtectedRoute;
