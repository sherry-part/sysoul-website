import SiteHeader from "../../../components/site-header";
import Footer from "../../../components/footer";
import SolutionMediaCard from "../../../components/solution-media-card";

export default function IoTSensing() {
  return (
    <main className="solutions-page">
      <SiteHeader />
      <section className="sol-panel" style={{ borderTop: "none", paddingTop: 160 }}>
        <span className="sol-panel-label">IOT TERMINAL</span>
        <h1>低功耗物联数采终端</h1>
        <p className="sol-overview">
          一款专为工业物联场景打造的数采终端，搭载自研"矽璓"操作系统。精准解析各类工业协议，无缝连接 PLC、执行设备、工控仪表等设备，稳定采集现场数据。作为边缘智能节点，实现数据自下而上的高效传输与汇聚，满足严苛工业环境下的低功耗、高可靠需求。
        </p>
        <span className="sol-section-label">产品功能</span>
        <div className="sol-media-row sol-media-row--two">
          {[
            { num: "01", title: "数据采集", sub: "Data Acquisition", desc: "采集来自传感器设备、楼宇设备以及中低端 PLC 等多源工业数据，兼容上百种型号的工业和能源设备通信协议。", tags: "多源采集 · PLC · 传感器 · 上百种协议", media: { type: "video", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/video/embody/工业物联-1.mp4" } },
            { num: "02", title: "数据传输与汇聚", sub: "Transmission & Aggregation", desc: "通过蜂窝（4G）、局域（WiFi）和低功耗广域（LoRa）多网络灵活组网传输，将采集处理后的点位数据可靠发送至云端或数据中心，进行存储、分析与可视化应用。", tags: "4G · WiFi · LoRa · 云平台 · 可靠传输", media: { type: "image", src: "https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/工业物联-2.png" } as const },
          ].map((m) => (
            <SolutionMediaCard key={m.num} num={m.num} total={2} title={m.title} sub={m.sub} desc={m.desc} tags={m.tags} media={m.media} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
