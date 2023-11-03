import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import UsersTable from "../../UsersTable/UsersTable";
import "./AdminDashBoard.css";
import HeaderComp from "../../HeaderComp/HeaderComp";
import { Button, Grid, Dialog, DialogContent } from "@mui/material";
import AddUser from "../../AddUserComp/AddUser";


const AdminDashboard = () => {
 

  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <div className="">
        <HeaderComp />
       
        <UsersTable />

       
      </div>
    </div>
  );
};

export default AdminDashboard;
