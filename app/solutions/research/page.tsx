import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";

const features = [
  { title: "实验平台", desc: "基于 Robonix OS 的真实硬件实验环境，学生从仿真到部署完整经历技能开发全流程。" },
  { title: "课程体系", desc: "覆盖操作系统、运动学、感知与决策四大模块，配套实验指导书与在线评测系统。" },
  { title: "竞赛支持", desc: "支持机器人技能大赛，提供真实产业场景作为实训案例，设立开源贡献奖。" },
];

export default function ResearchSolutions() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-hero">
        <span className="kicker">RESEARCH</span>
        <h1>面向科研的解决方案</h1>
        <p>为高校与科研机构提供开放的实验平台、标准数据集与可复现的研究基础设施。</p>
      </section>

      <section className="sol-panel">
        <div className="sol-grid">
          {features.map((f) => (
            <div key={f.title} className="sol-item">
              <b>{f.title}</b>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sol-cta">
        <b>将你的实验室接入研究平台</b>
        <a className="button" href="mailto:contact@sysoul.ai">联系我们 →</a>
      </section>

      <Footer />
    </main>
  );
}
