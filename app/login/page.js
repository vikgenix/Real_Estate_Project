import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div style={styles.loginBox}>
          <h2 style={styles.heading}>Login to Your Account</h2>
          <p style={styles.subtitle}>
            The Faster you Login, The Faster we get to work
          </p>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Uniquedesign@gmail.com"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
            />
          </div>

          <Link href="/dashboard" style={styles.button}>
            Login
          </Link>

          <div style={styles.or}>OR</div>

          <div style={styles.social}>
            <button style={styles.socialBtn}>G</button>
            <button style={styles.socialBtn}></button>
          </div>

          <p style={styles.signup}>
            Don’t Have An Account?{" "}
            <a href="#" style={styles.signupLink}>
              Sign Up
            </a>
          </p>
        </div>
      </div>

      <div style={styles.right}>
        <div style={styles.welcomeText}>
          Welcome
          <br />
          Back !
        </div>
        <div style={styles.lamp} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Segoe UI, sans-serif",
  },
  left: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    flex: 1,
    backgroundImage:
      'url("https://images.pexels.com/photos/7902912/pexels-photo-7902912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  welcomeText: {
    fontSize: "48px",
    fontWeight: "bold",
    lineHeight: 1.2,
    textAlign: "center",
  },
  lamp: {
    width: "100px",
    height: "100px",
    backgroundImage: 'url("/lamp.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    marginTop: "20px",
  },
  loginBox: {
    width: "80%",
    maxWidth: "400px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#0e0e2c",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    borderRadius: "6px",
    marginTop: "10px",
    textAlign: "center",
    display: "inline-block",
    textDecoration: "none",
  },
  or: {
    textAlign: "center",
    margin: "20px 0",
    color: "#999",
  },
  social: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  socialBtn: {
    width: "48px",
    height: "48px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    fontSize: "18px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  signup: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "14px",
  },
  signupLink: {
    fontWeight: "bold",
    textDecoration: "none",
    color: "#0e0e2c",
  },
};

export default Page;
