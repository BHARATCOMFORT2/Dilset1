import React from "react";

export default function StatCards({ stats }) {
  if (!stats) return null;

  return (
    <div className="stat-grid">
      <div className="stat-card">
        <h3>Users</h3>
        <p>{stats.users || 0}</p>
      </div>

      <div className="stat-card">
        <h3>Matches</h3>
        <p>{stats.matches || 0}</p>
      </div>

      <div className="stat-card">
        <h3>Reports</h3>
        <p>{stats.reports || 0}</p>
      </div>

      <div className="stat-card">
        <h3>Premium</h3>
        <p>{stats.premium || 0}</p>
      </div>
    </div>
  );
}
