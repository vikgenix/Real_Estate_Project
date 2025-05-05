import React from "react";
import Card from "../webcomponents/Card";
import Sidebar from "../webcomponents/Sidebar";
import Footer from "../webcomponents/Footer";

function housedash() {
    const sidebarItems = [
      { title: "Home", url: "/home" },
      { title: "Dashboard", url: "/dashboard" },
      { title: "Settings", url: "/settings" },
    ];
  return (
    <div>
          <Sidebar children={Footer} />
      
    </div>
  );
}

export default housedash;
