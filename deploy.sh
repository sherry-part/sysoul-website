#!/bin/bash
set -euo pipefail

readonly SERVER_IP="121.43.228.68"
readonly SERVER_USER="root"
readonly APP_PORT="${APP_PORT:-3000}"
readonly APP_NAME="sysoul-web"

GREEN="\033[32m"; YELLOW="\033[33m"; BLUE="\033[34m"; RESET="\033[0m"

log() { echo -e "${BLUE}>>> $1${RESET}"; }
ok()  { echo -e "${GREEN}✅ $1${RESET}"; }

log "1. 本地构建..."
npm run build

log "2. 打包产物..."
cp -r .next/standalone /tmp/sysoul-standalone
cp -r .next/static /tmp/sysoul-standalone/.next/static
cp -r public /tmp/sysoul-standalone/public
cd /tmp/sysoul-standalone
tar czf /tmp/sysoul-deploy.tar.gz .
cd - > /dev/null

log "3. 上传到服务器..."
scp /tmp/sysoul-deploy.tar.gz "${SERVER_USER}@${SERVER_IP}:/tmp/"

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

log "5. 清理..."
rm -rf /tmp/sysoul-standalone /tmp/sysoul-deploy.tar.gz

ok "部署完成！访问 http://${SERVER_IP}:${APP_PORT}"
