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
  id: string;
  name: string;
  level: number;
  tag?: string;
  x: number;
  y: number;
  parentId?: string;
  children: LayoutNode[];
}

const LEVEL_H = 115;
const MIN_LEAF_GAP = 130;
const NODE_W = 140;
const NODE_H = 42;
const SVG_W = 1000;
const SVG_H = 750;
const ROOT_Y = 52;

function buildLayout(root: EcoNode): LayoutNode {
  // Flatten all leaves first
  const leaves: { id: string; parentId?: string }[] = [];
  function collectLeaves(node: EcoNode, parentId?: string) {
    if (!node.children || node.children.length === 0) {
      leaves.push({ id: node.id, parentId });
    } else {
      for (const child of node.children) {
        collectLeaves(child, node.id);
      }
    }
  }
  collectLeaves(root);

  // Assign leaf x positions
  const leafX = new Map<string, number>();
  leaves.forEach((leaf, i) => {
    leafX.set(leaf.id, i * MIN_LEAF_GAP);
  });

  // Internal node x = average of children's leaf x positions
  function computeLeafXs(node: EcoNode): number[] {
    if (!node.children || node.children.length === 0) {
      return [leafX.get(node.id)!];
    }
    const xs: number[] = [];
    for (const child of node.children) {
      xs.push(...computeLeafXs(child));
    }
    return xs;
  }

  function computeX(node: EcoNode): number {
    const xs = computeLeafXs(node);
    const avg = xs.reduce((a, b) => a + b, 0) / xs.length;
    return avg;
  }

  // Build layout tree
  function build(node: EcoNode, parentId?: string): LayoutNode {
    const x = computeX(node);
    const y = ROOT_Y + node.level * LEVEL_H;
    const children = (node.children || []).map((c) => build(c, node.id));
    return {
      id: node.id,
      name: node.name,
      level: node.level,
      tag: node.tag,
      x,
      y,
      parentId,
      children,
    };
  }

  return build(root);
}

const layoutRoot = buildLayout(ecosystemData);

// Offset so tree is centered in SVG
const allNodes: LayoutNode[] = [];
function flatten(n: LayoutNode) {
  allNodes.push(n);
  n.children.forEach(flatten);
}
flatten(layoutRoot);

const totalWidth = Math.max(...allNodes.map((n) => n.x)) + NODE_W;
const offsetX = (SVG_W - totalWidth) / 2 + NODE_W / 2;
const centeredNodes = allNodes.map((n) => ({ ...n, x: n.x + offsetX }));

// Build edge list
interface Edge {
  id: string;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  level: number;
}

const edges: Edge[] = [];
for (const n of allNodes) {
  for (const child of n.children) {
    edges.push({
      id: `${n.id}->${child.id}`,
      fromX: n.x + offsetX,
      fromY: n.y + NODE_H / 2,
      toX: child.x + offsetX,
      toY: child.y - NODE_H / 2,
      level: child.level,
    });
  }
}

/* ============================================
   Cubic Bézier path builder
   ============================================ */

function bezierPath(e: Edge): string {
  const { fromX, fromY, toX, toY } = e;
  const dy = toY - fromY;
  const cpOffset = Math.max(Math.abs(dy) * 0.55, 40);
  const cp1x = fromX;
  const cp1y = fromY + cpOffset;
  const cp2x = toX;
  const cp2y = toY - cpOffset;
  return `M ${fromX} ${fromY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${toX} ${toY}`;
}

/* ============================================
   Variant styles
   ============================================ */

type Variant = "root" | "xiuos" | "robonix" | "brain" | "physical" | "virtual" | "leaf";

function getVariant(n: LayoutNode): Variant {
  if (n.id === "root") return "root";
  if (n.id.includes("xiuos")) return "xiuos";
  if (n.id === "robonix") return "robonix";
  if (n.id === "xixiu-brain") return "brain";
  if (n.id === "physical-body") return "physical";
  if (n.id === "virtual-body") return "virtual";
  return "leaf";
}

const variantStyle: Record<Variant, { bg: string; border: string; text: string; glow: string }> = {
  root:     { bg: "rgba(255,255,255,0.09)", border: "rgba(255,255,255,0.45)", text: "#edf4ff", glow: "rgba(255,255,255,0.3)" },
  xiuos:    { bg: "rgba(120,180,255,0.09)", border: "rgba(120,180,255,0.5)",  text: "#8cc8ff", glow: "rgba(120,180,255,0.25)" },
  robonix:  { bg: "rgba(104,225,255,0.09)", border: "rgba(104,225,255,0.55)", text: "#68e1ff", glow: "rgba(104,225,255,0.3)" },
  brain:    { bg: "rgba(104,225,255,0.11)", border: "rgba(104,225,255,0.6)",  text: "#edf4ff", glow: "rgba(104,225,255,0.35)" },
  physical: { bg: "rgba(90,180,255,0.09)",  border: "rgba(90,180,255,0.5)",   text: "#5db8fe", glow: "rgba(90,180,255,0.25)" },
  virtual:  { bg: "rgba(167,139,250,0.09)", border: "rgba(167,139,250,0.5)",  text: "#a78bfa", glow: "rgba(167,139,250,0.25)" },
  leaf:     { bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.22)", text: "#8a9ab5", glow: "rgba(255,255,255,0.1)" },
};

/* ============================================
   Phase timing
   ============================================ */

const levelToPhase = [1, 2, 2, 3, 4, 5]; // level → phase

const phaseDelays = [0.3, 1.2, 2.8, 4.6, 6.4]; // seconds for phase 1-5
const ctaDelay = 8.2; // seconds
const phase2Delay = 9.5; // seconds — tree starts sliding right
const logoDelay = 10.2; // seconds — logo scan reveal
const sloganDelay = 11.5; // seconds — slogan text appear

// Root node x as percentage of SVG width — used to align CTA
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
    const timers: NodeJS.Timeout[] = [];
    phaseDelays.forEach((d, i) => timers.push(setTimeout(() => setPhase(i + 1), d * 1000)));
    timers.push(setTimeout(() => setShowCta(true), ctaDelay * 1000));
    timers.push(setTimeout(() => setIsPhase2(true), phase2Delay * 1000));
    timers.push(setTimeout(() => setShowLogo(true), logoDelay * 1000));
    timers.push(setTimeout(() => setShowSlogan(true), sloganDelay * 1000));
    return () => timers.forEach(clearTimeout);
  }, [show]);

  const phaseActive = (p: number) => phase >= p;

  const nodesByLevel = new Map<number, LayoutNode[]>();
  for (const n of centeredNodes) {
    const arr = nodesByLevel.get(n.level) || [];
    arr.push(n);
    nodesByLevel.set(n.level, arr);
  }

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
              {/* Logo with laser scan reveal */}
              <motion.div
                className="eco-logo-wrap"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={showLogo ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/logo1.webp" alt="Sysoul" className="eco-logo-img" />
                {/* Laser scan line */}
                {showLogo && (
                  <motion.div
                    className="eco-laser-line"
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </motion.div>

              {/* Slogan */}
              <motion.div
                className="eco-slogan-wrap"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={showSlogan ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="eco-slogan">
                  让机器人走进千行百业，更好地服务人类
                </p>
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

          {/* Tree container — slides right in Phase 2 */}
          <motion.div
            className="eco-tree-wrap"
            animate={{
              x: isPhase2 ? "22vw" : 0,
              scale: isPhase2 ? 0.86 : 1,
            }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eco-kicker">ECOSYSTEM & PRODUCTS</p>

            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="eco-tree-svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="glowLight" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="glowStrong" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="glowNode" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Edges — drawn when phase active */}
              {edges.map((e) => {
                const edgePhase = levelToPhase[e.level];
                return (
                  <g key={e.id}>
                    {phaseActive(edgePhase) && (
                      <>
                        <motion.path
                          d={bezierPath(e)}
                          fill="none"
                          stroke={e.id.includes("virtual") || e.id.includes("cyber") ? "#a78bfa" : "#68e1ff"}
                          strokeWidth={3}
                          strokeOpacity={0.15}
                          filter="url(#glowLight)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.7, ease: "easeInOut" }}
                        />
                        <motion.path
                          d={bezierPath(e)}
                          fill="none"
                          stroke={e.id.includes("virtual") || e.id.includes("cyber") ? "#a78bfa" : "#68e1ff"}
                          strokeWidth={1.2}
                          strokeOpacity={0.55}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.7, ease: "easeInOut" }}
                        />
                        <motion.circle r={2.5} fill="#fff" filter="url(#glowLight)">
                          <animateMotion
                            dur="2.5s"
                            repeatCount="indefinite"
                            path={bezierPath(e)}
                          />
                        </motion.circle>
                      </>
                    )}
                  </g>
                );
              })}

              {/* Nodes */}
              {centeredNodes.map((n) => {
                const v = getVariant(n);
                const s = variantStyle[v];
                const nodePhase = levelToPhase[n.level];
                const tw = n.name.length * 14 + (n.tag ? 0 : 0);
                const w = Math.max(tw + 32, 100);
                const h = NODE_H;

                return (
                  <g key={n.id}>
                    {phaseActive(nodePhase) && (
                      <>
                        <motion.rect
                          x={n.x - w / 2} y={n.y - h / 2}
                          width={w} height={h} rx={h / 2}
                          fill={s.glow}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: [0, 0.5, 0.25], scale: 1 }}
                          transition={{
                            opacity: { delay: 0.25, duration: 0.6 },
                            scale: { delay: 0, duration: 0.5, type: "spring", stiffness: 200 },
                          }}
                          style={{ filter: "blur(14px)" }}
                        />
                        <motion.rect
                          x={n.x - w / 2} y={n.y - h / 2}
                          width={w} height={h} rx={h / 2}
                          fill={s.bg}
                          stroke={s.border}
                          strokeWidth={1.5}
                          initial={{ opacity: 0, scale: 0.6 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.08, duration: 0.45, type: "spring", stiffness: 180 }}
                        />
                        <motion.rect
                          x={n.x - w / 2} y={n.y - h / 2}
                          width={w} height={h} rx={h / 2}
                          fill="none"
                          stroke={s.border}
                          strokeWidth={1}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.35, 0] }}
                          transition={{ delay: 1, duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.text
                          x={n.x} y={n.y + 5}
                          textAnchor="middle"
                          fill={s.text}
                          fontSize={n.level === 0 ? 15 : n.level <= 2 ? 13 : 12}
                          fontWeight={n.level <= 2 ? 600 : 400}
                          letterSpacing={0.8}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.25, duration: 0.4 }}
                        >
                          {n.name}
                        </motion.text>
                        {n.tag && (
                          <motion.text
                            x={n.x} y={n.y + h / 2 + 16}
                            textAnchor="middle"
                            fill={s.text}
                            fontSize={10}
                            opacity={0.7}
                            letterSpacing={0.5}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ delay: 0.45, duration: 0.4 }}
                          >
                            {n.tag}
                          </motion.text>
                        )}
                      </>
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
