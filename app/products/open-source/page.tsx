import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import ScrollReveal from "../../../components/scroll-reveal";

const specs = [
  { label: "自由度", value: "7-DOF 单臂（双臂可选），±0.2mm 重复定位精度" },
  { label: "负载能力", value: "末端 3kg / 5kg（按型号）" },
  { label: "工作半径", value: "700mm / 900mm" },
  { label: "控制核心", value: "XiUOS 实时操作系统（完全开源），<1ms 控制周期" },
  { label: "关节类型", value: "高扭矩密度无刷电机 + 谐波减速器" },
  { label: "传感器", value: "6 轴力/力矩传感器, 关节编码器 ×7, IMU" },
  { label: "通信接口", value: "EtherCAT 总线, CAN, USB 3.2" },
  { label: "末端接口", value: "标准 ISO 法兰，兼容主流夹爪与工具" },
  { label: "供电", value: "DC 48V，标配 500W 电源模块" },
  { label: "本体重量", value: "约 18kg（单臂 7-DOF 款）" },
  { label: "开放资源", value: "原理图、PCB 设计文件、控制协议、固件源码" },
  { label: "社区支持", value: "GitHub Issues + Syswonder 开发者论坛" },
];

const features = [
  {
    title: "全栈开源，无黑盒",
    desc: "从机械原理图、PCB 设计文件到 XiUOS 内核源码与控制协议，全部在 GitHub 开源。你可以从最底层理解每一个字节、每一毫秒的运动指令。",
  },
  {
    title: "XiUOS 小脑原生集成",
    desc: "出厂搭载 XiUOS 实时操作系统，关节运动控制周期小于 1ms。支持位置、速度、力矩三种控制模式，源码可自由修改与重新编译。",
  },
  {
    title: "从底层构建专属方案",
    desc: "不需要被厂商锁定——原理图全透明意味着你可以自行修改结构、更换传感器、定制末端工具，打造完全属于你的机器人平台。",
  },
  {
    title: "研究与教学首选",
    desc: "每一行代码、每一个参数都可追溯、可复现。适合发表论文、课程实验与算法验证。多所高校已将开源款纳入具身智能实训课程。",
  },
];

const pricing = [
  {
    name: "基础套件",
    price: "¥49,800",
    desc: "适合个人开发者与教学实验",
    specs: ["7-DOF 单臂本体 ×1", "XiUOS 控制板 ×1", "开源 SDK + 原理图", "社区技术支持", "GitHub 仓库访问"],
  },
  {
    name: "研究套件",
    price: "¥69,800",
    desc: "适合高校科研与算法验证",
    specs: ["7-DOF 单臂本体 ×1", "XiUOS 控制板 + 调试工具包", "全量开源设计文件", "优先技术支持 + 1 年质保", "论文复现支持"],
    featured: true,
  },
  {
    name: "定制方案",
    price: "联系我们",
    desc: "适合特殊课题与量产需求",
    specs: ["本体形态按需定制", "传感器与末端工具自由选配", "专属固件定制服务", "驻场调试 + 培训服务", "批量采购优惠"],
  },
];

export default function OpenSourcePage() {
  return (
    <main className="product-detail-page product-body">
      <SiteHeader productPage />

      {/* Hero */}
      <section className="pd-hero pd-hero-body"><div className="pd-hero-content">
          <ScrollReveal>
            <h1>开源本体<br /><em>全栈开放，从底层构建</em></h1>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              搭载 XiUOS 小脑的开源机器人本体。原理图、控制协议、固件源码全部开放——
              为研究者、教育者与独立开发者提供完全透明的机器人平台。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="pd-hero-stats">
              <span><b>100%</b><small>开源可审计</small></span>
              <span><b>7-DOF</b><small>自由度数</small></span>
              <span><b>&lt;1ms</b><small>控制周期</small></span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="pd-section">
        <ScrollReveal>
          <h2>不被锁定的自由<br /><em>每一层都是你的舞台</em></h2>
        </ScrollReveal>
        <div className="pd-overview-grid">
          <ScrollReveal>
            <p>
              传统的机器人本体采购像在开盲盒——你不知道电机驱动器里的参数是怎么调的，
              通信协议是闭源的，改一个关节的控制逻辑可能需要和厂商来回拉扯数周。
              开源款本体把这一切都摊开：从机械图纸到每一行控制代码，你拥有完整的知情权与修改权。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              搭载 XiUOS 小脑作为实时控制内核，你可以基于开源的运控基线继续搭建上层算法，
              也可以从底层重写——所有工具链都为你准备就绪。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <h2>核心特性<br /><em>开源的力量</em></h2>
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
          <h2>产品组成<br /><em>完整交付</em></h2>
        </ScrollReveal>
        <div className="pd-includes-grid">
          {[
            { icon: "◈", label: "机器人本体", detail: "7-DOF 机械臂 ×1" },
            { icon: "⚙", label: "XiUOS 控制板", detail: "开源实时控制器 + EtherCAT" },
            { icon: "⚡", label: "电源模块", detail: "DC 48V / 500W，含过载保护" },
            { icon: "⊞", label: "完整设计文件", detail: "原理图、PCB、BOM 清单、3D 模型" },
            { icon: "↗", label: "开源代码仓库", detail: "控制协议、固件、SDK 全部开源" },
            { icon: "◎", label: "调试工具包", detail: "JTAG 调试器 + 逻辑分析仪接口" },
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
          <h2>为什么选择<br /><em>开源本体</em></h2>
        </ScrollReveal>
        <div className="pd-selling-grid">
          {[
            { b: "完全透明", p: "每一个设计决策都可以被审计。论文复现不需要猜测硬件行为——直接读源码和原理图就行。" },
            { b: "自由定制", p: "标准 ISO 法兰 + 全开源设计意味着你可以自由更换末端工具、传感器甚至整个关节模组。" },
            { b: "社区共创", p: "GitHub 上全球开发者持续贡献改进——从运动规划新算法到更优的 PID 参数，你都能直接获取。" },
            { b: "教学利器", p: "从底层 OS 到上层技能，完整开源栈让学生真正理解机器人系统的每一层。多所高校已用于具身智能课程。" },
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
          <b>不只是一个本体<br />是一整套开源知识体系</b>
        </ScrollReveal>
        <ScrollReveal>
          <p>访问 GitHub 仓库，查看完整设计文件与源代码。</p>
        </ScrollReveal>
        <ScrollReveal>
          <a className="button" href="mailto:contact@sysoul.ai">
            预约体验 ↗
          </a>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
