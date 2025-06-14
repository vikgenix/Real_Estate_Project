"use client";
import React from "react";
import StatCard from "../webcomponents/StatCard";
import ProgressCard from "../webcomponents/ProgressCard";
import BarChart from "../webcomponents/BarChart";
import LineOverview from "../webcomponents/LineOverview";
import PieChart from "../webcomponents/PieChart";
import ReviewCard from "../webcomponents/ReviewCard";
import Sidebar from "../webcomponents/Sidebar";

export default function DashboardPage() {
  return (
    <Sidebar
      component={
        <div
          style={{
            padding: "2.5rem 3rem",
            background: "#f0f2f5",
            minHeight: "100vh",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#222",
          }}
        >
          {/* Header */}
          <header style={{ marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "2.4rem",
                fontWeight: "700",
                color: "#111",
                marginBottom: "0.3rem",
                letterSpacing: "0.03em",
              }}
            >
              Dashboard
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#555",
                opacity: 0.75,
                maxWidth: "320px",
              }}
            >
              Welcome to Omah Property Admin
            </p>
          </header>

          {/* Stat Cards */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <StatCard
              icon="🏠"
              title="Total Properties"
              value="4,562"
              description="431 more to break last month"
              style={{
                boxShadow:
                  "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.06)",
                borderRadius: "12px",
                background: "#fff",
              }}
            />
            <ProgressCard
              title="Properties for Sale"
              value="2,356"
              percentage={71}
              color="#4A4AE3"
              style={{
                boxShadow:
                  "0 2px 8px rgba(74, 74, 227, 0.15), 0 1px 6px rgba(74, 74, 227, 0.1)",
                borderRadius: "12px",
                background: "#fff",
              }}
            />
            <ProgressCard
              title="Properties for Rent"
              value="2,206"
              percentage={90}
              color="#10B981"
              style={{
                boxShadow:
                  "0 2px 8px rgba(16, 185, 129, 0.15), 0 1px 6px rgba(16, 185, 129, 0.1)",
                borderRadius: "12px",
                background: "#fff",
              }}
            />
          </section>

          {/* Graphs & Reviews */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "2.2fr 1fr",
              gap: "1.5rem",
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "1.5rem 2rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <LineOverview />
              </div>

              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "1.5rem 1.8rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                  flexGrow: 1,
                }}
              >
                <ReviewCard />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "1.2rem 1.8rem",
                  boxShadow: "0 4px 18px rgba(74, 74, 227, 0.1)",
                }}
              >
                <BarChart
                  title="Total Revenue"
                  value="678,345"
                  percentage={7}
                />
              </div>

              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "1.5rem 1.8rem",
                  boxShadow: "0 4px 18px rgba(16, 185, 129, 0.1)",
                }}
              >
                <PieChart />
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}
