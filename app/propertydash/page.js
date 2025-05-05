import React from "react";
import Card from "../webcomponents/Card";
import Sidebar from "../webcomponents/Sidebar";
import Footer from "../webcomponents/Footer";
import FeaturedProperties from "../webcomponents/FeaturedProperties";
import LineChart from "../webcomponents/Graph";

function page() {
  return (
    <div>
      <Sidebar
        component={
          <>
            <FeaturedProperties name="Featured Properties" />
            <LineChart className/>
          </>
        }
      />
    </div>
  );
}

export default page;
