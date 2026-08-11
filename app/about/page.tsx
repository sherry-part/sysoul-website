import SiteHeader from "../../components/site-header";
import Footer from "../../components/footer";
import ScrollReveal from "../../components/scroll-reveal";
import { partners } from "../../constants";

const timelineMilestones = [
  {
    year: "2019",
    title: "泛在操作系统实验室创立",
    desc: "团队依托北京大学信息技术高等研究院成立，启动操作系统基础研究，奠定技术源头。",
  },
  {
    year: "2024",
    title: "Syswonder 开放社区成立",
    desc: "Syswonder 作为 Robonix 的开发者与维护社区正式成立，希秀计算成为社区核心团队。",
  },
  {
    year: "2025",
    title: "CCF 泛在操作系统开放社区成立",
    desc: "希秀成为 CCF 高级会员，依托 CCF 平台推动具身智能操作系统的标准化建设与产学研协同。",
  },
  {
    year: "2026",
    title: "Robonix 正式发布",
    desc: "具身智能操作系统面向产业与开发者全面开放，已适配硬件 10+，40+ Packages，服务 16+ 高校与研究所。",
  },
];

const honorsStats = [
  { num: "40+", label: "授权专利" },
  { num: "10", label: "发布标准" },
  { num: "40+", label: "主持省部级项目" },
  { num: "6+", label: "国家级奖项" },
];

const nationalAwards = [
  "国家技术发明奖一等奖",
  "国家技术发明奖二等奖",
  "国家自然科学奖二等奖",
  "国家科技进步奖二等奖",
  "何梁何利基金科学技术进步奖",
  "陈嘉庚科学奖信息技术科学奖",
  "教育部科技进步一等奖",
];

const nationalProjects = [
  "国家重大科研仪器研制项目",
  "国家重点研发计划（泛在 OS / 工业互联网 OS）",
  "国家自然科学基金",
  "浙江省领雁 / 尖兵项目",
];

const teamCards = [
  {
    title: "核心团队",
    desc: "来自北京大学信息技术高等研究院的操作系统专家团队，深耕操作系统内核、实时调度与具身智能基础软件。",
  },
  {
    title: "开发者社区",
    desc: "Syswonder 开放社区汇聚数千名开发者，协同共建 Robonix 操作系统生态，覆盖感知、规划、控制全栈。",
  },
  {
    title: "学术合作",
    desc: "依托 CCF 泛在操作系统专委会，与清华、上交、浙大、中科院计算所等顶尖高校建立深度合作。",
  },
];

export default function About() {
  return (
    <main className="about-page-v2">
      <SiteHeader />

      {/* Panel 1: 关于希秀 */}
      <section className="about-panel">
        <span className="about-panel-label">关于希秀</span>
        <div className="about-intro">
          <div className="about-intro-left">
            <h1 className="about-hero-title">
              具身智能操作系统
              <br />
              与基础软件提供商
            </h1>
            <p className="about-hero-sub">Robonix 核心贡献者</p>
          </div>
          <div className="about-intro-right">
            <p>
              杭州希秀泛在计算技术有限公司（Sysoul）是一家专注于具身智能基础软件的操作系统公司。我们不搬运机器人——希秀的核心产品是代码、标准与社区。
            </p>
            <p>
              希秀计算是 Robonix 具身智能操作系统的核心开发与维护团队，主导系统架构设计、核心模块研发与版本发布。Syswonder 作为 Robonix 的开发者与维护社区，协同数千名开发者共建开放生态。同时，希秀是 CCF 泛在操作系统开放社区核心团队，依托中国计算机学会泛在操作系统专委，推动具身智能操作系统标准化与学术生态建设。
            </p>
            <p>
              我们为整个具身智能行业提供底层软件基础设施，让机器人更容易掌握技能，服务千行百业。
            </p>
          </div>
        </div>
      </section>

      {/* Panel 2: 发展历程 */}
      <section className="about-panel">
        <span className="about-panel-label">发展历程</span>
        <div className="about-timeline-h">
          {timelineMilestones.map((m) => (
            <div key={m.year} className="tl-h-node">
              <span className="tl-h-year">{m.year}</span>
              <span className="tl-h-dot" />
              <div className="tl-h-body">
                <b>{m.title}</b>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Panel 3: 荣誉 */}
      <section className="about-panel">
        <span className="about-panel-label">HONORS &amp; IP · 资质荣誉与知识产权</span>

        <div className="honors-stats-row">
          {honorsStats.map((s) => (
            <div key={s.label} className="honors-stat-item">
              <b>{s.num}</b>
              <small>{s.label}</small>
            </div>
          ))}
        </div>

        <div className="honors-detail-grid">
          <div className="honors-detail-block">
            <span className="honors-detail-label">国家代表性奖项</span>
            <ul>
              {nationalAwards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="honors-detail-block">
            <span className="honors-detail-label">国家级科研项目支撑</span>
            <ul>
              {nationalProjects.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Panel 4: 团队 */}
      <section className="about-panel">
        <span className="about-panel-label">团队</span>
        <div className="about-team-grid">
          {teamCards.map((t) => (
            <div key={t.title} className="about-team-card">
              <b>{t.title}</b>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 使命愿景 */}
      <section className="about-vision">
        <div className="vision-block">
          <div className="vision-statement">
            <span className="vision-card-label">企业愿景</span>
            <b>让机器人走进千行百业，更好地服务人类。</b>
          </div>
          <div className="vision-statement">
            <span className="vision-card-label">企业使命</span>
            <b>打造开放的具身智能基础设施，让机器人更容易掌握技能，服务千行百业。</b>
          </div>
        </div>
      </section>

      {/* 合作伙伴 */}
      <section className="partners" id="partners">
        <ScrollReveal>
          <p className="partners-title">合作伙伴</p>
        </ScrollReveal>

        <div className="partner-marquee">
          <div className="partner-marquee-track pm-forward">
            {partners.slice(0, 10).map((p) => (
              <div key={p.name} className="partner-logo-card">
                <img src={p.logo} alt={p.name} />
              </div>
            ))}
            {partners.slice(0, 10).map((p) => (
              <div key={`${p.name}-dup`} className="partner-logo-card">
                <img src={p.logo} alt={p.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="partner-marquee">
          <div className="partner-marquee-track pm-reverse">
            {partners.slice(10).map((p) => (
              <div key={p.name} className="partner-logo-card">
                <img src={p.logo} alt={p.name} />
              </div>
            ))}
            {partners.slice(10).map((p) => (
              <div key={`${p.name}-dup`} className="partner-logo-card">
                <img src={p.logo} alt={p.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
