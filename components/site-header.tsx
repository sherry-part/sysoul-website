"use client";
import { useState } from "react";
import Image from "next/image";

export default function SiteHeader({ productPage = false }: { productPage?: boolean }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="/">
        <Image src="/images/logo1.webp" width={180} height={42} alt="Sysoul" priority />
      </a>
      <nav className="nav-links">
        <a href="/">首页</a>

        {/* Products dropdown */}
        <div
          className="nav-dropdown"
          onMouseEnter={() => setProductsOpen(true)}
          onMouseLeave={() => setProductsOpen(false)}
        >
          <a
            className={`nav-dropdown-trigger${productPage ? " active" : ""}`}
            href="/products"
          >
            具身产品 <span className="dropdown-arrow">▾</span>
          </a>
          {productsOpen && (
            <div className="nav-dropdown-menu">
              <a href="/products">产品总览</a>
              <a href="/products/allinone">一体机 · 智脑盒子</a>
              <a href="/products/body">联名本体</a>
              <a href="/products/cyber">赛博机器人</a>
            </div>
          )}
        </div>

        <a className="nav-external" href="https://robonix.syswonder.org/" target="_blank" rel="noreferrer">Robonix <span className="ext-icon">↗</span></a>
        <a className="nav-external" href="http://121.43.228.68:4000/" target="_blank" rel="noreferrer">工业物联 <span className="ext-icon">↗</span></a>

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
              <a href="/solutions/enterprise">面向企业的解决方案</a>
              <a href="/solutions/research">面向科研的解决方案</a>
              <a href="/solutions/personal">面向个人的解决方案</a>
            </div>
          )}
        </div>

        <a href="/docs">文档中心</a>
        <a href="/about">关于我们</a>
      </nav>
      <a className="header-cta" href="mailto:contact@sysoul.ai">联系 Sysoul <span>↗</span></a>
    </header>
  );
}
