"use client";

import React from "react";
import Sidebar from "../webcomponents/Sidebar";
import DashHeader from "../webcomponents/DashHeader";
import DashCard from "../webcomponents/DashCard";
import DashSales from "../webcomponents/DashSales";
import LineChart from "../webcomponents/Graph";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "2rem",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <Sidebar
        component={
          <div>
            <DashHeader />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              <DashCard
                title="Total Properties"
                value="1,000"
                description="Properties Listed"
              />
              <DashCard
                title="Total Agents"
                value="50"
                description="Agents Available"
              />
              <DashCard
                title="Total Users"
                value="5,000"
                description="Users Registered"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                marginTop: "2rem",
                alignItems: "flex-start",
              }}
            >
              <DashSales
                image="https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg"
                title="Skyline Tower"
                description="Located in the heart of downtown, this apartment offers a stunning skyline view and modern amenities. Perfect for city living."
                buttonText="Register Now"
              />
              <LineChart />
            </div>
          </div>
        }
      />
    </div>
  );
}
