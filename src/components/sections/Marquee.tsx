const industries = [
  "DECORATIVE LAMINATE",
  "TOBACCO PRINTING",
  "PHARMA PACKAGING",
  "TEXTILE PRINTING",
  "LABEL INDUSTRY",
  "FOOD PACKAGING",
  "SECURITY PRINTING",
  "FLEXIBLE PACKAGING",
];

const Separator = () => (
  <span
    style={{
      display: "inline-block",
      margin: "0 24px",
      color: "#ED3237",
      fontSize: "10px",
      lineHeight: 1,
      verticalAlign: "middle",
    }}
  >
    ◆
  </span>
);

export default function Marquee() {
  const industriesTrack = [...industries, ...industries];

  return (
    <section
      style={{
        background: "rgba(30, 30, 79, 0.92)",
        backdropFilter: "blur(8px)",
        width: "100%",
        overflow: "hidden",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "0",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Left fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(to right, rgba(30,30,79,0.92), transparent)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      {/* Right fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(to left, rgba(30,30,79,0.92), transparent)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* Row 1 — scrolls left */}
      <div style={{ overflow: "hidden", padding: "8px 0" }}>
        <div
          className="marquee-track-left"
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {industriesTrack.map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.85)",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </span>
              <Separator />
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.06)",
          margin: "0 40px",
        }}
      />

      {/* Row 2 — scrolls right */}
      <div style={{ overflow: "hidden", padding: "8px 0" }}>
        <div
          className="marquee-track-right"
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {[...industriesTrack].reverse().map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </span>
              <Separator />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
