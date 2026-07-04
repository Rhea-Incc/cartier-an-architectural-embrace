import { useEffect, useRef, useState } from "react";

export function SoftCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const target = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      const el = e.target as HTMLElement | null;
      setHovering(!!el?.closest("a,button,[data-hover]"));
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;
  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[999] transition-[width,height,opacity] duration-500 ease-out"
      style={{
        width: hovering ? 56 : 10,
        height: hovering ? 56 : 10,
        borderRadius: "50%",
        border: "1px solid color-mix(in oklab, var(--accent) 70%, transparent)",
        background: hovering
          ? "color-mix(in oklab, var(--accent) 6%, transparent)"
          : "color-mix(in oklab, var(--accent) 30%, transparent)",
        boxShadow:
          "0 0 24px color-mix(in oklab, var(--accent) 45%, transparent), 0 0 60px color-mix(in oklab, var(--accent) 20%, transparent)",
        mixBlendMode: "screen",
      }}
    />
  );
}
