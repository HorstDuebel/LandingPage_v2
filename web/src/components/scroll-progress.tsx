"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
      setP(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 right-0 left-0 z-50"
      style={{ height: "3px", background: "transparent", pointerEvents: "none" }}
      aria-hidden="true"
    >
      <div
        style={{
          height: "100%",
          width: `${p}%`,
          background: "var(--color-accent)",
          transition: "width 80ms linear",
        }}
      />
    </div>
  );
}
