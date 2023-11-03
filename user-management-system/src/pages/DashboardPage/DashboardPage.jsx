import React from "react";
import UserDashBoard from "../../components/UserComps/UserDashBoardComp/UserDashBoard";
import AdminDashboard from "../../components/AdminComps/AdminDashBoard/AdminDashboard";
import SuperAdminDashboard from "../../components/SuperAdminComps/SuperAdminDashboard/SuperAdminDashboard";
import { UserProvider,useUser } from "../../hooks/UserContext";
import "./DashBoard.css";

const DashboardPage = () => {
  const { userType } = useUser();

  return (
    <div className="dashboard">
      {userType === "admin" && <AdminDashboard />}
      {userType === "superadmin" && <SuperAdminDashboard />}
      {userType === "user" && <UserDashBoard />}
    </div>
  );
};

export default DashboardPage;
