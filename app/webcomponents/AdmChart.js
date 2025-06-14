"use client";
import { LineChart } from "@mui/x-charts";

export default function Chart() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #000",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
        series={[{ data: [200, 300, 400, 500, 450, 600] }]}
        width={600}
        height={300}
      />
    </div>
  );
}
