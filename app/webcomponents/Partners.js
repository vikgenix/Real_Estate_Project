import React from 'react';

const Partners = () => {
  const partnerLogos = [
    'https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png',
    'https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png',
    'https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png',
    'https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png',
    'https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png'
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Our Trusted Partners</h2>
      <div style={styles.logos}>
        {partnerLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Partner ${index + 1}`} style={styles.logo} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#f3f3f3',
    textAlign: 'center'
  },
  heading: {
    fontSize: '26px',
      marginBottom: '2rem',
    color: '#333',
  },
  logos: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2rem'
  },
  logo: {
    maxWidth: '120px',
    maxHeight: '60px',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s ease',
    cursor: 'pointer'
  }
};

export default Partners;
