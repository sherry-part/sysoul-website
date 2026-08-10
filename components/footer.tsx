export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img
            src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/logo1.webp"
            alt="Sysoul"
            className="footer-logo"
          />
          <p className="footer-tagline">让机器人走进千行百业，更好地服务人类</p>
        </div>
        <div className="footer-info">
          <p>浙江省杭州市萧山区宁围街道永晖路233号</p>
          <p>杭州湾智慧谷大厦19楼1906室</p>
          <p className="footer-contact">
            <span>0571-82192578</span>
            <span className="footer-sep">|</span>
            <span>info@sysoul.com</span>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>杭州希秀泛在计算技术有限公司</span>
        <span className="footer-sep">|</span>
        <span>浙ICP备2023005800号-1</span>
        <span className="footer-sep">|</span>
        <span>浙公网安备 33010902003532号</span>
      </div>
    </footer>
  );
}
