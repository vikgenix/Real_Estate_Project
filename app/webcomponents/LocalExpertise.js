import React from 'react';
import Link from "next/link";
const LocalExpertise = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.text}>
          <h2 style={styles.heading}>Local Expertise. Global Reach.</h2>
          <p style={styles.paragraph}>
            Our agents have deep knowledge of your local area and access to exclusive global listings.
            Whether you're buying or selling, we ensure the process is smooth and successful.
          </p>
         
          <button style={styles.button}>
             <Link href="../buy">
              Explore More
              </Link>
          </button>
          
        </div>
        <img src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2g" alt="Local expertise" style={styles.image} />
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#fff'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '2rem'
  },
  text: {
    flex: '1 1 400px'
  },
  heading: {
    fontSize: '28px',
    marginBottom: '1rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
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
  image: {
    flex: '1 1 400px',
    maxWidth: '500px',
    width: '100%',
    borderRadius: '10px',
    objectFit: 'cover'
  }
};

export default LocalExpertise;
