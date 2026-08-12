"use client";
import { useState, useCallback, useEffect } from "react";

interface CardMedia {
  type: "video" | "image";
  src: string;
}

interface SolutionMediaCardProps {
  num: string;
  total?: number;
  title: string;
  sub: string;
  desc: string;
  tags: string;
  media?: CardMedia;
}

export default function SolutionMediaCard({ num, total = 3, title, sub, desc, tags, media }: SolutionMediaCardProps) {
  const [open, setOpen] = useState(false);

  const hasMedia = media?.src;

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => { if (hasMedia) setOpen(true); }, [hasMedia]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="sol-media-card" onClick={onOpen} style={hasMedia ? { cursor: "pointer" } : undefined}>
        {hasMedia ? (
          <div className="sol-media-bg">
            {media!.type === "video" ? (
              <video src={media!.src} autoPlay loop muted playsInline />
            ) : (
              <img src={media!.src} alt="" />
            )}
          </div>
        ) : (
          <div className="sol-media-bg-placeholder" />
        )}
        <div className="sol-media-gradient" />
        <div className="sol-media-content">
          <span className="sol-card-num">{num} / {String(total).padStart(2, "0")}</span>
          <b className="sol-card-title">{title}</b>
          <span className="sol-card-sub">{sub}</span>
          <span className="sol-card-desc">{desc}</span>
          <span className="sol-card-tags">{tags}</span>
          <span className="sol-card-action">{hasMedia ? "⛶" : "↗"}</span>
        </div>
      </div>

      {open && hasMedia && (
        <div className="media-lightbox" onClick={onClose}>
          <button className="media-lightbox-close" onClick={onClose}>✕</button>
          {media!.type === "video" ? (
            <video
              src={media!.src}
              controls
              autoPlay
              className="media-lightbox-el"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={media!.src}
              alt={title}
              className="media-lightbox-el"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </>
  );
}
