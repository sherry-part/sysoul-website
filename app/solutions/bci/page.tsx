import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import ScrollReveal from "../../../components/scroll-reveal";

const capabilities = [
  {
    title: "高精度信号采集",
    desc: "多通道、高采样率 EEG 信号采集系统，支持干/湿电极混合方案，信噪比达临床级标准，适配不同场景的佩戴需求。",
  },
  {
    title: "实时意图解码",
    desc: "基于深度学习的脑电信号解码算法，毫秒级识别运动想象、稳态视觉诱发电位与 P300 等多种范式，准确率持续提升。",
  },
  {
    title: "自适应校准",
    desc: "个性化校准流程缩短至 2 分钟内，系统自动学习用户脑电特征，随使用次数增加持续优化识别精度。",
  },
];

const applications = [
  {
    title: "康复训练",
    desc: "脑机接口驱动外骨骼与康复机械臂，通过运动想象激发神经可塑性，帮助卒中患者重建运动功能。实时反馈提升训练依从性与效果。",
  },
  {
    title: "辅助交互",
    desc: "为重度运动障碍人群提供意念控制轮椅、文字输入与环境控制能力，让&ldquo;意念驱动&rdquo;成为日常生活的可靠助手。",
  },
  {
    title: "人机协同",
    desc: "在工业高危场景中，操作员通过脑机接口远程操控机械臂完成精密作业，融合力反馈与视觉增强，实现&ldquo;所见即所动&rdquo;。",
  },
];

const specs = [
  { label: "信号通道", value: "8 / 16 / 32 通道可选，最高支持 64 通道" },
  { label: "采样率", value: "250Hz — 1kHz 可调" },
  { label: "电极类型", value: "干电极 / 湿电极混合方案，兼容 Ag/AgCl" },
  { label: "通信方式", value: "低功耗蓝牙 5.2 + Wi-Fi 双模" },
  { label: "解码延迟", value: "≤ 50ms 端到端推理延迟" },
  { label: "操作系统", value: "Robonix 具身智能操作系统 + 专用 BCI 中间件" },
  { label: "续航", value: "8 小时连续采集，支持 USB-C 快充" },
  { label: "适配机器人", value: "机械臂 · 外骨骼 · 移动底盘 · 灵巧手" },
];

export default function BCIPage() {
  return (
    <main className="solutions-page solutions-case">
      <SiteHeader />

      {/* Hero */}
      <section className="res-hero" style={{ background: "radial-gradient(circle at 40% 30%, #2a1650, #06080f 58%)" }}>
        <ScrollReveal>
          <h1>
            脑机交互
            <br />
            <em>从意念到行动的桥梁</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            将脑机接口技术与具身智能操作系统深度融合，让人的意图直接驱动
            机器人执行动作。从康复医疗到辅助交互，从科研验证到产业应用，
            以&ldquo;意念&rdquo;重新定义人机协作的边界。
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="pd-hero-stats" style={{ marginTop: 32 }}>
            <span><b>&lt;50ms</b><small>解码延迟</small></span>
            <span><b>32ch</b><small>信号通道</small></span>
            <span><b>≥95%</b><small>识别准确率</small></span>
          </div>
        </ScrollReveal>
      </section>

      {/* Overview */}
      <section className="pd-section">
        <ScrollReveal>
          <h2>意念驱动<br /><em>让机器人听懂你的大脑</em></h2>
        </ScrollReveal>
        <div className="pd-overview-grid">
          <ScrollReveal>
            <p>
              脑机交互系统通过 Robonix 技能框架将 EEG 信号处理、意图解码和
              机器人控制串联成完整通路。用户佩戴轻量级脑电采集设备，系统实时
              解析运动意图，将解码结果转化为机器人 Primitive 指令，驱动机械臂、
              外骨骼或移动底盘执行相应动作。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              整套系统已打通&ldquo;信号采集 → 意图解码 → 技能调度 → 动作执行&rdquo;
              的完整链路，支持离线本地推理与云端协处理两种部署模式，可灵活适配
              医院、实验室、家庭等多种使用环境。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <h2>核心技术<br /><em>三项突破</em></h2>
        </ScrollReveal>
        <div className="pd-features-grid">
          {capabilities.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <div className="pd-feature-card">
                <b>{c.title}</b>
                <p>{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="pd-section">
        <ScrollReveal>
          <h2>应用方向<br /><em>从实验室到日常生活</em></h2>
        </ScrollReveal>
        <div className="pd-features-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {applications.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.1}>
              <div className="pd-feature-card">
                <b>{a.title}</b>
                <p>{a.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <h2>技术规格<br /><em>精密可靠</em></h2>
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
          <b>让意念成为<br />最自然的交互方式</b>
        </ScrollReveal>
        <ScrollReveal>
          <p>探索脑机交互在您的场景中的可能性，与我们开启合作。</p>
        </ScrollReveal>
        <ScrollReveal>
          <a className="button" href="mailto:contact@sysoul.ai">联系我们 ↗</a>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
