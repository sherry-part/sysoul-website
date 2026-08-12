import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import SolutionMediaCard from "../../../components/solution-media-card";

export default function Joint() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">JOINT MODULE</span>
        <h1>高精度关节模组控制</h1>
        <p className="sol-overview">
          面向机器人关节模组的底层控制方案，基于 XiUOS 实时操作系统实现高精度伺服控制、力矩反馈与多关节协同。支持 EtherCAT、CAN 等工业总线协议，适配多种电机与驱动器。
        </p>
        <div className="sol-media-row">
          {[
            { num: "01", title: "关节模组", sub: "Joint Module", desc: "基于 XiUOS 硬实时内核的高精度伺服驱动关节模组，支持 EtherCAT、CAN 等工业总线协议，微秒级中断响应确保运动控制确定性。", tags: "XiUOS · EtherCAT · CAN · 伺服控制", media: { type: "video", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/jaka.mp4" } },
            { num: "02", title: "控制架构", sub: "Control Architecture", desc: "分布式力矩反馈与多关节协同控制架构，实时同步各关节状态，满足高动态场景下的精确协同运动需求。", tags: "力矩反馈 · 多关节协同", media: { type: "image", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/jaka-2.png" } as const },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} total={2} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
