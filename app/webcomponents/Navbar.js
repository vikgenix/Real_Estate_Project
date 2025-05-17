"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <div style={styles.logo}>Havn</div>
        {isMobile && (
          <button onClick={toggleMenu} style={styles.hamburger}>
            ☰
          </button>
        )}
      </div>

      {(menuOpen || !isMobile) && (
        <ul style={{ ...styles.menu, ...(isMobile ? styles.menuMobile : {}) }}>
          <li>
            <Link href="/buy">Buy</Link>
          </li>
          <li>
            <Link href="/buy">Rent</Link>
          </li>
          <li>
            <Link href="/sell">Sell</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}

      {!isMobile && (
        <Link href="/login">
          <button style={styles.button}>Login</button>
        </Link>
      )}
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
    flexWrap: "wrap",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000",
  },
  hamburger: {
    fontSize: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
    color: "#333",
  },
  menuMobile: {
    flexDirection: "column",
    width: "100%",
    marginTop: "1rem",
    gap: "1rem",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "white",
    border: "2px solid #ffffff",
    borderRadius: "50px",
    cursor: "pointer",
    marginLeft: "1rem",
  },
};

export default Navbar;
