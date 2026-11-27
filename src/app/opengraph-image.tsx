import { ImageResponse } from "next/og";

export const alt =
  "Welty Tech — Engineering What's Next | Digital Product Design, Custom Software & AI";
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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "999px",
                background: "#FA823C",
              }}
            />
            <span
              style={{
                fontSize: "34px",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              Welty Tech
            </span>
          </div>

          <div
            style={{
              background: "#E5FA3C",
              color: "#000000",
              padding: "10px 22px",
              borderRadius: "999px",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Engineering What&apos;s Next
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: "980px",
            }}
          >
            Digital Product Design, Custom Software &amp; Practical AI.
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.4,
              maxWidth: "900px",
            }}
          >
            ERP &amp; CRM Solutions · AI Automation · On-Premises &amp; Private Cloud · System Integration &amp; APIs
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.16)",
            paddingTop: "24px",
            fontSize: "22px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <span>welty.in</span>
          <span style={{ color: "#FA823C" }}>Thoughtful Design · Modern Engineering · AI</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
