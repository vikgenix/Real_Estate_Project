import React from "react";

const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <p style={styles.label}>#Havn</p>
        <h1 style={styles.title}>Enjoy The Finest Homes</h1>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search location, property..."
            style={styles.input}
          />
          <button style={styles.button}>Search</button>
        </div>
        <div style={styles.stats}>
          <div style={styles.statItem}>
            <h3>683</h3>
            <p>Properties</p>
          </div>
          <div style={styles.statItem}>
            <h3>5K+</h3>
            <p>Customers</p>
          </div>
          <div style={styles.statItem}>
            <h3>520+</h3>
            <p>New Listings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    background:
      '#333 url("https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center/cover no-repeat',
    minHeight: "90vh",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  content: {
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "2rem",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "800px",
  },
  label: {
    fontSize: "14px",
    textTransform: "uppercase",
    color: "#ccc",
  },
  title: {
    fontSize: "2.5rem",
    margin: "1rem 0",
  },
  searchBar: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "1rem 0",
  },
  input: {
    padding: "0.6rem 1rem",
    width: "100%",
    maxWidth: "300px",
    border: "none",
    borderRadius: "5px 0 0 5px",
    fontSize: "1rem",
  },
  button: {
    padding: "0.6rem 1rem",
    background: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "0 5px 5px 0",
    cursor: "pointer",
    fontSize: "1rem",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  statItem: {
    flex: "1 1 100px",
    minWidth: "100px",
  },
};

export default HeroSection;
