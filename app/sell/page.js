"use client";
import React, { useState } from "react";
import FormInput from "../webcomponents/FormInput";
import FormTextArea from "../webcomponents/FormTextArea";
import SubmitButton from "../webcomponents/SubmitButton";
import Sidebar from "../webcomponents/Sidebar";

export default function SellPage() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
    imageUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Property:", form);
    alert("Property submitted successfully!");
    setForm({
      title: "",
      price: "",
      location: "",
      imageUrl: "",
      description: "",
    });
  };

  return (
    <Sidebar
      component={
        <main
          style={{
            minHeight: "100vh",
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "12px",
              maxWidth: "600px",
              width: "100%",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Sell Your Property
            </h1>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <FormInput
                label="Title"
                name="title"
                placeholder="Property Title"
                value={form.title}
                onChange={handleChange}
              />
              <FormInput
                label="Price"
                name="price"
                type="number"
                placeholder="Price ($)"
                value={form.price}
                onChange={handleChange}
              />
              <FormInput
                label="Location"
                name="location"
                placeholder="Location"
                value={form.location}
                onChange={handleChange}
              />
              <FormInput
                label="Image URL"
                name="imageUrl"
                placeholder="Image URL"
                value={form.imageUrl}
                onChange={handleChange}
              />
              <FormTextArea
                label="Description"
                name="description"
                placeholder="Property Description"
                value={form.description}
                onChange={handleChange}
              />
              <SubmitButton text="Submit Property" />
            </form>
          </div>
        </main>
      }
      bgImage={
        "https://images.unsplash.com/photo-1672167834379-f6f3f9b8429e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D"
      }
    />
  );
}
