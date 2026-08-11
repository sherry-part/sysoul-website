import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";

const features = [
  { title: "自主导航", desc: "激光 SLAM + 视觉融合，动态避障，复杂室内环境自主通行，跨楼层乘梯。" },
  { title: "多机调度", desc: "云端调度平台支持 20+ 台协同，智能路径规划，实时监控位置与任务状态。" },
  { title: "应用场景", desc: "写字楼包裹配送、医院药品运送、酒店客房服务，交付成功率 99.7%。" },
];

export default function DeliveryRobotPage() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-hero">
        <span className="kicker">CASE STUDY</span>
        <h1>智能取送机器人</h1>
        <p>基于 Robonix OS，为写字楼、医院、酒店提供安全高效的自主取送方案。</p>
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
        <b>获取定制化取送方案</b>
        <a className="button" href="mailto:contact@sysoul.ai">预约演示 →</a>
      </section>

      <Footer />
    </main>
  );
}
