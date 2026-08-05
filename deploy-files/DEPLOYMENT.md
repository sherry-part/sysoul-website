# 杭州希秀泛在计算技术有限公司 - 门户网站部署指导文档

## 一、项目概述

| 项目名称 | protal |
|---------|--------|
| 框架 | Next.js 15.3.8 (App Router) |
| 运行时 | Node.js |
| 包管理器 | pnpm |
| 构建输出 | `standalone`（自包含 Node.js 服务器） |
| 默认端口 | 3000 |
| 生产服务器 | `47.96.189.32`（阿里云 ECS） |
| 生产访问地址 | `http://47.96.189.32:4000` |
| 已部署版本 | `V1.12`（阿里云 ACR 镜像） |

## 二、现有部署资源一览

### 2.1 现有部署文件

| 文件 | 用途 |
|------|------|
| `Dockerfile` | 多阶段 Docker 构建（Alpine + pnpm + standalone） |
| `docker-compose.yaml` | 本地 Docker Compose 快速部署 |
| `deploy-aliyun.sh` | **正式生产部署脚本**，一键构建镜像 → 推送 ACR → 远程部署 |

### 2.2 阿里云 ACR 镜像仓库

| 配置项 | 值 |
|--------|-----|
| 仓库地址 | `registry.cn-hangzhou.aliyuncs.com/aliyun_hujun/portal` |
| 命名空间 | `aliyun_hujun` |
| 仓库名 | `portal` |
| 登录用户 | `aliyun9218772975` |
| 地域 | `cn-hangzhou`（杭州） |

### 2.3 生产服务器

| 配置项 | 值 |
|--------|-----|
| 服务器 IP | `47.96.189.32` |
| SSH 端口 | 22 |
| SSH 用户 | `root` |
| 容器内端口 | `3000`（Docker 内部） |
| 宿主机端口 | `4000`（对外暴露） |
| 容器名 | `portal` |
| 重启策略 | `unless-stopped` |

## 三、环境变量

部署前需要配置以下环境变量：

| 变量名 | 是否必需 | 说明 | 默认值 |
|--------|---------|------|--------|
| `NEXT_PUBLIC_OSS_DOMAIN` | **是**（生产） | 阿里云 OSS 图片存储域名。不设置则使用相对路径，图片可能无法加载 | 无 |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | 否 | Sanity CMS 项目 ID，用于新闻内容管理 | `cnzwyhcr` |

### 环境变量示例

```bash
NEXT_PUBLIC_OSS_DOMAIN=https://s-ysoul.oss-cn-hangzhou.aliyuncs.com
NEXT_PUBLIC_SANITY_PROJECT_ID=cnzwyhcr
```

> ⚠️ **关键提醒**：`NEXT_PUBLIC_` 前缀的变量在 **`next build` 构建时**被内联到客户端 JS bundle。如果未在构建时设置，后续运行时设置无效。当前 `deploy-aliyun.sh` 和 `docker-compose.yaml` 均未传递这些变量，可能导致生产环境图片使用回退路径。

## 四、部署所需权限/资源清单

### 4.1 服务器资源

| 资源 | 最低配置 | 推荐配置 | 说明 |
|------|---------|---------|------|
| CPU | 1 核 | 2 核 | Node.js 事件循环模型，多核有助于处理并发请求 |
| 内存 | 512 MB | 1 GB+ | Next.js standalone 运行约 100-200MB，留有余量 |
| 磁盘 | 1 GB | 5 GB+ | Node 运行时 + 构建产物 + 静态资源 + Docker 镜像 |
| 操作系统 | Linux | Alpine / Ubuntu | Dockerfile 基于 `node:lts-alpine` |
| Docker | 20.10+ | 最新稳定版 | 生产使用 Docker 部署 |

### 4.2 网络权限

| 权限项 | 方向 | 端口/协议 | 用途 | 必需性 |
|--------|------|----------|------|--------|
| Web 服务 | 入站 | 4000 (TCP) | 用户浏览器访问门户网站 | **是** |
| 阿里云 OSS | 出站 | 443 (HTTPS) | 浏览器端加载 OSS 图片资源 | **是** |
| Sanity CMS API | 出站 | 443 (HTTPS) | 服务端获取新闻内容（`*.apicdn.sanity.io`） | **是**（新闻功能） |
| 阿里云 ACR | 出站 | 443 (HTTPS) | `docker pull` 镜像（服务器端） | **是**（Docker 部署） |
| SSH | 入站 | 22 (TCP) | 部署脚本远程执行命令 | 部署时需要 |
| NPM Registry | 出站 | 443 (HTTPS) | 构建阶段安装依赖 | 构建时需要 |

### 4.3 阿里云相关权限

| 服务 | 所需权限 | 说明 |
|------|---------|------|
| **阿里云 ECS** | root SSH 登录 | 服务器 `47.96.189.32:22`，用于远程部署和管理 |
| **阿里云 ACR（容器镜像服务）** | 推送/拉取镜像 | 用户 `aliyun9218772975`，用于存储和分发 Docker 镜像 |
| **阿里云 OSS（对象存储）** | Bucket 公共读 | Bucket `s-ysoul`，地域 `cn-hangzhou`，路径 `/public/**` 下的文件需浏览器可直接访问 |

### 4.4 外部 SaaS 服务权限

| 服务 | 所需权限 | 说明 |
|------|---------|------|
| **Sanity CMS** | API 读取权限（公开） | 项目 `cnzwyhcr`，dataset `production`，API v`2024-01-01`。当前 `useCdn: false`，直接读取 Sanity CDN API，**无需 API Token**（公开只读） |
| **NPM Registry** | 网络访问 | `pnpm install` 阶段下载依赖。国内建议配置 npmmirror 镜像加速 |

### 4.5 构建环境权限

| 权限项 | 说明 |
|--------|------|
| Docker 运行权限 | 执行 `docker build` / `docker buildx build` |
| 网络出站 | 下载 npm 依赖、基础镜像 |
| 磁盘写入 | 生成 `.next/` 和 Docker 镜像层 |
| 环境变量 | `NEXT_PUBLIC_*` 变量在 `docker build` 阶段使用 |

## 五、部署方式详解

### 方式一：使用 deploy-aliyun.sh 脚本部署（当前生产方案）

这是项目当前实际使用的生产部署方式。脚本位于项目根目录 `deploy-aliyun.sh`。

#### 前置依赖

在**本机**（执行部署的机器）上需要：

| 工具 | 版本要求 | 安装方式 |
|------|---------|---------|
| Docker | 20.10+ | [Docker Desktop](https://www.docker.com/products/docker-desktop/) 或 `yum install docker` |
| sshpass | 任意版本 | `apt install sshpass` / `brew install sshpass` / `yum install sshpass` |
| Bash | 4.0+ | 系统自带 |

#### 脚本工作流程

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  1. buildx  │ ──▶ │ 2. 推送 ACR   │ ──▶ │ 3. SSH 远程  │
│  构建镜像    │     │  tag + push  │     │  pull + run │
└─────────────┘     └──────────────┘     └─────────────┘
                                            │
                                    ┌───────┴───────┐
                                    │ 4. 启动容器     │
                                    │ -p 4000:3000   │
                                    │ restart=always │
                                    └───────────────┘
```

#### 执行部署

```bash
# 在项目根目录下
chmod +x deploy-aliyun.sh
./deploy-aliyun.sh
```

脚本会交互式提示输入：
1. **阿里云 ACR 密码**（用户 `aliyun9218772975`）
2. **服务器 SSH 密码**（`root@47.96.189.32`）
3. **确认部署**（y/N）

#### 脚本关键配置项

```bash
# 可在执行前通过环境变量覆盖
IMAGE_TAG=V1.13 ./deploy-aliyun.sh      # 修改版本标签
BUILD_PLATFORM=linux/arm64 ./deploy-aliyun.sh  # ARM 架构构建
```

#### ⚠️ 当前脚本缺少环境变量传递

部署脚本的 `docker run` 命令（第 240-244 行）未传递 `NEXT_PUBLIC_*` 环境变量。由于这些变量在**构建阶段**内联，如果构建时也未设置（Dockerfile 无 `ARG`/`ENV` 声明），生产容器可能使用回退值。

**建议修复**：在 Dockerfile 构建阶段添加环境变量支持（详见第七章）。

### 方式二：docker-compose 快速部署（本地/测试）

项目提供 `docker-compose.yaml`：

```yaml
services:
  web:
    build: .
    image: portal-web:0.1
    container_name: portal-web
    ports:
      - '3000:3000'
```

```bash
docker-compose up -d
```

访问 `http://localhost:3000`。

> 注意：docker-compose 也未传递环境变量，仅适用于已内置回退值的测试场景。

### 方式三：手动 Docker 部署

```bash
# 构建
docker build -t protal:latest .

# 运行
docker run -d \
  --name protal \
  --restart=unless-stopped \
  -p 3000:3000 \
  protal:latest
```

#### Docker 镜像安全特性

- 使用非 root 用户 `nextjs` 运行服务
- 基于 `node:lts-alpine`（轻量、安全）
- 多阶段构建，最终镜像不含构建工具链
- 只暴露 3000 端口

### 方式四：Node.js 直接部署（无 Docker）

#### 1. 环境准备与构建

```bash
corepack enable && corepack prepare pnpm@latest --activate
export NEXT_PUBLIC_OSS_DOMAIN=https://s-ysoul.oss-cn-hangzhou.aliyuncs.com
pnpm install
pnpm build
```

#### 2. 组装 standalone 产物

```bash
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
cd .next/standalone
PORT=3000 node server.js
```

#### 3. 使用 PM2 守护

```bash
npm install -g pm2
PORT=3000 pm2 start .next/standalone/server.js --name protal
pm2 save && pm2 startup
```

### 方式五：Vercel 部署

需要先修改 `next.config.ts`，移除或注释 `output: 'standalone'`，然后在 Vercel Dashboard 配置环境变量：

- `NEXT_PUBLIC_OSS_DOMAIN`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`

```bash
npm i -g vercel
vercel --prod
```

### 方式六：普通云服务器 + Nginx 反代

参照方式四部署后，配置 Nginx：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

配合 `certbot` 或 `acme.sh` 申请免费 SSL 证书。

## 六、外部依赖详解

### 6.1 阿里云 OSS

| 项目 | 说明 |
|------|------|
| Bucket | `s-ysoul` |
| 地域 | `cn-hangzhou`（杭州） |
| 访问域名 | `s-ysoul.oss-cn-hangzhou.aliyuncs.com` |
| 路径前缀 | `/public/` |
| 访问权限 | 需设为**公共读** |
| 用途 | 所有页面图片资源 |
| 风险 | OSS 欠费/到期 → 全站图片无法加载 |

代码使用方式（`src/utils/getOssUrl.ts`）：

```ts
// NEXT_PUBLIC_OSS_DOMAIN + '/public' + path → 完整 OSS URL
// 未设置则直接返回 path（相对路径回退）
```

### 6.2 Sanity CMS

| 项目 | 说明 |
|------|------|
| 项目 ID | `cnzwyhcr`（默认值，可覆盖） |
| Dataset | `production` |
| API 版本 | `2024-01-01` |
| CDN | `useCdn: false`（直读 API） |
| 鉴权 | 无需 Token（公开只读） |
| 用途 | 新闻列表 + 新闻详情页 |
| ISR 缓存 | `revalidate: 30` 秒 |
| 涉及文件 | `src/app/news/page.tsx`、`src/app/news/[slug]/page.tsx`、`src/santiy/client.ts` |

### 6.3 无数据库/后端

项目为纯前端展示型应用：
- 无 `src/app/api/` 路由
- 无 `middleware.ts`
- 无需数据库（MySQL/PostgreSQL/Redis 等）
- 无需后端服务

## 七、常见问题与改进建议

### 7.1 ⚠️ 环境变量构建时绑定问题

当前 `deploy-aliyun.sh` 和 `Dockerfile` 均未处理 `NEXT_PUBLIC_*` 环境变量的构建时注入。如果 OSS 域名/Sanity 项目 ID 变更，需修改代码默认值或改进构建流程。

**推荐修复方案**：修改 Dockerfile 支持构建参数：

```dockerfile
# ----------- 1. 构建阶段 -----------
FROM node:lts-alpine AS builder

# 声明构建参数
ARG NEXT_PUBLIC_OSS_DOMAIN
ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_OSS_DOMAIN=$NEXT_PUBLIC_OSS_DOMAIN
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID

RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install
COPY . .
RUN pnpm build

# ----------- 2. 生产运行阶段 -----------
FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
RUN mkdir -p .next/cache && chown -R nextjs:nextjs .next
USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]
```

然后在 `deploy-aliyun.sh` 的 `build_image()` 函数中添加 `--build-arg`：

```bash
docker buildx build \
  --platform "$BUILD_PLATFORM" \
  --build-arg NEXT_PUBLIC_OSS_DOMAIN=https://s-ysoul.oss-cn-hangzhou.aliyuncs.com \
  --build-arg NEXT_PUBLIC_SANITY_PROJECT_ID=cnzwyhcr \
  --progress=plain \
  -t "$IMAGE_NAME:$IMAGE_TAG" . \
  --load
```

### 7.2 Sharp 图像优化库

Dockerfile 中 `apk add libvips` 被注释掉了（第 24 行）。Next.js 的 `next/image` 组件推荐使用 Sharp 进行图像优化，当前没有安装 Sharp 会回退到 Squoosh（性能较差）。

**建议**：如需图像优化性能，取消注释：

```dockerfile
RUN apk add --no-cache libc6-compat libvips
```

并在 `package.json` 添加 `"sharp": "^0.33.0"` 依赖（或通过 `pnpm add sharp` 安装）。

### 7.3 TypeScript 和 ESLint 构建时忽略

当前 `next.config.ts` 配置了构建时忽略 TS 和 ESLint 错误。建议定期运行：

```bash
pnpm lint        # 检查代码规范
pnpm lint:fix    # 自动修复
npx tsc --noEmit # 类型检查
```

### 7.4 无 CI/CD 流水线

当前完全依赖手动执行 `deploy-aliyun.sh`。如需自动化，可添加 GitHub Actions / GitLab CI 实现代码推送后自动构建和部署。

## 八、部署检查清单

### 首次部署

- [ ] Docker 环境已安装（构建机和服务器）
- [ ] `sshpass` 已安装（部署机）
- [ ] 阿里云 ACR 仓库已创建，有推送/拉取权限
- [ ] 阿里云 ECS 安全组已开放端口 4000
- [ ] 阿里云 OSS Bucket `s-ysoul` 为公共读状态
- [ ] Sanity CMS 项目 `cnzwyhcr` 可正常访问
- [ ] 确认 `deploy-aliyun.sh` 中 `IMAGE_TAG` 版本号
- [ ] 执行 `./deploy-aliyun.sh` 完成首次部署
- [ ] 验证 `http://47.96.189.32:4000` 可正常访问

### 每次部署

- [ ] 代码已提交，功能已在本地验证
- [ ] 更新 `IMAGE_TAG` 版本号（避免覆盖旧版本）
- [ ] 执行部署脚本
- [ ] 部署后验证页面图片、新闻等模块正常加载
- [ ] 查看日志确认无异常：`ssh root@47.96.189.32 "docker logs portal"`

### 定期维护

- [ ] OSS 服务未到期/未欠费
- [ ] Sanity CMS 项目正常
- [ ] 服务器磁盘空间充足（`df -h`）
- [ ] Docker 日志大小检查
- [ ] SSL 证书有效期（如使用 HTTPS）

## 九、常用命令速查

```bash
# ===== 本地开发 =====
pnpm dev                          # 启动开发服务器（Turbopack，热更新）

# ===== 构建与本地预览 =====
pnpm build                        # 生产构建
cd .next/standalone && PORT=3000 node server.js  # 本地预览

# ===== 代码质量 =====
pnpm lint                         # ESLint 检查
pnpm lint:fix                     # ESLint 自动修复
npx tsc --noEmit                  # TypeScript 类型检查

# ===== Docker =====
docker build -t protal .          # 构建镜像
docker run -d -p 3000:3000 --name protal protal  # 运行容器
docker logs -f protal             # 查看日志
docker exec -it protal sh         # 进入容器

# ===== 生产部署 =====
IMAGE_TAG=V1.13 ./deploy-aliyun.sh  # 一键部署到生产

# ===== 远程服务器管理 =====
ssh root@47.96.189.32 "docker ps"                    # 查看容器状态
ssh root@47.96.189.32 "docker logs --tail 100 portal" # 查看最近 100 行日志
ssh root@47.96.189.32 "docker restart portal"         # 重启服务
ssh root@47.96.189.32 "docker pull <镜像> && docker stop portal && docker rm portal && docker run -d --name portal --restart=unless-stopped -p 4000:3000 <镜像>"  # 手动更新
```

## 十、架构总览图

```
                          ┌──────────────────────┐
                          │   用户浏览器           │
                          └──────────┬───────────┘
                                     │
                          HTTP :4000 │
                                     │
                          ┌──────────▼───────────┐
                          │  阿里云 ECS           │
                          │  47.96.189.32         │
                          │  ┌─────────────────┐ │
                          │  │  Docker 容器      │ │
                          │  │  portal (Node)   │ │
                          │  │  :3000 内部端口   │ │
                          │  └────────┬────────┘ │
                          └───────────┼──────────┘
                                      │
              ┌───────────────────────┼───────────────────────┐
              │                       │                       │
    出站 HTTPS│              出站 HTTPS│              出站 HTTPS│
              │                       │                       │
    ┌─────────▼─────────┐  ┌─────────▼─────────┐  ┌─────────▼─────────┐
    │  阿里云 OSS         │  │  Sanity CMS        │  │  阿里云 ACR         │
    │  s-ysoul (杭州)     │  │  cnzwyhcr          │  │  registry (杭州)    │
    │  图片资源托管        │  │  新闻内容 API       │  │  Docker 镜像存储     │
    └───────────────────┘  └───────────────────┘  └───────────────────┘
```

---

> 最后更新：2026-08-04
> 文档版本：1.0
