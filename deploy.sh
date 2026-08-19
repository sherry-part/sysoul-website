#!/bin/bash
set -euo pipefail

readonly SERVER_IP="121.43.228.68"
readonly SERVER_USER="root"
readonly APP_PORT="${APP_PORT:-8082}"
readonly APP_NAME="sysoul-web"

readonly LOCAL_STAGE="/tmp/sysoul-standalone"
readonly LOCAL_TAR="/tmp/sysoul-deploy.tar.gz"

GREEN="\033[32m"; YELLOW="\033[33m"; BLUE="\033[34m"; RESET="\033[0m"

log() { echo -e "${BLUE}>>> $1${RESET}"; }
ok()  { echo -e "${GREEN}✅ $1${RESET}"; }

# 无论成功失败都清理本地临时产物，避免残留
cleanup() {
  rm -rf "${LOCAL_STAGE}" "${LOCAL_TAR}"
}
trap cleanup EXIT

# 0. 先清理上次残留（防止 cp -r 嵌套拷贝、脏包上传）
log "0. 清理本地残留..."
cleanup

log "1. 本地构建..."
npm run build

log "2. 打包产物..."
cp -r .next/standalone "${LOCAL_STAGE}"
cp -r .next/static "${LOCAL_STAGE}/.next/static"
# public 静态资源（图片/字体/视频）已全部迁至 OSS，不再随包上传

# 清理缓存减小体积
rm -rf "${LOCAL_STAGE}/.next/cache" 2>/dev/null || true
find "${LOCAL_STAGE}" -name "*.map" -delete 2>/dev/null || true

cd "${LOCAL_STAGE}"
tar czf "${LOCAL_TAR}" .
cd - > /dev/null

log "3. 上传到服务器..."
scp "${LOCAL_TAR}" "${SERVER_USER}@${SERVER_IP}:/tmp/"

log "4. 远程部署..."
ssh "${SERVER_USER}@${SERVER_IP}" bash -s <<EOF
set -euo pipefail

# Extract and run with Docker
rm -rf /opt/${APP_NAME}
mkdir -p /opt/${APP_NAME}
cd /opt/${APP_NAME}
tar xzf /tmp/sysoul-deploy.tar.gz
rm /tmp/sysoul-deploy.tar.gz

# Create minimal Dockerfile
cat > Dockerfile <<DOCKERFILE
FROM node:22-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
DOCKERFILE

# Build and run
docker stop ${APP_NAME} 2>/dev/null || true
docker rm ${APP_NAME} 2>/dev/null || true
docker build -t ${APP_NAME} .
docker run -d --name ${APP_NAME} --restart=unless-stopped -p ${APP_PORT}:3000 ${APP_NAME}
EOF

ok "部署完成！访问 http://${SERVER_IP}:${APP_PORT}"
