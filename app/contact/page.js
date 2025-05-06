"use client";
import React from "react";
import Sidebar from "../webcomponents/Sidebar";

const Contact = () => {
  return (
    <Sidebar
      component={
        <>
          <div style={styles.container}>
            <h1 style={styles.heading}>Contact Us</h1>
            <p style={styles.subtext}>
              Got questions about buying or selling property? Reach out to us!
            </p>

            <form style={styles.form}>
              <label htmlFor="name" style={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={styles.input}
              />

              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={styles.input}
              />

              <label htmlFor="message" style={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                style={styles.textarea}
              />

              <button type="submit" style={styles.button}>
                Send Message
              </button>
            </form>
          </div>
        </>
      }
    />
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "4rem auto",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "0.5rem",
    color: "#333",
  },
  subtext: {
    marginBottom: "1.5rem",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "0.5rem",
    fontWeight: "500",
  },
  input: {
    padding: "0.75rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.75rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "white",
    border: "2px solid #ffffff",
    borderRadius: "50px",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
};

export default Contact;
