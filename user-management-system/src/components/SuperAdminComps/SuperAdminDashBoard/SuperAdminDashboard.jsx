import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import UsersTable from "../../UsersTable/UsersTable";
import './SuperAdminDashBoard.css'
import HeaderComp from "../../HeaderComp/HeaderComp";
import SuperAdminNavbar from "../SuperAdminNavbar/SuperAdminNavbar";
const SuperAdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <SuperAdminNavbar />
      <div className="dahboard-content">
        <HeaderComp />
        <UsersTable />
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
