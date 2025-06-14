"use client";
import React from "react";

export default function PieChart() {
  const styles = {
    card: {
      padding: "1.5rem",
      boxShadow: "0 6px 12px rgba(0,0,0,0.06)",
      borderRadius: "16px",
      backgroundColor: "#ffffff",
      maxWidth: "340px",
      margin: "auto",
      fontFamily: "sans-serif",
    },
    title: {
      margin: 0,
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "#1f2937",
      marginBottom: "1rem",
    },
    chartContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    pie: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      background: "conic-gradient(#3b82f6 0% 38%, #10b981 38% 100%)",
      boxShadow: "inset 0 0 4px rgba(0, 0, 0, 0.05)",
    },
    legend: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginLeft: "1.5rem",
      fontSize: "0.95rem",
      color: "#374151",
    },
    legendItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    dot: (color) => ({
      width: "12px",
      height: "12px",
      backgroundColor: color,
      borderRadius: "50%",
      display: "inline-block",
    }),
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>User Distribution</h3>
      <div style={styles.chartContainer}>
        <div style={styles.pie}></div>
        <div style={styles.legend}>
          <div style={styles.legendItem}>
            <span style={styles.dot("#3b82f6")}></span> Agents – 38%
          </div>
          <div style={styles.legendItem}>
            <span style={styles.dot("#10b981")}></span> Customers – 62%
          </div>
        </div>
      </div>
    </div>
  );
}
