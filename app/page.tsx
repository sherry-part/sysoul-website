"use client";
import { useEffect, useState } from "react";
import SiteHeader from "../components/site-header";
import EcosystemTree from "../components/ecosystem-tree";

export default function Home() {
  const [ended, setEnded] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setEnded(true), 7600);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <main className="home-page">
      <SiteHeader />
      <section className="film-hero" aria-label="Sysoul brand film">
        <div className="film-grid" />
        <div className="film-orbit orbit-a" />
        <div className="film-orbit orbit-b" />
        <div className="film-core">
          <span>SYSOUL</span>
          <b>01</b>
        </div>
        <div className="film-meta">
          <span>BRAND FILM / 01</span>
          <span>SCROLL TO ENTER</span>
        </div>
        <EcosystemTree show={ended} />
      </section>
    </main>
  );
}
