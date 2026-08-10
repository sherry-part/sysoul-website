"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { slides } from "../constants";

const PRODUCT_NAMES = ["希秀智脑", "赛博机器人", "联名款本体"];
const N = slides.length;

// Triple the slides: [0,1,2, 0,1,2, 0,1,2] — middle group is "real"
const TRIPLE = [...slides, ...slides, ...slides];

export default function ProductCarousel() {
  const [pos, setPos] = useState(N);
  const [transitioning, setTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = useCallback(() => {
    setTransitioning(true);
    setPos((p) => p + 1);
  }, []);

  const handleTransitionEnd = () => {
    if (pos >= N * 2) {
      setTransitioning(false);
      setPos(pos - N);
    } else if (pos < N) {
      setTransitioning(false);
      setPos(pos + N);
    }
  };

  // Auto-rotation
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(goNext, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goNext, paused]);

  const displayIndex = pos % N;
  const goTo = (i: number) => {
    setTransitioning(true);
    // find the closest instance of target slide ahead of current position
    const target = pos - (pos % N) + i;
    setPos(target >= pos ? target : target + N);
  };

  return (
    <section className="product-carousel" aria-label="Product showcase">
      {/* Product name labels */}
      <div className="carousel-names">
        {PRODUCT_NAMES.map((name, i) => (
          <button
            key={name}
            className={`carousel-name${i === displayIndex ? " active" : ""}`}
            onClick={() => goTo(i)}
          >
            {name}
          </button>
        ))}
      </div>

      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${pos * 100}%)`,
          transition: transitioning ? undefined : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {TRIPLE.map((slide, i) => (
          <div
            key={`${slide.id}-${i}`}
            className={`carousel-slide slide-${slide.id}${i === pos ? " active" : ""}`}
          >
            {/* Left HUD cards */}
            <div className="bubble-group bubble-left">
              {slide.leftBubbles.map((b, bi) => (
                <div
                  key={bi}
                  className={`hud-card hud-left${bi === displayIndex ? " active" : ""}`}
                  style={{ top: b.top }}
                >
                  <span className="hud-dot" />
                  <span className="hud-tag">SYS_{(bi + 1).toString().padStart(2, "0")}</span>
                  <p className="hud-text">{b.text}</p>
                </div>
              ))}
            </div>

            {/* Center product image */}
            <div className="carousel-center-img">
              <img src={`https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/${({ allinone: "agentbrain.png", body: "total.png", cyber: "cyberbot.png" } as Record<string, string>)[slide.id]}`} alt="" />
            </div>

            {/* Right HUD cards */}
            <div className="bubble-group bubble-right">
              {slide.rightBubbles.map((b, bi) => (
                <div
                  key={bi}
                  className={`hud-card hud-right${bi === displayIndex ? " active" : ""}`}
                  style={{ top: b.top }}
                >
                  <span className="hud-dot" />
                  <span className="hud-tag">SYS_{(bi + 1).toString().padStart(2, "0")}</span>
                  <p className="hud-text">{b.text}</p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="carousel-arrow arrow-right"
        onClick={goNext}
        aria-label="Next product"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M8 5l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === displayIndex ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to product ${i + 1}`}
          />
        ))}
      </div>

      {/* Pause / Play */}
      <button
        className="carousel-pause"
        onClick={() => setPaused((v) => !v)}
        aria-label={paused ? "播放" : "暂停"}
      >
        {paused ? "▶" : "‖"}
      </button>
    </section>
  );
}
