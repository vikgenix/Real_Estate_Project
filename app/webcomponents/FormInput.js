"use client";
import React from "react";

export default function FormInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {label && <label style={{ fontWeight: "500" }}>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        style={{
          padding: "0.75rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "1rem",
          outline: "none",
        }}
      />
    </div>
  );
}
