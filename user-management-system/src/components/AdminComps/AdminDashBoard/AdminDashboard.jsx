import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import UsersTable from "../../UsersTable/UsersTable";
import './AdminDashBoard.css'
import HeaderComp from "../../HeaderComp/HeaderComp";
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <div className="dahboard-content">
        <HeaderComp />
        <UsersTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
