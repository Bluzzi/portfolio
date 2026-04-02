"use client";

import type { BreakablePhotoProps } from "./breakable-photo.type";
import type { ReactElement } from "react";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const TOTAL_STAGES = 10;
const STAGE_INTERVAL_MS = 180;
const EXPLOSION_FRAMES = 9;
const EXPLOSION_FRAME_MS = 35;
const SOUND_VOLUME = 0.15;
const ORB_VOLUME = 0.2;

const BREAK_SOUNDS = [
  "/breaking-sound/Rooted_Dirt_break1.ogg.mp3",
  "/breaking-sound/Rooted_Dirt_break2.ogg.mp3",
  "/breaking-sound/Rooted_Dirt_break3.ogg.mp3",
  "/breaking-sound/Rooted_Dirt_break4.ogg.mp3",
];

const pickRandomSound = (): string => {
  return BREAK_SOUNDS[Math.floor(Math.random() * BREAK_SOUNDS.length)];
};

export const BreakablePhoto = ({ src, brokenSrc, alt }: BreakablePhotoProps): ReactElement => {
  const [stage, setStage] = useState(0);
  const [isBroken, setIsBroken] = useState(false);
  const [explosionFrame, setExplosionFrame] = useState<number | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stageRef = useRef(0);

  // --- Sound ---

  const playBreakSound = useCallback(() => {
    const audio = new Audio(pickRandomSound());
    audio.volume = SOUND_VOLUME;
    audio.play().catch(() => {});
  }, []);

  // --- Explosion ---

  const playExplosion = useCallback(() => {
    let frame = 1;
    setExplosionFrame(frame);

    const tick = setInterval(() => {
      frame += 1;

      if (frame > EXPLOSION_FRAMES) {
        clearInterval(tick);
        setExplosionFrame(null);
        return;
      }

      setExplosionFrame(frame);
    }, EXPLOSION_FRAME_MS);
  }, []);

  // --- Breaking logic ---

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const breakBlock = useCallback(() => {
    stopInterval();
    playExplosion();
    setIsBroken(true);
    setStage(0);

    const orb = new Audio("/breaking-sound/orb.mp3");
    orb.volume = ORB_VOLUME;
    orb.play().catch(() => {});
  }, [stopInterval, playExplosion]);

  const startBreaking = useCallback(() => {
    if (isBroken || intervalRef.current) return;

    stageRef.current = 0;
    setStage(0);
    playBreakSound();

    intervalRef.current = setInterval(() => {
      stageRef.current += 1;

      if (stageRef.current >= TOTAL_STAGES) {
        breakBlock();
        return;
      }

      playBreakSound();
      setStage(stageRef.current);
    }, STAGE_INTERVAL_MS);
  }, [isBroken, breakBlock, playBreakSound]);

  const cancelBreaking = useCallback(() => {
    stopInterval();
    if (!isBroken) {
      stageRef.current = 0;
      setStage(0);
    }
  }, [isBroken, stopInterval]);

  useEffect(() => {
    return () => stopInterval();
  }, [stopInterval]);

  return (
    <div
      className="relative h-32 w-32 shrink-0 max-sm:hidden select-none"
      onMouseDown={startBreaking}
      onMouseUp={cancelBreaking}
      onMouseLeave={cancelBreaking}
      onTouchStart={startBreaking}
      onTouchEnd={cancelBreaking}
    >
      <div className="relative h-full w-full rounded-lg rotate-3 hover:-rotate-2 transition-transform hover:border border-white cursor-crosshair overflow-hidden">
        <Image
          src={isBroken ? brokenSrc : src}
          alt={alt}
          fill
          className="rounded-lg pointer-events-none"
          draggable={false}
        />

        {stage > 0 && !isBroken && (
          <img
            src={`/breaking/destroy_stage_${stage - 1}.png`}
            alt=""
            className="absolute inset-0 h-full w-full pointer-events-none z-10"
            style={{ imageRendering: "pixelated" }}
            draggable={false}
          />
        )}
      </div>

      {explosionFrame !== null && (
        <img
          src={`/explosion/${explosionFrame}.png`}
          alt=""
          className="absolute inset-0 h-full w-full pointer-events-none z-20 scale-200"
          style={{ imageRendering: "pixelated" }}
          draggable={false}
        />
      )}
    </div>
  );
};
