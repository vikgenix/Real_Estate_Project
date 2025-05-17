import React from "react";

const PropertyStat = ({ icon, label }) => {
  return (
    <div style={styles.statItem}>
      <span style={{ fontSize: "1.2rem" }}>{icon}</span>
      <p style={styles.label}>{label}</p>
    </div>
  );
};

const styles = {
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "100px",
  },
  label: {
    fontSize: "0.85rem",
    marginTop: "4px",
    textAlign: "center",
  },
};

export default PropertyStat;
