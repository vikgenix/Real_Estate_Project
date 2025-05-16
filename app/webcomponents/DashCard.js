export default function DashCard({ title, value, description }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "8px",
        padding: "1rem",
        minWidth: "200px",
        flex: 1,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <p style={{ fontSize: "0.9rem", color: "#555" }}>{title}</p>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{value}</h2>
      <p style={{ fontSize: "0.8rem", color: "#888" }}>{description}</p>
    </div>
  );
}
