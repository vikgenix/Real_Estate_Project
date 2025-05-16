import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "2014", total: 2000000 },
  { name: "2015", total: 4000000 },
  { name: "2016", total: 5000000 },
  { name: "2017", total: 5800000 },
  { name: "2018", total: 5900000 },
  { name: "2019", total: 6900000 },
  { name: "2020", total: 6900000 },
  { name: "2021", total: 6000000 },
  { name: "2022", total: 7000000 },
  { name: "2023", total: 8000000 },
  { name: "2024", total: 9000000 },
  { name: "2025", total: 9000000 },
];

export default function Graph() {
  return (
    <Card className="w-full max-w-6xl bg-white text-black border border-gray-200">
      <CardHeader>
        <CardTitle className="text-black">Price Fluctuations</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#000" />
            <YAxis stroke="#000" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Bar dataKey="total" fill="#000" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
