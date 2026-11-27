"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [cursorText, setCursorText] = useState<string>("");
  const [mode, setMode] = useState<"default" | "pointer" | "text" | "hidden">("default");
  const [isPressed, setIsPressed] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springX = useSpring(mouseX, { stiffness: 450, damping: 36, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 36, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const textEl = target.closest("[data-cursor-text]") as HTMLElement | null;
      if (textEl) {
        const text = textEl.getAttribute("data-cursor-text") || "View";
        setCursorText(text);
        setMode("text");
        return;
      }

      const hideEl = target.closest("iframe, [data-cursor-hidden]");
      if (hideEl) {
        setCursorText("");
        setMode("hidden");
        return;
      }

      const interactiveEl = target.closest("a, button, summary, [role='button']");
      if (interactiveEl) {
        setCursorText("");
        setMode("pointer");
        return;
      }

      setCursorText("");
      setMode("default");
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);
    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  const baseScale =
    mode === "hidden"
      ? 0
      : mode === "text"
      ? isPressed
        ? 0.82
        : 0.92
      : mode === "pointer"
      ? isPressed
        ? 0.34
        : 0.24
      : isPressed
      ? 0.18
      : 0.11;

  const isTextMode = mode === "text";

  return (
    <motion.div
      aria-hidden="true"
      className="cb-cursor hidden md:block"
      style={{
        x: springX,
        y: springY,
        mixBlendMode: isTextMode ? "normal" : "exclusion",
      }}
    >
      <motion.div
        animate={{
          scale: baseScale,
          backgroundColor: isTextMode ? "#E5FA3C" : "#FFFFFF",
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: "10rem",
          height: "10rem",
          marginLeft: "-5rem",
          marginTop: "-5rem",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isTextMode ? "0 12px 30px rgba(0,0,0,0.22)" : "none",
        }}
      >
        <motion.span
          animate={{
            opacity: isTextMode ? 1 : 0,
            scale: isTextMode ? 1 : 0.4,
          }}
          transition={{ duration: 0.22 }}
          style={{
            color: "#000000",
            fontSize: "1.6rem",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          {cursorText}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
