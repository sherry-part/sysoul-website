import SiteHeader from "../../components/site-header";
import Footer from "../../components/footer";
import ScrollReveal from "../../components/scroll-reveal";

export default function About() {
  return (
    <main className="about-page">
      <SiteHeader />

      {/* Hero */}
      <section className="about-hero"><ScrollReveal>
          <h1>
            杭州希秀泛在计算技术有限公司
            <br />
            <em>具身智能基础设施提供者</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="about-intro">
            希秀科技聚焦具身智能操作系统、智能硬件平台与行业应用解决方案，
            致力于为教育、科研、工业及服务场景提供可部署、可复用、可持续迭代的具身智能产品体系。
            公司依托北京大学信息技术高等研究院成立，由梅宏院士领衔创立，总部位于杭州萧山。
          </p>
        </ScrollReveal>
      </section>

      {/* Core Belief */}
      <section className="about-belief">
        <ScrollReveal>
          <div className="belief-callout">
            <p>
              公司的核心判断是：未来机器人产业的竞争，不仅在于单一机器人本体，
              也不仅在于单个大模型，而在于能否建立连接&ldquo;机器人硬件、传感器、边缘计算、
              智能模型、机器人技能和行业场景&rdquo;的<strong>统一软件底座</strong>。
            </p>
            <span className="belief-tag">— 战略判断</span>
          </div>
        </ScrollReveal>
      </section>

      {/* Two-Phase Evolution */}
      <section className="about-timeline">
        <div className="timeline-head"><ScrollReveal>
            <h2>从工业物联到具身智能<br /><em>一次战略跃迁</em></h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="timeline-intro">
              希秀科技以工业物联泛在操作系统 XiUOS 起家，经过五年技术与场景沉淀，
              于 2025 年全面转型具身智能，构建&ldquo;双 OS + 多形态硬件&rdquo;产品矩阵。
            </p>
          </ScrollReveal>
        </div>

        <div className="phase-grid">
          <ScrollReveal>
            <div className="phase-card phase-card--heritage">
              <span className="phase-label">PHASE 1 · 2019 — 2024</span>
              <b>工业物联沉淀</b>
              <p>
                围绕&ldquo;全面感知 · 泛在互联 · 实时认知 · 精准控制&rdquo;四大核心能力，
                沉淀出完整的工业物联技术框架与硬件体系，覆盖数采终端、智慧终端到边缘智能终端，
                在污水处理、智能制造、能源管理等 8+ 行业实现落地。
              </p>
              <div className="phase-tags">
                <span>200+ 工业协议适配</span>
                <span>10+ PLC 品牌兼容</span>
                <span>8+ 行业落地案例</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="phase-card phase-card--embodied">
              <span className="phase-label">PHASE 2 · 2025 — 至今</span>
              <b>全面转型具身智能</b>
              <p>
                把工业物联的&ldquo;现场计算&rdquo;能力迁移到具身设备的&ldquo;关节与端侧&rdquo;，
                以实时内核与感知能力为底座，构建机器人统一软件基础设施，
                全面切入教育、科研、行业验证市场，逐步向工业与服务机器人生态扩展。
              </p>
              <div className="phase-tags">
                <span>双 OS 架构</span>
                <span>多形态本体矩阵</span>
                <span>CCF 开放社区</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="about-milestones">
        <div className="timeline-head"><ScrollReveal>
            <h2>发展历程<br /><em>一步一个脚印</em></h2>
          </ScrollReveal>
        </div>

        <div className="timeline">
          <div className="timeline-track" />

          <ScrollReveal>
            <div className="timeline-node">
              <span className="tl-date">2019.11</span>
              <div className="tl-marker" />
              <div className="tl-body">
                <b>梅宏院士创立泛在操作系统实验室</b>
                <p>团队面向制造业数字化转型，研发工业物联泛在操作系统 XiUOS，为公司核心技术资产与学术血脉的源头。</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="timeline-node">
              <span className="tl-date">2025.05</span>
              <div className="tl-marker" />
              <div className="tl-body">
                <b>CCF 泛在操作系统开放社区成立</b>
                <p>由梅宏院士牵头，汇聚产学研力量，推动操作系统研究向泛在化、智能化方向演进。</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="timeline-node">
              <span className="tl-date">2025.10</span>
              <div className="tl-marker" />
              <div className="tl-body">
                <b>XiUOS 正式发布</b>
                <p>面向工业物联与机器人场景的实时操作系统，提供确定性调度与微秒级响应能力。</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="timeline-node">
              <span className="tl-date">2026.08</span>
              <div className="tl-marker" />
              <div className="tl-body">
                <b>Robonix 正式发布 · 全面转型具身智能</b>
                <p>具身智能操作系统正式公开，公司确立&ldquo;双 OS&rdquo;战略，全面进入教育与科研市场。</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-vision">
        <div className="vision-block">
          <ScrollReveal>
            <div className="vision-statement">
              <span className="vision-card-label">企业愿景</span>
              <b>让机器人走进千行百业，更好地服务人类。</b>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="vision-statement">
              <span className="vision-card-label">企业使命</span>
              <b>打造开放的具身智能基础设施，让机器人更容易掌握技能，服务千行百业。</b>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="about-roadmap">
        <div className="timeline-head"><ScrollReveal>
            <h2>发展规划<br /><em>三步走战略</em></h2>
          </ScrollReveal>
        </div>

        <div className="roadmap-flow">
          <div className="roadmap-track">
            <div className="roadmap-track-line" />
            <span className="roadmap-dot" style={{ left: "16.67%" }} />
            <span className="roadmap-dot" style={{ left: "50%" }} />
            <span className="roadmap-dot" style={{ left: "83.33%" }} />
          </div>

          <div className="roadmap-stages">
            <ScrollReveal>
              <div className="roadmap-stage">
                <div className="roadmap-phase">
                  <span className="roadmap-time">0 — 3 个月</span>
                  <span className="roadmap-badge">第一阶段</span>
                </div>
                <b>多线并行定型</b>
                <ul>
                  <li>完成 Robonix 1.0 基础版本</li>
                  <li>多条成熟产品线并行推进：协作机械臂、四足机器人、移动底盘、服务机器人、灵巧手</li>
                  <li>固化 Primitive 接口规范，建立标准技能库与演示任务</li>
                  <li>完成教育实训样板方案，输出产品手册、报价体系、交付文档</li>
                </ul>
                <div className="roadmap-goal">→ 形成可演示、可报价、可部署的多形态标准产品矩阵</div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="roadmap-stage">
                <div className="roadmap-phase">
                  <span className="roadmap-time">3 — 9 个月</span>
                  <span className="roadmap-badge">第二阶段</span>
                </div>
                <b>客户验证</b>
                <ul>
                  <li>在高校和研究院落地样板客户</li>
                  <li>建设具身智能实训室案例</li>
                  <li>完成 2—3 个行业场景验证，建立标准交付流程</li>
                  <li>建立开发者文档和技术支持体系，形成第一批可复制标杆案例</li>
                </ul>
                <div className="roadmap-goal">→ 完成从技术产品到商业产品的转化</div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="roadmap-stage">
                <div className="roadmap-phase">
                  <span className="roadmap-time">9 — 18 个月</span>
                  <span className="roadmap-badge">第三阶段</span>
                </div>
                <b>规模复制</b>
                <ul>
                  <li>扩展更多机器人本体形态</li>
                  <li>建设 Robonix 开发者生态</li>
                  <li>推出软件授权和技能市场，拓展教育、科研和行业渠道</li>
                  <li>与机器人厂商和系统集成商形成合作，推动平台型收入增长</li>
                </ul>
                <div className="roadmap-goal">→ 形成具身智能操作系统平台化收入和生态壁垒</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Honors & Achievements */}
      <section className="about-honors">
        <div className="timeline-head"><ScrollReveal>
            <h2>资质与荣誉<br /><em>学术基因 · 产业落地</em></h2>
          </ScrollReveal>
        </div>

        <div className="honors-grid">
          <ScrollReveal>
            <div className="honor-stat">
              <b>40+</b>
              <small>授权专利</small>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="honor-stat">
              <b>10</b>
              <small>发布标准</small>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="honor-stat">
              <b>40+</b>
              <small>主持省部级项目</small>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="honor-stat">
              <b>6+</b>
              <small>国家级奖项</small>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="honors-list">
            <div className="honors-list-item">
              <span className="honor-cat">国家代表性奖项</span>
              <p>国家技术发明奖一等奖 · 二等奖 · 国家自然科学奖二等奖 · 国家科技进步奖二等奖 · 何梁何利基金科学技术进步奖 · 陈嘉庚科学奖信息技术科学奖 · 教育部科技进步一等奖</p>
            </div>
            <div className="honors-list-item">
              <span className="honor-cat">国家级科研项目支撑</span>
              <p>国家重大科研仪器研制项目 · 国家重点研发计划（泛在 OS / 工业互联网 OS）· 国家自然科学基金 · 浙江省领雁 / 尖兵项目</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="belief-callout" style={{ marginTop: 48 }}>
            <p>
              高校前沿 + 行业落地的<strong>双引擎结构</strong>，让公司既具备纯学术团队的技术深度，
              也具备纯产业团队的变现能力。院士科研团队提供前沿判断力与跨学科整合能力，
              持续把握具身智能的技术演进方向与产业节奏。
            </p>
            <span className="belief-tag">— 团队定位</span>
          </div>
        </ScrollReveal>
      </section>

      {/* Conclusion */}
      <section className="about-conclusion">
        <div className="timeline-head"><ScrollReveal>
            <h2>我们的目标<br /><em>不是做一台机器人</em></h2>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="conclusion-lede">
            公司希望成为<strong>具身智能时代的基础软件与场景落地平台</strong>。
          </p>
        </ScrollReveal>

        <div className="conclusion-grid">
          <ScrollReveal>
            <div className="conclusion-card">
              <span className="conclusion-label">开源泛在操作系统的生态建设者</span>
              <p>依托 CCF 泛在操作系统开放社区，把&ldquo;XiUOS&rdquo;与&ldquo;Robonix&rdquo;系列打造成具身智能时代的开源基础设施。</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="conclusion-card">
              <span className="conclusion-label">领先的端侧智能基础设施提供者</span>
              <p>以 Robonix 智脑 + Robonix Edge 边缘算力，让智能在机器人本体上稳定运行。</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="conclusion-card">
              <span className="conclusion-label">国际有影响力的具身智能领导者</span>
              <p>以联名品牌矩阵与行业级解决方案，让中国具身智能产品走向规模化与国际化。</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="conclusion-quote">
            <p>希秀科技的目标不是做一台机器人，而是让每一家本体厂商、每一个集成商都能在我们的底座上跑出自己的具身智能产品。</p>
            <span>— OUR MISSION</span>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
