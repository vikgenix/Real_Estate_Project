import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kendell Jenner",
      role: "Home Buyer",
      message:
        "The experience was amazing! The agents were knowledgeable and made the whole process smooth.",
      image:
        "https://s.yimg.com/ny/api/res/1.2/jPRbQ.roQEjhuwaAYYZjjA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD0xMjQy/https://media.zenfs.com/en/shefinds_255/ca08d4f88d2d370497fb464e182ed9df",
    },
    {
      name: "Sabrina Carpenter",
      role: "Investor",
      message:
        "I found the perfect property through PrimeEstates. Highly professional and reliable service.",
      image:
        "https://pbs.twimg.com/profile_images/1826875007911243776/bd_ET58o_400x400.jpg",
    },
    {
      name: "Ana De Armas",
      role: "First-time Buyer",
      message:
        "They guided me every step of the way. I’m now a happy homeowner!",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/ana-de-armas-arrives-at-the-vanity-fair-oscar-party-hosted-news-photo-1740776729.pjpeg?crop=1.00xw:0.738xh;0,0.0401xh&resize=640:*",
    },
    {
      name: "Chris Hemsworth",
      role: "Seller",
      message:
        "Sold my house in record time! The team was proactive and got me a great price.",
      image:
        "https://variety.com/wp-content/uploads/2022/11/GettyImages-1442079658.jpg?w=1000&h=667&crop=1",
    },
    {
      name: "Emily Johnson",
      role: "Renter",
      message:
        "Found my dream rental in no time. The agents were friendly and listened to my needs.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png/250px-191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>What Our Clients Say</h2>
      <div style={styles.grid}>
        {testimonials.map((t, index) => (
          <div key={index} style={styles.card}>
            <img
              src={
                t.image
              }
              alt={t.name}
              style={styles.avatar}
            />
            <p style={styles.message}>"{t.message}"</p>
            <h4 style={styles.name}>{t.name}</h4>
            <p style={styles.role}>{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "4rem 2rem",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "2rem",
    color: "#333",
  },
  grid: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "2rem",
    maxWidth: "300px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  message: {
    fontSize: "15px",
    color: "#444",
    fontStyle: "italic",
    marginBottom: "1rem",
  },
  name: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "0.25rem",
    color: "#333",
  },
  role: {
    fontSize: "14px",
    color: "#777",
  },
};

export default Testimonials;
