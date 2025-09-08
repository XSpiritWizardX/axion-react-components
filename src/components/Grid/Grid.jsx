import React, { useEffect } from "react";
import "./Grid.css";

// -------------------
// Global Mouse Tracking for Spotlight
// -------------------
const root = document.documentElement;
let mx = -9999,
  my = -9999,
  rafId = 0;

function apply() {
  rafId = 0;
  root.style.setProperty("--mx", mx);
  root.style.setProperty("--my", my);
}

function move(e) {
  mx = e.clientX;
  my = e.clientY;
  if (!rafId) rafId = requestAnimationFrame(apply);
}

function leave() {
  mx = -9999;
  my = -9999;
  if (!rafId) rafId = requestAnimationFrame(apply);
}

export default function Grid({
  items = 9,
  columns = 3,
  cardBgColor = "var(--panel)",
  cardBorderColor = "var(--accent)",
  cardHoverBgColor = "var(--bg)",
  cardTextColor = "var(--text)", // NEW: text color
  spotHSL = "190 90% 60%",
  children,
}) {
  useEffect(() => {
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", move, { passive: true });
    window.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <ul
      className="grid"
      role="list"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        "--spot-hsl": spotHSL,
      }}
    >
      {Array.from({ length: items }).map((_, idx) => (
        <li
          key={idx}
          className="card glow-border"
          style={{
            background: cardBgColor,
            color: cardTextColor,
            "--hover-bg-color": cardHoverBgColor,
            "--border-color": cardBorderColor,
          }}
        >
          {children && Array.isArray(children) ? children[idx] : (
            <>
              <h3>Card {idx + 1}</h3>
              <p>Spotlight border effect</p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
