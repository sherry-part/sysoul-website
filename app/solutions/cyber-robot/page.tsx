import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";

export default function CyberRobot() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">CYBER ROBOT</span>
        <h1>赛博机器人</h1>
        <p className="sol-overview">
          赛博机器人是一款基于自研"矽璓"操作系统的工业级非侵入式智能数采终端，专为不开放协议但"有可视化操作界面"的封闭系统设计。无需改造产线、拒绝插件依赖，为封闭系统提供安全可控的数据采集与自主决策能力，实现毫秒级设备状态捕获与结构化转化。
        </p>

{/* 使用场景 */}
        <span className="sol-section-label">使用场景</span>
        <div className="sol-media-row">
          {[
            {
              num: "01",
              title: "老旧产线数字化改造",
              sub: "Legacy Line Digitalization",
              tags: "封闭系统 · 无接口设备 · 零改造",
            },
            {
              num: "02",
              title: "多源异构数据汇聚",
              sub: "Multi-Source Data Fusion",
              tags: "设备数据 · 应用数据 · 音视频流",
            },
            {
              num: "03",
              title: "远程无人值守巡检",
              sub: "Unattended Inspection",
              tags: "定时采集 · 自动上报 · 异常预警",
            },
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
