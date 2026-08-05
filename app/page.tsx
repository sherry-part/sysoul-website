import Image from "next/image";

const products = [
  { name: "Sysoul Brain", tag: "具身智能终端", tone: "violet", meta: "Orin · Camera · LiDAR" },
  { name: "XiUOS Motion", tag: "实时运动控制", tone: "lime", meta: "实时系统 · 关节算法" },
  { name: "Cyber Robot", tag: "仿真与实训平台", tone: "orange", meta: "仿真 · 竞赛 · 边缘计算" }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top"><Image src="/images/logo1.webp" width={180} height={42} alt="Sysoul" priority /></a>
        <nav className="nav-links"><a href="#products">产品</a><a href="#platform">平台</a><a href="#scenes">场景</a><a href="#about">关于 Sysoul</a></nav>
        <a className="header-link" href="mailto:contact@sysoul.ai">联系我们 <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Sysoul / Embodied intelligence</p>
          <h1>让机器人<br /><em>真正开始工作</em></h1>
          <p className="hero-text">从计算、控制到技能，Sysoul 把复杂的具身智能能力，变成可以直接使用的产品。</p>
          <div className="hero-actions"><a className="primary-action" href="#products">探索产品 <span>↗</span></a><a className="text-action" href="#platform">了解平台 <span>↓</span></a></div>
        </div>
        <div className="hero-stage">
          <div className="stage-grid" />
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="brain-device"><div className="device-glow" /><div className="device-top" /><div className="device-body"><span>SYSoul</span><b>01</b></div><div className="device-foot" /></div>
          <div className="stage-label label-top">01 / INTELLIGENCE</div><div className="stage-label label-bottom">BUILD · CONTROL · DEPLOY</div>
        </div>
      </section>

      <section className="ticker"><div>ROBONIX</div><div>开放生态</div><div>实时控制</div><div>具身智能</div><div>ROBONIX</div><div>开放生态</div></section>

      <section className="manifesto" id="platform"><p className="eyebrow">A new layer for robots</p><h2>不是又一个模型，<br /><span>而是一整套能力。</span></h2><p>我们把机器人真正需要的基础能力，放进一套开放、可组合、能落地的系统里。</p></section>

      <section className="products-section" id="products"><div className="section-top"><div><p className="eyebrow">The product system</p><h2>三种方式，<br />进入具身智能。</h2></div><p className="section-note">为不同阶段的团队，提供从硬件到软件的完整入口。</p></div><div className="product-grid">{products.map((p, i) => <article className={`product-card ${p.tone}`} key={p.name}><div className="card-art"><div className="mini-device" /><span className="card-index">0{i + 1}</span></div><div className="card-copy"><p className="card-tag">{p.tag}</p><h3>{p.name}</h3><p className="card-meta">{p.meta}</p><a href="#contact">查看详情 <span>↗</span></a></div></article>)}</div></section>

      <section className="scenes" id="scenes"><div><p className="eyebrow">Made to move</p><h2>在实验室之外，<br />让能力发生。</h2></div><div className="scene-list"><div><span>01</span><b>机器人厂商</b><p>更快集成，更快交付。</p></div><div><span>02</span><b>高校与研究</b><p>从课程到实验，一套系统。</p></div><div><span>03</span><b>开发者社区</b><p>开放技能，持续复用。</p></div></div></section>

      <section className="contact" id="contact"><p className="eyebrow">Let&apos;s build the next move</p><h2>一起把机器人<br /><em>带到真实世界。</em></h2><a className="contact-button" href="mailto:contact@sysoul.ai">联系 Sysoul <span>↗</span></a></section>
      <footer id="about"><span>© 2025 Sysoul</span><span>Embodied intelligence infrastructure</span><span>北京 · 上海</span></footer>
    </main>
  );
}
