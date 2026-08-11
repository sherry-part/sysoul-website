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
            <span className="robonix-os-tag">Robonix OS</span>
            <h2>为每一台机器人<br />提供统一的智能基础设施</h2>
            <p>向下抽象异构本体，向上编排任务与模型。不锁定硬件，不限制模型。</p>
            <a className="button" href="https://robonix.ai" target="_blank" rel="noreferrer">了解 Robonix →</a>
          </motion.div>

          <motion.div
            className="robonix-cards"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            {[
              { num: "01", title: "硬件抽象", desc: "统一设备抽象层，将机械臂、四足、移动底盘等异构本体纳入同一套接口。一次适配，跨平台复用。", stat: "10+ 已适配硬件", img: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/robonix-1.png" },
              { num: "02", title: "技能编排", desc: "将感知、规划、执行抽象为可组合的技能单元。开发者像搭积木一样编排任务，AI 模型即插即用。", stat: "40+ Packages", img: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/robonix-2.png" },
              { num: "03", title: "开放生态", desc: "代码开源、标准开放、社区驱动。不锁定任何硬件与模型，让开发者的成果真正属于自己。", stat: "16+ 高校与研究所 · 10+ 厂商", img: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/robonix-3.png" },
            ].map((item) => (
              <div key={item.num} className="robonix-card">
                <span className="robonix-card-num">{item.num}</span>
                <b>{item.title}</b>
                <p>{item.desc}</p>
                <div className="robonix-card-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <span className="robonix-card-stat">{item.stat}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
