import React from 'react'
import { Navbar, Footer, Sidebar } from '../components';
import { Home, About, Second, Error } from '../pages';
import {Categories, CreatePost, EditPost, Posts, Tags, Users } from '../pages/dashboardPages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SinglePage from '../pages/SinglePage';
import Category from '../pages/Category';
import Author from '../pages/Author';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';
import { UserProvider } from '../context/userContext';
import SidebarDashboard from '../components/dashboard/Sidebar'
import { DashboardProvider } from '../context/dashboardContext';
import { PublicProvider } from '../context/publicContext'
const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicProvider><Navbar/></PublicProvider>}>
          <Route index element={<PublicProvider><Home/></PublicProvider>}/>
          <Route path='/:id' element={<PublicProvider><SinglePage/></PublicProvider>}/>
          <Route path='/kategori/:id' element={<PublicProvider><Category/></PublicProvider>}/>
          <Route path='/yazar/:id' element={<PublicProvider><Author/></PublicProvider>}/>
          <Route path='/about' element={<PublicProvider><About/></PublicProvider>}/>
          <Route path='/second' element={<PublicProvider><Second/></PublicProvider>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
        <Route path='/login' element={<UserProvider><Login/></UserProvider>}/>
        <Route path='/dashboard'
        element={
          <ProtectedRoutes>
            <UserProvider>
              <DashboardProvider>
                <SidebarDashboard/>
              </DashboardProvider>
            </UserProvider>
          </ProtectedRoutes>
        }>
          <Route index
            element=
            {
              <ProtectedRoutes>
                <UserProvider>
                  <DashboardProvider>
                    <Dashboard/>
                  </DashboardProvider>
                </UserProvider>
              </ProtectedRoutes>
            }>
          </Route>
          <Route path="/dashboard/posts"
            element=
            {
              <ProtectedRoutes>
                <UserProvider>
                  <DashboardProvider>
                    <Posts/>
                  </DashboardProvider>
                </UserProvider>
              </ProtectedRoutes>
            }>
          </Route>
          <Route path="/dashboard/create-post"
            element=
            {
              <ProtectedRoutes>
                <UserProvider>
                  <DashboardProvider>
                    <CreatePost/>
                  </DashboardProvider>
                </UserProvider>
              </ProtectedRoutes>
            }>
          </Route>
          <Route path="/dashboard/users"
            element=
            {
              <ProtectedRoutes>
                <UserProvider>
                  <DashboardProvider>
                    <Users/>
                  </DashboardProvider>
                </UserProvider>
              </ProtectedRoutes>
            }>
          </Route>
          <Route path="/dashboard/categories"
            element=
            {
              <ProtectedRoutes>
                <UserProvider>
                  <DashboardProvider>
                    <Categories/>
                  </DashboardProvider>
                </UserProvider>
              </ProtectedRoutes>
            }>
          </Route>
          <Route path="/dashboard/tags"
            element=
            {
              <ProtectedRoutes>
                <UserProvider>
                  <DashboardProvider>
                    <Tags/>
                  </DashboardProvider>
                </UserProvider>
              </ProtectedRoutes>
            }>
          </Route>
          <Route path="/dashboard/edit-post/:id"
            element=
            {
              <ProtectedRoutes>
                <UserProvider>
                  <DashboardProvider>
                    <EditPost/>
                  </DashboardProvider>
                </UserProvider>
              </ProtectedRoutes>
            }>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout