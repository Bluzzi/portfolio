import classNames from "clsx";
import React, { useState, useEffect, useRef, ReactElement } from "react";
import { isMobile } from "../../utils/Device";

export default function Cursor() : ReactElement | null {
  const cursor = useRef<HTMLSpanElement>(null);

  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("mouseover", onLinkMouseOver);
      link.addEventListener("mouseout", onLinkMouseOut);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);

      document.querySelectorAll("a").forEach(link => {
        link.removeEventListener("mouseover", onLinkMouseOver);
        link.removeEventListener("mouseout", () => onLinkMouseOut);
      });
    };
  }, []);

  if (typeof navigator !== "undefined" && isMobile()) return null;

  // Basic events functions :
  const onMouseMove = (event: MouseEvent) => {
    cursor.current?.style.setProperty("top", `${event.clientY}px`);
    cursor.current?.style.setProperty("left", `${event.clientX}px`);
  };
  const onMouseDown = () => setClicked(true);
  const onMouseUp = () => setClicked(false);
  const onMouseLeave = () => setHidden(true);
  const onMouseEnter = () => setHidden(false);

  // Links events function :
  const onLinkMouseOver = () => setLinkHovered(true);
  const onLinkMouseOut = () => setLinkHovered(false);

  // Styles :
  const css = classNames(
    "h-10 w-10",
    "border border-white rounded-full",
    "fixed z-50",
    "pointer-events-none",
    "-translate-x-1/2 -translate-y-1/2",
    "transition-cursor ease-in-out",
    {
      "bg-white scale-90": clicked,

      "bg-white mix-blend-normal scale-50": linkHovered, // or scale 125
      "mix-blend-difference": !linkHovered,

      "opacity-0": hidden
    }
  );

  // Element :
  return <span className={css} ref={cursor} />;
}