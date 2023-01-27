import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoutes = ({children}) => {
    const username  = localStorage.getItem('username')
    if(!username) {
        return <Navigate to="/"/>
    }
    return children
}

export default ProtectedRoutes