import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import ScrollReveal from "../../../components/scroll-reveal";

const highlights = [
  { b: "自主导航", p: "激光 SLAM + 视觉融合定位，动态避障，复杂室内环境自主通行。" },
  { b: "多机调度", p: "支持 20+ 台机器人协同调度，智能路径规划，避免拥堵与死锁。" },
  { b: "智能交互", p: "语音播报 + 触屏操作 + 手机扫码，多种取件方式覆盖全场景需求。" },
];

const scenarios = [
  { title: "写字楼配送", desc: "快递员将包裹交付前台机器人，机器人自主乘梯、按楼层依次送达工位，全程无需人员陪同。" },
  { title: "医院送药", desc: "药房配药后由机器人运送至各科室，支持温控箱体，保障药品运输安全。交接记录自动上传 HIS 系统。" },
  { title: "酒店服务", desc: "客人通过房间电话或小程序下单，机器人自动从服务台取物送至客房门口，提升服务效率与隐私体验。" },
];

const specs = [
  { label: "导航方式", value: "激光 SLAM + 视觉融合，支持无标记自主导航" },
  { label: "续航能力", value: "8—12 小时连续运行，支持自动回充" },
  { label: "载重", value: "标准 30kg，可定制 50kg+" },
  { label: "通信", value: "4G/5G + Wi-Fi 6，支持电梯与门禁物联网对接" },
  { label: "操作系统", value: "Robonix 具身智能操作系统" },
  { label: "调度平台", value: "云端多机监控 + 数据看板 + 远程接管" },
];

export default function DeliveryRobotPage() {
  return (
    <main className="solutions-page solutions-case">
      <SiteHeader />

      {/* Hero */}
      <section className="res-hero" style={{ background: "radial-gradient(circle at 60% 40%, #1a3050, #06080f 58%)" }}>
        <ScrollReveal>
          <h1>
            智能取送机器人
            <br />
            <em>打通最后一百米</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            基于 Robonix 具身智能操作系统，为写字楼、医院、酒店等场景提供
            安全、高效、可扩展的自主取送解决方案。从包裹到药品、从文件到餐食，
            让每一次送达都精准无差错。
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="pd-hero-stats" style={{ marginTop: 32 }}>
            <span><b>20+</b><small>多机并跑</small></span>
            <span><b>±2cm</b><small>停靠精度</small></span>
            <span><b>99.7%</b><small>送达成功率</small></span>
          </div>
        </ScrollReveal>
      </section>

      {/* Overview */}
      <section className="pd-section">
        <ScrollReveal>
          <h2>不只是运输<br /><em>是端到端的智能物流闭环</em></h2>
        </ScrollReveal>
        <div className="pd-overview-grid">
          <ScrollReveal>
            <p>
              智能取送机器人搭载 Robonix 操作系统，通过技能编排引擎将导航、乘梯、
              门禁、语音交互等能力统一调度，实现跨楼层的全自主配送。相比传统 AGV，
              无需铺设磁条或二维码，部署周期从数周缩短至一天。
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              后台调度系统实时监控每台机器的位置、电量与任务状态，支持远程接管与
              异常告警。管理人员通过手机或电脑即可掌握全局，大幅降低人力投入。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <h2>核心能力<br /><em>三足鼎立</em></h2>
        </ScrollReveal>
        <div className="pd-features-grid">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.b} delay={i * 0.1}>
              <div className="pd-feature-card">
                <b>{h.b}</b>
                <p>{h.p}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Scenarios */}
      <section className="pd-section">
        <ScrollReveal>
          <h2>应用场景<br /><em>千行百业，一机通送</em></h2>
        </ScrollReveal>
        <div className="pd-features-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
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
      <section className="pd-section pd-section-alt">
        <ScrollReveal>
          <h2>技术规格<br /><em>稳定可靠 · 安全第一</em></h2>
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
      <section className="pd-cta">
        <ScrollReveal>
          <b>让机器人为你跑腿<br />把时间还给更重要的事</b>
        </ScrollReveal>
        <ScrollReveal>
          <p>联系我们，获取定制化取送方案与现场演示。</p>
        </ScrollReveal>
        <ScrollReveal>
          <a className="button" href="mailto:contact@sysoul.ai">预约演示 ↗</a>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
