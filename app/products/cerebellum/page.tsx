import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import ScrollReveal from "../../../components/scroll-reveal";

const features = [
  {
    title: "硬实时调度",
    desc: "基于 XiUOS 实时内核，提供微秒级中断响应和确定性调度，确保运动控制指令在严格时间窗口内执行，满足工业级实时性要求。",
  },
  {
    title: "多轴联动控制",
    desc: "支持 7-DOF 全空间多轴联动，内置轨迹规划、速度前瞻与实时插补算法，实现平滑、高精度的复杂运动轨迹控制。",
  },
  {
    title: "力控柔顺",
    desc: "集成力位混合控制算法，支持阻抗控制与导纳控制模式，使机器人能够在接触作业中感知并自适应外部力，确保操作安全与柔顺。",
  },
];

const advantages = [
  { title: "自主可控", desc: "从底层驱动到上层运控全部自主研发，不依赖外部闭源组件，源代码可审计、可定制。" },
  { title: "模块化架构", desc: "算法库采用模块化设计，各模块可独立替换、组合与扩展，适应不同机器人形态与应用场景。" },
  { title: "多协议兼容", desc: "支持 EtherCAT、CANopen、Modbus 等主流工业总线协议，兼容主流伺服驱动器与传感器。" },
  { title: "双 OS 协同", desc: "与 Robonix 具身智能 OS 原生集成，上承任务规划与技能编排，下接底层硬件实时控制。" },
  { title: "跨平台 SDK", desc: "提供 C/Python SDK，支持 ROS2 与 Robonix 技能框架，降低开发与集成门槛。" },
];

const specs = [
  { label: "控制周期", value: "≤ 1ms，支持硬实时确定性调度" },
  { label: "自由度", value: "7-DOF 全空间支持，可扩展至更高自由度" },
  { label: "轨迹规划", value: "S 型/T 型速度曲线、速度前瞻、实时插补" },
  { label: "力控模式", value: "阻抗控制 · 导纳控制 · 力位混合控制" },
  { label: "总线协议", value: "EtherCAT、CANopen、Modbus TCP/RTU" },
  { label: "SDK", value: "C / Python，ROS2 + Robonix 技能框架集成" },
  { label: "驱动兼容", value: "兼容主流伺服驱动器（松下、三菱、台达、汇川等）" },
  { label: "部署平台", value: "希秀智脑 · 嵌入式工控机 · ARM / x86 边缘设备" },
];

export default function CerebellumPage() {
  return (
    <main className="product-detail-page product-cerebellum">
      <SiteHeader />

      {/* Hero */}
      <section className="pd-hero pd-hero-cerebellum">
        <div className="pd-hero-content">
          <ScrollReveal>
            <span className="brain-label">小脑</span>
          </ScrollReveal>
          <ScrollReveal>
            <h1>运控算法<br /><em>自主研发的实时运动控制</em></h1>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              基于 XiUOS 小脑架构，从底层驱动到上层运控全部自主可控。
              为工业机器人与协作机器人提供毫秒级精密运动控制能力，
              让每一个关节精准到位、每一次接触柔顺可控。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="pd-hero-stats">
              <span><b>&lt;1ms</b><small>控制周期</small></span>
              <span><b>7-DOF</b><small>全空间支持</small></span>
              <span><b>100%</b><small>自主可控</small></span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Features */}
      <section className="pd-section">
        <ScrollReveal>
          <h2>三大核心能力<br /><em>精密 · 实时 · 柔顺</em></h2>
        </ScrollReveal>
        <div className="pd-overview-grid">
          {features.map((f) => (
            <ScrollReveal key={f.title}>
              <div className="pd-feature-card">
                <b>{f.title}</b>
                <p>{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <h2>为什么选择我们的运控方案<br /><em>从芯片到算法的全栈自主</em></h2>
        </ScrollReveal>
        <div className="pd-advantages-grid">
          {advantages.map((a) => (
            <ScrollReveal key={a.title}>
              <div className="pd-adv-item">
                <b>{a.title}</b>
                <p>{a.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="pd-section">
        <ScrollReveal>
          <h2>XiUOS 小脑 + Robonix 大脑<br /><em>双 OS 协同，精密闭环</em></h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="section-intro" style={{ maxWidth: 640, margin: "0 auto 48px", textAlign: "center" }}>
            XiUOS 作为&ldquo;小脑&rdquo;负责底层硬实时控制，Robonix 作为&ldquo;大脑&rdquo;负责上层任务编排。
            二者通过标准化接口紧密协同，构成从&ldquo;任务指令&rdquo;到&ldquo;关节运动&rdquo;的完整闭环。
          </p>
        </ScrollReveal>
        <div className="pd-dual-grid">
          <ScrollReveal>
            <div className="pd-dual-card">
              <div className="pd-dual-icon">⟐</div>
              <b>XiUOS 小脑</b>
              <small>硬实时内核</small>
              <p>确定性调度 · 微秒级中断响应 · EtherCAT/CANopen 原生支持 · 安全 SIL 认证 · 低功耗可裁剪</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="pd-dual-card">
              <div className="pd-dual-icon">◈</div>
              <b>Robonix 大脑</b>
              <small>具身智能操作系统</small>
              <p>任务编排 · 技能管理 · 模型推理 · 多模态感知 · 设备抽象 · 云端协同</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Specs */}
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <h2>技术规格<br /><em>全栈自主，开放兼容</em></h2>
        </ScrollReveal>
        <div className="pd-specs-grid">
          {specs.map((s) => (
            <ScrollReveal key={s.label}>
              <div className="pd-spec-item">
                <span className="pd-spec-label">{s.label}</span>
                <span className="pd-spec-value">{s.value}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Co-branded Products */}
      <section className="pd-section">
        <ScrollReveal>
          <h2>社区联名款开源具身智能产品<br /><em><span style={{ color: "#68e1ff" }}>大脑由 Robonix OS 驱动</span> · <span style={{ color: "#a78bfa" }}>小脑由 XiUOS 驱动</span></em></h2>
        </ScrollReveal>

        <div className="cobrand-list">
          {/* Panel 1 — 节卡-矽璓 移动机器人 */}
          <ScrollReveal>
            <div className="cobrand-panel">
              <div className="cobrand-img">
                <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/jaka.png" alt="" className="cobrand-img-el" />
              </div>
              <div className="cobrand-text">
                <span className="cobrand-tag">节卡-矽璓</span>
                <b>移动机器人</b>
                <p>依托社区 Robonix 具身操作系统，与节卡联合研发的移动机器人，适配餐饮、新零售等服务场景，兼顾轻量数采、AI 模型训练需求，打通商用落地与科研实训双赛道。</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Panel 2 — 云深处-矽璓 四足狗 */}
          <ScrollReveal>
            <div className="cobrand-panel cobrand-panel--reverse">
              <div className="cobrand-text">
                <span className="cobrand-tag">云深处-矽璓</span>
                <b>四足狗</b>
                <p>依托社区 Robonix 具身操作系统，与云深处联合研发的四足狗，具备环境感知与运动控制能力，可运行各类运动控制技能，运动性能优异、环境适应性突出。</p>
              </div>
              <div className="cobrand-img">
                <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/lite3.png" alt="" className="cobrand-img-el" />
              </div>
            </div>
          </ScrollReveal>

          {/* Panel 3 — 汉特云-矽璓 服务机器人 */}
          <ScrollReveal>
            <div className="cobrand-panel">
              <div className="cobrand-img">
                <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/hantewin.png" alt="" className="cobrand-img-el cobrand-img-el--lg" />
              </div>
              <div className="cobrand-text">
                <span className="cobrand-tag">汉特云-矽璓</span>
                <b>服务机器人</b>
                <p>依托社区 Robonix 具身操作系统，与汉特云联合研发的服务机器人，具备自主导航避障、对接电梯门禁，适配室内外物流配送实景应用。</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Panel 4 — Robonix-D1 灵巧手 */}
          <ScrollReveal>
            <div className="cobrand-panel cobrand-panel--reverse">
              <div className="cobrand-text">
                <span className="cobrand-tag">Robonix-D1</span>
                <b>灵巧手</b>
                <p>依托社区 Robonix 具身操作系统，与智在无界联合研发的机械臂、灵巧手，搭载通用人形机器人大模型，泛化能力强、灵巧操作表现突出。</p>
              </div>
              <div className="cobrand-img">
                <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/d1.png" alt="" className="cobrand-img-el cobrand-img-el--lg" />
              </div>
            </div>
          </ScrollReveal>

          {/* Panel 5 — 松灵-矽璓 机械臂 */}
          <ScrollReveal>
            <div className="cobrand-panel">
              <div className="cobrand-img">
                <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/piper.png" alt="" className="cobrand-img-el cobrand-img-el--lg" />
              </div>
              <div className="cobrand-text">
                <span className="cobrand-tag">松灵-矽璓</span>
                <b>机械臂</b>
                <p>依托社区 Robonix 具身操作系统，与松灵联合研发的具身机械臂，结合开放式机器人智脑与国产软件系统，支持目标定位、任务编排和应用扩展。</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
