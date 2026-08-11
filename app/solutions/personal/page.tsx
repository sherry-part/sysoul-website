import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";

const features = [
  { title: "技能 SDK", desc: "一套 SDK 覆盖创建、测试、发布全流程。支持 Python 与 C++，本地仿真调试。" },
  { title: "模拟器", desc: "物理级仿真精度，数字孪生环境，零风险迭代技能逻辑后再部署到真机。" },
  { title: "社区", desc: "数千名开发者共享技能与模型，CCF 开放社区持续输出教程与最佳实践。" },
];

export default function PersonalSolutions() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-hero">
        <span className="kicker">DEVELOPER</span>
        <h1>面向个人的解决方案</h1>
        <p>从 SDK 到模拟器再到社区，为独立开发者提供完整的具身智能开发工具链。</p>
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
        <b>开始你的第一个机器人技能</b>
        <a className="button" href="https://robonix.ai" target="_blank" rel="noreferrer">进入开发者社区 →</a>
      </section>

      <Footer />
    </main>
  );
}
