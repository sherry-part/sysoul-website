import SiteHeader from "../../../components/site-header";
import ScrollReveal from "../../../components/scroll-reveal";

const planItems = [
  {
    num: "01",
    title: "课程体系",
    desc: "对标「101」计划核心课程标准，涵盖操作系统、机器人运动学、具身感知与决策、技能学习四大模块，构建从本科到研究生的完整课程路径。每门课程配套实验指导书与在线评测系统。",
  },
  {
    num: "02",
    title: "实训平台",
    desc: "基于 Robonix 与一体机构建实训环境，学生可直接在真实硬件上验证算法。支持从仿真到真实部署的完整流程，内置评分系统与自动批改，降低教师运维负担。",
  },
  {
    num: "03",
    title: "竞赛与学术",
    desc: "支持学生参加机器人技能大赛，提供真实产业场景作为实训案例。设立优秀论文奖与开源贡献奖，推动具身智能领域的学术交流与人才培养。",
  },
];

const researchAreas = [
  {
    title: "具身操作系统",
    desc: "面向异构机器人平台的统一操作系统架构，研究实时调度、资源隔离与技能抽象，为上层应用提供稳定、高效的基础设施。",
  },
  {
    title: "机器人技能学习",
    desc: "基于仿真与真实数据的技能迁移、少样本学习与持续学习，让机器人能够快速掌握新任务并适应动态环境。",
  },
  {
    title: "多模态感知与理解",
    desc: "融合视觉、力觉、触觉与语言的多模态感知，研究开放世界中的物体识别、场景理解与任务规划。",
  },
  {
    title: "人机协作与安全",
    desc: "人机共享空间中的安全交互机制，包括力控柔顺、碰撞检测、意图预测与可解释的行为决策。",
  },
];

const partners = [
  { name: "Syswonder 开放社区", role: "操作系统开源生态" },
  { name: "CCF 泛在操作系统专委", role: "学术指导单位" },
  { name: "辽宁财贸大学", role: "首批课程共建高校" },
  { name: "多所 985/211 高校", role: "联合实验室与合作研究" },
];

export default function ResearchSolutions() {
  return (
    <main className="solutions-page solutions-research">
      <SiteHeader />

      {/* Hero */}
      <section className="res-hero">
        <ScrollReveal>
          <p className="kicker">FOR RESEARCH</p>
        </ScrollReveal>
        <ScrollReveal>
          <h1>
            推动具身智能
            <br />
            <em>前沿研究</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            为高校与科研机构提供开放的实验平台、标准数据集与可复现的研究基础设施，
            加速具身智能领域的学术探索与人才培养。
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="res-hero-quote">
            &ldquo;让每一个实验室都拥有生产级的具身智能研究条件。&rdquo;
          </p>
        </ScrollReveal>
      </section>

      {/* 101 Plan — 教育部"101"计划 */}
      <section className="res-plan">
        <div className="res-plan-banner">
          <ScrollReveal>
            <p className="kicker">FEATURED INITIATIVE</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2>
              对标教育部
              <br />
              <em>计算机&ldquo;101&rdquo;计划</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              建设具身智能课程体系与实训平台，培养新一代具身智能开发人才。
              让高校学生从理论到实践，完整掌握机器人技能开发全流程。
            </p>
          </ScrollReveal>
        </div>
        <div className="res-plan-grid">
          {planItems.map((item, i) => (
            <ScrollReveal key={item.num} delay={i * 0.1}>
              <div className="res-plan-item">
                <span className="res-plan-num">{item.num}</span>
                <b>{item.title}</b>
                <p>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Featured Case */}
        <ScrollReveal>
          <div className="res-plan-case">
            <span className="res-plan-case-badge">标杆案例</span>
            <b>辽宁财贸大学 — 具身智能课程体系搭建</b>
            <p>
              作为&ldquo;101&rdquo;计划的首批落地高校，辽财已基于 Sysoul 一体机
              与 Robonix 平台完成具身智能课程体系搭建，覆盖机器人操作系统、
              运动规划、技能开发三大模块。学生从仿真训练到真实硬件部署，
              完整经历一个机器人技能的诞生过程。
            </p>
            <div className="res-plan-case-stat">
              <b>120+</b>
              <small>学生实训完成</small>
            </div>
            <div className="res-plan-case-stat">
              <b>3</b>
              <small>门核心课程</small>
            </div>
            <div className="res-plan-case-stat">
              <b>100%</b>
              <small>实训通过率</small>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Research Areas */}
      <section className="res-areas">
        <ScrollReveal>
          <p className="kicker">RESEARCH AREAS</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>
            研究方向
            <br />
            <em>开放探索</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="section-intro">
            Sysoul 开放平台为研究者提供真实的硬件环境与数据支撑，以下是我们重点合作的四个研究方向。
          </p>
        </ScrollReveal>
        <div className="res-areas-grid">
          {researchAreas.map((area, i) => (
            <ScrollReveal key={area.title} delay={i * 0.1}>
              <div className="res-area-card">
                <b>{area.title}</b>
                <p>{area.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Academic Partners */}
      <section className="res-partners">
        <ScrollReveal>
          <p className="kicker">ACADEMIC ECOSYSTEM</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>
            学术合作
            <br />
            <em>共建开放生态</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="section-intro" style={{ margin: "0 auto", textAlign: "center" }}>
            与顶尖高校、学术组织与开源社区紧密协作，共同推进具身智能基础设施的标准化与普惠化。
          </p>
        </ScrollReveal>
        <div className="res-partners-list">
          {partners.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.1}>
              <div className="res-partner-item">
                <span>{p.role}</span>
                <b>{p.name}</b>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="res-cta">
        <ScrollReveal>
          <b>将你的实验室接入<br />Sysoul 研究平台</b>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            我们为高校与科研机构提供专属的研究支持计划，包括硬件折扣、技术培训与联合课题合作。
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <a className="button" href="mailto:contact@sysoul.ai">
            申请研究合作 ↗
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
