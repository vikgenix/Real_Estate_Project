import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  defs,
  linearGradient,
  stop,
} from "recharts";

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4000 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 7000 },
  { name: "Jul", value: 8000 },
];

export default function LineOverview() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          dataKey="name"
          stroke="#8884d8"
          tick={{ fontSize: 12, fill: "#555" }}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis
          stroke="#8884d8"
          tick={{ fontSize: 12, fill: "#555" }}
          domain={["dataMin - 500", "dataMax + 500"]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: 8,
            border: "none",
          }}
          labelStyle={{ fontWeight: "bold", color: "#555" }}
          formatter={(value) => new Intl.NumberFormat().format(value)}
        />
        <Legend verticalAlign="top" height={36} />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#6366f1"
          strokeWidth={3}
          dot={{ r: 5, stroke: "#6366f1", strokeWidth: 2, fill: "#fff" }}
          activeDot={{ r: 7 }}
          fillOpacity={1}
          fill="url(#colorLine)"
          animationDuration={1000}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
