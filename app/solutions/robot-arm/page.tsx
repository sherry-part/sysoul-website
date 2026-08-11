import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";

export default function RobotArm() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">ROBOT ARM</span>
        <h1>工业级智能机械臂控制</h1>
        <p className="sol-overview">
          面向工业与实验室场景的机械臂智能控制方案，支持视觉引导抓取、力控装配、轨迹规划等核心能力。通过 Robonix 技能编排，实现模型驱动的柔性操作，适配多种主流机械臂本体。
        </p>
        <div className="sol-media-row">
          {[
            { num: "01", title: "机械臂平台", sub: "Robot Arm Platform", tags: "Robonix OS · 视觉引导 · 力控装配" },
            { num: "02", title: "控制系统", sub: "Control System", tags: "轨迹规划 · 技能编排" },
            { num: "03", title: "精密装配", sub: "Precision Assembly", tags: "柔性操作 · 多品牌适配" },
          ].map((m) => (
            <div key={m.num} className="sol-media-card">
              <div className="sol-media-bg-placeholder" />
              <div className="sol-media-gradient" />
              <div className="sol-media-content">
                <span className="sol-card-num">{m.num} / 03</span>
                <b className="sol-card-title">{m.title}</b>
                <span className="sol-card-sub">{m.sub}</span>
                <span className="sol-card-tags">{m.tags}</span>
                <span className="sol-card-action">↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
