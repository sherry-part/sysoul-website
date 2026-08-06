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
      <div className={`arch-tree ${ended ? "show" : ""}`}>
        <p className="kicker">ECOSYSTEM & PRODUCTS</p>

        {/* Level 1: 泛在操作系统 */}
        <div className="arch-level arch-l1">
          <span className="arch-node arch-root">泛在操作系统</span>
        </div>

        {/* Level 1 → 2 connector */}
        <div className="arch-branch arch-b1">
          <div className="arch-line-v" />
          <div className="arch-line-h">
            <div className="arch-line-hl" /><div className="arch-line-hr" />
          </div>
        </div>

        {/* Level 2: XiUOS + Robonix */}
        <div className="arch-level arch-l2">
          <span className="arch-node arch-xiuos">XiUOS</span>
          <span className="arch-node arch-robonix">Robonix</span>
        </div>

        {/* Level 2 → 3 connector (Robonix downward only) */}
        <div className="arch-branch arch-b2">
          <div className="arch-line-v arch-line-v-r" />
        </div>

        {/* Level 3: 希秀智脑 */}
        <div className="arch-level arch-l3">
          <span className="arch-node arch-brain">希秀智脑</span>
        </div>

        {/* Level 3 → 4 connector */}
        <div className="arch-branch arch-b3">
          <div className="arch-line-v" />
          <div className="arch-line-h">
            <div className="arch-line-hl" /><div className="arch-line-hr" />
          </div>
        </div>

        {/* Level 4: 物理本体 + 虚拟本体 */}
        <div className="arch-level arch-l4">
          <div className="arch-subtree">
            <span className="arch-node arch-physical">物理本体</span>
            <div className="arch-branch arch-b4">
              <div className="arch-line-v" />
              <div className="arch-line-h">
                <div className="arch-line-hl" /><div className="arch-line-hr" />
              </div>
            </div>
            <div className="arch-level arch-l5">
              <span className="arch-node arch-leaf">联名款本体</span>
              <span className="arch-node arch-leaf">开源款本体</span>
            </div>
            <span className="arch-sub-label">搭载 XiUOS</span>
          </div>
          <div className="arch-subtree">
            <span className="arch-node arch-virtual">虚拟本体</span>
            <div className="arch-branch arch-b4">
              <div className="arch-line-v" />
            </div>
            <div className="arch-level arch-l5">
              <span className="arch-node arch-leaf">赛博机器人</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>;
}
