import React from "react";

export default function StatCard({ title, value, subtext, icon, bgColor }) {
  return (
    <div
      style={{
        background: bgColor || "#4A4AE3",
        borderRadius: "16px",
        padding: "1.5rem",
        color: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "transform 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* Text */}
      <div>
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "500",
            marginBottom: "0.25rem",
          }}
        >
          {title}
        </p>
        <h2 style={{ fontSize: "2rem", fontWeight: "700", margin: 0 }}>
          {value}
        </h2>
        {subtext && (
          <p
            style={{ fontSize: "0.875rem", marginTop: "0.5rem", opacity: 0.85 }}
          >
            {subtext}
          </p>
        )}
      </div>

      {/* Icon */}
      <div
        style={{
          fontSize: "2rem",
          background: "rgba(255,255,255,0.15)",
          padding: "0.75rem",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
    </div>
  );
}
