// components/KpiCard.js
import { CircularProgress } from "@mui/material";

export default function KpiCard({ title, value, progress }) {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        padding: "20px",
        borderRadius: "16px",
        flex: "1",
        minWidth: "250px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Value and title */}
      <div>
        <div style={{ fontSize: "26px", fontWeight: "bold" }}>{value}</div>
        <div style={{ fontSize: "14px", marginTop: "4px" }}>{title}</div>
        <div style={{ fontSize: "12px", opacity: 0.6 }}>Target 3k/month</div>
      </div>

      {/* Circular Progress */}
      <div style={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={progress}
          size={50}
          thickness={5}
          sx={{
            color: progress > 80 ? "limegreen" : "dodgerblue",
            backgroundColor: "#fff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "12px",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
