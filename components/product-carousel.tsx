"use client";
import { useState } from "react";
import { slides } from "../constants";

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="product-carousel" aria-label="Product showcase">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`carousel-slide slide-${slide.id}${i === index ? " active" : ""}`}
          >
            {/* Left HUD cards */}
            <div className="bubble-group bubble-left">
              {slide.leftBubbles.map((b, i) => (
                <div
                  key={i}
                  className={`hud-card hud-left${i === index ? " active" : ""}`}
                  style={{ top: b.top }}
                >
                  <span className="hud-dot" />
                  <span className="hud-tag">SYS_{(i + 1).toString().padStart(2, "0")}</span>
                  <p className="hud-text">{b.text}</p>
                </div>
              ))}
            </div>

            {/* Center product image */}
            <div className="carousel-center-img">
              <img src={`https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/${({ allinone: "agentbrain.png", body: "jaka.png", cyber: "cyberbot.png" } as Record<string, string>)[slide.id]}`} alt="" />
            </div>

            {/* Right HUD cards */}
            <div className="bubble-group bubble-right">
              {slide.rightBubbles.map((b, i) => (
                <div
                  key={i}
                  className={`hud-card hud-right${i === index ? " active" : ""}`}
                  style={{ top: b.top }}
                >
                  <span className="hud-dot" />
                  <span className="hud-tag">SYS_{(i + 1).toString().padStart(2, "0")}</span>
                  <p className="hud-text">{b.text}</p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="carousel-arrow arrow-left"
        onClick={prev}
        aria-label="Previous product"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M12 5L7 10l5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className="carousel-arrow arrow-right"
        onClick={next}
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
            className={`carousel-dot${i === index ? " active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to product ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
