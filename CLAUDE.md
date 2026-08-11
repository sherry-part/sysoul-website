# Sysoul Website — 希秀科技官网

## Overview

Sysoul（杭州希秀泛在计算技术有限公司）官网，展示具身智能操作系统、智能硬件平台与行业解决方案。站点风格为 **深色科技风 / Cyber-Industrial HUD**，暗色背景配青色 (#82e8ff) 和紫色 (#a78bfa) 点缀，大量使用 JetBrains Mono 等宽字体作 HUD 标签。

---

## Tech Stack

- **Next.js 16** (App Router, `"use client"` components)
- **React 19** + TypeScript 5.8
- **Framer Motion** (首页 logo 动画)
- **CSS** (globals.css, 约 4600 行), 无 Tailwind, 无 CSS-in-JS
- Static assets on Alibaba Cloud OSS (`s-ysoul.oss-cn-hangzhou.aliyuncs.com`)

---

## Design Tokens

### Variables (`:root`, globals.css line 50-58)

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg` | `#121e30` | 页面底色 |
| `--ink` | `#f2f6ff` | 正文、标题色 |
| `--muted` | `#a8b8ce` | 次要文字、描述 |
| `--cyan` | `#82e8ff` | 大脑主题色、hover、标签 |
| `--blue` | `#5090f0` | 链接、按钮 |
| `--line` | `#ffffff20` | 分割线、边框 |
| `--panel` | `#182438` | 卡片、面板背景 |

### Typography

- **正文**: `MiSans` (400/500/600/700), fallback `Arial, Microsoft YaHei, sans-serif`
- **HUD/代码/标签**: `JetBrains Mono` (400/600), fallback `Courier New, monospace`
- 正文 14-15px, HUD 标签 9-11px, 大标题 `clamp(36px, 5vw, 56px)`

### 完整调色板

**青色系 (大脑 · 全站主点缀)**: `#82e8ff` (token), `#68e1ff` (HUD/label, 最常用), `#8deaff`, `#6edfff`, `#79dfff`, `#53cfff`, `#6ee8ff`, `#4fd7ff`, `#5db8fe`, `#00e0ff`/`#00c8ff`/`#00dcff` (HUD glowing dots)

**蓝紫色系 (小脑 · 赛博)**: `#a78bfa` (主紫), `#ad79ff`, `#a575ff`, `#b79bff`, `#c4aaff`, `#613fc1`

**蓝色系 (渐变背景)**: `#5090f0` (token), `#2d74ff`, `#1974ff`, `#2864db`, `#1452b5`, `#56b9ed`, `#4d9bd5`, `#5a9ec0`, `#153c6e`, `#1d5281`, `#153d89`, `#122a5c`, `#0f2550`, `#102b59`

**暗色背景 (硬编码，由深到浅)**: `#0a1122` (hero), `#0c1422`, `#0c1524`, `#0c1726`, `#0e182a`, `#0e1a2a`, `#101d30` (panel), `#111824` (dropdowns), `#0d1a30`

**文字层级 (由亮到暗)**: `#f2f6ff` (ink), `#dceeff` (active nav), `#bcc8dc` (nav links), `#a8b8ce` (muted), `#8899bb`, `#7086aa` (sub-muted), `#60708d`, `#4a5d7a` (footer legal)

**橙色**: `#ff8c42` (callout labels, phase badges)

**绿色**: `#3ee6a0` (HUD status dots)

---

## 文案规范

### 品牌
- 公司名: **杭州希秀泛在计算技术有限公司**
- 简称: **希秀科技 / Sysoul**
- 定位: **具身智能基础设施提供者**
- Slogan: **让机器人走进千行百业，更好地服务人类**

### 产品体系
- **大脑** (Cerebrum): Robonix 驱动 — 希秀智脑 (一体机) + 赛博机器人
- **小脑** (Cerebellum): XiUOS 驱动 — 运控算法
- **联名款**: 节卡-矽璓移动机器人, 云深处-矽璓四足狗, 汉特云-矽璓服务机器人, Robonix-D1灵巧手, 松灵-矽璓机械臂

### 双 OS 核心文案
- **Robonix**: 面向具身智能时代的开源操作系统，向下抽象异构机器人本体，向上编排任务、技能与 AI 模型
- **XiUOS 矽璓**: 面向工业物联与具身设备"现场计算"场景的轻量化实时操作系统，硬实时调度、微秒级中断响应

### 开放生态
- 打破封闭，共建开放生态
- 不锁定任何硬件、不限制任何模型
- Sysoul 开放平台让机器人技能可以跨本体复用

---

## File Structure

```
app/
├── page.tsx                          # 首页 — 全屏 hero + 品牌动画 + Footer
├── globals.css                       # 全部样式 (~4600 行)
├── layout.tsx                        # 根 layout
├── about/page.tsx                    # 关于我们 — 公司介绍完整页
├── docs/page.tsx                     # 文档中心 — 分类卡片跳转
├── products/
│   ├── page.tsx                      # 产品总览 — Carousel + 生态 + 大脑/小脑 + 联名
│   ├── allinone/page.tsx             # 希秀智脑 (一体机) 详情页
│   ├── cyber/page.tsx                # 赛博机器人详情页
│   ├── cerebellum/page.tsx           # 运控算法详情页 (含联名款产品)
│   ├── body/page.tsx                 # 联名本体 (旧，降级保留)
│   └── open-source/page.tsx          # 开源本体 (旧，降级保留)
├── solutions/
│   ├── enterprise/page.tsx           # 面向企业的解决方案
│   ├── research/page.tsx             # 面向科研的解决方案
│   ├── personal/page.tsx             # 面向个人的解决方案
│   ├── delivery-robot/page.tsx       # 智能取送机器人案例
│   └── bci/page.tsx                  # 脑机交互案例
```

```
components/
├── site-header.tsx                   # 全局导航栏 (含下拉+flyout)
├── footer.tsx                        # 全局页脚 (logo+地址+备案)
├── product-carousel.tsx              # 产品总览页全屏轮播 (自动+暂停)
├── scroll-reveal.tsx                 # 滚动渐入动画包装器 (framer-motion)
└── ecosystem-tree.tsx                # 生态树可视化组件

constants.ts                          # 轮播 slides 数据 + 合作伙伴列表
```

---

## 页面结构详解

### 1. 首页 (`/`)
- **导航栏**: 无 logo (homePage prop 隐藏), 仅 5 个主导航 + 右侧 Robonix/工业物联/联系
- **Hero**: CSS background-image (`/images/background.png`), `background-size: cover`
- **品牌动画** (Framer Motion): Logo 擦除 → Slogan 出现 → "进入产品世界" CTA 按钮
- **Footer**: 同全局

### 2. 产品总览 (`/products`)
- **Product Carousel**: 全屏轮播，3 个 slide (希秀智脑/赛博机器人/联名款本体)，4s 自动右向，暂停按钮
- **开放生态**: 4 个卡片 (技能工坊/开发者社区/开放 API/合作生态)，居中标题
- **大脑分隔线**: `Robonix` 大字 + 简介
- **希秀智脑**: 左右两栏 (文字+视频)，青色 `brain-label` 标签
- **赛博机器人**: 左右两栏 (图片+文字)，青色 `brain-label` 标签
- **小脑分隔线**: `XiUOS 矽璓` 大字 + 简介 (紫色)
- **运控算法**: 左右两栏 XiUOS 小脑 + 算法库卡片
- **教程视频**: 3 列视频卡片
- **合作伙伴**: 双行无限滚动 marquee

### 3. 产品子页 (allinone/cyber/cerebellum)
- 统一模板: Hero (左右栏) → 概述 → 特性 → 为什么选择 → 规格 → CTA → Footer
- Hero 数字用青色发光 (`text-shadow: 0 0 28px var(--cyan)66`)

### 4. 关于我们 (`/about`)
- Hero → 核心判断引用 → 战略跃迁双卡片 → 发展历程时间线 → 愿景使命大字 → 发展规划三步走 → 资质荣誉统计 → 结语三大定位 → Footer

---

## 导航栏结构

```
顶部: [logo(首页隐藏)] [首页|具身产品▾|案例与解决方案▾|文档中心|关于我们] [Robonix↗|工业物联↗|联系 Sysoul↓]

具身产品 ▾
  ├── 产品总览
  ├── 大脑 ›  (flyout → 希秀智脑 / 赛博机器人)
  └── 小脑 ›  (flyout → 运控算法)

案例与解决方案 ▾
  ├── 面向企业的解决方案
  ├── 面向科研的解决方案
  ├── 面向个人的解决方案
  ├── ──────────
  ├── 智能取送机器人案例
  └── 脑机交互案例
```

导航栏 CSS: `grid-template-columns: 1fr auto 1fr` 三列布局，nav-links 居中列，header-actions 右列

---

## 美术风格指南

### 基本原则
- **深色底 + 青色点缀**: 科技感、不压抑
- **JetBrains Mono 做标签**: 模拟 HUD 界面
- **大量留白**: section padding 160px 8vw
- **微弱的 border-top**: 每个 section 顶部有 `--line` 色分割线 + 青色渐变亮点
- **渐变背景**: section 背景常用 `radial-gradient` 营造光晕

### 大脑 vs 小脑配色
- **大脑** (Robonix): `--cyan` (#82e8ff) 青色
- **小脑** (XiUOS): `#a78bfa` 紫色

### HUD 卡片
- 背景: `var(--panel)` 半透明深色
- 边框: 1px `var(--line)`
- hover: 边框变亮，轻微阴影

### Section 交替
- 默认: `var(--bg)` 底色
- `.pd-section-alt`: 稍亮 (`#0e1a2a`)，上下边框，顶部青色微光

### 动效
- ScrollReveal: 滚动到视口时淡入上移
- Carousel: `translateX` 过渡 0.5s cubic-bezier
- 首页: Framer Motion clipPath 擦除 + laser line

---

## 代码规范

- 所有交互组件标记 `"use client"`
- 图片来自 OSS: `https://s-ysoul.oss-cn-hangzhou.aliyuncs.com/public/images/`
- 本地图片: `/images/` (public/images/)
- 外部链接加 `target="_blank" rel="noreferrer"`
- Footer 使用普通 `<img>` (不用 Next.js Image，避免变形)
- 导航栏 flyout 用 `onMouseEnter/Leave` 控制 state

---

## 关键外部链接

- Robonix 文档: `https://book.robonix.ai`
- 包目录: `https://packages.robonix.ai`
- Robonix 社区: `https://robonix.syswonder.org/`
- 工业物联: `http://121.43.228.68:4000/`
- 联系邮箱: `info@sysoul.com`
- 电话: `0571-82192578`
- 地址: 浙江省杭州市萧山区宁围街道永晖路233号杭州湾智慧谷大厦19楼1906室

---

## 已知问题 / TODO

- 文档中心热门文档和 API 参考面板已删除，待内容就绪后恢复
- 产品子页 body 和 open-source 为旧内容，已从导航移除
- 联名款产品区图片和文案待最终确认
