import SiteHeader from "../../../components/site-header";
import ScrollReveal from "../../../components/scroll-reveal";

const specs = [
  { label: "处理器", value: "高性能 ARM 架构 SoC，8 核 2.4GHz" },
  { label: "AI 算力", value: "最高 32 TOPS (INT8)，支持多模型并行推理" },
  { label: "内存", value: "16GB / 32GB LPDDR5" },
  { label: "存储", value: "256GB / 512GB NVMe SSD" },
  { label: "操作系统", value: "Robonix (基于 Linux 实时内核)" },
  { label: "通信接口", value: "千兆以太网 ×2, Wi-Fi 6, BLE 5.2, CAN, RS-485" },
  { label: "USB 接口", value: "USB 3.2 ×4, USB-C (DP+PD) ×1" },
  { label: "视频输出", value: "HDMI 2.1 ×1, 支持 4K@60fps" },
  { label: "尺寸", value: "210 × 140 × 55mm" },
  { label: "重量", value: "约 1.4kg" },
  { label: "功耗", value: "典型 15W，最大 45W" },
  { label: "散热", value: "被动散热（无风扇静音设计）" },
];

const features = [
  {
    title: "Robonix 原生集成",
    desc: "出厂预装 Robonix 操作系统，开箱即用。内核级优化确保计算、控制与技能调度的高效协同，无需额外适配。",
  },
  {
    title: "多模型并行推理",
    desc: "支持同时运行视觉、语言、策略等多个 AI 模型，智能分配算力资源，确保实时响应与高吞吐。",
  },
  {
    title: "技能市场一键部署",
    desc: "从 Robonix 技能市场浏览、下载社区技能，一键部署到一体机，机器人能力即刻升级。",
  },
  {
    title: "设备即平台",
    desc: "不只是一台机器——它是整个机器人技能生态的入口。连接任意本体、模型与传感器，打通从开发到部署的全链路。",
  },
];

const pricing = [
  {
    name: "标准版",
    price: "¥19,800",
    desc: "适合教学实验与个人开发",
    specs: ["16GB 内存 / 256GB 存储", "16 TOPS AI 算力", "基础技能包（10 个预置技能）", "社区支持"],
  },
  {
    name: "专业版",
    price: "¥39,800",
    desc: "适合科研团队与企业 PoC",
    specs: ["32GB 内存 / 512GB 存储", "32 TOPS AI 算力", "高级技能包（30 个预置技能）", "优先技术支持 + SLA"],
    featured: true,
  },
  {
    name: "定制版",
    price: "联系我们",
    desc: "适合规模化产线部署",
    specs: ["硬件配置按需定制", "算力扩展至 100+ TOPS", "专属技能开发服务", "7×24 企业级支持 + 驻场服务"],
  },
];

export default function AllinonePage() {
  return (
    <main className="product-detail-page product-allinone">
      <SiteHeader productPage />

      {/* Hero */}
      <section className="pd-hero pd-hero-allinone">
        <div className="pd-hero-bg">
          <div className="pd-orbit-ring" />
          <div className="pd-orbit-ring" />
          <div className="pd-core-glow" />
        </div>
        <div className="pd-hero-content">
          <ScrollReveal>
            <p className="kicker">THE BRAIN / 01</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1>一体机<br /><em>智脑盒子</em></h1>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              具身智能时代的通用计算终端。集算力、系统与技能于一身，
              为任意形态机器人提供开箱即用的智能大脑。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="pd-hero-stats">
              <span><b>32 TOPS</b><small>AI 算力</small></span>
              <span><b>3×</b><small>更快部署</small></span>
              <span><b>0</b><small>额外适配</small></span>
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
          <h2>一台机器<br /><em>就是一支工程团队</em></h2>
        </ScrollReveal>
        <div className="pd-overview-grid">
          <ScrollReveal>
            <p>
              传统机器人开发需要在算力选型、驱动适配、系统集成上耗费数月的工程资源。
              Sysoul 一体机将计算、控制与技能基础设施深度整合，让开发者把精力放回真正重要的事——创造技能。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              从环境搭建到第一个技能运行，只需要 5 分钟。一体机预装了 Robonix 操作系统、
              常用 AI 模型运行时与调试工具链，连接本体即可开始开发。
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
          <h2>核心功能<br /><em>为机器人而生</em></h2>
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

      {/* What's in the box */}
      <section className="pd-section">
        <ScrollReveal>
          <p className="kicker">WHAT'S INCLUDED</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>产品组成<br /><em>所见即所得</em></h2>
        </ScrollReveal>
        <div className="pd-includes-grid">
          {[
            { icon: "◈", label: "智脑盒子主机", detail: "一体机核心计算单元" },
            { icon: "⚡", label: "电源适配器", detail: "65W GaN 快充，全球电压适配" },
            { icon: "↗", label: "Robonix 系统 U 盘", detail: "预装系统镜像与恢复工具" },
            { icon: "⊞", label: "快速入门手册", detail: "中英双语，5 分钟上手" },
            { icon: "⎔", label: "连接线缆套件", detail: "以太网线 ×1, USB-C 数据线 ×2" },
            { icon: "◎", label: "壁挂支架", detail: "VESA 标准，支持多种安装方式" },
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
          <p className="kicker">WHY ALL-IN-ONE</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>为什么选择<br /><em>智脑盒子</em></h2>
        </ScrollReveal>
        <div className="pd-selling-grid">
          {[
            { b: "即插即用", p: "不需要三个月适配硬件，不需要纠结算力选型。拆箱、通电、开始开发——就这么简单。" },
            { b: "持续进化", p: "系统 OTA 自动更新，技能市场持续上新。你的一体机不会过时，只会越来越强。" },
            { b: "开放无锁定", p: "不绑定特定本体、不锁定特定模型。标准 API 与开放协议，你的成果永远属于你。" },
            { b: "社区驱动", p: "接入 Robonix 开发者社区，数千个预置技能和模型自由选用，站在巨人的肩膀上。" },
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
      <section className="pd-cta">
        <ScrollReveal>
          <b>给你的机器人<br />一颗会思考的大脑</b>
        </ScrollReveal>
        <ScrollReveal>
          <p>联系我们的产品团队，获取一对一演示与定制方案。</p>
        </ScrollReveal>
        <ScrollReveal>
          <a className="button" href="mailto:contact@sysoul.ai">
            预约演示 ↗
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
