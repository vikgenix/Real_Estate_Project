import React from 'react';

const DiscoverSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Discover Your Dream Home</h2>
        <p style={styles.text}>
          Browse thousands of listings from across the country and find the property that feels like home.
        </p>
        <button style={styles.button}>Start Exploring</button>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="https://images.pexels.com/photos/2031727/pexels-photo-2031727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2g"
          alt="Discover Real Estate"
          style={styles.image}
        />
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#f5f5f5',
    gap: '2rem',
    justifyContent: 'center'
  },
  content: {
    flex: '1 1 400px',
    textAlign: 'left',
    maxWidth: '500px'
  },
  heading: {
    fontSize: '28px',
      marginBottom: '1rem',
    color: '#333',
  },
  text: {
    fontSize: '16px',
    color: '#444',
    marginBottom: '1.5rem'
  },
  button: {
    padding: "10px 20px",
        backgroundColor: "#000",
        color: "white",
        border: "2px solid #ffffff",
        borderRadius: "50px",
        cursor: "pointer",
        marginRight: "30px"
    },
  imageContainer: {
    flex: '1 1 400px',
    maxWidth: '500px'
  },
  image: {
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  }
};

export default DiscoverSection;
