import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import SolutionMediaCard from "../../../components/solution-media-card";

export default function BCI() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">BRAIN-COMPUTER INTERFACE</span>
        <h1>脑机与具身智能融合</h1>
        <p className="sol-overview">
          融合脑机与具身智能的前沿方案，通过脑电信号解码实现对机器人的直觉控制。Robonix 提供统一的信号处理与设备抽象层，支持多种 BCI 设备与机器人平台的快速集成。
        </p>
        <div className="sol-media-row">
          {[
            { num: "01", title: "机器人控制", sub: "Robot Control", desc: "通过 Robonix OS 将脑电解码意图实时映射为机器人控制指令，已实现意念操控机械车与机械臂的完整闭环，用户无需任何物理操作即可驱动机器人执行任务。", tags: "意念操控 · 机械车 · 机械臂 · Robonix OS", media: { type: "video", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/脑机.mp4" } },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} total={1} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
