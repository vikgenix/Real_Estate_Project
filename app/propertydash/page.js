"use client";

import React from "react";
import Sidebar from "../webcomponents/Sidebar";
import DashHeader from "../webcomponents/DashHeader";
import DashCard from "../webcomponents/DashCard";
import DashSales from "../webcomponents/DashSales";
import LineChart from "../webcomponents/Graph";
import PropertyCard from "../webcomponents/PropertyCard";

export default function Page() {
  return (
    <div style={styles.page}>
      <Sidebar
        component={
          <div style={styles.main}>
            <DashHeader />

            {/* Dashboard Cards */}
            <div style={styles.cardGrid}>
              <DashCard
                title="Property Views"
                value="10,000"
                description="people viewed your property"
              />
              <DashCard
                title="Total Agents"
                value="50"
                description="Agents Available"
              />
              <DashCard
                title="Total Users"
                value="5,000"
                description="Users Registered to Buy Property"
              />
            </div>

            {/* Featured Section */}
            <div style={styles.featureGrid}>
              <DashSales
                image="https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg"
                title="Skyline Tower"
                description="Located in the heart of downtown, this apartment offers a stunning skyline view and modern amenities. Perfect for city living."
                buttonText="Register Now"
              />
              <PropertyCard
                image="https://saterdesign.com/cdn/shop/products/9504-First-Floor_M_1200x.jpg?v=1622773200"
                unitNumber="#904"
                description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
                size="11,500 sq. ft"
                bedrooms="2"
                bathrooms="1"
                balcony="true"
                parking="1"
                address="100 Bloor Street W, Toronto, CA"
                building="Skyline Residence"
                price="CA$65,000,000"
                pricePerSq="CA$5,652 per sq."
              />
            </div>

            {/* Chart */}
            <div style={styles.chartWrapper}>
              <LineChart />
            </div>
          </div>
        }
      />
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
  },
  featureGrid: {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  alignItems: "stretch",
},
  chartWrapper: {
    marginTop: "2rem",
  },
};
