# ----------- 1. 构建阶段 -----------
FROM node:lts-alpine AS builder

WORKDIR /app

# 复制依赖清单并安装依赖
COPY package-lock.json ./
COPY package.json ./

RUN npm ci

# 拷贝所有项目文件并构建
COPY . .

RUN npm run build

# ----------- 2. 生产运行阶段（支持 Sharp + Edge Runtime）-----------
FROM node:lts-alpine

# 安装 sharp 所需系统库（图像优化）
# RUN apk add --no-cache libc6-compat libvips

WORKDIR /app

# 拷贝构建产物和生产依赖
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# 创建非 root 用户
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
# 权限
RUN mkdir -p .next/cache && chown -R nextjs:nextjs .next

USER nextjs

EXPOSE 3000
CMD ["node", "server.js"] 