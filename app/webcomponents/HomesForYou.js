import React from 'react';

const HomesForYou = () => {
  const homes = [
    {
      title: 'Modern Apartment',
      location: 'Chicago, IL',
      price: '$750,000',
      image: '/home1.jpg'
    },
    {
      title: 'Luxury Villa',
      location: 'Austin, TX',
      price: '$1,950,000',
      image: '/home2.jpg'
    },
    {
      title: 'City Loft',
      location: 'San Francisco, CA',
      price: '$1,150,000',
      image: '/home3.jpg'
    }
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Homes Recommended For You</h2>
      <div style={styles.grid}>
        {homes.map((home, index) => (
          <div key={index} style={styles.card}>
            <img src={"https://images.pexels.com/photos/1488267/pexels-photo-1488267.png?auto=compress&cs=tinysrgb&w=1200"} alt={home.title} style={styles.image} />
            <div style={styles.info}>
              <h3 style={styles.title}>{home.title}</h3>
              <p style={styles.location}>{home.location}</p>
              <p style={styles.price}>{home.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
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
    width: '280px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fafafa'
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover'
  },
  info: {
    padding: '1rem'
  },
  title: {
    fontSize: '18px',
      fontWeight: '600',
      color: '#333',
  },
  location: {
    fontSize: '14px',
    color: '#777',
    margin: '0.5rem 0'
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#0070f3'
  }
};

export default HomesForYou;
