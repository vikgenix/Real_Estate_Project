// components/ProgressStatCard.js
import React from "react";

export default function ProgressStatCard({
  value,
  label,
  target,
  percent,
  color,
}) {
  return (
    <div
      style={{
        padding: "1rem",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        flex: 1,
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: "1.25rem" }}>{value}</p>
      <p style={{ color: "#666", marginBottom: "1rem" }}>{label}</p>
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: `6px solid ${color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: color,
        }}
      >
        {percent}%
      </div>
      <p style={{ marginTop: "0.5rem", color: "#999" }}>{target}</p>
    </div>
  );
}
