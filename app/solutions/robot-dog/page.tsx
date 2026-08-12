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
          基于四足机器人平台的具身智能方案，以希秀智脑为算力核心，集成 Robonix 操作系统与 XiUOS 运控算法，实现复杂地形自主导航、动态避障与任务执行。适用于安防巡检、科研教学、物流配送等场景。
        </p>
        <div className="sol-media-row">
          {[
            { num: "01", title: "希秀智脑 + 机器狗", sub: "All-in-One + Quadruped", desc: "以希秀智脑为边缘算力载体，搭载 Robonix OS 实现端侧 AI 推理与自主决策，让四足机器人具备真正的环境感知与任务理解能力。", tags: "边缘算力 · Robonix OS · 端侧推理", media: { type: "video", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/dog-1.mp4" } },
            { num: "02", title: "控制系统", sub: "Control System", desc: "基于 XiUOS 硬实时调度内核，实现复杂地形下的动态步态规划与实时避障，毫秒级响应确保运行安全与稳定。", tags: "XiUOS · 动态避障 · 地形适应", media: { type: "video", src: "" } },
            { num: "03", title: "实地测试", sub: "Field Test", desc: "已完成安防巡检与物流配送场景的实地部署验证，支持多机协同作业与远程人工接管，运行稳定可靠。", tags: "安防巡检 · 物流配送", media: { type: "video", src: "" } },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
