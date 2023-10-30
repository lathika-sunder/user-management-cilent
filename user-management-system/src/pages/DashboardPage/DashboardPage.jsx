import React from "react";
import UserDashBoard from "../../components/UserComps/UserDashBoardComp/UserDashBoard";
import AdminDashboard from "../../components/AdminComps/AdminDashBoard/AdminDashboard";
import './DashBoard.css'
const DashboardPage = () => {
  return (
    <div className="dashboard">
      {/* <UserDashBoard /> */}
      <AdminDashboard />
    </div>
  );
};

export default DashboardPage;
