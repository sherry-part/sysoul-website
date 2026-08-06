"use client";
import { useEffect, useState } from "react";
import SiteHeader from "../components/site-header";

export default function Home() {
  const [ended, setEnded] = useState(false);
  useEffect(() => { const t = window.setTimeout(() => setEnded(true), 7600); return () => window.clearTimeout(t); }, []);
  return <main className="home-page">
    <SiteHeader />
    <section className="film-hero" aria-label="Sysoul brand film">
      <div className="film-grid" /><div className="film-orbit orbit-a" /><div className="film-orbit orbit-b" />
      <div className="film-core"><span>SYSOUL</span><b>01</b></div>
<div className="film-meta"><span>BRAND FILM / 01</span><span>SCROLL TO ENTER</span></div>
      <div className={`mission-end ${ended ? "show" : ""}`}><p className="kicker">OUR MISSION / OUR VISION</p><h2>让机器人走进<br /><em>千行百业</em></h2><p>打造开放的具身智能基础设施，让机器人更容易掌握技能，服务每一个真实场景。</p><a className="button" href="/products">进入产品世界 <span>↗</span></a></div>
    </section>
  </main>;
}
