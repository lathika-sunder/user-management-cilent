import * as React from 'react';
import Table from '@mui/joy/Table';

function createData(id, name, email, role) {
  return { id, name, email, role };
}

const rows = [
  createData(1, 'John Doe', 'john.doe@example.com', 'Admin'),
  createData(2, 'Jane Smith', 'jane.smith@example.com', 'User'),
  createData(3, 'Alice Johnson', 'alice.johnson@example.com', 'User'),
  createData(4, 'Bob Williams', 'bob.williams@example.com', 'User'),
];

export default function UserTable() {
  return (
    <Table hoverRow>
      <thead>
        <tr>
          <th style={{ width: '10%' }}>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th style={{ width: '20%' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.role}</td>
            <td>
              <button onClick={() => handleEdit(row.id)}>Edit</button>
              <button onClick={() => handleDelete(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
