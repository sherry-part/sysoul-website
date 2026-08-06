"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the reveal animates in */
  delay?: number;
  /** How much of the element must be visible before triggering (0–1) */
  threshold?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0, threshold = 0.15 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use a tiny timeout so adjacent elements at the same Y enter together
          requestAnimationFrame(() => setVisible(true));
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal${visible ? " is-revealed" : ""}${className ? " " + className : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
