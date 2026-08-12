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
          基于多指灵巧手的精细操作方案，大脑由 Robonix 驱动，结合技能框架与强化学习策略，实现复杂物体的自适应抓取与灵巧操控。适用于实验室研究、精密制造与医疗辅助等领域。
        </p>
        <span className="sol-section-label">核心优势</span>
        <div className="sol-media-row">
          {[
            { num: "01", title: "快 — 更快上手", sub: "Rapid Onboarding", desc: "Robonix OS 内置灵巧手技能库与预训练模型，开发者无需从零训练 RL 策略。即插即用的硬件抽象层让灵巧手接入后即刻可用，快速验证操控方案。", tags: "Robonix OS · 预训练模型 · 即插即用 · 快速验证", media: { type: "video", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/hand-1.mp4" } as const},
            { num: "02", title: "交互 — 更自然交互", sub: "Natural Interaction", desc: "Robonix 将灵巧手操控抽象为高层技能指令，用户通过简单的 API 调用即可完成复杂操控任务。支持遥操作、手势映射等多种交互模态，让灵巧手真正\"听话\"。", tags: "技能 API · 遥操作 · 手势映射 · 高层指令", media: { type: "video" as const, src: "" } },
            { num: "03", title: "扩展 — 功能边界", sub: "Extensible Capabilities", desc: "Robonix OS 开放技能框架让灵巧手的能力不再受限——从精密制造到医疗辅助，从实验室操作到危险环境作业，通过技能包的热插拔即可快速切换应用场景，持续拓展机器人的功能边界。", tags: "技能热插拔 · 场景切换 · 功能扩展 · Robonix OS", media: { type: "video" as const, src: "" } },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>

        <div className="sol-supported-bodies">
          <span className="sol-supported-label">已支持的本体</span>
          <p className="sol-supported-tagline">更快开发，更好交互，拓展机器功能边界</p>
          <div className="sol-supported-list">
            <div className="sol-body-item">
              <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/d1.png" alt="Robonix D1 灵巧手" />
              <span>Robonix D1</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
