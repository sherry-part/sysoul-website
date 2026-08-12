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
          面向工业与实验室场景的机械臂智能控制方案，支持视觉引导抓取、力控装配、轨迹规划等核心能力。通过 Robonix 技能编排，实现模型驱动的柔性操作，适配多种主流机械臂本体。
        </p>
        <div className="sol-media-row">
          {[
            { num: "01", title: "机械臂平台", sub: "Robot Arm Platform", desc: "Robonix OS 统一抽象机械臂硬件接口，支持视觉引导抓取与力控精密装配，一套代码即可适配多品牌机械臂本体。", tags: "Robonix OS · 视觉引导 · 力控装配", media: { type: "image", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/arm-1.png" } as const },
            { num: "02", title: "控制系统", sub: "Control System", desc: "轨迹规划与技能编排引擎将复杂操作分解为可复用的技能节点，支持示教编程与模型驱动的自主轨迹生成。", tags: "轨迹规划 · 技能编排", media: { type: "video", src: "" } },
            { num: "03", title: "精密装配", sub: "Precision Assembly", desc: "毫秒级力反馈闭环控制，适配 UR、Franka、节卡等主流机械臂本体，在精密零件装配场景中达到工业级精度。", tags: "柔性操作 · 多品牌适配", media: { type: "video", src: "" } },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
