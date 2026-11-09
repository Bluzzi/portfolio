import type { ReactElement } from "react";
import { SceneImage } from "#/lib/components/scene-image";

// Pixel transition band between the hero and the night sections:
export const DividerBand = (): ReactElement => {
  return (
    <div aria-hidden="true" className="relative h-14 overflow-hidden bg-night">
      <SceneImage src="/backgrounds/scene-divider.png" alt="" />
    </div>
  );
};
