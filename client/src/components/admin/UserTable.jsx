import React from "react";

export default function UserTable({ users = [] }) {
  return (
    <div className="table-card">
      <h2>Users</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Mode</th>
            <th>Premium</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          )}

          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.gender}</td>
              <td>{u.intent || "-"}</td>
              <td>{u.premium ? "Yes" : "No"}</td>
              <td>{u.blocked ? "Blocked" : "Active"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
