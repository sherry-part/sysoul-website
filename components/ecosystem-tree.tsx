"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   Data — Dual-core + Dual-domain topology
   ============================================ */

interface EcoNode {
  id: string; name: string; level: number; tag?: string; accent?: "cyan" | "purple"; children?: EcoNode[];
}

const systemTopology: EcoNode = {
  id: "root",
  name: "泛在操作系统",
  level: 0,
  tag: "UBIQUITOUS OS",
  children: [
    {
      id: "robonix",
      name: "Robonix",
      level: 1,
      tag: "大脑 · 具身认知",
      accent: "cyan",
    },
    {
      id: "xiuos",
      name: "XiUOS",
      level: 1,
      tag: "小脑 · 实时控制",
      accent: "cyan",
    },
  ],
};

// Tier 1: parallel domain engines (manually placed at same Y)
const cyberDomain: EcoNode = {
  id: "cyber-engine",
  name: "赛博机器人",
  level: 2,
  tag: "作用于赛博空间",
  accent: "purple",
  children: [
    { id: "virtual-body", name: "虚拟本体", level: 3, accent: "purple" },
  ],
};

const physicalDomain: EcoNode = {
  id: "physical-engine",
  name: "希秀智脑",
  level: 2,
  tag: "作用于物理空间",
  accent: "cyan",
  children: [
    {
      id: "physical-body",
      name: "物理本体",
      level: 3,
      accent: "cyan",
      children: [
        { id: "open-source", name: "开源款本体", level: 4, accent: "cyan" },
        { id: "co-branded", name: "联名款本体", level: 4, accent: "cyan" },
      ],
    },
  ],
};

/* ============================================
   Layout — manual coordinate grid
   ============================================ */

const SVG_W = 1500;
const SVG_H = 850;

interface LayoutNode {
  id: string; name: string; tag?: string; accent: "cyan" | "purple";
  x: number; y: number; w: number; h: number;
}

const NODE_W = 150;
const NODE_H = 52;
const ROOT_Y = 80;
const CORE_Y = 200;    // Robonix + XiUOS
const ENGINE_Y = 340;  // 赛博机器人 + 希秀智脑 (same Y!)
const BODY_Y = 470;    // 虚拟本体 + 物理本体
const LEAF_Y = 600;    // 开源款 + 联名款

const layouts: LayoutNode[] = [
  // Tier 0
  { id: "root", name: "泛在操作系统", tag: "UBIQUITOUS OS", accent: "cyan", x: SVG_W / 2, y: ROOT_Y, w: 180, h: NODE_H },
  // Tier 0 cores
  { id: "robonix", name: "Robonix", tag: "大脑 · 具身认知", accent: "cyan", x: 450, y: CORE_Y, w: NODE_W, h: NODE_H },
  { id: "xiuos", name: "XiUOS", tag: "小脑 · 实时控制", accent: "cyan", x: 1050, y: CORE_Y, w: NODE_W, h: NODE_H },
  // Tier 1 — parallel engines
  { id: "cyber-engine", name: "赛博机器人", tag: "作用于赛博空间", accent: "purple", x: 400, y: ENGINE_Y, w: 160, h: NODE_H },
  { id: "physical-engine", name: "希秀智脑", tag: "作用于物理空间", accent: "cyan", x: 1100, y: ENGINE_Y, w: 160, h: NODE_H },
  // Tier 2 — bodies
  { id: "virtual-body", name: "虚拟本体", tag: "", accent: "purple", x: 400, y: BODY_Y, w: 130, h: 44 },
  { id: "physical-body", name: "物理本体", tag: "", accent: "cyan", x: 1100, y: BODY_Y, w: 130, h: 44 },
  // Tier 3 — leaf entities
  { id: "open-source", name: "开源款本体", tag: "", accent: "cyan", x: 950, y: LEAF_Y, w: 130, h: 44 },
  { id: "co-branded", name: "联名款本体", tag: "", accent: "cyan", x: 1250, y: LEAF_Y, w: 130, h: 44 },
];

const nodeMap = new Map(layouts.map(n => [n.id, n]));

/* ============================================
   Orthogonal circuit edges
   ============================================ */

interface Edge { id: string; fx: number; fy: number; tx: number; ty: number; phase: number; accent: "cyan" | "purple"; }

function ortho(x1: number, y1: number, x2: number, y2: number): string {
  const my = y1 + (y2 - y1) * 0.45;
  return `M ${x1} ${y1} L ${x1} ${my} L ${x2} ${my} L ${x2} ${y2}`;
}

const edges: Edge[] = [
  // Root → Robonix
  { id: "root->robonix", fx: SVG_W / 2, fy: ROOT_Y + NODE_H / 2, tx: 450, ty: CORE_Y - NODE_H / 2, phase: 1, accent: "cyan" },
  // Root → XiUOS
  { id: "root->xiuos", fx: SVG_W / 2, fy: ROOT_Y + NODE_H / 2, tx: 1050, ty: CORE_Y - NODE_H / 2, phase: 1, accent: "cyan" },
  // Robonix → 赛博机器人
  { id: "robonix->cyber", fx: 450, fy: CORE_Y + NODE_H / 2, tx: 400, ty: ENGINE_Y - NODE_H / 2, phase: 2, accent: "purple" },
  // XiUOS → 希秀智脑
  { id: "xiuos->physical", fx: 1050, fy: CORE_Y + NODE_H / 2, tx: 1100, ty: ENGINE_Y - NODE_H / 2, phase: 2, accent: "cyan" },
  // 赛博机器人 → 虚拟本体
  { id: "cyber->virtual", fx: 400, fy: ENGINE_Y + NODE_H / 2, tx: 400, ty: BODY_Y - NODE_H / 2, phase: 3, accent: "purple" },
  // 希秀智脑 → 物理本体
  { id: "physical->body", fx: 1100, fy: ENGINE_Y + NODE_H / 2, tx: 1100, ty: BODY_Y - NODE_H / 2, phase: 3, accent: "cyan" },
  // 物理本体 → 开源款
  { id: "body->open", fx: 1100, fy: BODY_Y + NODE_H / 2, tx: 950, ty: LEAF_Y - NODE_H / 2, phase: 4, accent: "cyan" },
  // 物理本体 → 联名款
  { id: "body->branded", fx: 1100, fy: BODY_Y + NODE_H / 2, tx: 1250, ty: LEAF_Y - NODE_H / 2, phase: 4, accent: "cyan" },
];

/* ============================================
   Timing
   ============================================ */

const phaseDelays = [0.3, 1.2, 2.8, 4.4];
const ctaDelay = 6.2;
const phase2Delay = 7.4;
const logoDelay = 8.0;
const sloganDelay = 9.0;
const rootXPercent = (layouts[0].x / SVG_W) * 100;

/* ============================================
   Component
   ============================================ */

export default function EcosystemTree({ show }: { show: boolean }) {
  const [phase, setPhase] = useState(0);
  const [showCta, setShowCta] = useState(false);
  const [isPhase2, setIsPhase2] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showSlogan, setShowSlogan] = useState(false);

  useEffect(() => {
    if (!show) { setPhase(0); setShowCta(false); setIsPhase2(false); setShowLogo(false); setShowSlogan(false); return; }
    const t: NodeJS.Timeout[] = [];
    phaseDelays.forEach((d, i) => t.push(setTimeout(() => setPhase(i + 1), d * 1000)));
    t.push(setTimeout(() => setShowCta(true), ctaDelay * 1000));
    t.push(setTimeout(() => setIsPhase2(true), phase2Delay * 1000));
    t.push(setTimeout(() => setShowLogo(true), logoDelay * 1000));
    t.push(setTimeout(() => setShowSlogan(true), sloganDelay * 1000));
    return () => t.forEach(clearTimeout);
  }, [show]);

  const pa = (p: number) => phase >= p;

  const accentColor = (a: "cyan" | "purple") => a === "purple" ? "#a78bfa" : "#68e1ff";

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="eco-tree-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {/* Brand — Phase 2 */}
          {isPhase2 && (
            <div className="eco-brand">
              <motion.div className="eco-logo-wrap"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={showLogo ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/logo1.webp" alt="Sysoul" className="eco-logo-img" />
                {showLogo && <motion.div className="eco-laser-line" initial={{ left: "0%" }} animate={{ left: "100%" }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} />}
              </motion.div>
              <motion.div className="eco-slogan-wrap"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={showSlogan ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="eco-slogan">让机器人走进千行百业，更好地服务人类</p>
                <motion.div className="eco-slogan-line" initial={{ scaleX: 0 }} animate={showSlogan ? { scaleX: 1 } : {}} transition={{ delay: 0.6, duration: 0.8 }} style={{ transformOrigin: "left" }} />
              </motion.div>
            </div>
          )}

          <motion.div className="eco-tree-wrap"
            animate={{ x: isPhase2 ? "14vw" : 0, scale: isPhase2 ? 0.92 : 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="eco-tree-svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="glowLine" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <radialGradient id="bgGlow" cx="50%" cy="35%" r="55%">
                  <stop offset="0%" stopColor="rgba(56,189,248,0.06)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>

              <rect x="0" y="0" width={SVG_W} height={SVG_H} fill="url(#bgGlow)" />

              {/* Edges */}
              {edges.map(e => (
                <g key={e.id}>
                  {pa(e.phase) && (
                    <>
                      <motion.path d={ortho(e.fx, e.fy, e.tx, e.ty)} fill="none" stroke={accentColor(e.accent)} strokeWidth={2.5} strokeOpacity={0.12} filter="url(#glowLine)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
                      <motion.path d={ortho(e.fx, e.fy, e.tx, e.ty)} fill="none" stroke={accentColor(e.accent)} strokeWidth={1.2} strokeOpacity={0.45} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
                      {/* Joint dot at corner */}
                      <motion.circle cx={e.tx} cy={(e.fy + e.ty) / 2 * 0.45 + (e.fy + e.ty) / 2 * 0.55} r={2} fill={accentColor(e.accent)} opacity={0} animate={{ opacity: 0.6 }} transition={{ delay: 0.5 }} />
                    </>
                  )}
                </g>
              ))}

              {/* Nodes */}
              {layouts.map(n => {
                const c = accentColor(n.accent);
                const np = n.id === "root" ? 1 :
                  (n.id === "robonix" || n.id === "xiuos") ? 1 :
                  (n.id === "cyber-engine" || n.id === "physical-engine") ? 2 :
                  (n.id === "virtual-body" || n.id === "physical-body") ? 3 : 4;

                return (
                  <g key={n.id}>
                    {pa(np) && (
                      <motion.foreignObject x={n.x - n.w / 2} y={n.y - n.h / 2} width={n.w} height={n.h}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                      >
                        <div className="hud-node" style={{ "--accent": c, width: "100%", height: "100%" } as React.CSSProperties}>
                          <span className="hud-corner hud-tl" />
                          <span className="hud-corner hud-tr" />
                          <span className="hud-corner hud-bl" />
                          <span className="hud-corner hud-br" />
                          <span className="hud-label">{n.name}</span>
                          {n.tag && <span className="hud-tag">{n.tag}</span>}
                        </div>
                      </motion.foreignObject>
                    )}
                  </g>
                );
              })}
            </svg>

            {showCta && (
              <motion.div className="eco-cta-wrap" style={{ left: `${rootXPercent}%`, x: "-50%" }}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              >
                <motion.a href="/products" className="eco-cta-btn"
                  animate={{ boxShadow: ["0 0 20px rgba(104,225,255,0.15)", "0 0 45px rgba(104,225,255,0.35)", "0 0 20px rgba(104,225,255,0.15)"] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >进入产品世界 <span>↗</span></motion.a>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
