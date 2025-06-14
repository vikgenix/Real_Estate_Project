"use client";
import React from "react";

export default function ProgressCard({ title, value, percentage, color }) {
  const cardStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.25rem",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.05)",
    minWidth: "260px",
    transition: "transform 0.2s ease",
    cursor: "default",
  };

  const textSectionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  };

  const valueStyle = {
    fontSize: "1.75rem",
    fontWeight: 700,
    margin: 0,
    color: "#222",
  };

  const titleStyle = {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#666",
    margin: 0,
  };

  const targetTextStyle = {
    fontSize: "0.85rem",
    color: "#999",
  };

  const progressStyle = {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    border: `5px solid ${color}`,
    color,
    fontWeight: 600,
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={textSectionStyle}>
        <h3 style={valueStyle}>{value}</h3>
        <p style={titleStyle}>{title}</p>
        <span style={targetTextStyle}>Target 3k/month</span>
      </div>
      <div style={progressStyle}>{percentage}%</div>
    </div>
  );
}
