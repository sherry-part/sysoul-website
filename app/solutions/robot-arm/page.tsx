import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import SolutionMediaCard from "../../../components/solution-media-card";

export default function RobotArm() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">ROBOT ARM</span>
        <h1>工业级智能机械臂控制</h1>
        <p className="sol-overview">
          面向工业与实验室场景的机械臂智能控制方案，大脑由 Robonix 驱动，支持视觉引导抓取、力控装配、轨迹规划等核心能力。通过 Robonix 技能编排，实现模型驱动的柔性操作，适配多种主流机械臂本体。
        </p>
        <span className="sol-section-label">核心优势</span>
        <div className="sol-media-row">
          {[
            { num: "01", title: "快 — 更快上手", sub: "Rapid Onboarding", desc: "Robonix OS 统一抽象机械臂硬件接口，一套代码适配多品牌机械臂。拖拽式技能编排让开发者快速搭建从感知到执行的完整工作流，大幅缩短开发周期。", tags: "Robonix OS · 硬件抽象 · 技能编排 · 快速部署", media: { type: "image", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/arm-1.png" } as const },
            { num: "02", title: "交互 — 更自然交互", sub: "Natural Interaction", desc: "Robonix 支持示教编程、语音指令与手势引导等多种交互方式，降低机械臂的操作门槛。即使是零编程经验的产线工人，也能快速掌握机器人操作。", tags: "示教编程 · 语音指令 · 手势引导 · 零门槛", media: { type: "video" as const, src: "" } },
            { num: "03", title: "扩展 — 功能边界", sub: "Extensible Capabilities", desc: "Robonix OS 开放技能框架让机械臂的能力不再受限——从精密装配到物流分拣，从实验室研究到产线部署，通过技能包的热插拔即可快速切换应用场景，持续拓展机器人的功能边界。", tags: "技能热插拔 · 场景切换 · 功能扩展 · Robonix OS", media: { type: "image" as const, src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/arm-3.png" } },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>

        <div className="sol-supported-bodies">
          <span className="sol-supported-label">已支持的本体</span>
          <p className="sol-supported-tagline">更快开发，更好交互，拓展机器功能边界</p>
          <div className="sol-supported-list">
            <div className="sol-body-item">
              <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/piper.png" alt="松灵 Piper" />
              <span>松灵 Piper</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
