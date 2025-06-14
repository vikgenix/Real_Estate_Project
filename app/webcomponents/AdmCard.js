export default function Card({ title, value }) {
  return (
    <div
      style={{
        flex: "1 1 220px",
        backgroundColor: "#fff",
        border: "1px solid #000",
        borderRadius: "10px",
        padding: "20px",
        minWidth: "220px",
        boxShadow: "4px 4px 0 #000",
        transition: "transform 0.2s ease",
      }}
    >
      <div style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
        {title}
      </div>
      <div style={{ fontSize: "26px", fontWeight: "bold", color: "#000" }}>
        {value}
      </div>
    </div>
  );
}
