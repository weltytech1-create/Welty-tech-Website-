"use client";

import { motion, MotionConfig } from "framer-motion";

export function ServiceIcon({
  name,
  className = "w-[4rem] h-[4rem]",
}: {
  name?: string;
  className?: string;
}) {
  const svgProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: `${className} overflow-visible`,
  };

  const renderIcon = () => {
    switch (name) {
      case "compass":
        return (
          <svg {...svgProps}>
            <circle cx="12" cy="12" r="9" />
            <motion.polygon
              strokeLinecap="round"
              strokeLinejoin="round"
              points="15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5 15.5 8.5"
              style={{ transformOrigin: "12px 12px" }}
              animate={{ rotate: [-14, 18, -14] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );

      case "layers":
        return (
          <svg {...svgProps}>
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3L3 8l9 5 9-5-9-5z"
              animate={{ y: [0, -1.2, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12.5l9 5 9-5"
              animate={{ y: [0, -0.5, 0], opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 17l9 5 9-5"
              animate={{ y: [0, 0.6, 0], opacity: [0.45, 0.95, 0.45] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        );

      case "palette":
        return (
          <motion.svg
            {...svgProps}
            style={{ transformOrigin: "12px 12px" }}
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A3.6 3.6 0 0 0 21 10.8C21 6.5 17 3 12 3Z"
            />
            <motion.circle
              cx="7.5"
              cy="11.5"
              r="1.1"
              fill="currentColor"
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="10.5"
              cy="7.5"
              r="1.1"
              fill="currentColor"
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.circle
              cx="15"
              cy="8"
              r="1.1"
              fill="currentColor"
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
          </motion.svg>
        );

      case "sparkles":
        return (
          <svg {...svgProps}>
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"
              style={{ transformOrigin: "12px 10px" }}
              animate={{ scale: [0.92, 1.08, 0.92], rotate: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"
              style={{ transformOrigin: "19px 19px" }}
              animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        );

      case "code":
        return (
          <svg {...svgProps}>
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7l-5 5 5 5"
              animate={{ x: [0, -1.4, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7l5 5-5 5"
              animate={{ x: [0, 1.4, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 5l-3 14"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );

      case "database":
        return (
          <svg {...svgProps}>
            <motion.ellipse
              cx="12"
              cy="6"
              rx="7"
              ry="2.8"
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <path strokeLinecap="round" d="M5 6v12c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V6" />
            <motion.path
              strokeLinecap="round"
              d="M5 12c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8"
              animate={{ y: [0, 0.8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
            />
          </svg>
        );

      case "clock":
        return (
          <svg {...svgProps}>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" d="M12 12V7" />
            <motion.line
              x1="12"
              y1="12"
              x2="16.5"
              y2="12"
              strokeLinecap="round"
              style={{ transformOrigin: "12px 12px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        );

      case "layout":
        return (
          <svg {...svgProps}>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path strokeLinecap="round" d="M3 9h18" />
            <motion.path
              strokeLinecap="round"
              d="M9 9v11"
              animate={{ x: [0, 1.8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line
              x1="12.5"
              y1="13"
              x2="18"
              y2="13"
              strokeLinecap="round"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );

      case "search":
        return (
          <svg {...svgProps}>
            <motion.g
              animate={{ x: [0, 1.3, 0, -1, 0], y: [0, -1, 0.8, 0, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle cx="11" cy="11" r="6.8" />
              <path strokeLinecap="round" d="M19.8 19.8l-3.8-3.8" />
            </motion.g>
          </svg>
        );

      case "sitemap":
        return (
          <svg {...svgProps}>
            <rect x="9" y="3" width="6" height="4" rx="1" />
            <motion.rect
              x="3"
              y="17"
              width="5"
              height="4"
              rx="1"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.rect
              x="9.5"
              y="17"
              width="5"
              height="4"
              rx="1"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.rect
              x="16"
              y="17"
              width="5"
              height="4"
              rx="1"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <path strokeLinecap="round" d="M12 7v5M5.5 17v-3a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v3M12 12v5" />
          </svg>
        );

      case "flow":
        return (
          <svg {...svgProps}>
            <circle cx="6" cy="6" r="2.5" />
            <circle cx="18" cy="18" r="2.5" />
            <path strokeLinecap="round" d="M8.5 6H15a3 3 0 0 1 3 3v6.5" />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.5 13l2.5 2.5 2.5-2.5"
              animate={{ y: [0, 1.4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              r="1.4"
              fill="currentColor"
              stroke="none"
              animate={{
                cx: [8.5, 15, 18, 18],
                cy: [6, 6, 9, 15],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );

      case "play":
        return (
          <svg {...svgProps}>
            <motion.circle
              cx="12"
              cy="12"
              r="9"
              style={{ transformOrigin: "12px 12px" }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.polygon
              strokeLinejoin="round"
              points="10 8.5 16.5 12 10 15.5 10 8.5"
              animate={{ x: [0, 1.2, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );

      case "check":
        return (
          <svg {...svgProps}>
            <circle cx="12" cy="12" r="9" />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.5 12.2l2.3 2.3 4.8-4.8"
              initial={{ pathLength: 0.25 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
        );

      case "cube":
        return (
          <motion.svg
            {...svgProps}
            animate={{ y: [0, -1.8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12l8-4.5M12 12v9M12 12L4 7.5"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>
        );

      case "gauge":
        return (
          <svg {...svgProps}>
            <path strokeLinecap="round" d="M4.5 16.5a9 9 0 1 1 15 0" />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 13l4-4"
              style={{ transformOrigin: "12px 13px" }}
              animate={{ rotate: [-35, 22, -10, 18, -35] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="12" cy="13" r="1.5" fill="currentColor" />
          </svg>
        );

      case "rocket":
        return (
          <svg {...svgProps}>
            <motion.g
              animate={{ x: [0, 1.4, 0], y: [0, -1.6, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.5 4.5c2.8-.6 5-.4 5-.4s.2 2.2-.4 5c-.7 3.2-3.4 6-6.6 7.4l-4-4c1.4-3.2 4.2-5.9 7.4-6.6Z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.5L5.5 13 4 16l4 4 3-1.5.5-3.5" />
              <circle cx="14.5" cy="9.5" r="1.2" fill="currentColor" />
            </motion.g>
            <motion.path
              strokeLinecap="round"
              d="M4.5 19.5l-1.8 1.8"
              animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.15, 0.8] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );

      case "trending":
        return (
          <svg {...svgProps}>
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 17l6-6 4 4 8-8"
              initial={{ pathLength: 0.35 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7h5v5"
              animate={{ x: [0, 1.2, 0], y: [0, -1.2, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );

      case "building":
        return (
          <svg {...svgProps}>
            <rect x="4" y="4" width="10" height="16" rx="1" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 9h6v11h-6" />
            <motion.path
              strokeLinecap="round"
              d="M8 8h2M17 13h1"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              strokeLinecap="round"
              d="M8 12h2M8 16h2M17 17h1"
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );

      case "star":
        return (
          <motion.svg
            {...svgProps}
            style={{ transformOrigin: "12px 12px" }}
            animate={{ rotate: [0, 8, -8, 0], scale: [0.96, 1.05, 0.96] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2.5l2.85 5.78 6.38.93-4.61 4.5 1.09 6.35L12 17.06l-5.71 3 1.09-6.35-4.61-4.5 6.38-.93L12 2.5z"
            />
          </motion.svg>
        );

      case "trophy":
        return (
          <motion.svg
            {...svgProps}
            animate={{ y: [0, -1.8, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 21h8m-4-4v4m-5-17h10v6a5 5 0 0 1-10 0V4Zm0 2H4v2a3 3 0 0 0 3 3m10-5h3v2a3 3 0 0 1-3 3"
            />
          </motion.svg>
        );

      case "globe":
        return (
          <svg {...svgProps}>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
            <motion.ellipse
              cx="12"
              cy="12"
              rx="3.8"
              ry="9"
              animate={{ rx: [3.8, 5.5, 3.8, 2, 3.8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );

      case "briefcase":
        return (
          <motion.svg
            {...svgProps}
            animate={{ y: [0, -1.3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-13 5h18" />
          </motion.svg>
        );

      case "server":
        return (
          <svg {...svgProps}>
            <rect x="3" y="4" width="18" height="6" rx="1.5" />
            <rect x="3" y="14" width="18" height="6" rx="1.5" />
            <motion.circle
              cx="7"
              cy="7"
              r="1.1"
              fill="currentColor"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="7"
              cy="17"
              r="1.1"
              fill="currentColor"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line
              x1="12"
              y1="7"
              x2="17"
              y2="7"
              strokeLinecap="round"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line
              x1="12"
              y1="17"
              x2="17"
              y2="17"
              strokeLinecap="round"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );

      case "shield":
        return (
          <svg {...svgProps}>
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3Z"
              style={{ transformOrigin: "12px 12px" }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.5 12.2l1.8 1.8 3.5-3.6"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );

      case "cpu":
        return (
          <svg {...svgProps}>
            <motion.rect
              x="7"
              y="7"
              width="10"
              height="10"
              rx="1.5"
              style={{ transformOrigin: "12px 12px" }}
              animate={{ scale: [0.97, 1.04, 0.97] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.rect
              x="10.2"
              y="10.2"
              width="3.6"
              height="3.6"
              rx="0.6"
              fill="currentColor"
              stroke="none"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <path
              strokeLinecap="round"
              d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4"
            />
          </svg>
        );

      case "plug":
        return (
          <svg {...svgProps}>
            <motion.g
              animate={{ y: [0, 1.1, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8Z" />
              <path strokeLinecap="round" d="M12 17v4" />
            </motion.g>
          </svg>
        );

      case "orbit":
      default:
        return (
          <svg {...svgProps}>
            <motion.g
              style={{ transformOrigin: "12px 12px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-25 12 12)" />
              <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(25 12 12)" />
            </motion.g>
            <motion.circle
              cx="12"
              cy="12"
              r="1.7"
              fill="currentColor"
              animate={{ scale: [0.85, 1.35, 0.85] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        );
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.span
        className="inline-flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
      >
        {renderIcon()}
      </motion.span>
    </MotionConfig>
  );
}
