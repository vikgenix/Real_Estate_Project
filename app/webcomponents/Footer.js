import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h3 style={styles.title}>PrimeEstates</h3>
          <p style={styles.text}>
            Your trusted partner in buying, selling, and renting properties
            worldwide.
          </p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Quick Links</h4>
          <ul style={styles.list}>
            <li>
              <a href="#">Home</a>
            </li>
            <Link href="/buy">
              <li>
                Buy
              </li>
            </Link>
            <Link href="/buy">
            <li>
              Rent
            </li>
            </Link>
            <Link href="/sell">
            <li>
              Sell
              </li>
            </Link>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Contact</h4>
          <p style={styles.text}>Email: info@primeestates.com</p>
          <p style={styles.text}>Phone: +1 (234) 567-890</p>
        </div>
      </div>
      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} PrimeEstates. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#101010',
    color: '#f1f1f1',
    padding: '4rem 2rem 2rem'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  column: {
    flex: '1 1 250px'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '0.75rem'
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '1.8'
  },
  bottom: {
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '14px',
    color: '#aaa'
  }
};

export default Footer;
