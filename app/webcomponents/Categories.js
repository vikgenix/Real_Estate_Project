import React from 'react';

const Categories = () => {
  const categories = [
    { label: 'Apartments', icon: '🏢' },
    { label: 'Villas', icon: '🏡' },
    { label: 'Offices', icon: '🏬' },
    { label: 'Retail', icon: '🛍️' },
    { label: 'Land', icon: '🌄' }
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Explore by Category</h2>
      <div style={styles.grid}>
        {categories.map((cat, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{cat.icon}</div>
            <p style={styles.label}>{cat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '3rem 2rem',
    backgroundColor: '#f5f5f5',
    textAlign: 'center'
  },
  heading: {
    fontSize: '26px',
    marginBottom: '2rem',
    color: '#333'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap'
  },
  card: {
    width: '140px',
    height: '140px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.2s ease',
    cursor: 'pointer'
  },
  icon: {
    fontSize: '32px',
    marginBottom: '0.5rem'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333'
  }
};

export default Categories;

