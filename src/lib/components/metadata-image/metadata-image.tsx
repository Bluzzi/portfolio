import { initWasm, Resvg } from "@resvg/resvg-wasm";
import fontDataUrl from "#/lib/assets/fonts/Geist-Regular.ttf?inline";
import { metadata } from "#/lib/configs/metadata";
import { Buffer } from "node:buffer";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import satori from "satori";

// Sizes previously used by the default options of NextJS' `ImageResponse`:
const WIDTH = 1200;
const HEIGHT = 630;

const fontData = Buffer.from(fontDataUrl.slice(fontDataUrl.indexOf(",") + 1), "base64");

const require = createRequire(import.meta.url);

let wasmInitialization: Promise<unknown> | null = null;

const ensureWasm = async (): Promise<unknown> => {
  wasmInitialization ??= readFile(require.resolve("@resvg/resvg-wasm/index_bg.wasm")).then(async (wasm) => initWasm(wasm));

  return wasmInitialization;
};

export const metadataImage = async (): Promise<Response> => {
  await ensureWasm();

  const imageJSX = (
    <div style={{
      backgroundColor: "black",
      height: "100%",
      width: "100%",
      padding: "0 100px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: "40px",
    }}
    >
      <p style={{ fontSize: "60px", color: "white", margin: 0 }}>Camille Dugas</p>

      <p style={{ fontSize: "35px", color: "white", margin: 0 }}>{metadata.description}</p>
    </div>
  );

  const svg = await satori(imageJSX, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      {
        name: "geist",
        data: fontData,
        weight: 400,
        style: "normal",
      },
    ],
  });

  const png = new Resvg(svg).render().asPng().slice();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": "inline",
      "Cache-Control": "public, must-revalidate, max-age=0",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
