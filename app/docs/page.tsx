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
    href: "https://xuos.io/",
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

      {/* Categories */}
      <section className="docs-categories">
        <div className="docs-cat-head"><ScrollReveal>
            <h2>
              按主题浏览
              <br />
              <em>找到你需要的</em>
            </h2>
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

      <Footer />
    </main>
  );
}
