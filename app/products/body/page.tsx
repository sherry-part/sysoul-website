import SiteHeader from "../../../components/site-header";
import ScrollReveal from "../../../components/scroll-reveal";

const specs = [
  { label: "自由度", value: "7-DOF 单臂（双臂可选），±0.1mm 重复定位精度" },
  { label: "负载能力", value: "末端 3kg / 5kg（按型号）" },
  { label: "工作半径", value: "700mm / 900mm" },
  { label: "控制核心", value: "XiUOS 实时操作系统，<1ms 控制周期" },
  { label: "关节类型", value: "高扭矩密度无刷电机 + 谐波减速器" },
  { label: "传感器", value: "6 轴力/力矩传感器, 关节编码器 ×7, IMU" },
  { label: "通信接口", value: "EtherCAT 总线, CAN, USB 3.2" },
  { label: "末端接口", value: "标准 ISO 法兰，兼容主流夹爪与工具" },
  { label: "供电", value: "DC 48V，标配 500W 电源模块" },
  { label: "本体重量", value: "约 18kg（单臂 7-DOF 款）" },
  { label: "防护等级", value: "IP54（关节密封，适用工业环境）" },
  { label: "工作温度", value: "0~45°C，5%~85% RH" },
];

const features = [
  {
    title: "XiUOS 小脑级实时控制",
    desc: "搭载 XiUOS 实时操作系统，关节运动控制周期小于 1ms。位置、速度、力矩三种控制模式无缝切换，支持柔顺控制与碰撞检测。",
  },
  {
    title: "联名深度适配",
    desc: "与头部本体厂商联合开发，硬件-驱动-算法三级协同优化。出厂即标定，开箱精度达生产级，无需二次调校。",
  },
  {
    title: "开箱精确定标",
    desc: "每台本体出厂前经过激光干涉仪全工作空间标定，附带标定证书。运动精度可复现，适合对精度有严苛要求的研究与生产场景。",
  },
  {
    title: "大脑-小脑-本体协同",
    desc: "与 Robonix 一体机深度配合。一体机负责感知、决策与技能调度，XiUOS 小脑负责实时运控，形成完整的智能-控制闭环。",
  },
];

const pricing = [
  {
    name: "开源款",
    price: "¥49,800 起",
    desc: "适合高校科研与教学实验",
    specs: ["搭载 XiUOS 小脑", "7-DOF 单臂配置", "基础力控与碰撞检测", "开源 SDK 与示例代码", "社区技术支持"],
  },
  {
    name: "联名款",
    price: "¥89,800 起",
    desc: "适合产业研究与企业部署",
    specs: ["XiUOS 小脑 + 深度适配", "7-DOF 单臂 / 双臂可选", "全空间出厂标定", "高级力控 + 柔顺控制", "优先技术支持 + 1 年质保"],
    featured: true,
  },
  {
    name: "定制方案",
    price: "联系我们",
    desc: "适合特殊场景与量产需求",
    specs: ["本体形态按需定制", "负载与臂展灵活配置", "专用末端工具集成", "驻场调试 + 技能开发服务", "批量采购优惠"],
  },
];

export default function BodyPage() {
  return (
    <main className="product-detail-page product-body">
      <SiteHeader productPage />

      {/* Hero */}
      <section className="pd-hero pd-hero-body">
        <div className="pd-hero-bg">
          <div className="pd-orbit-ring" />
          <div className="pd-body-silhouette" />
          <div className="pd-body-glow" />
        </div>
        <div className="pd-hero-content">
          <ScrollReveal>
            <p className="kicker">THE BODY / 02</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1>联名本体<br /><em>让每一个动作精准可复用</em></h1>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              面向真实物理世界的机器人本体，兼容联名款与搭载 XiUOS 小脑的开源款。
              从教学实验室到生产车间，稳定交付每一次动作。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="pd-hero-stats">
              <span><b>7-DOF</b><small>自由度数</small></span>
              <span><b>±0.1mm</b><small>重复定位精度</small></span>
              <span><b>&lt;1ms</b><small>控制周期</small></span>
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
          <h2>从关节到末端<br /><em>全栈精密控制</em></h2>
        </ScrollReveal>
        <div className="pd-overview-grid">
          <ScrollReveal>
            <p>
              Sysoul 联名本体是与头部厂商深度联合开发的机器人硬件平台。
              有别于买来硬件再做适配的传统路径，我们从电机选型、减速器匹配到驱动固件，
              每一层都为 Robonix 体系做了针对性优化。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              开源款搭载 XiUOS 小脑，全栈开放，原理图与控制协议完全透明——
              这意味着你的研究可以从最底层开始，也可以在我们提供的成熟运控基线上继续搭建。
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
          <h2>核心功能<br /><em>物理世界的可靠伙伴</em></h2>
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
          <h2>产品组成<br /><em>完整交付</em></h2>
        </ScrollReveal>
        <div className="pd-includes-grid">
          {[
            { icon: "◈", label: "机器人本体", detail: "7-DOF 机械臂 ×1（双臂款 ×2）" },
            { icon: "⚙", label: "XiUOS 控制板", detail: "集成实时控制器与 EtherCAT 通信" },
            { icon: "⚡", label: "电源模块", detail: "DC 48V / 500W，含过载保护" },
            { icon: "⊞", label: "标定证书", detail: "激光干涉仪标定，含精度报告" },
            { icon: "↗", label: "连接线缆套件", detail: "EtherCAT 线缆, 电源线, 急停开关" },
            { icon: "◎", label: "SDK & 文档", detail: "C++/Python SDK, 运动控制 API 手册" },
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
          <p className="kicker">WHY SYSOUL BODY</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>为什么选择<br /><em>联名本体</em></h2>
        </ScrollReveal>
        <div className="pd-selling-grid">
          {[
            { b: "出厂即精度", p: "每一台本体都在出厂前完成全工作空间标定，到手即可用于精密操作，无需自行校准。" },
            { b: "开源不设限", p: "开源款的原理图、通信协议、控制接口完全开放。从底层算法到上层应用，每一层都是你的舞台。" },
            { b: "生态无缝衔接", p: "与 Robonix 一体机即连即用，技能市场上数百个预置动作与任务可直接加载运行。" },
            { b: "生产级可靠", p: "IP54 防护、工业级关节密封、经过 2000 小时连续运行测试。不只是实验室玩具。" },
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
          <b>从实验室到生产线<br />让精度说话</b>
        </ScrollReveal>
        <ScrollReveal>
          <p>预约线下体验，亲手感受 7-DOF 联名本体的精准与流畅。</p>
        </ScrollReveal>
        <ScrollReveal>
          <a className="button" href="mailto:contact@sysoul.ai">
            预约体验 ↗
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
