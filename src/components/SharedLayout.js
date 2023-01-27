import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import { UserProvider } from '../context/userContext';
const SharedLayout = () =>{
  return (
    <>
      <Dashboard/>
    </>
  )
}

export default SharedLayout