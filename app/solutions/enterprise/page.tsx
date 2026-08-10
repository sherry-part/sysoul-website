import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import ScrollReveal from "../../../components/scroll-reveal";

const industries = [
  {
    icon: "◈",
    title: "先进制造",
    desc: "柔性产线、精密装配与质量检测，机器人技能可快速切换以适应多品种小批量生产。",
    highlights: ["柔性装配与物料搬运", "视觉引导质量检测", "多机器人协同调度"],
  },
  {
    icon: "◫",
    title: "仓储物流",
    desc: "从入库分拣到末端配送，一体机算力支撑全场感知与实时路径规划。",
    highlights: ["智能分拣与码垛", "AMR 集群调度", "实时库存盘点"],
  },
  {
    icon: "⬡",
    title: "商业服务",
    desc: "酒店、餐饮、零售等场景的标准化服务机器人技能，开箱即用。",
    highlights: ["接待引导与讲解", "无人配送与收运", "智能巡检与安防"],
  },
];

const capabilities = [
  {
    title: "企业级安全与合规",
    desc: "端到端数据加密、RBAC 权限控制、审计日志，满足 ISO 27001 与等保三级要求。",
    metric: "99.99%",
    metricLabel: "系统可用性 SLA",
  },
  {
    title: "大规模集群管理",
    desc: "单集群支持 500+ 机器人节点，统一 OTA 升级、健康监控与远程诊断。",
    metric: "500+",
    metricLabel: "单集群节点容量",
  },
  {
    title: "深度系统集成",
    desc: "标准 API 对接 MES、WMS、ERP 系统，支持私有化部署与混合云架构。",
    metric: "<1周",
    metricLabel: "平均集成周期",
  },
];

const cases = [
  {
    logo: "华东某汽车零部件工厂",
    title: "柔性产线机器人技能部署",
    desc: "基于 Robonix 一体机为 12 条产线部署抓取与装配技能，产线切换时间从 3 天缩短至 4 小时。",
    stats: [
      { value: "12", label: "条产线" },
      { value: "18×", label: "换线提速" },
    ],
  },
  {
    logo: "某头部物流企业",
    title: "百台级 AMR 集群调度",
    desc: "部署 XiUOS 小脑驱动的 AMR 集群，实现 200+ 台机器人在 5 万平米仓库内的协同分拣。",
    stats: [
      { value: "200+", label: "AMR 节点" },
      { value: "99.8%", label: "拣选准确率" },
    ],
  },
  {
    logo: "某五星级酒店集团",
    title: "无人配送与服务机器人",
    desc: "客房配送、大堂引导与公共区域巡检全链路自动化，年服务超 10 万次，人工干预率低于 2%。",
    stats: [
      { value: "10万+", label: "年服务次数" },
      { value: "&lt;2%", label: "人工干预率" },
    ],
  },
];

export default function EnterpriseSolutions() {
  return (
    <main className="solutions-page solutions-enterprise">
      <SiteHeader />

      {/* Hero */}
      <section className="ent-hero"><ScrollReveal>
          <h1>
            从实验室
            <br />
            <em>到生产线</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            Sysoul 企业级具身智能解决方案，打通从原型验证到规模化部署的完整链路。
            安全、可靠、可扩展——为生产环境而建。
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="ent-hero-stats">
            <div className="ent-hero-stat">
              <b>500+</b>
              <small>单集群节点容量</small>
            </div>
            <div className="ent-hero-stat">
              <b>99.99%</b>
              <small>系统可用性</small>
            </div>
            <div className="ent-hero-stat">
              <b>3×</b>
              <small>ROI 加速</small>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Industries */}
      <section className="ent-industries"><ScrollReveal>
          <h2>
            覆盖关键行业
            <br />
            <em>深度场景化</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="section-intro">
            针对不同行业的需求特征，提供可定制、可扩展的场景化技能包与部署方案。
          </p>
        </ScrollReveal>
        <div className="ent-industries-grid">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.title} delay={i * 0.1}>
              <div className="ent-industry-card">
                <span className="ent-industry-icon">{ind.icon}</span>
                <b>{ind.title}</b>
                <p>{ind.desc}</p>
                <ul>
                  {ind.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="ent-capabilities"><ScrollReveal>
          <h2>
            企业级能力
            <br />
            <em>为规模化而生</em>
          </h2>
        </ScrollReveal>
        {capabilities.map((cap, i) => (
          <ScrollReveal key={cap.title} delay={i * 0.12}>
            <div className="ent-cap-row">
              <div className="ent-cap-text">
                <b>{cap.title}</b>
                <p>{cap.desc}</p>
              </div>
              <div className="ent-cap-visual">
                <div className="ent-cap-hex" />
                <div className="ent-cap-hex" />
                <div className="ent-cap-hex" />
                <div className="ent-cap-metric">
                  <b>{cap.metric}</b>
                  <small>{cap.metricLabel}</small>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* Case Studies */}
      <section className="ent-cases"><ScrollReveal>
          <h2>
            客户实践
            <br />
            <em>真实场景验证</em>
          </h2>
        </ScrollReveal>
        <div className="ent-cases-grid">
          {cases.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.12}>
              <div className="ent-case-card">
                <span className="ent-case-logo">{c.logo}</span>
                <b>{c.title}</b>
                <p>{c.desc}</p>
                <div className="ent-case-stat-row">
                  {c.stats.map((s) => (
                    <span key={s.label}>
                      <b>{s.value}</b>
                      <small>{s.label}</small>
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ent-cta">
        <ScrollReveal>
          <b>
            从试点到全量
            <br />
            我们一起走
          </b>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            我们的解决方案团队会与你一起评估需求，制定从试点到全量部署的完整方案。
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <a className="button" href="mailto:contact@sysoul.ai">
            预约咨询 ↗
          </a>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
