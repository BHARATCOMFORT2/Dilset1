import React from "react";

export default function VerificationTable({ requests = [] }) {
  return (
    <div className="table-card">
      <h2>Verification Requests</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Selfie</th>
            <th>ID</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.length === 0 && (
            <tr>
              <td colSpan="4">No requests</td>
            </tr>
          )}

          {requests.map((v) => (
            <tr key={v.id}>
              <td>{v.name}</td>
              <td>
                {v.selfieUrl && (
                  <img src={v.selfieUrl} alt="selfie" width="40" />
                )}
              </td>
              <td>
                {v.idUrl && (
                  <img src={v.idUrl} alt="id" width="40" />
                )}
              </td>
              <td>{v.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
