import React from "react";

export default function VerificationStatus({ status }) {
  if (!status) return null;

  let label = "Unverified";
  let color = "#aaa";

  if (status === "pending") {
    label = "Pending Review";
    color = "#ff9800";
  }

  if (status === "verified") {
    label = "Verified";
    color = "#4caf50";
  }

  if (status === "rejected") {
    label = "Rejected";
    color = "#f44336";
  }

  return (
    <span
      className="verification-badge"
      style={{ background: color }}
    >
      {label}
    </span>
  );
}
