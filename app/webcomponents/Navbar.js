import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Havn</div>
      <ul style={styles.menu}>
        <Link href="/buy">Buy</Link>
        <Link href="/buy">Rent</Link>
        <Link href="/sell">Sell</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>
      <button style={styles.button}>Login</button>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
    color: "#333",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "white",
    border: "2px solid #ffffff",
    borderRadius: "50px",
    cursor: "pointer",
    marginRight: "30px",
  },
};

export default Navbar;
