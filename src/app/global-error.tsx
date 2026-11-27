"use client";

export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          color: "#000000",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#FA823C",
              margin: "0 0 12px",
            }}
          >
            Welty Tech
          </p>
          <h1
            style={{
              fontSize: "36px",
              lineHeight: 1.15,
              fontWeight: 500,
              margin: "0 0 16px",
            }}
          >
            Something went wrong.
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.5,
              color: "rgba(0,0,0,0.7)",
              margin: "0 0 28px",
            }}
          >
            An unexpected error occurred. Please retry or reload the page.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              height: "44px",
              padding: "0 24px",
              borderRadius: "9999px",
              border: "none",
              backgroundColor: "#000000",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
