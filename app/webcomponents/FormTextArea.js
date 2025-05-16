"use client";
import React from "react";

export default function FormTextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {label && <label style={{ fontWeight: "500" }}>{label}</label>}
      <textarea
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
          minHeight: "100px",
          resize: "vertical",
          outline: "none",
        }}
      />
    </div>
  );
}
