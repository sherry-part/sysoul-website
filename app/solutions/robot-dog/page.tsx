import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";

export default function RobotDog() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">ROBOT DOG</span>
        <h1>四足机器人具身智能方案</h1>
        <p className="sol-overview">
          基于四足机器人平台的具身智能方案，以希秀智脑为算力核心，集成 Robonix 操作系统与 XiUOS 运控算法，实现复杂地形自主导航、动态避障与任务执行。适用于安防巡检、科研教学、物流配送等场景。
        </p>
        <div className="sol-media-row">
          {[
            { num: "01", title: "希秀智脑 + 机器狗", sub: "All-in-One + Quadruped", tags: "边缘算力 · Robonix OS · 端侧推理" },
            { num: "02", title: "控制系统", sub: "Control System", tags: "XiUOS · 动态避障 · 地形适应" },
            { num: "03", title: "实地测试", sub: "Field Test", tags: "安防巡检 · 物流配送" },
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
