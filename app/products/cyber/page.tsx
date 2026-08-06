import SiteHeader from "../../../components/site-header";
import ScrollReveal from "../../../components/scroll-reveal";

const specs = [
  { label: "仿真引擎", value: "基于 NVIDIA Isaac Sim 的高保真物理仿真" },
  { label: "数字孪生保真度", value: "1:1 物理级还原，误差 <2%" },
  { label: "感控闭环延迟", value: "<5ms（硬件在环模式）" },
  { label: "支持平台", value: "Linux (Ubuntu 22.04+), Docker 容器化部署" },
  { label: "GPU 要求", value: "NVIDIA RTX 3070 及以上，推荐 RTX 4090" },
  { label: "传感器仿真", value: "RGB-D 相机、激光雷达、力/力矩传感器、IMU" },
  { label: "物理材质", value: "支持 PBR 材质、可变形体、流体与粒子" },
  { label: "场景导入", value: "支持 USD、URDF、SDFormat、STEP 等格式" },
  { label: "API 接口", value: "Python SDK + REST API，兼容 OpenAI Gym 接口" },
  { label: "并行实例", value: "单 GPU 最高 16 个并行仿真环境" },
  { label: "录制回放", value: "全状态录制，支持逐帧回放与数据导出" },
  { label: "技能迁移", value: "SIM→REAL 一键部署，支持 domain randomization" },
];

const features = [
  {
    title: "高保真物理仿真",
    desc: "基于 NVIDIA Isaac Sim 引擎，支持刚体动力学、接触摩擦、柔性材料与流体仿真的高精度还原。物理行为与真实世界高度一致。",
  },
  {
    title: "数字孪生环境",
    desc: "1:1 还原真实场景——工厂车间、实验室、仓库，或任何你需要的环境。在虚拟世界里构建完整的测试场。",
  },
  {
    title: "硬件在环 (HIL)",
    desc: "赛博机器人通过 <5ms 感控闭环与真实一体机联动。算法在仿真中运行，指令发送到真实控制板——虚实结合的终极方案。",
  },
  {
    title: "SIM→REAL 一键部署",
    desc: "在仿真中验证通过的技能，一键推送到真实本体。内置 domain randomization 与 sim-to-real 迁移策略，真实环境成功率 >95%。",
  },
];

const pricing = [
  {
    name: "社区版",
    price: "免费",
    desc: "适合个人学习与开源项目",
    specs: ["基础仿真环境与 10 个预置场景", "Python SDK + CLI 工具", "社区论坛支持", "单 GPU 最多 4 个并行实例", "SIM→REAL 基础迁移工具"],
  },
  {
    name: "专业版",
    price: "¥29,800 / 年",
    desc: "适合科研团队与企业研发",
    specs: ["完整场景库（50+ 工业与家庭场景）", "硬件在环 (HIL) 功能", "高级 domain randomization", "单 GPU 16 个并行实例", "优先技术支持 + 季度更新"],
    featured: true,
  },
  {
    name: "企业版",
    price: "联系我们",
    desc: "适合大型研发团队与产线验证",
    specs: ["不限并行实例（集群扩展）", "专属场景定制服务", "私有化部署 + 数据安全", "驻场集成 + 培训服务", "7×24 企业级 SLA"],
  },
];

export default function CyberPage() {
  return (
    <main className="product-detail-page product-cyber">
      <SiteHeader productPage />

      {/* Hero */}
      <section className="pd-hero pd-hero-cyber">
        <div className="pd-hero-bg">
          <div className="pd-cyber-grid" />
          <div className="pd-cyber-scan" />
        </div>
        <div className="pd-hero-content">
          <ScrollReveal>
            <p className="kicker">THE CYBER / 03</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1>赛博机器人<br /><em>在虚拟世界先行一万步</em></h1>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              感控一体的数字孪生平台。每一个想法，都可以先在虚拟世界里被验证、
              优化、再推向物理世界——降低试错成本，加速技能迭代。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="pd-hero-stats">
              <span><b>1:1</b><small>数字孪生保真度</small></span>
              <span><b>&lt;5ms</b><small>感控闭环延迟</small></span>
              <span><b>95%+</b><small>真实迁移成功率</small></span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="pd-section">
        <ScrollReveal>
          <p className="kicker">OVERVIEW</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>在仿真中试错<br /><em>在现实中成功</em></h2>
        </ScrollReveal>
        <div className="pd-overview-grid">
          <ScrollReveal>
            <p>
              机器人开发最大的成本不是硬件，而是试错。每一次算法迭代，如果都依赖真实硬件验证，
              时间和损耗将成倍增长。赛博机器人把试错搬到虚拟世界——
              你可以在这里运行成千上万次实验，只把最好的那一个部署到真实世界。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              更重要的是，它不只是仿真。通过硬件在环技术，赛博机器人可以与真实一体机、
              真实控制板协同工作——你的算法跑在虚拟环境，但发出的指令可以直接驱动真实电机。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <p className="kicker">CORE FEATURES</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>核心功能<br /><em>虚拟世界的超级能力</em></h2>
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

      {/* What's Included */}
      <section className="pd-section">
        <ScrollReveal>
          <p className="kicker">WHAT'S INCLUDED</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>产品组成<br /><em>完整工具链</em></h2>
        </ScrollReveal>
        <div className="pd-includes-grid">
          {[
            { icon: "◈", label: "仿真引擎", detail: "NVIDIA Isaac Sim 定制版" },
            { icon: "⟐", label: "场景库", detail: "50+ 预置工业与家居场景" },
            { icon: "⊞", label: "Python SDK", detail: "完整仿真控制与数据采集 API" },
            { icon: "↗", label: "SIM→REAL 桥接器", detail: "一键部署技能到真实本体" },
            { icon: "⎔", label: "HIL 套件", detail: "硬件在环通信接口与驱动" },
            { icon: "◎", label: "CLI 工具", detail: "命令行管理仿真任务与集群" },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.06}>
              <div className="pd-include-item">
                <span className="pd-include-icon">{item.icon}</span>
                <b>{item.label}</b>
                <small>{item.detail}</small>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <p className="kicker">TECHNICAL SPECS</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>技术规格<br /><em>一览</em></h2>
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

      {/* Pricing */}
      <section className="pd-section">
        <ScrollReveal>
          <p className="kicker">PRICING</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>价格方案<br /><em>按需选择</em></h2>
        </ScrollReveal>
        <div className="pd-pricing-grid">
          {pricing.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.1}>
              <div className={`pd-price-card${p.featured ? " featured" : ""}`}>
                {p.featured && <span className="pd-price-badge">推荐</span>}
                <b className="pd-price-name">{p.name}</b>
                <div className="pd-price-amount">{p.price}</div>
                <small className="pd-price-desc">{p.desc}</small>
                <ul className="pd-price-specs">
                  {p.specs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <a className="pd-price-cta" href="mailto:contact@sysoul.ai">
                  {p.featured ? "立即咨询 →" : "了解详情 →"}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Selling Points */}
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <p className="kicker">WHY CYBER ROBOT</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>为什么选择<br /><em>赛博机器人</em></h2>
        </ScrollReveal>
        <div className="pd-selling-grid">
          {[
            { b: "零成本试错", p: "在仿真中运行 10,000 次实验的成本接近于零。把最好的结果带到物理世界，告别反复撞墙的开发模式。" },
            { b: "虚实无缝衔接", p: "硬件在环技术让仿真与真实设备协同工作。算法验证通过的那一刻，就是部署完成的时刻。" },
            { b: "规模化并行", p: "单 GPU 最多 16 个并行环境，集群模式下无上限。强化学习、参数搜索、多场景测试——通通并行加速。" },
            { b: "数据资产沉淀", p: "每一次仿真实验的数据都被完整记录。你的经验不会丢失，而是持续积累为团队的数字资产。" },
          ].map((sp, i) => (
            <ScrollReveal key={sp.b} delay={i * 0.1}>
              <div className="pd-selling-item">
                <span className="pd-selling-num">{`0${i + 1}`}</span>
                <b>{sp.b}</b>
                <p>{sp.p}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pd-cta pd-cta-cyber">
        <ScrollReveal>
          <b>从今天开始<br />让试错发生在虚拟世界</b>
        </ScrollReveal>
        <ScrollReveal>
          <p>社区版免费使用。下载 SDK，5 分钟内运行你的第一个仿真场景。</p>
        </ScrollReveal>
        <ScrollReveal>
          <a className="button" href="https://robonix.syswonder.org/" target="_blank" rel="noreferrer">
            免费开始使用 ↗
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
