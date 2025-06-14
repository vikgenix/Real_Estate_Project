import Header from "../webcomponents/AdmHead";
import Sidebar from "../webcomponents/Sidebar";
import Card from "../webcomponents/AdmCard";
import Chart from "../webcomponents/AdmChart";
import Stats from "../webcomponents/AdmStats";
import Table from "../webcomponents/AdmTabel";

export default function DashboardPage() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        component={
          <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
            <Header title="Dashboard" />

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <Card title="Total Property" value="50" />
              <Card title="Revenue" value="$2,000,000" />
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
        }
      />
    </div>
  );
}
