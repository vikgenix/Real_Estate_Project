import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Stats from "@/components/Stats";
import Table from "@/components/Table";

export default function Dashboard() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <Header title="Dashboard" />
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Card title="Total Users" value="1,200" />
          <Card title="Revenue" value="$34,000" />
          <Card title="Orders" value="320" />
          <Card title="Growth" value="12%" />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Chart />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Stats />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Table />
        </div>
      </div>
    </div>
  );
}
