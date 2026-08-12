"use client";
import { useRef, useEffect } from "react";

interface AutoPlayVideoProps {
  src: string;
  className?: string;
}

export default function AutoPlayVideo({ src, className }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={videoRef} src={src} loop muted playsInline className={className} />
  );
}
