import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import SolutionMediaCard from "../../../components/solution-media-card";

export default function CyberRobot() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <div className="sol-hero-row">
          <div className="sol-hero-text">
            <span className="sol-panel-label">CYBER ROBOT</span>
            <h1>赛博机器人</h1>
            <p className="sol-overview">
              赛博机器人是一款基于自研"矽璓"操作系统的工业级非侵入式智能数采终端，专为不开放协议但"有可视化操作界面"的封闭系统设计。无需改造产线、拒绝插件依赖，为封闭系统提供安全可控的数据采集与自主决策能力，实现毫秒级设备状态捕获与结构化转化。
            </p>
          </div>
          <div className="sol-hero-media">
            <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/cyberbot.png" alt="赛博机器人" />
          </div>
        </div>

{/* 使用场景 */}
        <span className="sol-section-label">使用场景</span>
        <div className="sol-media-row sol-media-row--two">
          {[
            {
              num: "01",
              title: "老旧产线数字化改造",
              sub: "Legacy Line Digitalization",
              desc: "通过非侵入式数采终端捕获设备运行状态，无需改造产线即可实现毫秒级数据采集与结构化转化，让封闭的老旧设备融入数字工厂。",
              tags: "封闭系统 · 无接口设备 · 零改造",
              media: { type: "image", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/cyber-1.png" } as const,
            },
            {
              num: "02",
              title: "你的赛博工作伙伴",
              sub: "Your Cyber Work Partner",
              desc: "赛博机器人不仅是数采终端，更是你的赛博工作伙伴——7×24 小时不间断值守，自动识别、采集、上报，让每一台老设备都开口说话。",
              tags: "7×24 值守 · 自动识别 · 赛博伙伴",
              media: { type: "image", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/cyber-3.png" } as const,
            },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} total={2} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
