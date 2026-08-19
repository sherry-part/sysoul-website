import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import SolutionMediaCard from "../../../components/solution-media-card";

export default function CourseMaterials() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">COURSE MATERIALS</span>
        <h1>具身智能教学资源包</h1>
        <p className="sol-overview">
          面向高校与科研机构的具身智能教学资源包，涵盖操作系统原理、机器人控制、AI 模型部署等模块，配套实验手册、示例代码与仿真环境，帮助师生快速上手具身智能开发。
        </p>
        <div className="sol-media-row sol-media-row--two">
          {[
            { num: "01", title: "课程大纲", sub: "Curriculum", desc: "涵盖操作系统原理、机器人控制、AI 模型部署三大模块，理论结合实践，为高校提供完整的具身智能教学体系。", tags: "操作系统 · 机器人控制 · AI 部署", media: { type: "image", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/课程-1.png" } as const },
            { num: "02", title: "实验平台", sub: "Lab Platform", desc: "配套仿真环境，学生可在虚拟环境中验证算法后一键部署到真实硬件，降低实验门槛与设备成本。", tags: "仿真环境 · 示例代码", media: { type: "image", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/教学-2.jpg" } as const },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} total={2} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
