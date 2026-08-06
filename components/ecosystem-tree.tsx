"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   Data
   ============================================ */

interface EcoNode {
  id: string;
  name: string;
  level: number;
  tag?: string;
  children?: EcoNode[];
}

const ecosystemData: EcoNode = {
  id: "root",
  name: "泛在操作系统",
  level: 0,
  children: [
    {
      id: "xiuos-top",
      name: "XiUOS",
      level: 1,
      tag: "OS Branch",
    },
    {
      id: "robonix",
      name: "Robonix",
      level: 1,
      children: [
        {
          id: "xixiu-brain",
          name: "希秀智脑",
          level: 2,
          children: [
            {
              id: "physical-body",
              name: "物理本体",
              level: 3,
              children: [
                { id: "co-branded", name: "联名款本体", level: 4 },
                {
                  id: "open-source",
                  name: "开源款本体",
                  level: 4,
                  children: [
                    { id: "xiuos-bottom", name: "XiUOS", level: 5, tag: "搭载 XiUOS" },
                  ],
                },
              ],
            },
            {
              id: "virtual-body",
              name: "虚拟本体",
              level: 3,
              children: [
                { id: "cyber-robot", name: "赛博机器人", level: 4 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

/* ============================================
   Layout Engine
   ============================================ */

interface LayoutNode {
  id: string; name: string; level: number; tag?: string;
  x: number; y: number; parentId?: string; children: LayoutNode[];
}

const LEVEL_H = 95;
const MIN_LEAF_GAP = 230;
const NODE_W = 150;
const NODE_H = 52;
const SVG_W = 1500;
const SVG_H = 850;
const ROOT_Y = 145;

function buildLayout(root: EcoNode): LayoutNode {
  const leaves: { id: string; parentId?: string }[] = [];
  function collectLeaves(node: EcoNode, parentId?: string) {
    if (!node.children || node.children.length === 0) leaves.push({ id: node.id, parentId });
    else for (const child of node.children) collectLeaves(child, node.id);
  }
  collectLeaves(root);

  const leafX = new Map<string, number>();
  leaves.forEach((leaf, i) => leafX.set(leaf.id, i * MIN_LEAF_GAP));

  function computeLeafXs(node: EcoNode): number[] {
    if (!node.children || node.children.length === 0) return [leafX.get(node.id)!];
    const xs: number[] = [];
    for (const child of node.children) xs.push(...computeLeafXs(child));
    return xs;
  }

  function computeX(node: EcoNode): number {
    const xs = computeLeafXs(node);
    return xs.reduce((a, b) => a + b, 0) / xs.length;
  }

  function build(node: EcoNode, parentId?: string): LayoutNode {
    const x = computeX(node);
    const y = ROOT_Y + node.level * LEVEL_H;
    const children = (node.children || []).map((c) => build(c, node.id));
    return { id: node.id, name: node.name, level: node.level, tag: node.tag, x, y, parentId, children };
  }
  return build(root);
}

const layoutRoot = buildLayout(ecosystemData);
const allNodes: LayoutNode[] = [];
function flatten(n: LayoutNode) { allNodes.push(n); n.children.forEach(flatten); }
flatten(layoutRoot);

const totalWidth = Math.max(...allNodes.map((n) => n.x)) + NODE_W;
const offsetX = (SVG_W - totalWidth) / 2 + NODE_W / 2;
// Mirror left-right so Robonix subtree is on the left
const centeredNodes = allNodes.map((n) => ({ ...n, x: SVG_W - (n.x + offsetX) }));

// Build edge list (mirrored coords)
interface Edge {
  id: string; fromX: number; fromY: number; toX: number; toY: number; level: number;
}
const edges: Edge[] = [];
for (const n of allNodes) {
  for (const child of n.children) {
    edges.push({
      id: `${n.id}->${child.id}`,
      fromX: SVG_W - (n.x + offsetX),
      fromY: n.y + NODE_H / 2,
      toX: SVG_W - (child.x + offsetX),
      toY: child.y - NODE_H / 2,
      level: child.level,
    });
  }
}

/* ============================================
   Orthogonal circuit path
   ============================================ */

function orthoPath(e: Edge): string {
  const { fromX, fromY, toX, toY } = e;
  const midY = fromY + (toY - fromY) * 0.5;
  return `M ${fromX} ${fromY} L ${fromX} ${midY} L ${toX} ${midY} L ${toX} ${toY}`;
}

/* ============================================
   Variant → accent color
   ============================================ */

function getAccent(n: LayoutNode): string {
  if (n.id === "root") return "#edf4ff";
  if (n.id.includes("xiuos")) return "#8cc8ff";
  if (n.id === "robonix") return "#68e1ff";
  if (n.id === "xixiu-brain") return "#68e1ff";
  if (n.id === "physical-body") return "#5db8fe";
  if (n.id === "virtual-body" || n.id === "cyber-robot") return "#a78bfa";
  return "#8a9ab5";
}

function getTag(n: LayoutNode): string {
  if (n.id === "root") return "UBIQUITOUS OS";
  if (n.id === "robonix") return "EMBODIED OS";
  if (n.id === "xixiu-brain") return "COMPUTE ENGINE";
  return n.tag || "";
}

/* ============================================
   Phase timing
   ============================================ */

const levelToPhase = [1, 2, 2, 3, 4, 5];
const phaseDelays = [0.3, 1.2, 2.8, 4.6, 6.4];
const ctaDelay = 8.2;
const phase2Delay = 9.5;
const logoDelay = 10.2;
const sloganDelay = 11.5;
const rootXPercent = centeredNodes.length > 0 ? (centeredNodes[0].x / SVG_W) * 100 : 50;

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

  const phaseActive = (p: number) => phase >= p;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="eco-tree-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Phase 2: Brand identity on the left */}
          {isPhase2 && (
            <div className="eco-brand">
              <motion.div
                className="eco-logo-wrap"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={showLogo ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src="/images/logo1.webp" alt="Sysoul" className="eco-logo-img" />
                {showLogo && (
                  <motion.div
                    className="eco-laser-line"
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </motion.div>
              <motion.div
                className="eco-slogan-wrap"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={showSlogan ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="eco-slogan">让机器人走进千行百业，更好地服务人类</p>
                <motion.div
                  className="eco-slogan-line"
                  initial={{ scaleX: 0 }}
                  animate={showSlogan ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            </div>
          )}

          {/* Tree container */}
          <motion.div
            className="eco-tree-wrap"
            animate={{ x: isPhase2 ? "14vw" : 0, scale: isPhase2 ? 0.92 : 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="eco-tree-svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="glowLine" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="glowHeavy" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <radialGradient id="bgGlow" cx="50%" cy="35%" r="55%">
                  <stop offset="0%" stopColor="rgba(56,189,248,0.09)" />
                  <stop offset="50%" stopColor="rgba(56,189,248,0.03)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>

              <rect x="0" y="0" width={SVG_W} height={SVG_H} fill="url(#bgGlow)" />

              {/* Edges — orthogonal circuit lines */}
              {edges.map((e) => {
                const ep = levelToPhase[e.level];
                const strokeColor = e.id.includes("virtual") || e.id.includes("cyber") ? "#a78bfa" : "#68e1ff";
                return (
                  <g key={e.id}>
                    {phaseActive(ep) && (
                      <>
                        <motion.path
                          d={orthoPath(e)}
                          fill="none" stroke={strokeColor}
                          strokeWidth={2.5} strokeOpacity={0.12}
                          filter="url(#glowLine)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                        <motion.path
                          d={orthoPath(e)}
                          fill="none" stroke={strokeColor}
                          strokeWidth={1.5} strokeOpacity={0.5}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                        {/* Data pulse — dashed segment flowing along the path */}
                        <motion.path
                          d={orthoPath(e)}
                          fill="none" stroke="#fff"
                          strokeWidth={1.5} strokeOpacity={0.7}
                          strokeDasharray="8 60"
                          filter="url(#glowLine)"
                          initial={{ strokeDashoffset: 0 }}
                          animate={{ strokeDashoffset: -200 }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                        />
                      </>
                    )}
                  </g>
                );
              })}

              {/* Nodes — HUD cards via foreignObject */}
              {centeredNodes.map((n) => {
                const accent = getAccent(n);
                const tag = getTag(n);
                const nodePhase = levelToPhase[n.level];
                const labelLen = n.name.length;
                const w = Math.max(labelLen * 16 + 40, tag ? 140 : 110);
                const h = NODE_H;

                return (
                  <g key={n.id}>
                    {phaseActive(nodePhase) && (
                      <motion.foreignObject
                        x={n.x - w / 2} y={n.y - h / 2}
                        width={w} height={h}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                      >
                        <div
                          className="hud-node"
                          style={{
                            // @ts-ignore
                            "--accent": accent,
                            width: "100%", height: "100%",
                          } as React.CSSProperties}
                        >
                          {/* 4 corner accents */}
                          <span className="hud-corner hud-tl" />
                          <span className="hud-corner hud-tr" />
                          <span className="hud-corner hud-bl" />
                          <span className="hud-corner hud-br" />
                          {/* Content */}
                          {tag && <span className="hud-tag">{tag}</span>}
                          <span className="hud-label">{n.name}</span>
                        </div>
                      </motion.foreignObject>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* CTA */}
            {showCta && (
              <motion.div
                className="eco-cta-wrap"
                style={{ left: `${rootXPercent}%`, x: "-50%" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.a
                  href="/products"
                  className="eco-cta-btn"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(104,225,255,0.15)",
                      "0 0 45px rgba(104,225,255,0.35)",
                      "0 0 20px rgba(104,225,255,0.15)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  进入产品世界 <span>↗</span>
                </motion.a>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
