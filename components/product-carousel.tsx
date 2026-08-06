"use client";
import { useState } from "react";
import { slides, type Slide } from "../constants";

function MachineVisual() {
  return (
    <div className="slide-visual-inner machine-visual">
      <div className="machine-ring" />
      <div className="machine-ring orbit-b" />
      <div className="machine-body">
        <div className="machine-screen">
          SYSOUL
          <br />
          <b>ROBONIX</b>
        </div>
        <div className="machine-light" />
      </div>
    </div>
  );
}

function BodyVisual() {
  return (
    <div className="slide-visual-inner body-visual-type">
      <div className="body-ring" />
      <div className="body-torso">
        <div className="body-core" />
        <div className="body-joint joint-l1" />
        <div className="body-joint joint-l2" />
        <div className="body-joint joint-r1" />
        <div className="body-joint joint-r2" />
      </div>
      <div className="body-head-unit" />
      <div className="body-glow" />
    </div>
  );
}

function CyberVisual() {
  return (
    <div className="slide-visual-inner cyber-visual-type">
      <div className="cyber-grid-bg" />
      <div className="cyber-head-shape">
        CYBER
        <br />
        <b>BOT</b>
      </div>
      <div className="cyber-scan" />
      <div className="cyber-particle p1" />
      <div className="cyber-particle p2" />
      <div className="cyber-particle p3" />
    </div>
  );
}

function renderVisual(type: Slide["visual"]) {
  if (type === "body") return <BodyVisual />;
  if (type === "cyber") return <CyberVisual />;
  return <MachineVisual />;
}

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
          <div key={slide.id} className={`carousel-slide${i === index ? " active" : ""}`}>
            {/* Left chat bubbles */}
            <div className="bubble-group bubble-left">
              {slide.leftBubbles.map((b, i) => (
                <div
                  key={i}
                  className="chat-bubble left"
                  style={{ top: b.top }}
                >
                  {b.text}
                </div>
              ))}
            </div>

            {/* Center visual */}
            <div className="slide-visual">{renderVisual(slide.visual)}</div>

            {/* Right chat bubbles */}
            <div className="bubble-group bubble-right">
              {slide.rightBubbles.map((b, i) => (
                <div
                  key={i}
                  className="chat-bubble right"
                  style={{ top: b.top }}
                >
                  {b.text}
                </div>
              ))}
            </div>

            {/* Bottom label */}
            <div className="slide-label">
              <span className="slide-label-index">{slide.index}</span>
              <span className="slide-label-tag">{slide.label}</span>
              <span className="slide-label-title">{slide.title}</span>
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
