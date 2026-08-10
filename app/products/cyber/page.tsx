import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import ScrollReveal from "../../../components/scroll-reveal";

const features = [
  {
    title: "全要素、多领域数据采集",
    desc: "独创硬件层直采技术，支持设备、应用、音视频等全源数据的实时采集，破除 Linux、嵌入式等封闭系统壁垒，实现毫秒级的数据采集。",
  },
  {
    title: "电脑常规流程自动化",
    desc: "通过软件平台开发采集流程，由控制平台远程调度终端集群，精准设置执行频次，实现跨系统数据同步等高重复性任务自动化。",
  },
  {
    title: "流程敏捷开发与智能标注",
    desc: "提供一站式的工业智能业务工具链，包括快速流程编排、控制管理平台、扩展功能插件、业务流程模板库等一系列能力，提升工业智能业务的开发和交付效率。",
  },
];

const advantages = [
  { title: "非侵入", desc: "无需安装任何软件，一插即用。本系统只需存在信号接口即可采集，不影响设备稳定性，不影响设备正常使用。" },
  { title: "智能化", desc: "跨界面高精度采集，采集精度 100%，解放抄录人力，降低抄录错误率，提高设备运转率，降低损耗。" },
  { title: "高并发", desc: "同时支持上千台机器并行工作。" },
  { title: "易上手", desc: "提供积木式低代码流程编排工具，录制式无代码流程编排工具；只需要简单的拖拉拽即可实现流程编排。" },
  { title: "自动化", desc: "模拟人的行为对主机进行控制，实现在不影响用户正常操作的情况下，自动、重复地访问系统中的各功能界面。" },
];

const scenarios = [
  { title: "工业设备", desc: "解决工业设备数据接口不开放、数据卡脖子等问题。" },
  { title: "企业信息系统", desc: "解决企业老旧信息系统交付后维护缺失、开发方退出等问题带来的数据获取难题。" },
  { title: "互联网", desc: "解决互联网场景下数据种类繁多、体量庞大、维度复杂所带来的管理与分析难题。" },
  { title: "政务系统", desc: "解决政务系统层级复杂、数据无法共享、重复填报严重等问题。" },
];

const specs = [
  { label: "采集方式", value: "硬件层直采，无需安装软件，一插即用" },
  { label: "采集精度", value: "100%，毫秒级实时采集" },
  { label: "支持平台", value: "Linux、嵌入式系统、Windows、macOS" },
  { label: "并发能力", value: "单控制台支持上千台终端并行工作" },
  { label: "数据源类型", value: "设备信号、应用程序、音视频、网页等全源数据" },
  { label: "部署方式", value: "私有化部署 / 混合云 / 局域网" },
  { label: "流程编排", value: "积木式低代码 + 录制式无代码双模式" },
  { label: "安全保障", value: "非侵入式架构，不影响目标系统稳定性与安全性" },
];

export default function CyberPage() {
  return (
    <main className="product-detail-page product-cyber">
      <SiteHeader productPage />

      {/* Hero */}
      <section className="pd-hero pd-hero-cyber">
        <div className="pd-hero-content">
          <ScrollReveal>
            <h1>赛博机器人<br /><em>全要素数据采集与流程自动化</em></h1>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              独创硬件层直采技术，破除封闭系统壁垒。从工业设备到政务系统，
              从数据采集到流程自动化——赛博机器人为千行百业提供非侵入、高精度、高并发的智能数据解决方案。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="pd-hero-stats">
              <span><b>100%</b><small>采集精度</small></span>
              <span><b>毫秒级</b><small>实时响应</small></span>
              <span><b>1000+</b><small>并行终端</small></span>
            </div>
          </ScrollReveal>
        </div>
        <div className="pd-hero-visual">
          <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/cyberbot.png" alt="赛博机器人" />
        </div>
      </section>

      {/* Overview */}
      <section className="pd-section">
        <ScrollReveal>
          <h2>非侵入式智能数据引擎<br /><em>一插即用，无缝采集</em></h2>
        </ScrollReveal>
        <div className="pd-overview-grid">
          <ScrollReveal>
            <p>
              赛博机器人是一款面向全行业的智能数据采集与流程自动化产品。
              通过独创的硬件层直采技术，无需在目标设备上安装任何软件，
              只需存在信号接口即可实现毫秒级的高精度数据采集。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              结合积木式低代码流程编排工具，用户可以快速搭建从数据采集、
              自动标注到流程自动化执行的完整业务链路，大幅提升工业智能业务的开发与交付效率。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <h2>产品功能</h2>
        </ScrollReveal>
        <div className="pd-features-grid">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <div className="pd-feature-card">
                <b>{f.title}</b>
                <p>{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="pd-section">
        <ScrollReveal>
          <h2>产品优势</h2>
        </ScrollReveal>
        <div className="pd-features-grid">
          {advantages.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.08}>
              <div className="pd-feature-card">
                <b>{a.title}</b>
                <p>{a.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Scenarios */}
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <h2>使用场景</h2>
        </ScrollReveal>
        <div className="pd-features-grid">
          {scenarios.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="pd-feature-card">
                <b>{s.title}</b>
                <p>{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section className="pd-section">
        <ScrollReveal>
          <h2>技术规格</h2>
        </ScrollReveal>
        <div className="pd-specs-table">
          {specs.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.03}>
              <div className="pd-spec-row">
                <span className="pd-spec-label">{s.label}</span>
                <span className="pd-spec-value">{s.value}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pd-cta pd-cta-cyber">
        <ScrollReveal>
          <b>让每一台设备<br />都成为你的数据资产</b>
        </ScrollReveal>
        <ScrollReveal>
          <p>预约演示，了解赛博机器人如何为你的行业场景赋能。</p>
        </ScrollReveal>
        <ScrollReveal>
          <a className="button" href="mailto:contact@sysoul.ai">
            预约演示 ↗
          </a>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
