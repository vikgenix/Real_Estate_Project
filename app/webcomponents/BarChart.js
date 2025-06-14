"use client";

import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const data = [
  { label: "Jan", value: 400 },
  { label: "Feb", value: 300 },
  { label: "Mar", value: 500 },
  { label: "Apr", value: 200 },
  { label: "May", value: 278 },
  { label: "Jun", value: 189 },
];

export default function BarChartMUI() {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: data.map((item) => item.label) }]}
      series={[{ data: data.map((item) => item.value) }]}
      width={500}
      height={300}
    />
  );
}
