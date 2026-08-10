// Inactive "Chargers" sidebar item injected into old screens that lack it.
// SVG paths sourced from @/imports/Chargers-2/svg-6uq9md4yd4.
import svgPaths from "@/imports/Chargers-2/svg-6uq9md4yd4";

type Props = {
  top: number;
  onClick: () => void;
};

export default function ChargersSidebarItem({ top, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        top,
        left: 24,
        width: 184,
        height: 32,
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        pointerEvents: "auto",
        textAlign: "left",
        borderRadius: 6,
      }}
      aria-label="Go to Chargers"
    >
      {/* White background matching the sidebar surface */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "white",
        borderRadius: 6,
      }} />

      {/* Item content: icon + label, matching inactive sidebar item style */}
      <div style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 12px",
        height: "100%",
      }}>
        {/* Charger plug icon */}
        <div style={{ position: "relative", flexShrink: 0, width: 20, height: 20, overflow: "clip" }}>
          <div style={{ position: "absolute", inset: "12.92% 8.75%" }}>
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              fill="none"
              viewBox="0 0 16.5 14.8333"
              preserveAspectRatio="none"
            >
              <path clipRule="evenodd" d={svgPaths.p28312e90} fill="#525252" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pee71200}  fill="#525252" fillRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Label */}
        <span style={{
          fontFamily: "'Inter:Medium', sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.084px",
          color: "#525252",
          whiteSpace: "nowrap",
        }}>
          Chargers
        </span>
      </div>
    </button>
  );
}
