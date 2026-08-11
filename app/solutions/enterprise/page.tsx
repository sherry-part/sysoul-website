import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";

const features = [
  { title: "智能产线", desc: "机器人自主完成精密装配、质量检测与物料搬运，适配多品种柔性生产。" },
  { title: "数据采集", desc: "硬件层直采技术，破除设备数据壁垒，毫秒级实时采集与边缘计算。" },
  { title: "系统集成", desc: "开放 API 与标准协议，对接 MES/ERP/WMS，实现端到端数字化闭环。" },
];

export default function EnterpriseSolutions() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-hero">
        <span className="kicker">ENTERPRISE</span>
        <h1>面向企业的解决方案</h1>
        <p>从智能产线到数据采集，为制造、能源、物流等行业提供可落地的具身智能方案。</p>
      </section>

      <section className="sol-panel">
        <div className="sol-grid">
          {features.map((f) => (
            <div key={f.title} className="sol-item">
              <b>{f.title}</b>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sol-cta">
        <b>探索具身智能在您行业的应用</b>
        <a className="button" href="mailto:contact@sysoul.ai">联系我们 →</a>
      </section>

      <Footer />
    </main>
  );
}
