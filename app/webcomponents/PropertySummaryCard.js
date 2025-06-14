import { MdOutlineMapsHomeWork } from "react-icons/md";

export default function PropertySummaryCard() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        padding: "20px",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Icon and text */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            background: "#fff",
            padding: "10px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#000",
            fontSize: "30px",
          }}
        >
          <MdOutlineMapsHomeWork />
        </div>
        <div>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>
            Total Properties
          </div>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>
            431 more to break last month record
          </div>
        </div>
      </div>

      {/* Value and progress bar */}
      <div style={{ textAlign: "right" }}>
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>4,562</div>
        <div
          style={{
            height: "6px",
            width: "180px",
            background: "#444",
            borderRadius: "4px",
            marginTop: "6px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "75%",
              background: "#fff",
              borderRadius: "4px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
