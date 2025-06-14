export default function Header({ title }) {
  return (
    <div
      style={{
        marginBottom: "30px",
        fontSize: "28px",
        fontWeight: "600",
        borderBottom: "2px solid #000",
        paddingBottom: "10px",
      }}
    >
      {title}
    </div>
  );
}
