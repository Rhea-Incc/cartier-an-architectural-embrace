import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

const easing = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.6, delay, ease: easing }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
