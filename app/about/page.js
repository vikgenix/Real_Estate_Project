"use client";

import React from "react";
import Head from "next/head";
import Sidebar from "../webcomponents/Sidebar";

const About = () => {
  return (
    <>
      <Sidebar
        component={
          <>
            <Head>
              <title>About Us | RealEstate</title>
            </Head>

            <div style={styles.container}>
              <h1 style={styles.heading}>About Havn</h1>
              <p style={styles.intro}>
                At Havn, we’re redefining real estate with a modern,
                data-driven, and people-first approach.
              </p>

              <section style={styles.section}>
                <h2 style={styles.subheading}>Who We Are</h2>
                <p style={styles.text}>
                  Havn is a team of passionate real estate professionals,
                  analysts, and technologists committed to making property
                  buying, selling, and renting as seamless as possible. Our goal
                  is to empower our clients with transparency, insight, and
                  tools they need to make confident property decisions.
                </p>
              </section>

              <section style={styles.section}>
                <h2 style={styles.subheading}>What We Do</h2>
                <p style={styles.text}>
                  We combine real-world expertise with cutting-edge technology
                  to help you navigate the housing market with ease. Whether
                  you're looking for your first home, an investment opportunity,
                  or a place to rent, Havn is here to support you every step of
                  the way.
                </p>
              </section>

              <section style={styles.section}>
                <h2 style={styles.subheading}>Our Vision</h2>
                <p style={styles.text}>
                  To be the most trusted, innovative, and accessible real estate
                  platform — where people find not just properties, but
                  possibilities.
                </p>
              </section>
            </div>
          </>
        }
      />
    </>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "4rem auto",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    lineHeight: "1.6",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "1rem",
    color: "#111",
  },
  intro: {
    fontSize: "18px",
    marginBottom: "2rem",
    color: "#555",
  },
  section: {
    marginBottom: "2rem",
  },
  subheading: {
    fontSize: "24px",
    marginBottom: "0.5rem",
    color: "#000",
  },
  text: {
    fontSize: "16px",
    color: "#444",
  },
};

export default About;
