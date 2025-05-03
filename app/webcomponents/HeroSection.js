import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <p style={styles.label}>#LuxuryHomes</p>
        <h1 style={styles.title}>Enjoy The Finest Homes</h1>
        <div style={styles.searchBar}>
          <input type="text" placeholder="Search location, property..." style={styles.input} />
          <button style={styles.button}>Search</button>
        </div>
        <div style={styles.stats}>
          <div><h3>683</h3><p>Properties</p></div>
          <div><h3>5K+</h3><p>Customers</p></div>
          <div><h3>520+</h3><p>New Listings</p></div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    background: '#333 url("https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center/cover no-repeat',
    height: '90vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '2rem',
    borderRadius: '10px'
  },
  label: {
    fontSize: '14px',
    textTransform: 'uppercase',
    color: '#ccc'
  },
  title: {
    fontSize: '36px',
    margin: '1rem 0'
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 0'
  },
  input: {
    padding: '0.6rem 1rem',
    width: '300px',
    border: 'none',
    borderRadius: '5px 0 0 5px'
  },
  button: {
    padding: '0.6rem 1rem',
    background: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer'
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '2rem'
  }
};

export default HeroSection;
