"use client";

import { useRef, useState } from "react";

export function WaveDivider({ className = "" }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null);
  const progressRef = useRef(0.5);
  const xRef = useRef(0.5);
  const timeRef = useRef(Math.PI / 2);
  const reqIdRef = useRef<number | null>(null);
  const [, setTick] = useState(0);

  const setPath = (progress: number) => {
    const width = 1000;
    const x = xRef.current * width;
    if (pathRef.current) {
      pathRef.current.setAttribute(
        "d",
        `M0 100 Q${x} ${100 + progress}, ${width} 100`
      );
    }
  };

  const resetAnimation = () => {
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
      reqIdRef.current = null;
    }
  };

  const animateOut = () => {
    const newProgress = progressRef.current * Math.sin(timeRef.current);
    progressRef.current = progressRef.current * 0.96;
    timeRef.current += 0.22;
    setPath(newProgress);
    if (Math.abs(progressRef.current) > 0.4) {
      reqIdRef.current = requestAnimationFrame(animateOut);
    } else {
      timeRef.current = Math.PI / 2;
      progressRef.current = 0;
      setPath(0);
      setTick((t) => t + 1);
    }
  };

  const handleMouseEnter = () => {
    resetAnimation();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    xRef.current = (e.clientX - rect.left) / rect.width;
    progressRef.current += e.movementY * 0.6;
    progressRef.current = Math.max(-70, Math.min(70, progressRef.current));
    setPath(progressRef.current);
  };

  const handleMouseLeave = () => {
    animateOut();
  };

  return (
    <div
      className={`relative h-[1px] w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute -top-[1rem] left-0 right-0 h-[2rem] z-10 cursor-pointer" />
      <svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        className="pointer-events-none touch-none w-full h-[200px] absolute -top-[99px] left-0 right-0"
      >
        <path
          ref={pathRef}
          d="M0 100 Q500 100, 1000 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
