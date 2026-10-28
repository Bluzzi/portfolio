import type { ReactElement } from "react";

// Fixed page backdrop: dot grid plus slow-breathing glow blobs.
export const Backdrop = (): ReactElement => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="dot-grid absolute inset-0" />

      {/* Glow blobs: */}
      <div className="breathe absolute -top-32 -left-24 size-96 rounded-full bg-volt/8 blur-3xl" />
      <div className="breathe absolute top-1/3 -right-32 size-[28rem] rounded-full bg-white/[0.04] blur-3xl" style={{ animationDelay: "2.5s" }} />
      <div className="breathe absolute -bottom-40 left-1/4 size-96 rounded-full bg-volt/5 blur-3xl" style={{ animationDelay: "5s" }} />
    </div>
  );
};
