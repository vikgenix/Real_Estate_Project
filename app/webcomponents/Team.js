import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Ava Carter",
      role: "Lead Agent",
      image:
        "https://i.pinimg.com/736x/70/d3/90/70d39088fe524ca0fae1e390262eb545.jpg",
    },
    {
      name: "Margot Robbie",
      role: "Property Consultant",
      image:
        "https://static.businessworld.in/Screenshot%202025-06-21%20111543_20250621111553_original_image_39.webp",
    },
    {
      name: "Soham Parekh",
      role: "Marketing Manager",
      image:
        "https://static.businessworld.in/Untitled%20design%20-%202025-07-04T111127.196_20250704112226_original_image_6.webp",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Meet Our Team</h2>
      <div style={styles.grid}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.card}>
            <img src={ member.image} alt={member.name} style={styles.image} />
            <h3 style={styles.name}>{member.name}</h3>
            <p style={styles.role}>{member.role}</p>
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
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  card: {
    width: '220px',
    backgroundColor: '#fdfdfd',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    padding: '1rem',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderRadius: '10px'
  },
  name: {
    fontSize: '18px',
    fontWeight: '600',
      marginTop: '1rem',
    color: '#333'
  },
  role: {
    fontSize: '14px',
    color: '#777'
  }
};

export default Team;
