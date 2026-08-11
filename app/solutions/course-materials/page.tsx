import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";

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
        <div className="sol-media-row">
          {[
            { num: "01", title: "课程大纲", sub: "Curriculum", tags: "操作系统 · 机器人控制 · AI 部署" },
            { num: "02", title: "实验平台", sub: "Lab Platform", tags: "仿真环境 · 示例代码" },
            { num: "03", title: "教学现场", sub: "In Action", tags: "高校合作 · 实训基地" },
          ].map((m) => (
            <div key={m.num} className="sol-media-card">
              <div className="sol-media-bg-placeholder" />
              <div className="sol-media-gradient" />
              <div className="sol-media-content">
                <span className="sol-card-num">{m.num} / 03</span>
                <b className="sol-card-title">{m.title}</b>
                <span className="sol-card-sub">{m.sub}</span>
                <span className="sol-card-tags">{m.tags}</span>
                <span className="sol-card-action">↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
