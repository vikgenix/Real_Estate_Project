export default function Stats() {
  const boxStyle = {
    flex: 1,
    backgroundColor: "#fff",
    border: "1px solid #000",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "4px 4px 0 #000",
    minWidth: "220px",
  };

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <div style={boxStyle}>
        <p style={{ marginBottom: "10px", fontWeight: "500" }}>
          Conversion Rate
        </p>
        <h3 style={{ fontSize: "22px" }}>4.8%</h3>
      </div>
      <div style={boxStyle}>
        <p style={{ marginBottom: "10px", fontWeight: "500" }}>Bounce Rate</p>
        <h3 style={{ fontSize: "22px" }}>38%</h3>
      </div>
    </div>
  );
}
