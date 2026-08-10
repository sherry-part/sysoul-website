import SiteHeader from "../../components/site-header";
import Footer from "../../components/footer";
import ScrollReveal from "../../components/scroll-reveal";

const categories = [
  {
    icon: "⊡",
    title: "Robonix 操作系统",
    desc: "内核架构、技能管理、设备抽象层与实时调度文档。",
    href: "https://book.robonix.ai",
  },
  {
    icon: "⚙",
    title: "XiUOS 小脑",
    desc: "实时控制、关节运控算法、硬件适配与驱动开发指南。",
    href: "#",
  },
  {
    icon: "⟐",
    title: "技能 SDK",
    desc: "技能创建、测试、发布全流程，多平台部署与调试工具。",
    href: "#",
  },
  {
    icon: "↗",
    title: "包目录",
    desc: "Robonix 预置技能与工具包，开箱即用，期待你的复用与贡献。",
    href: "https://packages.robonix.ai",
  },
];

export default function Docs() {
  return (
    <main className="docs-page">
      <SiteHeader />

      {/* Hero */}
      <section className="docs-hero"><ScrollReveal>
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
        <div className="docs-cat-head"><ScrollReveal>
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
              <a className="docs-cat-card" href={cat.href} target={cat.href.startsWith("http") ? "_blank" : undefined} rel={cat.href.startsWith("http") ? "noreferrer" : undefined}>
                <span className="docs-cat-icon">{cat.icon}</span>
                <b>{cat.title}</b>
                <small>{cat.desc}</small>
                <span className="docs-cat-arrow">浏览文档 →</span>
              </a>
            </ScrollReveal>
          ))}
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

      <Footer />
    </main>
  );
}
