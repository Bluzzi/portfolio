import { ImageResponse } from "next/server";
import { metadata } from "#/configs/metadata";

export const size = { height: 300, width: 600 };
export const alt = metadata.title;
export const contentType = "image/png";

export default function og(): ImageResponse {
  return new ImageResponse(
    <div style={{
      backgroundColor: "black", height: "100%", width: "100%", padding: "0 250px",
      display: "flex", justifyContent: "center", flexDirection: "column", gap: "10px"
    }}>
      <p style={{ fontSize: "40px", color: "white", margin: 0 }}>Camille Dugas</p>

      <p style={{ fontSize: "25px", color: "white", margin: 0 }}>{metadata.description}</p>
    </div>
  );
}