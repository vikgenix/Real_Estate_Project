import React from "react";
import Link from "next/link";
import { FaBed, FaBath, FaRegHeart } from "react-icons/fa";
import { PiRuler } from "react-icons/pi";
import { GoLocation } from "react-icons/go";

const FeaturedProperties = (props) => {
  const { properties = [], name = "Featured Properties" } = props;

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{name}</h2>
      <div style={styles.grid}>
        {properties.map((property) => (
          <Link key={property.id} href="./../propertydash">
            <div style={styles.card}>
              <img
                src={property.image}
                alt={property.name}
                style={styles.image}
              />
              <div style={styles.content}>
                <h3 style={styles.title}>{property.name}</h3>
                <p style={styles.location}>
                  <GoLocation style={styles.iconInline} />
                  {property.location}
                </p>

                <div style={styles.details}>
                  <span style={styles.detailItem}>
                    <FaBed style={styles.icon} /> {property.beds} Bed
                  </span>
                  <span style={styles.detailItem}>
                    <FaBath style={styles.icon} /> {property.baths} Bath
                  </span>
                  <span style={styles.detailItem}>
                    <PiRuler style={styles.icon} /> {property.area}
                  </span>
                </div>

                <div style={styles.footer}>
                  <span style={styles.price}>
                    {property.price}{" "}
                    <span style={styles.perNight}>per night</span>
                  </span>
                  <FaRegHeart style={styles.heartIcon} />
                </div>
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
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "2rem",
    color: "#222",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem",
  },
  card: {
    width: "320px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "left",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    height: "190px",
    objectFit: "cover",
  },
  content: {
    padding: "1rem",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "0.3rem",
  },
  location: {
    display: "flex",
    alignItems: "center",
    color: "#777",
    fontSize: "14px",
    marginBottom: "0.8rem",
  },
  iconInline: {
    marginRight: "6px",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    backgroundColor: "#f8f9fa",
    padding: "8px 10px",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
  detailItem: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "#444",
  },
  icon: {
    fontSize: "14px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#111",
  },
  perNight: {
    display: "block",
    fontSize: "12px",
    fontWeight: "400",
    color: "#888",
  },
  heartIcon: {
    fontSize: "18px",
    color: "#555",
    backgroundColor: "#f2f2f2",
    padding: "6px",
    borderRadius: "50%",
  },
};

export default FeaturedProperties;
