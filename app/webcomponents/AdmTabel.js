export default function Table() {
  const data = [
    { id: 1, name: "John Doe", status: "Active", role: "Admin" },
    { id: 2, name: "Jane Smith", status: "Inactive", role: "User" },
    { id: 3, name: "Bob Johnson", status: "Active", role: "Manager" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #000",
        borderRadius: "10px",
        boxShadow: "4px 4px 0 #000",
        overflowX: "auto",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f5f5f5" }}>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td style={tdStyle}>{row.name}</td>
              <td style={tdStyle}>{row.status}</td>
              <td style={tdStyle}>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  border: "1px solid #000",
  padding: "12px",
  textAlign: "left",
  fontWeight: "600",
  fontSize: "14px",
};

const tdStyle = {
  border: "1px solid #000",
  padding: "12px",
  fontSize: "14px",
};
