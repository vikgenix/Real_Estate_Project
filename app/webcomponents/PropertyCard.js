import React from "react";
import PropertyStat from "./PropertyStat";

const PropertyCard = ({
  unitNumber,
  image,
  description,
  size,
  bedrooms,
  bathrooms,
  balcony,
  parking,
  address,
  building,
  price,
  pricePerSq,
}) => {
  return (
    <div style={styles.card}>
      <div style={styles.left}>
        <img src={image} alt="Floor plan" style={styles.image} />
      </div>
      <div style={styles.right}>
        <h2 style={styles.unit}>{unitNumber}</h2>
        <p style={styles.desc}>{description}</p>
        <div style={styles.stats}>
          <PropertyStat icon="📏" label={size} />
          <PropertyStat icon="🛏️" label={`${bedrooms} Bedrooms`} />
          <PropertyStat icon="🛁" label={`${bathrooms} Bathrooms`} />
          {balcony && <PropertyStat icon="🏡" label="Balcony" />}
          {parking && (
            <PropertyStat icon="🅿️" label={`${parking} Parking Slot`} />
          )}
        </div>
        <div style={styles.addressSection}>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>Building:</strong> {building}
          </p>
        </div>
        <div style={styles.price}>
          <h3>{price}</h3>
          <span style={styles.perSq}>{pricePerSq}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    overflow: "hidden",
    marginBottom: "2rem",
    width: "100%",
    maxWidth: "1000px",
  },
  left: {
    flex: "1 1 45%",
    borderRight: "1px solid #eee",
  },
  right: {
    flex: "1 1 55%",
    padding: "2rem",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  unit: {
    margin: "0 0 1rem 0",
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  desc: {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "1rem",
  },
  stats: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginBottom: "1rem",
  },
  addressSection: {
    fontSize: "0.95rem",
    color: "#333",
    margin: "1rem 0",
  },
  price: {
    marginTop: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  perSq: {
    color: "#666",
    fontSize: "0.9rem",
  },
};

export default PropertyCard;
