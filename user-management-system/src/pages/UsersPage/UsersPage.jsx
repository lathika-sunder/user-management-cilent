import React from 'react'
import HeaderComp from '../../components/HeaderComp/HeaderComp'
import UsersTable from '../../components/UsersTable/UsersTable'
import './UsersPage.css'
import { Dialog } from '@mui/material'
import { Menu } from '@mui/icons-material'
import AdminNavbar from '../../components/AdminComps/AdminNavbar/AdminNavbar'
import { Button } from '@mui/joy'
const UsersPage = () => {
  return (
    <div className='users-page'>
      
        <HeaderComp  />
        
        <UsersTable />
       
    </div>
  )
}

export default UsersPage