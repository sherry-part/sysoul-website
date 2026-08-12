import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import SolutionMediaCard from "../../../components/solution-media-card";

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
            { num: "01", title: "灵巧手硬件", sub: "Dexterous Hand", desc: "多指多自由度灵巧手，搭载 Robonix OS 与强化学习策略，实现自适应柔性抓取，可处理从易碎物品到不规则零件的多样化操控需求。", tags: "Robonix OS · 强化学习 · 自适应抓取", media: { type: "video", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/hand.mp4" } },
            { num: "02", title: "控制策略", sub: "Control Strategy", desc: "多指协同运动规划结合实时力反馈，精确控制指尖接触点与抓取力度，在动态环境中保持稳定操控。", tags: "多指协同 · 力反馈", media: { type: "video", src: "" } },
            { num: "03", title: "操控实验", sub: "Manipulation", desc: "面向精密制造与医疗辅助场景，完成微小零件装配、易碎物品抓取等高难度操控任务，验证方案可行性。", tags: "精密制造 · 医疗辅助", media: { type: "video", src: "" } },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
