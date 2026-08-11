import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";

export default function IoTSensing() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">IOT SENSING</span>
        <h1>工业物联与边缘感知</h1>
        <p className="sol-overview">
          基于工业物联与边缘感知的具身智能方案，通过 XiUOS 的硬实时调度与微秒级中断响应，实现毫秒级数据采集、边缘计算与设备协同。适用于智能制造、能源管理与环境监测等场景。
        </p>
        <div className="sol-media-row">
          {[
            { num: "01", title: "物联网关", sub: "IoT Gateway", tags: "XiUOS · 硬实时 · 微秒级中断" },
            { num: "02", title: "数据看板", sub: "Dashboard", tags: "边缘计算 · 毫秒级采集" },
            { num: "03", title: "边缘部署", sub: "Edge Deployment", tags: "智能制造 · 能源管理" },
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
