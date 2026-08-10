
# 企业合作伙伴 Logo 轮播动画 — 技术实现指南

## 1. 概述

首页"**为企业定制专属智能化方案**"标题下方的合作企业 Logo 轮播，采用**纯 CSS 关键帧动画**实现的双行无缝无限滚动（Marquee/Ticker），**不依赖任何第三方轮播库**（如 Swiper）。

核心特征：
- 两行 Logo 卡片以**相反方向**水平匀速滚动
- 鼠标悬停时**暂停**动画
- 通过 CSS 自定义属性控制速度，无需改动组件源码
- 内容自动重复以填满视口，实现"无限"视觉效果

---

## 2. 架构总览

```
┌─────────────────────────────────────────────────────┐
│  HomePage.tsx                                        │
│  ├─ companyLogos[] 数据源（企业名称字符串数组）         │
│  ├─ firstRow[] / secondRow[] 拆分为两行               │
│  ├─ <Marquee> 组件 × 2                               │
│  │   ├─ firstRow  → 正向滚动                          │
│  │   └─ secondRow → 反向滚动 (reverse)                │
│  └─ <Image> 通过 getOssUrl() 加载 OSS 上的 .webp     │
├─────────────────────────────────────────────────────┤
│  marquee.tsx (Magic UI 组件)                         │
│  ├─ 接收 children, repeat, reverse, pauseOnHover 等   │
│  ├─ 将 children 复制 4 份，放入 flex 容器              │
│  └─ 挂载 CSS 动画类名 animate-marquee                 │
├─────────────────────────────────────────────────────┤
│  globals.css (Tailwind v4 @theme inline)             │
│  ├─ @keyframes marquee                               │
│  │   from: translateX(0)                             │
│  │   to:   translateX(calc(-100% - var(--gap)))      │
│  └─ --animate-marquee 绑定动画                        │
└─────────────────────────────────────────────────────┘
```

---

## 3. CSS 关键帧动画（globals.css）

文件位置：`src/app/globals.css:177-197`

```css
@theme inline {
  /* 定义动画：从 var(--duration) 读取时长，infinite 无限循环，linear 匀速 */
  --animate-marquee: marquee var(--duration) infinite linear;
  --animate-marquee-vertical: marquee-vertical var(--duration) linear infinite;

  /* 水平滚动关键帧 */
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }

  /* 垂直滚动关键帧（本场景未使用，预留给未来需求） */
  @keyframes marquee-vertical {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - var(--gap)));
    }
  }
}
```

### 核心原理

| 要素 | 说明 |
|------|------|
| `var(--duration)` | CSS 自定义属性，控制单次完整滚动周期。默认 `40s`，本场景覆盖为 `20s` |
| `var(--gap)` | 元素间距，默认 `1rem` |
| `calc(-100% - var(--gap))` | 向左平移一份子内容宽度 + 间距。因为内容被复制了 N 份，当第一份完全移出视口时，第二份正好填补上来，形成无缝循环 |
| `infinite` | 无限循环 |
| `linear` | 匀速运动，无缓入缓出，确保视觉连续性 |

### 无缝循环的秘密

假设原始内容宽度为 W，`repeat = 4` 时实际渲染 4 份：
```
[内容A] [gap] [内容B] [gap] [内容C] [gap] [内容D] [gap]
```

动画将整个容器从 `translateX(0)` 移动到 `translateX(calc(-100% - var(--gap)))`，即恰好移动"一份内容 + 一个间距"的距离。由于移动距离等于一份内容的宽度，当第一份移出时第四份同步补位，肉眼完全感知不到跳变。

---

## 4. Marquee 组件（marquee.tsx）

文件位置：`src/shadcn/magicui/marquee.tsx`

```tsx
import { cn } from "@/shadcn/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  /** 是否反向滚动 @default false */
  reverse?: boolean;
  /** 鼠标悬停时是否暂停 @default false */
  pauseOnHover?: boolean;
  /** 要展示的内容 */
  children: React.ReactNode;
  /** 是否垂直滚动 @default false */
  vertical?: boolean;
  /** 内容重复次数 @default 4 */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex p-2 overflow-hidden [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex justify-around shrink-0 [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
```

### 组件设计要点

#### a) 外层容器（`<div group>`）

```
display: flex
overflow: hidden          ← 关键：裁切超出部分，隐藏复制的内容
padding: 0.5rem
--duration: 40s           ← 默认动画时长（可被 className 覆盖）
--gap: 1rem               ← 默认间距
gap: var(--gap)
```

- `group` 类使内部子元素可以通过 `group-hover:` 响应外层 hover 事件——这是悬停暂停的触发器

#### b) 内层动画容器 × repeat 份

每份都是一个独立的 flex 容器，包含所有 children：

```
display: flex
justify-content: space-around
flex-shrink: 0            ← 关键：不允许收缩，保证每份宽度 = 原始内容宽度
gap: var(--gap)
animation: animate-marquee ← CSS 动画绑定
```

- `shrink-0`：确保每份内容保持其自然宽度，不被外层 `overflow:hidden` 压缩
- `repeat = 4`：生成 4 份相同内容。这个数字要足够大，以保证在任何屏幕宽度下至少有 2 份内容同时可见，从而不会出现"跑空"的情况

#### c) 动画方向控制

```tsx
{ "[animation-direction:reverse]": reverse }
```

直接在动画元素上覆盖 `animation-direction`：
- 不传 `reverse` → 左向右（内容向右移动，视觉上 Logo 向左滚动）
- `reverse` → 右向左（视觉上 Logo 向右滚动）

#### d) 悬停暂停

```tsx
{ "group-hover:[animation-play-state:paused]": pauseOnHover }
```

利用 CSS `group-hover` 机制：鼠标悬停在外层 `group` 容器上时，将内层动画状态设为 `paused`。

---

## 5. 使用侧：HomePage.tsx 中的数据与渲染

文件位置：`src/components/HomePage.tsx:50-370`

### 数据源

```tsx
const companyLogos = [
  '大胜达',
  '杭萧钢构',
  '恒逸',
  '杰牌传动',
  '钱江电气',
  '荣盛',
  // '世友地板',  // 已注释，随时可恢复
  '习酒',
  '中策橡胶',
]
const firstRow = companyLogos.slice(0, companyLogos.length / 2)  // 前 4 个
const secondRow = companyLogos.slice(companyLogos.length / 2)     // 后 4 个
```

### JSX 渲染

```tsx
<section className="m-[0_auto] py-25 max-w-320">
  {/* 标题 */}
  <div className="font-medium text-3xl">为企业定制专属智能化方案</div>

  {/* 轮播容器 */}
  <div className="relative flex flex-col justify-center items-center
                  m-[0_auto] mt-10 w-full max-w-320 overflow-hidden">

    {/* 第一行：正向滚动 */}
    <Marquee pauseOnHover className="[--duration:20s]">
      {firstRow.map(logo => (
        <div key={logo}
             className="relative flex justify-center items-center
                        bg-white hover:shadow-xs rounded-2xl w-60 h-30">
          <Image
            src={getOssUrl(`/homepage/company/${logo}.webp`)}
            fill
            alt=""
            className="p-7 object-contain"
          />
        </div>
      ))}
    </Marquee>

    {/* 第二行：反向滚动 */}
    <Marquee reverse pauseOnHover className="[--duration:20s]">
      {secondRow.map(logo => (
        <div key={logo}
             className="relative flex justify-center items-center
                        bg-white hover:shadow-xs rounded-2xl w-60 h-30">
          <Image
            src={getOssUrl(`/homepage/company/${logo}.webp`)}
            fill
            alt=""
            className="p-7 object-contain"
          />
        </div>
      ))}
    </Marquee>
  </div>
</section>
```

### 传入参数说明

| 参数 | 第一行 | 第二行 | 作用 |
|------|--------|--------|------|
| `pauseOnHover` | ✅ | ✅ | 鼠标悬停暂停滚动 |
| `reverse` | ❌ | ✅ | 两行反向滚动，增强视觉活力 |
| `[--duration:20s]` | ✅ | ✅ | 将默认 40s 加速到 20s |
| `children` | 4 张卡片 | 4 张卡片 | 企业 Logo 卡片 |

### 图片路径解析

`getOssUrl('/homepage/company/大胜达.webp')` → `${NEXT_PUBLIC_OSS_DOMAIN}/public/homepage/company/大胜达.webp`

若环境变量 `NEXT_PUBLIC_OSS_DOMAIN` 未设置，则退回使用原始路径。

---

## 6. 自定义与扩展指南

### 调整滚动速度

通过 `className` 覆盖 `--duration` CSS 变量即可，无需修改组件：

```tsx
{/* 慢速：40 秒 */}
<Marquee className="[--duration:40s]">...</Marquee>

{/* 快速：10 秒 */}
<Marquee className="[--duration:10s]">...</Marquee>

{/* 超慢：60 秒 */}
<Marquee className="[--duration:60s]">...</Marquee>
```

### 调整卡片间距

覆盖 `--gap` 变量：

```tsx
<Marquee className="[--gap:2rem]">...</Marquee>
```

### 切换为垂直滚动

```tsx
<Marquee vertical className="[--duration:15s]">...</Marquee>
```

这会启用 `marquee-vertical` 关键帧动画，内容从下向上滚动。

### 同时调整速度和间距

```tsx
<Marquee className="[--duration:25s] [--gap:2rem]">...</Marquee>
```

### 增加更多 Logo

只需在 `companyLogos` 数组中添加名称，确保 OSS 上存在对应的 `.webp` 文件：

```tsx
const companyLogos = [
  '大胜达', '杭萧钢构', '恒逸', '杰牌传动',
  '钱江电气', '荣盛', '习酒', '中策橡胶',
  '新企业A', '新企业B',   // 新增
]
```

`firstRow` / `secondRow` 通过 `slice` 自动平分，无需手动调整。

### 修改弹出行数

当前为两行，如需三行：

```tsx
const ROWS = 3
const rowSize = Math.ceil(companyLogos.length / ROWS)
const rows = Array.from({ length: ROWS }, (_, i) =>
  companyLogos.slice(i * rowSize, (i + 1) * rowSize)
)
```

---

## 7. 踩坑与注意点

1. **`shrink-0` 不可或缺**：如果动画容器内的元素被压缩，`translateX(-100%)` 移动的距离会小于预期，导致滚动出现"跳帧"或空白间隙。

2. **`repeat` 数量要充足**：默认 `repeat = 4`。如果屏幕很宽且 Logo 很少，`repeat` 偏小会导致滚动中出现空白。公式参考：`repeat ≥ ceil(viewport_width / content_width) + 1`。

3. **`overflow-hidden` 在外层**：必须在外层容器设置，而非动画容器。因为动画容器本身会因 `translateX` 移出父容器——若外层不裁切则内容会溢出页面。

4. **Tailwind v4 `@theme inline`**：关键帧必须定义在 `@theme inline` 块内，这是 Tailwind v4 注册自定义动画的标准方式。如果放在普通 `@keyframes` 中，`animate-marquee` 工具类将无法识别。

5. **图片优化**：使用 Next.js `<Image>` 组件的 `fill` + `object-contain`，配合 `.webp` 格式，确保在任何设备上 Logo 清晰且加载迅速。

6. **为什么不用 Swiper 做这个？** Swiper 是为"一屏一页"的轮播设计的，做无缝无限滚动需要复杂的 `loop` + `slidesPerView: 'auto'` + `freeMode` + `autoplay` 组合配置，且 DOM 结构更重。纯 CSS 方案更轻量、性能更好、代码更少。

---

## 8. 总结

| 维度 | 实现方式 |
|------|----------|
| 动画引擎 | CSS `@keyframes` + `translateX` |
| 动画类型 | 无限线性匀速滚动 |
| 循环机制 | 内容复制 4 份 + `translateX(-100% - gap)` |
| 方向控制 | CSS `animation-direction: reverse` |
| 悬停暂停 | CSS `group-hover` + `animation-play-state: paused` |
| 速度调节 | CSS 自定义属性 `--duration` |
| 组件来源 | Magic UI Marquee（`src/shadcn/magicui/marquee.tsx`） |
| 第三方依赖 | 无 |
| 浏览器兼容 | 所有现代浏览器（CSS transform + custom properties） |

这是一个**极简但完整**的无缝轮播方案：~70 行组件代码 + 15 行 CSS，零额外依赖，性能优异，可复用性高。
