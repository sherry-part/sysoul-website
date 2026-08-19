"use client";
import { useState } from "react";

export default function SiteHeader() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [extOpen, setExtOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-main">
      <a className="brand" href="/">
        <img src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/logo1.webp" alt="Sysoul" />
      </a>
      <nav className="nav-links">
        {/* Solutions dropdown */}
        <div
          className="nav-dropdown"
          onMouseEnter={() => setSolutionsOpen(true)}
          onMouseLeave={() => setSolutionsOpen(false)}
        >
          <span className="nav-dropdown-trigger">
            解决方案 <span className="dropdown-arrow">▾</span>
          </span>
          {solutionsOpen && (
            <div className="nav-dropdown-menu">
              <a href="/solutions/robot-dog">四足机器人</a>
              <a href="/solutions/robot-arm">机械臂</a>
              <a href="/solutions/dexterous-hand">灵巧手</a>
              <a href="/solutions/joint">关节</a>
              <a href="/solutions/cyber-robot">赛博机器人</a>
              <a href="/solutions/iot-sensing">工业物联</a>
            </div>
          )}
        </div>

        <a href="/docs">资源中心</a>
        <a href="/about">关于我们</a>
      </nav>
      <div className="header-actions">
        <div
          className="nav-dropdown"
          onMouseEnter={() => setExtOpen(true)}
          onMouseLeave={() => setExtOpen(false)}
        >
          <span className="nav-dropdown-trigger">
            外部链接 <span className="dropdown-arrow">▾</span>
          </span>
          {extOpen && (
            <div className="nav-dropdown-menu ext-menu">
              <a href="https://robonix.ai" target="_blank" rel="noreferrer">Robonix OS ↗</a>
              <a href="https://xuos.io/" target="_blank" rel="noreferrer">XiUOS ↗</a>
              <a href="https://syswonder.org/" target="_blank" rel="noreferrer">矽望社区 ↗</a>
              <a href="https://ubios.ccf.org.cn/" target="_blank" rel="noreferrer">CCF 泛在操作系统社区 ↗</a>
            </div>
          )}
        </div>
        <a className="header-cta" href="#site-footer">联系 Sysoul ↓</a>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="切换菜单"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          <a href="/solutions/robot-dog">四足机器人</a>
          <a href="/solutions/robot-arm">机械臂</a>
          <a href="/solutions/dexterous-hand">灵巧手</a>
          <a href="/solutions/joint">关节</a>
          <a href="/solutions/cyber-robot">赛博机器人</a>
          <a href="/solutions/iot-sensing">工业物联</a>
          <a href="/docs">资源中心</a>
          <a href="/about">关于我们</a>
          <div className="mobile-menu-divider" />
          <a href="https://robonix.ai" target="_blank" rel="noreferrer">Robonix OS ↗</a>
          <a href="https://xuos.io/" target="_blank" rel="noreferrer">XiUOS ↗</a>
          <a href="https://syswonder.org/" target="_blank" rel="noreferrer">矽望社区 ↗</a>
          <a href="https://ubios.ccf.org.cn/" target="_blank" rel="noreferrer">CCF 泛在操作系统社区 ↗</a>
          <a href="#site-footer">联系 Sysoul ↓</a>
        </nav>
      )}
    </header>
  );
}
