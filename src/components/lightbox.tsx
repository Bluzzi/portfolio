import type { ReactElement } from "react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export type LightboxProps = {
  thumbSrc: string;
  src: string;
  alt: string;
  caption: string;
  onClose: () => void;
};

// Fullscreen photo viewer: closes on Escape, backdrop click or the close button:
export const Lightbox = ({ thumbSrc, src, alt, caption, onClose }: LightboxProps): ReactElement => {
  // The entrance animation must show a correctly sized, visible photo on its first frame,
  // so it starts on the cached thumbnail, then swaps to the full-resolution photo on load:
  const [isFullLoaded, setIsFullLoaded] = useState(false);

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
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-night/95 p-6"
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <motion.button
        type="button"
        className="absolute top-5 right-6 font-jersey text-[40px] leading-none text-cream transition-colors hover:text-amber"
        onClick={onClose}
        aria-label="Fermer"
        initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, transition: { delay: 0.25, type: "spring", stiffness: 400, damping: 20 } }}
        exit={{ opacity: 0, scale: 0.6, rotate: -90, transition: { duration: 0.15 } }}
      >
        ×
      </motion.button>

      {/* The photo is laid on the pile with a soft spring, like a polaroid put down on a table: */}
      <motion.img
        className="max-h-[85vh] max-w-full rounded-sm object-contain shadow-polaroid"
        // Browsers keep displaying the current photo until the swapped one decodes,
        // so the box never collapses and the animation never measures an empty image:
        src={isFullLoaded ? src : thumbSrc}
        onLoad={() => setIsFullLoaded(true)}
        alt={alt}
        // Browsers keep displaying the current photo until the swapped one decodes,
        // so the box never collapses and the animation never measures an empty image:
        initial={{ opacity: 0, scale: 0.86, y: 24, rotate: -1.5 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 24 } }}
        exit={{ opacity: 0, scale: 0.92, y: 12, transition: { duration: 0.18, ease: "easeIn" } }}
        // The full-resolution photo is only fetched when the lightbox opens:
        loading="eager"
        decoding="async"
        onClick={(event) => event.stopPropagation()}
      />

      <motion.p
        className="font-caveat text-[24px] font-semibold text-cream"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2, ease: "easeOut" } }}
        exit={{ opacity: 0, y: 8, transition: { duration: 0.15 } }}
      >
        {caption}
      </motion.p>
    </motion.div>
  );
};
