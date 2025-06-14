"use client";
import React from "react";
import styles from "./StatCard.module.css";

export default function StatCard({ icon, title, value, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.value}>{value}</p>
        <span>{description}</span>
      </div>
    </div>
  );
}
