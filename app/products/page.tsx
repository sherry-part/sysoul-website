import SiteHeader from "../../components/site-header";
import ScrollReveal from "../../components/scroll-reveal";
import ProductCarousel from "../../components/product-carousel";
import { partners } from "../../constants";

export default function Products() {
  return (
    <main className="product-page">
      <SiteHeader productPage />

      {/* ============================================
           1. Product Carousel — full-screen hero
           ============================================ */}
      <ProductCarousel />

      {/* ============================================
           2. All-in-one vs Bare Metal + comparison video
           ============================================ */}
      <section className="compare-section">
        <div className="compare-grid">
          <div className="compare-text">
            <ScrollReveal>
              <p className="kicker">ALL-IN-ONE VS BARE METAL</p>
            </ScrollReveal>
            <ScrollReveal>
              <h2>裸机给你零件<br /><em>一体机给你结果</em></h2>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                电源、算力、驱动、系统已经深度协同。
                工程团队不再耗费数月适配硬件，把时间放在真正的技能开发上。
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="compare-stats">
                <span>
                  <b>3×</b>
                  <small>更快部署</small>
                </span>
                <span>
                  <b>0</b>
                  <small>额外适配工作</small>
                </span>
                <span>
                  <b>∞</b>
                  <small>技能持续接入</small>
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="compare-badges">
                <span className="badge">即插即用</span>
                <span className="badge">系统协同</span>
                <span className="badge">持续进化</span>
              </div>
            </ScrollReveal>
          </div>
          <div className="compare-media">
            <ScrollReveal threshold={0.1}>
              <div className="video-placeholder">
                <video
                  src="/videos/empty.mp4"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23071020' width='800' height='450'/%3E%3Ctext fill='%2368e1ff' x='400' y='225' text-anchor='middle' font-size='14' font-family='monospace'%3ECOMPARISON FILM%3C/text%3E%3C/svg%3E"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  className="compare-video"
                />
                <div className="video-play-overlay">
                  <div className="play-btn">▶</div>
                  <span>ALL-IN-ONE 对比演示</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
           4. Open Ecosystem
           ============================================ */}
      <section className="ecosystem">
        <div className="ecosystem-head">
          <ScrollReveal>
            <p className="kicker">OPEN ECOSYSTEM</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2>打破封闭<br /><em>共建开放生态</em></h2>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              不锁定任何硬件、不限制任何模型。Sysoul 开放平台让机器人技能
              可以跨本体复用，让开发者的成果真正属于开发者。
            </p>
          </ScrollReveal>
        </div>
        <div className="ecosystem-grid">
          <ScrollReveal delay={0}>
            <div className="eco-item">
              <span className="eco-icon">⚙</span>
              <b>技能工坊</b>
              <small>创建、测试、发布机器人技能，一次开发，多平台部署。</small>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="eco-item">
              <span className="eco-icon">⎔</span>
              <b>开发者社区</b>
              <small>接入 CCF 开放社区，与研究者、工程师共建具身智能标准。</small>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="eco-item">
              <span className="eco-icon">↗</span>
              <b>开放 API</b>
              <small>REST 与 gRPC 接口，兼容主流机器人中间件，零锁定。</small>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="eco-item">
              <span className="eco-icon">⊕</span>
              <b>合作生态</b>
              <small>联合本体厂商、模型提供商、系统集成商，推动规模化落地。</small>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
           5. Body Product — 联名本体
           ============================================ */}
      <section className="body-section" id="body-product">
        <div className="body-layout">
          <div className="body-visual-container">
            <ScrollReveal threshold={0.1}>
              <div className="body-visual-large">
                <div className="body-ring-large" />
                <div className="body-torso-large">
                  <div className="body-core-glow" />
                  <div className="body-joint-dot j1" />
                  <div className="body-joint-dot j2" />
                  <div className="body-joint-dot j3" />
                  <div className="body-joint-dot j4" />
                </div>
                <div className="body-spec-callout spec-1">7-DOF 关节</div>
                <div className="body-spec-callout spec-2">XiUOS 实时控制</div>
                <div className="body-spec-callout spec-3">±0.1mm 精度</div>
              </div>
            </ScrollReveal>
          </div>
          <div className="body-text">
            <ScrollReveal>
              <p className="kicker">PHYSICAL BODY / 02</p>
            </ScrollReveal>
            <ScrollReveal>
              <h2>让每一个动作<br /><em>稳定 · 精准 · 可复用</em></h2>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                面向真实物理世界的机器人本体。兼容联名款与搭载 XiUOS 小脑的开放款，
                关节运控算法确保每一次动作都在毫秒级精度内完成。
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="body-features">
                <div className="bf-item">
                  <b>联名款</b>
                  <small>与头部本体厂商深度适配，开箱精度即达生产级。</small>
                </div>
                <div className="bf-item">
                  <b>开源款</b>
                  <small>搭载 XiUOS 小脑，全栈开放，研究与教学首选。</small>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <a className="text-link" href="mailto:contact@sysoul.ai">
                预约本体体验 ↗
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
           6. Cyber Product — 赛博机器人
           ============================================ */}
      <section className="cyber-section" id="cyber-product">
        <div className="cyber-layout">
          <div className="cyber-text">
            <ScrollReveal>
              <p className="kicker">CYBER ROBOT / 03</p>
            </ScrollReveal>
            <ScrollReveal>
              <h2>在虚拟世界<br /><em>先行一万步</em></h2>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                赛博机器人感控一体，连接仿真与真实部署。每一个想法，
                都可以先在数字世界里被验证、优化、再推向物理世界。
                降低试错成本，加速技能迭代。
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="cyber-metrics">
                <span className="cyber-metric">
                  <b>1:1</b>
                  <small>数字孪生保真度</small>
                </span>
                <span className="cyber-metric">
                  <b>&lt;5ms</b>
                  <small>感控闭环延迟</small>
                </span>
              </div>
            </ScrollReveal>
          </div>
          <div className="cyber-visual-container">
            <ScrollReveal threshold={0.1}>
              <div className="cyber-visual-large">
                <div className="cyber-grid-large" />
                <div className="cyber-head-large">
                  CYBER
                  <br />
                  <b>BOT</b>
                </div>
                <div className="cyber-scan-line" />
                <div className="cyber-data-tag tag-a">SIM → REAL</div>
                <div className="cyber-data-tag tag-b">DIGITAL TWIN</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
           7. Tutorial Videos
           ============================================ */}
      <section className="tutorials">
        <div className="tutorials-head">
          <ScrollReveal>
            <p className="kicker">LEARN</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2>从零到一<br /><em>掌握具身智能开发</em></h2>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              从环境搭建到技能部署，每一步都有清晰的指引。
              无论你是研究者、工程师还是学生，这里都有适合你的起点。
            </p>
          </ScrollReveal>
        </div>
        <div className="tutorial-grid">
          <ScrollReveal delay={0}>
            <div className="tutorial-card">
              <div className="tutorial-thumb">
                <video
                  src="/videos/empty.mp4"
                  controls
                  preload="auto"
                />
                <div className="tutorial-play">▶</div>
              </div>
              <b>快速开始：5 分钟部署 Robonix</b>
              <small>从零搭建开发环境，运行第一个技能。</small>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="tutorial-card">
              <div className="tutorial-thumb">
                <video
                  src="/videos/empty.mp4"
                  controls
                  preload="auto"
                />
                <div className="tutorial-play">▶</div>
              </div>
              <b>技能工坊：创建你的第一个机器人技能</b>
              <small>使用 Skill SDK 构建、测试并发布技能。</small>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="tutorial-card">
              <div className="tutorial-thumb">
                <video
                  src="/videos/empty.mp4"
                  controls
                  preload="auto"
                />
                <div className="tutorial-play">▶</div>
              </div>
              <b>仿真与部署：从虚拟到真实的完整流程</b>
              <small>使用赛博机器人进行仿真验证，一键部署到本体。</small>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
           8. Education — 101 计划 & 课程体系
           ============================================ */}
      <section className="education">
        <div className="education-banner">
          <ScrollReveal>
            <p className="kicker">EDUCATION</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2>对标教育部<br /><em>计算机"101"计划</em></h2>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              建设具身智能课程体系与实训平台，培养新一代具身智能开发人才。
              让高校学生从理论到实践，完整掌握机器人技能开发全流程。
            </p>
          </ScrollReveal>
        </div>
        <div className="education-grid">
          <ScrollReveal delay={0}>
            <div className="edu-item">
              <span className="edu-num">01</span>
              <b>课程体系</b>
              <p>
                对标"101"计划核心课程标准，涵盖操作系统、机器人运动学、
                具身感知与决策，构建从本科到研究生的完整课程路径。
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="edu-item">
              <span className="edu-num">02</span>
              <b>实训平台</b>
              <p>
                基于 Robonix 与一体机构建实训环境，学生可直接在真实硬件上
                验证算法，而非停留在仿真阶段。
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="edu-item">
              <span className="edu-num">03</span>
              <b>竞赛与案例</b>
              <p>
                支持学生参加机器人技能大赛，提供真实产业场景作为实训案例。
                辽宁财贸大学等高校已率先接入课程体系。
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="education-case">
          <ScrollReveal>
            <div className="case-block">
              <span className="case-badge">案例</span>
              <b>辽宁财贸大学 — 具身智能课程搭建</b>
              <p>
                作为"101"计划的一部分，辽财已基于 Sysoul 一体机
                与 Robonix 平台完成具身智能课程体系搭建，覆盖
                机器人操作系统、运动规划、技能开发三大模块，
                首批 120 名学生已完成实训。
              </p>
              <span className="case-stat">
                <b>120+</b> 学生实训完成
              </span>
              <span className="case-stat">
                <b>3</b> 门核心课程
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
           9. Partners
           ============================================ */}
      <section className="partners" id="partners">
        <ScrollReveal>
          <p className="kicker">BUILT WITH THE ECOSYSTEM</p>
        </ScrollReveal>
        <div className="partner-track">
          {[...partners, ...partners].map((p, i) => (
            <span key={`${p}-${i}`}>{p}</span>
          ))}
        </div>
      </section>

      {/* ============================================
           10. Footer
           ============================================ */}
      <footer>
        <span>© 2025 Sysoul</span>
        <span>Embodied intelligence infrastructure</span>
        <a href="/">返回首页 ↗</a>
      </footer>
    </main>
  );
}
