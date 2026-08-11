"use client";
import { useState } from "react";
import Image from "next/image";

export default function SiteHeader() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-main">
      <a className="brand" href="/">
        <Image src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/logo1.webp" width={180} height={42} alt="Sysoul" priority />
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
              <a href="/solutions/cyber-robot">赛博机器人</a>
              <a href="/solutions/course-materials">课程素材</a>
              <a href="/solutions/robot-dog">基于机器狗的解决方案</a>
              <a href="/solutions/robot-arm">基于机械臂的解决方案</a>
              <a href="/solutions/dexterous-hand">基于灵巧手的解决方案</a>
              <a href="/solutions/bci">基于脑机交互的解决方案</a>
              <a href="/solutions/iot-sensing">基于物联感知的解决方案</a>
              <a href="/solutions/joint">基于关节的解决方案</a>
            </div>
          )}
        </div>

        <a href="/docs">资源中心</a>
        <a href="/about">关于我们</a>
      </nav>
      <div className="header-actions">
        <a className="nav-sub" href="https://robonix.ai" target="_blank" rel="noreferrer">Robonix OS ↗</a>
        <a className="nav-sub" href="https://xuos.io/" target="_blank" rel="noreferrer">XiUOS ↗</a>
        <a className="header-cta" href="#site-footer">联系 Sysoul ↓</a>
      </div>
      </div>
    </header>
  );
}
