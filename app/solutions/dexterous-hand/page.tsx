import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";

export default function DexterousHand() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">DEXTEROUS HAND</span>
        <h1>多指灵巧手精细操控</h1>
        <p className="sol-overview">
          基于多指灵巧手的精细操作方案，结合 Robonix 技能框架与强化学习策略，实现复杂物体的自适应抓取与灵巧操控。适用于实验室研究、精密制造与医疗辅助等领域。
        </p>
        <div className="sol-media-row">
          {[
            { num: "01", title: "灵巧手硬件", sub: "Dexterous Hand", tags: "Robonix OS · 强化学习 · 自适应抓取" },
            { num: "02", title: "控制策略", sub: "Control Strategy", tags: "多指协同 · 力反馈" },
            { num: "03", title: "操控实验", sub: "Manipulation", tags: "精密制造 · 医疗辅助" },
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
