import React from "react";

export default function ReportTable({ reports = [] }) {
  return (
    <div className="table-card">
      <h2>User Reports</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Reporter</th>
            <th>Reported</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {reports.length === 0 && (
            <tr>
              <td colSpan="4">No reports</td>
            </tr>
          )}

          {reports.map((r) => (
            <tr key={r.id}>
              <td>{r.fromName}</td>
              <td>{r.toName}</td>
              <td>{r.reason}</td>
              <td>{r.resolved ? "Resolved" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
