import { ImageResponse } from "next/og";

export const alt =
  "Deodar Web Studio builds founder-led websites, commerce experiences and operational systems.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#0A0D0B",
          color: "#F2EEE7",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            borderTop: "1px solid rgba(242, 238, 231, 0.24)",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "28px",
          }}
        >
          <div style={{ color: "#91A796", fontSize: 24, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Founder-led studio
          </div>
          <div style={{ color: "#9E9B94", fontSize: 24 }}>Design and engineering</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#F2EEE7", fontSize: 132, fontWeight: 650, letterSpacing: "-0.06em", lineHeight: 0.9 }}>
            Deodar
          </div>
          <div style={{ color: "#D0CBC2", fontSize: 86, fontWeight: 500, letterSpacing: "-0.045em", lineHeight: 1 }}>
            Web Studio
          </div>
        </div>

        <div
          style={{
            borderLeft: "2px solid #708A76",
            color: "#D0CBC2",
            display: "flex",
            fontSize: 38,
            lineHeight: 1.18,
            maxWidth: "840px",
            paddingLeft: "28px",
          }}
        >
          Websites and business systems for enquiries,
          <br />
          transactions and simpler operations.
        </div>
      </div>
    ),
    size,
  );
}
