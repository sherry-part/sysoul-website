import SiteHeader from "../../components/site-header";
import ScrollReveal from "../../components/scroll-reveal";

const categories = [
  {
    icon: "⊡",
    title: "Robonix 操作系统",
    desc: "内核架构、技能管理、设备抽象层与实时调度文档。",
  },
  {
    icon: "⚙",
    title: "XiUOS 小脑",
    desc: "实时控制、关节运控算法、硬件适配与驱动开发指南。",
  },
  {
    icon: "⟐",
    title: "技能 SDK",
    desc: "技能创建、测试、发布全流程，多平台部署与调试工具。",
  },
  {
    icon: "↗",
    title: "API 参考",
    desc: "REST 与 gRPC 接口文档，兼容主流机器人中间件标准。",
  },
];

const popularDocs = [
  { label: "快速开始：5 分钟部署 Robonix", tag: "入门" },
  { label: "Robonix 架构总览", tag: "概念" },
  { label: "技能开发工作流", tag: "指南" },
  { label: "一体机硬件安装指南", tag: "硬件" },
  { label: "从仿真到真实部署", tag: "教程" },
];

const apiDocs = [
  { label: "Skill API 参考", tag: "API" },
  { label: "Device Abstraction Layer", tag: "API" },
  { label: "Robonix CLI 命令手册", tag: "CLI" },
  { label: "gRPC 接口定义", tag: "协议" },
  { label: "错误码与诊断指南", tag: "参考" },
];

export default function Docs() {
  return (
    <main className="docs-page">
      <SiteHeader />

      {/* Hero */}
      <section className="docs-hero">
        <ScrollReveal>
          <p className="kicker">DOCUMENTATION</p>
        </ScrollReveal>
        <ScrollReveal>
          <h1>
            知识库
            <br />
            <em>从入门到精通</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            无论你是初次接触具身智能，还是正在将技能部署到生产环境，
            这里都有清晰的指引和深度的参考文档。
          </p>
        </ScrollReveal>
      </section>

      {/* Categories */}
      <section className="docs-categories">
        <div className="docs-cat-head">
          <ScrollReveal>
            <p className="kicker">BROWSE BY TOPIC</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2>
              按主题浏览
              <br />
              <em>找到你需要的</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="section-intro">
              文档按产品与模块组织，覆盖从硬件到软件、从入门到进阶的完整内容体系。
            </p>
          </ScrollReveal>
        </div>
        <div className="docs-cat-grid">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <a className="docs-cat-card" href="#">
                <span className="docs-cat-icon">{cat.icon}</span>
                <b>{cat.title}</b>
                <small>{cat.desc}</small>
                <span className="docs-cat-arrow">浏览文档 →</span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Popular & API */}
      <section className="docs-popular">
        <ScrollReveal>
          <p className="kicker">QUICK LINKS</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>
            热门文档
            <br />
            <em>快速跳转</em>
          </h2>
        </ScrollReveal>
        <div className="docs-popular-grid">
          <ScrollReveal delay={0}>
            <div className="docs-popular-col">
              <h3>入门与指南</h3>
              {popularDocs.map((doc) => (
                <a key={doc.label} className="doc-link-item" href="#">
                  <span>{doc.label}</span>
                  <span className="doc-link-tag">{doc.tag}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="docs-popular-col">
              <h3>API 与工具</h3>
              {apiDocs.map((doc) => (
                <a key={doc.label} className="doc-link-item" href="#">
                  <span>{doc.label}</span>
                  <span className="doc-link-tag">{doc.tag}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="docs-cta">
        <ScrollReveal>
          <h2>
            还没找到答案？
            <br />
            <em>加入社区提问</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            前往 Robonix 开发者社区，与数千名开发者交流经验、获取帮助。
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <a
            className="button"
            href="https://robonix.syswonder.org/"
            target="_blank"
            rel="noreferrer"
          >
            进入开发者社区 ↗
          </a>
        </ScrollReveal>
      </section>

      <footer>
        <span>© 2025 Sysoul</span>
        <span>Embodied intelligence infrastructure</span>
        <a href="/">返回首页 ↗</a>
      </footer>
    </main>
  );
}
