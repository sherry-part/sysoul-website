"use client";
import { useEffect, useRef, useState, useId } from "react";

const CJK: [number, number][] = [[0x4E00, 0x9FFF], [0x3400, 0x4DBF]];
const LATIN_LO = 0x41;
const LATIN_HI = 0x5A;

function isCJK(c: string) {
  const code = c.codePointAt(0) || 0;
  return CJK.some(([lo, hi]) => code >= lo && code <= hi);
}

function randGlyph(cjk: boolean) {
  if (cjk) {
    const [lo, hi] = CJK[Math.floor(Math.random() * CJK.length)];
    return String.fromCodePoint(lo + Math.floor(Math.random() * (hi - lo)));
  }
  return String.fromCodePoint(
    LATIN_LO + Math.floor(Math.random() * (LATIN_HI - LATIN_LO + 1))
  );
}

interface Props {
  children: React.ReactNode;
  /** Total scramble duration in ms */
  duration?: number;
  threshold?: number;
}

export default function ScrambleReveal({
  children,
  duration = 600,
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"hidden" | "scrambling" | "done">("hidden");
  const [display, setDisplay] = useState("");
  const id = useId();

  // Extract plain text from children
  const finalText = extractText(children);

  // Observe visibility
  useEffect(() => {
    const node = ref.current;
    if (!node || phase !== "hidden") return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPhase("scrambling");
          obs.unobserve(node);
        }
      },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [phase, threshold]);

  // Scramble
  useEffect(() => {
    if (phase !== "scrambling") return;
    const chars = [...finalText];
    const total = chars.filter((c) => c !== " " && c !== "\n").length;
    if (total === 0) { setPhase("done"); return; }

    const resolved = new Array(chars.length).fill(false);

    // Resolve 1 char per tick so the scramble is clearly visible
    const charsPerTick = 1;
    const tickMs = Math.max(Math.floor(duration / total), 45);
    let resolvedCount = 0;

    const tick = () => {
      for (let n = 0; n < charsPerTick && resolvedCount < total; n++) {
        // Pick a random unresolved position
        const candidates: number[] = [];
        chars.forEach((c, i) => {
          if (!resolved[i] && c !== " " && c !== "\n") candidates.push(i);
        });
        if (candidates.length === 0) break;
        const idx = candidates[Math.floor(Math.random() * candidates.length)];
        resolved[idx] = true;
        resolvedCount++;
      }

      setDisplay(
        chars
          .map((c, i) => {
            if (c === " " || c === "\n") return c;
            return resolved[i] ? c : randGlyph(isCJK(c));
          })
          .join("")
      );

      if (resolvedCount >= total) {
        setDisplay(finalText);
        setTimeout(() => setPhase("done"), 150);
      } else {
        setTimeout(tick, tickMs);
      }
    };

    tick();
    return () => {};
  }, [phase, finalText, duration]);

  return (
    <div ref={ref} className="scramble-reveal" style={{ position: "relative" }}>
      {/* Invisible placeholder to preserve layout */}
      <div style={{ visibility: "hidden" }} aria-hidden="true">
        {children}
      </div>

      {/* Scramble overlay — smaller, faster */}
      {phase === "scrambling" && (
        <span
          className="scramble-overlay"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            fontSize: "0.78em",
            letterSpacing: "0.08em",
            color: "var(--muted)",
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
          }}
        >
          {display}
        </span>
      )}

      {/* Final content — fades in */}
      <div
        className={`scramble-final${phase === "done" ? " is-done" : ""}`}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          opacity: phase === "done" ? 1 : 0,
          transition: "opacity .35s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Recursively extract text content from React children */
function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (typeof node === "object" && "props" in node) {
    return extractText((node as any).props.children);
  }
  return "";
}
