import { ImageResponse } from "next/og";
export const alt = "Jahred Uy, Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: 80, background: "#f8fafc", color: "#0b1f3a", border: "16px solid #1e5aa8" }}><div style={{ display: "flex", fontSize: 28, color: "#1e5aa8" }}>FULL STACK DEVELOPER</div><div style={{ display: "flex", fontSize: 100, fontWeight: 700, marginTop: 24 }}>JAHRED UY</div><div style={{ display: "flex", fontSize: 30, marginTop: 32 }}>Business systems · Automation · Mobile applications</div></div>, size); }
