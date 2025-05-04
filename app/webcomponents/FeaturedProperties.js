import React from 'react';

const FeaturedProperties = (props) => {
  const properties = [
    {
      name: 'Skyline Tower',
      location: 'New York, NY',
      price: '$1,200,000',
      img: '/property1.jpg'
    },
    {
      name: 'Palm Beach Villa',
      location: 'Miami, FL',
      price: '$950,000',
      img: '/property2.jpg'
    },
    {
      name: 'Hilltop Mansion',
      location: 'Los Angeles, CA',
      price: '$3,500,000',
      img: '/property3.jpg'
    },
     {
      name: 'Skyline Tower',
      location: 'New York, NY',
      price: '$1,200,000',
      img: '/property1.jpg'
    },
    {
      name: 'Palm Beach Villa',
      location: 'Miami, FL',
      price: '$950,000',
      img: '/property2.jpg'
    },
    {
      name: 'Hilltop Mansion',
      location: 'Los Angeles, CA',
      price: '$3,500,000',
      img: '/property3.jpg'
      },
      {
      name: 'Hilltop Mansion',
      location: 'Los Angeles, CA',
      price: '$3,500,000',
      img: '/property3.jpg'
      },
    {
      name: 'Skyline Tower',
      location: 'New York, NY',
      price: '$1,200,000',
      img: '/property1.jpg'
    },
    {
      name: 'Palm Beach Villa',
      location: 'Miami, FL',
      price: '$950,000',
      img: '/property2.jpg'
    },
    {
      name: 'Hilltop Mansion',
      location: 'Los Angeles, CA',
      price: '$3,500,000',
      img: '/property3.jpg'
    }
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{props.name}</h2>
      <div style={styles.grid}>
        {properties.map((property, index) => (
          <div key={index} style={styles.card}>
            <img src={"https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt={property.name} style={styles.image} />
            <div style={styles.info}>
              <h3 style={styles.title}>{property.name}</h3>
              <p style={styles.location}>{property.location}</p>
              <p style={styles.price}>{property.price}</p>
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
    fontSize: '28px',
      marginBottom: '2rem',
    color: '#333',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap'
  },
  card: {
    width: '280px',
    backgroundColor: '#fdfdfd',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      textAlign: 'left',
    color: '#333'
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
    marginBottom: '0.5rem'
  },
  location: {
    color: '#777',
    marginBottom: '0.25rem'
  },
  price: {
    color: '#0070f3',
    fontWeight: 'bold'
  }
};

export default FeaturedProperties;
