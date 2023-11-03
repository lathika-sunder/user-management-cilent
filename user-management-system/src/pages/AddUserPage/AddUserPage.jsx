import React from "react";
import "./AddUserPage.css";
import AddUser from "../../components/AddUserComp/AddUser";
import AdminNavbar from "../../components/AdminComps/AdminNavbar/AdminNavbar";
import HeaderComp from "../../components/HeaderComp/HeaderComp";

const AddUserPage = () => {
  return (
    <div className="add-user">
      <AdminNavbar />
      <main>
        <HeaderComp />
        <div  className="add-user-form">
        <AddUser />
        </div>
        
      </main>
    </div>
  );
};

export default AddUserPage;
