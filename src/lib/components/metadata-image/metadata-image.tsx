import { ImageResponse } from "next/og";
import { metadata } from "#/configs/metadata";

export function MetadataImage(): ImageResponse {
  return new ImageResponse(
    <div style={{
      backgroundColor: "black", height: "100%", width: "100%", padding: "0 100px",
      display: "flex", justifyContent: "center", flexDirection: "column", gap: "40px"
    }}>
      <p style={{ fontSize: "60px", color: "white", margin: 0 }}>Camille Dugas</p>

      <p style={{ fontSize: "35px", color: "white", margin: 0 }}>{metadata.description}</p>
    </div>
  );
}