import { ImageResponse } from "next/og";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export default function Icon() { return new ImageResponse(<div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: "#1e5aa8", color: "white", fontSize: 30, fontWeight: 700 }}>JU</div>, size); }
