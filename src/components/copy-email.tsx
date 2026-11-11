import type { ReactElement } from "react";
import { Button } from "#/components/button";
import { contactLinks } from "#/configs/links";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// How long the copied confirmation stays visible:
const CONFIRMATION_MS = 1600;

// Copies the address synchronously through execCommand, so the copy always completes
// inside the click gesture, before the browser hands the mailto off to the OS mail
// client (an async write can race with that handoff):
const copyEmailSync = (): boolean => {
  const area = document.createElement("textarea");
  area.value = contactLinks.email;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "-9999px";
  document.body.append(area);
  area.select();
  area.setSelectionRange(0, contactLinks.email.length);
  const copied = document.execCommand("copy");
  area.remove();
  return copied;
};

// Contact button that keeps the mailto link but also copies the email on click, so the
// address lands in the clipboard even when no mail client is configured on the visitor
// machine. The confirmation only shows when the copy actually succeeded:
export const CopyEmailButton = (): ReactElement => {
  const [copied, setCopied] = useState(false);
  const copiedTimeoutRef = useRef<number | undefined>(undefined);
  const reduceMotion = useReducedMotion();

  // Clear the pending confirmation timer on unmount:
  useEffect(() => () => window.clearTimeout(copiedTimeoutRef.current), []);

  const copyEmail = (): void => {
    // Synchronous copy first, async Clipboard API as a fallback if execCommand is refused:
    if (copyEmailSync()) {
      setCopied(true);
      window.clearTimeout(copiedTimeoutRef.current);
      copiedTimeoutRef.current = window.setTimeout(() => setCopied(false), CONFIRMATION_MS);
      return;
    }

    navigator.clipboard.writeText(contactLinks.email).then(() => {
      setCopied(true);
      window.clearTimeout(copiedTimeoutRef.current);
      copiedTimeoutRef.current = window.setTimeout(() => setCopied(false), CONFIRMATION_MS);
    }).catch(() => {
      // Clipboard access denied, the mailto still opens as a fallback:
    });
  };

  return (
    <span className="relative inline-flex">
      {/* Confirmation tag popping above the button, springy on the way in and smoothly
          fading out, disabled for users preferring reduced motion: */}
      <AnimatePresence>
        {copied && (
          <motion.span
            key="copied"
            aria-hidden="true"
            className="copy-pop"
            initial={reduceMotion ? false : { opacity: 0, x: "-50%", y: 8 }}
            animate={reduceMotion ? { opacity: 1, x: "-50%", y: 0 } : { opacity: 1, x: "-50%", y: -2 }}
            exit={reduceMotion
              ? { opacity: 0, x: "-50%", y: 0, transition: { duration: 0 } }
              : { opacity: 0, x: "-50%", y: -12, transition: { duration: 0.35, ease: "easeIn" } }}
            transition={{ type: "spring", stiffness: 480, damping: 26 }}
          >
            email copié !
          </motion.span>
        )}
      </AnimatePresence>
      <Button href={`mailto:${contactLinks.email}`} onClick={copyEmail} variant="secondary">m'écrire un message</Button>
      {/* Announces the copy to screen readers: */}
      <span className="sr-only" role="status">{copied ? "email copié" : ""}</span>
    </span>
  );
};
