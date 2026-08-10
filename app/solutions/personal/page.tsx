import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import ScrollReveal from "../../../components/scroll-reveal";

const tools = [
  {
    icon: "⟐",
    title: "技能 SDK",
    desc: "一套 SDK 覆盖技能创建、测试、发布全流程。支持 Python 与 C++，兼容主流机器人中间件。",
    features: ["Python / C++ 双语言支持", "本地仿真与调试工具链", "一键发布到技能市场"],
  },
  {
    icon: "◈",
    title: "Robonix 模拟器",
    desc: "在虚拟环境中先行验证你的技能逻辑，再部署到真实硬件，零风险迭代。",
    features: ["物理级仿真精度", "数字孪生环境", "录制与回放调试"],
  },
  {
    icon: "⊞",
    title: "命令行工具",
    desc: "Robonix CLI 覆盖从项目初始化到设备管理的全部操作，终端即控制台。",
    features: ["交互式项目脚手架", "实时日志与性能监控", "OTA 固件更新"],
  },
];

const communities = [
  {
    icon: "⬡",
    title: "开发者社区",
    desc: "在 Syswonder 论坛与数千名开发者交流，分享技能、解答问题。",
    link: "Syswonder 论坛",
    href: "https://robonix.syswonder.org/",
  },
  {
    icon: "⎔",
    title: "开源项目",
    desc: "Robonix 与 XiUOS 核心组件全部开源，欢迎贡献代码与文档。",
    link: "GitHub 仓库",
    href: "https://robonix.syswonder.org/",
  },
  {
    icon: "◎",
    title: "技能市场",
    desc: "浏览、下载社区分享的机器人技能，或将你的技能发布给全球开发者。",
    link: "浏览技能",
    href: "https://robonix.syswonder.org/",
  },
];

const steps = [
  {
    num: "1",
    title: "获取 Robonix SDK",
    desc: "从 GitHub 克隆仓库或下载预编译包，安装 CLI 工具并完成环境配置。",
    code: "npm create robonix-skill@latest",
  },
  {
    num: "2",
    title: "创建你的第一个技能",
    desc: "使用交互式脚手架快速生成技能项目模板，包含完整的目录结构与示例代码。",
    code: "robonix skill init my-first-skill",
  },
  {
    num: "3",
    title: "仿真验证 → 真实部署",
    desc: "在模拟器中测试技能逻辑，通过后一键部署到一体机或联名本体，即可看到技能在物理世界中运行。",
    code: "robonix deploy --target allinone",
  },
];

export default function PersonalSolutions() {
  return (
    <main className="solutions-page solutions-personal">
      <SiteHeader />

      {/* Hero */}
      <section className="per-hero"><ScrollReveal>
          <h1>
            每个开发者
            <br />
            <em>都是创造者</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            无论你是学生、独立开发者还是机器人爱好者，Sysoul 为你提供免费的工具、
            开放的文档与活跃的社区。从第一行代码到第一个技能，我们陪你走完全程。
          </p>
        </ScrollReveal>
      </section>

      {/* Developer Tools */}
      <section className="per-tools"><ScrollReveal>
          <h2>
            趁手的工具
            <br />
            <em>开箱即用</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="section-intro">
            从 SDK 到命令行工具，从仿真环境到调试面板——一切为开发者效率而设计。
          </p>
        </ScrollReveal>
        <div className="per-tools-grid">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.title} delay={i * 0.1}>
              <div className="per-tool-card">
                <span className="per-tool-icon">{tool.icon}</span>
                <b>{tool.title}</b>
                <p>{tool.desc}</p>
                <ul className="per-tool-features">
                  {tool.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="per-community"><ScrollReveal>
          <h2>
            你不是一个人在战斗
            <br />
            <em>加入开发者社区</em>
          </h2>
        </ScrollReveal>
        <div className="per-community-grid">
          {communities.map((comm, i) => (
            <ScrollReveal key={comm.title} delay={i * 0.1}>
              <div className="per-comm-card">
                <span className="per-comm-icon">{comm.icon}</span>
                <b>{comm.title}</b>
                <small>{comm.desc}</small>
                <a
                  className="per-comm-link"
                  href={comm.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {comm.link} →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="per-start"><ScrollReveal>
          <h2>
            三步开始
            <br />
            <em>比想象中更简单</em>
          </h2>
        </ScrollReveal>
        <div className="per-start-steps">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.12}>
              <div className="per-step">
                <div className="per-step-num">{step.num}</div>
                <div>
                  <b>{step.title}</b>
                  <p>{step.desc}</p>
                  <code>{step.code}</code>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="per-cta">
        <ScrollReveal>
          <b>现在就开始<br />你的第一个机器人技能</b>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            免费、开源、无锁定。所有工具和文档都在等你。
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <a
            className="button"
            href="https://robonix.syswonder.org/"
            target="_blank"
            rel="noreferrer"
          >
            开始使用 ↗
          </a>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
