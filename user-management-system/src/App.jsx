import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import ErrorComp from './components/ErrorComp/ErrorComp'
import AddUser from './components/AddUserComp/AddUser'
import UsersPage from './pages/UsersPage/UsersPage'
import AddUserPage from './pages/AddUserPage/AddUserPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <React.Fragment>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<LoginPage />}></Route>
      <Route exact path='/dashboard' element={<DashboardPage />}></Route>
      
    </Routes>
    </BrowserRouter>
   </React.Fragment>
  )
}

export default App
