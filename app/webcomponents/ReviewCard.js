"use client";
import React from "react";

const dummyReviews = [
  {
    name: "John Doe",
    rating: 4,
    time: "5m ago",
    review: "Friendly service... during the lockdown.",
    image: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Amelia Tuner",
    rating: 5,
    time: "10h ago",
    review: "Professional, efficient, patient...",
    image: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Michael Smith",
    rating: 3,
    time: "1d ago",
    review: "Good service, but could be better.",
    image: "https://i.pravatar.cc/40?img=3",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    time: "2d ago",
    review: "Absolutely fantastic experience!",
    image: "https://i.pravatar.cc/40?img=4",
  },
  {
    name: "David Brown",
    rating: 2,
    time: "3d ago",
    review: "Not satisfied with the service.",
    image: "https://i.pravatar.cc/40?img=5",
  }
];

export default function ReviewCard() {
  const cardStyle = {
    padding: "1rem",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    backgroundColor: "#fff",
  };

  const reviewStyle = {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
    borderBottom: "1px solid #eee",
    paddingBottom: "1rem",
  };

  const imgStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const reviewTextContainer = {
    flex: 1,
  };

  const nameStyle = {
    fontWeight: "bold",
    marginBottom: "0.25rem",
  };

  const starsStyle = {
    color: "#f5a623", // gold star color
    marginBottom: "0.25rem",
  };

  const timeStyle = {
    fontSize: "0.75rem",
    color: "#999",
    marginBottom: "0.5rem",
  };

  const reviewTextStyle = {
    margin: 0,
    fontSize: "0.9rem",
    color: "#333",
  };

  return (
    <div style={cardStyle}>
      <h3>Customer Review</h3>
      {dummyReviews.map((review, idx) => (
        <div key={idx} style={reviewStyle}>
          <img src={review.image} alt={review.name} style={imgStyle} />
          <div style={reviewTextContainer}>
            <strong style={nameStyle}>{review.name}</strong>
            <div style={starsStyle}>{"⭐".repeat(review.rating)}</div>
            <small style={timeStyle}>{review.time}</small>
            <p style={reviewTextStyle}>{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
