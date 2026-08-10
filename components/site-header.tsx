"use client";
import { useState } from "react";
import Image from "next/image";

export default function SiteHeader({ productPage = false }: { productPage?: boolean }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<"brain" | "cerebellum" | null>(null);

  return (
    <header className="site-header">
      <a className="brand" href="/">
        <Image src="https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/logo1.webp" width={180} height={42} alt="Sysoul" priority />
      </a>
      <nav className="nav-links">
        <a href="/">首页</a>

        {/* Products dropdown with nested flyout */}
        <div
          className="nav-dropdown"
          onMouseEnter={() => setProductsOpen(true)}
          onMouseLeave={() => { setProductsOpen(false); setSubmenuOpen(null); }}
        >
          <a
            className={`nav-dropdown-trigger${productPage ? " active" : ""}`}
            href="/products"
          >
            具身产品 <span className="dropdown-arrow">▾</span>
          </a>
          {productsOpen && (
            <div className="nav-dropdown-menu nav-dropdown-menu--products">
              <a href="/products">产品总览</a>

              {/* 大脑 — flyout */}
              <div
                className="nav-flyout-anchor"
                onMouseEnter={() => setSubmenuOpen("brain")}
                onMouseLeave={() => setSubmenuOpen(null)}
              >
                <span className="nav-flyout-trigger">
                  大脑 <span className="flyout-arrow">›</span>
                </span>
                {submenuOpen === "brain" && (
                  <div className="nav-flyout-menu">
                    <a href="/products/allinone">智脑盒子</a>
                    <a href="/products/cyber">赛博机器人</a>
                  </div>
                )}
              </div>

              {/* 小脑 — flyout */}
              <div
                className="nav-flyout-anchor"
                onMouseEnter={() => setSubmenuOpen("cerebellum")}
                onMouseLeave={() => setSubmenuOpen(null)}
              >
                <span className="nav-flyout-trigger">
                  小脑 <span className="flyout-arrow">›</span>
                </span>
                {submenuOpen === "cerebellum" && (
                  <div className="nav-flyout-menu">
                    <a href="/products/cerebellum">运控算法</a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Solutions dropdown */}
        <div
          className="nav-dropdown"
          onMouseEnter={() => setSolutionsOpen(true)}
          onMouseLeave={() => setSolutionsOpen(false)}
        >
          <span className="nav-dropdown-trigger">
            案例与解决方案 <span className="dropdown-arrow">▾</span>
          </span>
          {solutionsOpen && (
            <div className="nav-dropdown-menu">
              <a href="/solutions/enterprise">面向企业的解决方案</a>
              <a href="/solutions/research">面向科研的解决方案</a>
              <a href="/solutions/personal">面向个人的解决方案</a>
            </div>
          )}
        </div>

        <a className="nav-external" href="https://robonix.syswonder.org/" target="_blank" rel="noreferrer">Robonix <span className="ext-icon">↗</span></a>
        <a href="/docs">文档中心</a>
        <a href="/about">关于我们</a>
        <a className="nav-external nav-external-sm" href="http://121.43.228.68:4000/" target="_blank" rel="noreferrer">工业物联 <span className="ext-icon">↗</span></a>
      </nav>
      <a className="header-cta" href="#site-footer">联系 Sysoul <span>↓</span></a>
    </header>
  );
}
