import React from "react";
import Link from "next/link";

const FeaturedProperties = (props) => {
  const properties = [
    {
      id: 1,
      name: "Skyline Tower",
      location: "New York, NY",
      price: "$1,200,000",
    },
    {
      id: 2,
      name: "Ocean View Villa",
      location: "Miami, FL",
      price: "$2,500,000",
    },
    {
      id: 3,
      name: "Mountain Retreat",
      location: "Aspen, CO",
      price: "$3,800,000",
    },
    {
      id: 4,
      name: "Urban Loft",
      location: "San Francisco, CA",
      price: "$1,600,000",
    },
    {
      id: 5,
      name: "Beachfront Bungalow",
      location: "Malibu, CA",
      price: "$4,200,000",
    },
    {
      id: 6,
      name: "Countryside Estate",
      location: "Napa Valley, CA",
      price: "$2,900,000",
    },
    {
      id: 7,
      name: "Luxury Condo",
      location: "Chicago, IL",
      price: "$1,800,000",
    },
    {
      id: 8,
      name: "Historic Mansion",
      location: "Boston, MA",
      price: "$5,000,000",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{props.name}</h2>
      <div style={styles.grid}>
        {properties.map((property, index) => (
          <Link key={property.id} href={"./../propertydash"}>
            <div style={styles.card}>
              <img
                src={
                  "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={property.name}
                style={styles.image}
              />
              <div style={styles.info}>
                <h3 style={styles.title}>{property.name}</h3>
                <p style={styles.location}>{property.location}</p>
                <p style={styles.price}>{property.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "4rem 2rem",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "2rem",
    color: "#333",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  card: {
    width: "280px",
    backgroundColor: "#fdfdfd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "left",
    color: "#333",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  info: {
    padding: "1rem",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  location: {
    color: "#777",
    marginBottom: "0.25rem",
  },
  price: {
    color: "#0070f3",
    fontWeight: "bold",
  },
};

export default FeaturedProperties;
