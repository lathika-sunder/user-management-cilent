import React, { useEffect, useState } from "react";
import Table from "@mui/joy/Table";
import { Button, Dialog, DialogContent } from "@mui/material";
import "./UsersTable.css";
import ViewUser from '../../components/ViewUserComp/ViewUserComp'

const ITEMS_PER_PAGE = 5;

export default function UserTable() {
  const [data,setData]=useState([])
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('http://localhost:3000/users');
        if (response.ok) {
          let jsonData = await response.json();
          setData(jsonData); // Assuming jsonData is an array
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);

  const handleOpenDialog = (userId) => {
    setSelectedUserId(userId);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="user-table">
      <Table hoverRow>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th style={{ width: "20%" }}>Actions</th>
          </tr>
        </thead>
        <tbody
          style={{
            fontSize: "x-small",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          {data.map((row) => (
            <tr key={row._id}>
              <td>{row.userId}</td>
              <td>{row.name}</td>
              
              <td>{row.phoneNumber}</td>
              <td>{row.role}</td>
              <td>
                <Button
                  variant="contained"
                  onClick={() => handleOpenDialog(row._id)}
                  style={{ fontSize: 5 }}
                >
                  View User
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent>
          {selectedUserId && <ViewUser onClose={handleCloseDialog} userId={selectedUserId} />}
        </DialogContent>
      </Dialog>
      <div className="pagination">
        {Array.from({ length: Math.ceil(data.length / ITEMS_PER_PAGE) }).map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
