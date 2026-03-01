import React from "react";

export default function AdminDashboard() {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <p>Overview of Dilset platform statistics</p>

      <div className="grid">
        <div className="card">Users: --</div>
        <div className="card">Matches: --</div>
        <div className="card">Reports: --</div>
        <div className="card">Premium: --</div>
      </div>
    </div>
  );
}
