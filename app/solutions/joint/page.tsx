import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import SolutionMediaCard from "../../../components/solution-media-card";

export default function Joint() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <div className="sol-hero-row">
          <div className="sol-hero-text">
            <span className="sol-panel-label">JOINT MODULE</span>
            <h1>高精度关节模组控制</h1>
            <p className="sol-overview">
              面向机器人关节模组的底层控制方案，小脑由 XiUOS 驱动，基于硬实时操作系统实现高精度伺服控制、力矩反馈与多关节协同。支持 EtherCAT、CAN 等工业总线协议，微秒级中断响应确保运动控制确定性，适配多种电机与驱动器。
            </p>
          </div>
          <div className="sol-hero-media">
            <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/jaka.png" alt="关节模组" />
          </div>
        </div>
        <span className="sol-section-label">核心优势</span>
        <div className="sol-media-row sol-media-row--two">
          {[
            { num: "01", title: "实时 — 微秒级响应", sub: "Microsecond Real-Time", desc: "XiUOS 硬实时内核实现微秒级中断响应与确定性调度，确保每一个关节的伺服指令在严格时间窗口内完成执行，满足高动态场景下的运动控制要求。", tags: "XiUOS · 硬实时 · 微秒级中断 · 确定性调度", media: { type: "video" as const, src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/jaka.mp4" } },
            { num: "02", title: "精准 — 力矩反馈", sub: "Precision Torque Feedback", desc: "XiUOS 驱动的分布式力矩反馈与多关节协同控制架构，实时同步各关节状态，毫秒级闭环调节确保运动轨迹精准执行。", tags: "XiUOS · 力矩反馈 · 多关节协同 · 闭环控制", media: { type: "image", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/jaka-2.png" } as const },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} total={2} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
