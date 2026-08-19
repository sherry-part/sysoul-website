"use client";
import { motion } from "framer-motion";
import SiteHeader from "../components/site-header";
import Footer from "../components/footer";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Home() {
  return (
    <main className="home-page-v2">
      <SiteHeader />

      {/* ============================================
           1. Hero
           ============================================ */}
      <section className="hero-v2">
        <div className="hero-v2-content">
          <motion.p
            className="hero-v2-vision"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
          >
            让机器人走进千行百业
          </motion.p>
          <motion.p
            className="hero-v2-mission"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.2, delay: 0.8, ease }}
          >
            打造开放的具身智能基础设施，让机器人更容易掌握技能，服务千行百业。
          </motion.p>
        </div>
      </section>

      {/* ============================================
           2. Robonix
           ============================================ */}
      <section className="robonix-intro">
        <div className="robonix-grid">
          <motion.div
            className="robonix-text"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="robonix-os-tag">Robonix OS 具身智能操作系统</span>
            <h2>为每一台机器人<br />提供统一的智能基础设施</h2>
            <p>向下抽象异构本体，向上编排任务与模型。不锁定硬件，不限制模型。</p>
            <a className="button" href="https://robonix.ai" target="_blank" rel="noreferrer">了解 Robonix →</a>
          </motion.div>

          <motion.div
            className="robonix-card robonix-card--1"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <span className="robonix-card-num">01</span>
            <b>硬件抽象</b>
            <p>以能力抽象屏蔽本体差异，使模型、技能与任务不与具体机器人耦合，并在能力兼容的本体之间复用。</p>
            <div className="robonix-card-img">
              <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/robonix-1.png" alt="硬件抽象" />
            </div>
            <span className="robonix-card-stat">10+ 已适配硬件</span>
          </motion.div>

          <motion.div
            className="robonix-card robonix-card--2"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
          >
            <span className="robonix-card-num">02</span>
            <b>技能编排</b>
            <p>感知与行动被封装为由硬件原语构成的技能，技能既可编程实现，也可由模型实现；执行任务时，Robonix进行规划，并完成技能编排。</p>
            <div className="robonix-card-img">
              <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/robonix-2.png" alt="技能编排" />
            </div>
            <span className="robonix-card-stat">40+ Packages</span>
          </motion.div>

          <motion.div
            className="robonix-card robonix-card--3"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
          >
            <span className="robonix-card-num">03</span>
            <b>开放生态</b>
            <p>代码开源、标准开放、社区驱动。</p>
            <div className="robonix-card-img">
              <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/team.png" alt="团队" style={{ marginTop: 12 }} />
              <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/robonix-3.png" alt="开放生态" />
            </div>
            <span className="robonix-card-stat">16+ 高校与研究所 · 10+ 厂商</span>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
