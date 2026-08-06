import SiteHeader from "../../components/site-header";
import ScrollReveal from "../../components/scroll-reveal";

export default function About() {
  return (
    <main className="about-page">
      <SiteHeader />

      {/* Hero */}
      <section className="about-hero">
        <ScrollReveal>
          <p className="kicker">ABOUT SYSOUL</p>
        </ScrollReveal>
        <ScrollReveal>
          <h1>
            希秀计算
            <br />
            <em>具身智能基础设施提供者</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="about-intro">
            希秀计算致力于成为具身智能时代的基础设施提供者，依托 CCF 泛在操作系统开放社区，
            打造以 Robonix 为核心的具身智能操作系统开源生态，持续构建开放、通用、可扩展的
            具身智能基础设施，让各类机器人更容易掌握技能，服务千行百业。
          </p>
        </ScrollReveal>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="timeline-head">
          <ScrollReveal>
            <p className="kicker">MILESTONES</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2>从社区到系统<br /><em>一步步走来</em></h2>
          </ScrollReveal>
        </div>

        <div className="timeline">
          <div className="timeline-track" />

          <ScrollReveal>
            <div className="timeline-node">
              <span className="tl-date">2025.05</span>
              <div className="tl-marker" />
              <div className="tl-body">
                <b>梅宏院士牵头</b>
                <p>成立泛在操作系统开放社区，汇聚产学研力量，推动操作系统研究向泛在化、智能化方向演进。</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="timeline-node">
              <span className="tl-date">2025.09</span>
              <div className="tl-marker" />
              <div className="tl-body">
                <b>Syswonder 开放社区成立</b>
                <p>面向泛在计算场景的技术生态社区正式启动，为开发者提供开源协作与知识共享平台。</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="timeline-node">
              <span className="tl-date">2025.10</span>
              <div className="tl-marker" />
              <div className="tl-body">
                <b>XiUOS 正式发布</b>
                <p>面向工业物联与机器人场景的实时操作系统，提供确定性调度与微秒级响应能力。</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="timeline-node">
              <span className="tl-date">2026.08</span>
              <div className="tl-marker" />
              <div className="tl-body">
                <b>Robonix 正式发布</b>
                <p>具身智能操作系统内核首次公开，为机器人提供统一的计算、控制与技能基础设施。</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-vision">
        <div className="vision-grid">
          <ScrollReveal>
            <div className="vision-item">
              <span className="vision-label">企业愿景</span>
              <b>让机器人走进千行百业，更好地服务人类。</b>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="vision-item">
              <span className="vision-label">企业使命</span>
              <b>打造开放的具身智能基础设施，让机器人更容易掌握技能，服务千行百业。</b>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer>
        <span>© 2025 Sysoul</span>
        <span>Embodied intelligence infrastructure</span>
        <a href="/">返回首页 ↗</a>
      </footer>
    </main>
  );
}
