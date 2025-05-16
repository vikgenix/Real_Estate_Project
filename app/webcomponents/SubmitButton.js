"use client";
import React from "react";

export default function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      style={{
        padding: "0.75rem",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "1rem",
      }}
    >
      {text}
    </button>
  );
}
