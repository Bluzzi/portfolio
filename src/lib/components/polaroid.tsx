import type { CSSProperties, ReactElement } from "react";

export type PolaroidProps = {
  image: string;
  alt: string;
  caption: string;
  rotation: number;
  offset?: number;
};

// Tilted polaroid photo that straightens and lifts on hover:
export const Polaroid = ({ image, alt, caption, rotation, offset = 0 }: PolaroidProps): ReactElement => {
  return (
    <figure
      className="relative translate-y-(--offset) rotate-(--rotation) bg-paper p-3 pb-13.5 shadow-polaroid transition-[rotate,translate] duration-200 hover:rotate-0 hover:-translate-y-2"
      style={{ "--offset": `${String(offset)}px`, "--rotation": `${String(rotation)}deg` } as CSSProperties}
    >
      <img className="block aspect-square w-full object-cover" src={image} alt={alt} />
      <figcaption className="absolute bottom-3 left-3.5 font-caveat font-semibold text-[22px] text-ink">
        {caption}
      </figcaption>
    </figure>
  );
};
