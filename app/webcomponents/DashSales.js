export default function DashSales({ image, title, description, buttonText }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "350px",
        minWidth: "300px",
        flex: 1,
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem" }}>{title}</h3>
        <p style={{ margin: 0, color: "#555", fontSize: "0.9rem" }}>
          {description}
        </p>
      </div>
      <div style={{ padding: "1rem" }}>
        <button
          style={{
            width: "100%",
            padding: "0.6rem 1rem",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
