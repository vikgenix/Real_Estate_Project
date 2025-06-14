"use client";
import React from "react";

export default function SummaryCard({
  title,
  value,
  subtitle,
  progress,
  color,
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        flex: 1,
      }}
    >
      <p style={{ fontSize: "1.2rem", color: "#555" }}>{value}</p>
      <h3 style={{ fontWeight: "bold" }}>{title}</h3>
      <p style={{ fontSize: "0.9rem", color: "#888" }}>{subtitle}</p>
      {progress && (
        <div
          style={{
            marginTop: "10px",
            height: "8px",
            width: "100%",
            background: "#eee",
            borderRadius: "6px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: color,
              borderRadius: "6px",
            }}
          />
        </div>
      )}
    </div>
  );
}
