import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import SolutionMediaCard from "../../../components/solution-media-card";

export default function RobotDog() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">ROBOT DOG</span>
        <h1>四足机器人具身智能方案</h1>
        <p className="sol-overview">
          基于四足机器人平台的具身智能方案，以希秀智脑为算力核心，搭载 Robonix 操作系统实现端侧 AI 推理与自主决策。大脑由 Robonix 驱动，实现复杂地形自主导航、动态避障与任务执行。适用于安防巡检、科研教学、物流配送等场景。
        </p>
        <span className="sol-section-label">核心优势</span>
        <div className="sol-media-row">
          {[
            { num: "01", title: "快 — 更快上手", sub: "Rapid Onboarding", desc: "以希秀智脑为边缘算力核心，预装 Robonix OS 统一技能框架与硬件抽象层，开发者无需从零编写底层驱动，数小时即可完成从硬件接入到任务编排的全流程开发，大幅缩短四足机器人的部署周期。", tags: "希秀智脑 · Robonix OS · 硬件抽象 · 技能复用 · 快速部署", media: { type: "video" as const, src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/dog-1.mp4" } },
            { num: "02", title: "交互 — 更自然交互", sub: "Natural Interaction", desc: "Robonix 提供自然语言任务指令与可视化编排界面，用户无需专业编程背景即可轻松与四足机器人交互，让机器人真正成为每个人的工作伙伴。", tags: "自然语言 · 可视化编排 · 轻松交互 · Robonix OS", media: { type: "video" as const, src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/dog-2.mp4" } },
            { num: "03", title: "扩展 — 功能边界", sub: "Extensible Capabilities", desc: "Robonix OS 开放技能框架让四足机器人的能力不再受限——从安防巡检到物流配送，从科研教学到应急搜救，通过技能包的热插拔即可快速切换应用场景，持续拓展机器人的功能边界。", tags: "技能热插拔 · 场景切换 · 功能扩展 · Robonix OS", media: { type: "image" as const, src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/dog-3.png" } },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>

        <div className="sol-supported-bodies">
          <span className="sol-supported-label">联名款本体</span>
          <p className="sol-supported-tagline">更快开发，更好交互，拓展机器功能边界</p>
          <div className="sol-supported-list">
            <div className="sol-body-item">
              <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/lite3.png" alt="云深处 Lite3" />
              <span>云深处 Lite3</span>
            </div>
            <div className="sol-body-item">
              <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/山猫.png" alt="云深处 山猫" />
              <span>云深处 山猫</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
