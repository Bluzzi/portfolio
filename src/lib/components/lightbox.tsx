import type { ReactElement } from "react";
import { useEffect } from "react";

export type LightboxProps = {
  src: string;
  alt: string;
  caption: string;
  onClose: () => void;
};

// Fullscreen photo viewer: closes on Escape, backdrop click or the close button:
export const Lightbox = ({ src, alt, caption, onClose }: LightboxProps): ReactElement => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-night/95 p-6"
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      onClick={onClose}
    >
      <button type="button" className="absolute top-5 right-6 font-jersey text-[40px] leading-none text-cream transition-colors hover:text-amber" onClick={onClose}>
        ×
      </button>

      <img
        className="max-h-[85vh] max-w-full rounded-sm object-contain shadow-polaroid"
        src={src}
        alt={alt}
        // The full-resolution photo is only fetched when the lightbox opens:
        loading="eager"
        decoding="async"
        onClick={(event) => event.stopPropagation()}
      />

      <p className="font-caveat text-[24px] font-semibold text-cream">{caption}</p>
    </div>
  );
};
