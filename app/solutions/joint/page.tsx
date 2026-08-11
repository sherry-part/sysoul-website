import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";

export default function Joint() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">JOINT MODULE</span>
        <h1>高精度关节模组控制</h1>
        <p className="sol-overview">
          面向机器人关节模组的底层控制方案，基于 XiUOS 实时操作系统实现高精度伺服控制、力矩反馈与多关节协同。支持 EtherCAT、CAN 等工业总线协议，适配多种电机与驱动器。
        </p>
        <div className="sol-media-row">
          {[
            { num: "01", title: "关节模组", sub: "Joint Module", tags: "XiUOS · EtherCAT · CAN · 伺服控制" },
            { num: "02", title: "控制架构", sub: "Control Architecture", tags: "力矩反馈 · 多关节协同" },
            { num: "03", title: "性能测试", sub: "Performance Benchmark", tags: "高精度 · 低延迟 · 多品牌适配" },
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
