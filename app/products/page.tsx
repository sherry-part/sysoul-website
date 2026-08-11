import SiteHeader from "../../components/site-header";
import ScrollReveal from "../../components/scroll-reveal";
import ProductCarousel from "../../components/product-carousel";
import Footer from "../../components/footer";
import { partners } from "../../constants";

export default function Products() {
  return (
    <main className="product-page">
      <SiteHeader />

      {/* ============================================
           1. Product Carousel — full-screen hero
           ============================================ */}
      <ProductCarousel />

      {/* ============================================
           2. Open Ecosystem
           ============================================ */}
      <section className="ecosystem">
        <div className="ecosystem-head"><ScrollReveal>
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
           3. 大脑分隔线
           ============================================ */}
      <section className="brain-divider">
        <ScrollReveal>
          <div className="brain-divider-content">
            <span className="brain-divider-label">大脑 · CEREBRUM</span>
            <h2>Robonix</h2>
            <p>
              Robonix 是面向具身智能时代的开源操作系统，向下抽象异构机器人本体，
              向上编排任务、技能与 AI 模型，为每一台机器人提供统一的计算、控制与智能基础设施。
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================
           4. 大脑 — 希秀智脑
           ============================================ */}
      <section className="compare-section brain-section">
        <div className="compare-grid">
          <div className="compare-text">
            <ScrollReveal>
              <span className="brain-label">大脑</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2>希秀智脑<br /><em>一体化控制平台</em></h2>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                电源、算力、驱动、系统深度协同，工程团队不再耗费数月适配硬件，
                把时间放在真正的技能开发上。
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
            <ScrollReveal>
              <a className="text-link" href="/products/allinone">
                了解希秀智脑 ↗
              </a>
            </ScrollReveal>
          </div>
          <div className="compare-media">
            <ScrollReveal threshold={0.1}>
              <div className="video-placeholder">
                <video
                  src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/empty.mp4"
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
                  <span>希秀智脑演示</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
           4. 大脑 — 赛博机器人
           ============================================ */}
      <section className="cyber-section" id="cyber-product">
        <div className="cyber-layout">
          <div className="body-visual-side">
            <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/cyberbot.png" alt="赛博机器人" className="body-prod-img" />
          </div>
          <div className="cyber-text"><ScrollReveal>
              <span className="brain-label">大脑</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2>赛博机器人<br /><em>非侵入式智能数据引擎</em></h2>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                独创硬件层直采技术，无需安装任何软件，一插即用。
                破除封闭系统壁垒，为工业设备、企业系统、互联网与政务场景提供毫秒级智能数据采集。
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="cyber-metrics">
                <span className="cyber-metric">
                  <b>100%</b>
                  <small>采集精度</small>
                </span>
                <span className="cyber-metric">
                  <b>1000+</b>
                  <small>并行终端</small>
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <a className="text-link" href="/products/cyber">
                了解赛博机器人 ↗
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
           5. 小脑分隔线
           ============================================ */}
      <section className="brain-divider brain-divider--cerebellum">
        <ScrollReveal>
          <div className="brain-divider-content">
            <span className="brain-divider-label">小脑 · CEREBELLUM</span>
            <h2>XiUOS 矽璓</h2>
            <p>
              XiUOS 是面向工业物联与具身设备&ldquo;现场计算&rdquo;场景的轻量化实时操作系统，
              提供硬实时调度、微秒级中断响应与确定性控制，为机器人的每一个关节赋予精准的运动能力。
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================
           6. 小脑 — 运控算法
           ============================================ */}
      <section className="cerebellum-section" id="cerebellum">
        <div className="cerebellum-layout">
          <div className="cerebellum-text">
            <ScrollReveal>
              <span className="brain-label">小脑</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2>运控算法<br /><em>自主研发的实时运动控制</em></h2>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                基于 XiUOS 小脑架构，从底层驱动到上层运控全部自主可控。
                支持多轴联动、力控柔顺、轨迹规划与实时插补，
                为工业机器人与协作机器人提供毫秒级精密运动控制能力。
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="cerebellum-metrics">
                <span className="cyber-metric">
                  <b>&lt;1ms</b>
                  <small>控制周期</small>
                </span>
                <span className="cyber-metric">
                  <b>7-DOF</b>
                  <small>全空间支持</small>
                </span>
                <span className="cyber-metric">
                  <b>100%</b>
                  <small>自主可控</small>
                </span>
              </div>
            </ScrollReveal>
          </div>
          <div className="cerebellum-visual">
            <div className="cerebellum-card">
              <div className="cerebellum-icon">⟐</div>
              <b>XiUOS 小脑</b>
              <small>实时操作系统内核，硬实时调度，微秒级中断响应。支持 EtherCAT、CANopen 等工业总线协议，兼容主流伺服驱动。</small>
            </div>
            <div className="cerebellum-card">
              <div className="cerebellum-icon">⚙</div>
              <b>运控算法库</b>
              <small>轨迹规划、速度前瞻、力位混合控制、振动抑制等核心算法。提供 C/Python SDK，支持 ROS2 与 Robonix 技能框架集成。</small>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
           6. Tutorial Videos
           ============================================ */}
      <section className="tutorials">
        <div className="tutorials-head"><ScrollReveal>
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
                  src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/empty.mp4"
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
                  src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/empty.mp4"
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
                  src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/empty.mp4"
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
           7. Partners
           ============================================ */}
      <section className="partners" id="partners">
        <ScrollReveal>
          <p className="partners-title">合作伙伴</p>
        </ScrollReveal>

        {/* Row 1 — forward */}
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

        {/* Row 2 — reverse */}
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

      {/* ============================================
           8. Footer
           ============================================ */}
      <Footer />
    </main>
  );
}
