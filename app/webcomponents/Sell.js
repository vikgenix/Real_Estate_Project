import React from "react";
import PropertyCard from "@/components/PropertyCard";

export default function SellPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <PropertyCard
        unitNumber="#1201"
        image="/unit-plan.png" // Put your image in /public
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..."
        size="14,610 sq. ft"
        bedrooms={4}
        bathrooms={2}
        balcony={true}
        parking={1}
        address="3091 - Dundas Street W, Toronto, CA"
        building="Pacifica Tower 1"
        price="CA$105,000,000"
        pricePerSq="CA$6,673 per sq."
      />
    </div>
  );
}
