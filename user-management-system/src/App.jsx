import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <React.Fragment>
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<LoginPage />}></Route>
    </Routes>
    </BrowserRouter>
   </React.Fragment>
  )
}

export default App
