#!/bin/bash
set -euo pipefail

# === 配置项 ===
readonly IMAGE_NAME="portal"
readonly IMAGE_TAG="${IMAGE_TAG:-V1.12}"
readonly BUILD_PLATFORM="${BUILD_PLATFORM:-linux/amd64}"

readonly ALIYUN_USER="aliyun9218772975"
readonly ALIYUN_REGISTRY="registry.cn-hangzhou.aliyuncs.com"
readonly ALIYUN_NAMESPACE="aliyun_hujun"
readonly ALIYUN_REPO="portal"
readonly ALIYUN_IMAGE="$ALIYUN_REGISTRY/$ALIYUN_NAMESPACE/$ALIYUN_REPO:$IMAGE_TAG"

readonly SERVER_IP="47.96.189.32"
readonly SERVER_USER="root"
readonly SERVER_PORT=22
readonly DOCKER_PORT=3000
readonly APP_PORT=4000

# 检查依赖工具
readonly REQUIRED_TOOLS=("docker" "sshpass")

# === 彩色输出函数 ===
readonly RED="\033[31m"
readonly GREEN="\033[32m"
readonly YELLOW="\033[33m"
readonly BLUE="\033[34m"
readonly RESET="\033[0m"

log_step() {
  echo -e "\n${BLUE}========== $1 ==========${RESET}"
}

log_info() {
  echo -e "${YELLOW}>>> $1${RESET}"
}

log_success() {
  echo -e "${GREEN}✅ $1${RESET}"
}

log_error() {
  echo -e "${RED}❌ $1${RESET}"
}

log_warn() {
  echo -e "${YELLOW}⚠️  $1${RESET}"
}

# === 错误处理 ===
cleanup() {
  local exit_code=$?
  if [[ $exit_code -ne 0 ]]; then
    log_error "脚本执行失败：第 $1 行命令出错，退出部署！"
    # 清理临时文件或执行其他清理操作
  fi
  exit $exit_code
}

trap 'cleanup $LINENO' ERR

# === 工具函数 ===
check_dependencies() {
  log_info "检查依赖工具..."
  local missing_tools=()
  
  for tool in "${REQUIRED_TOOLS[@]}"; do
    if ! command -v "$tool" >/dev/null 2>&1; then
      missing_tools+=("$tool")
    fi
  done
  
  if [[ ${#missing_tools[@]} -gt 0 ]]; then
    log_error "缺少依赖工具: ${missing_tools[*]}"
    log_info "请安装缺少的工具后重试"
    exit 1
  fi
  log_success "依赖检查完成"
}

validate_config() {
  log_info "验证配置参数..."
  
  if [[ ! -f "Dockerfile" ]]; then
    log_error "当前目录下未找到 Dockerfile"
    exit 1
  fi
  
  if [[ ! "$IMAGE_TAG" =~ ^[a-zA-Z0-9._-]+$ ]]; then
    log_error "镜像标签格式无效: $IMAGE_TAG"
    exit 1
  fi
  
  if [[ ! "$SERVER_IP" =~ ^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$ ]]; then
    log_error "服务器 IP 格式无效: $SERVER_IP"
    exit 1
  fi
  
  log_success "配置验证完成"
}

read_password() {
  local prompt="$1"
  local var_name="$2"
  local password
  
  while true; do
    read -s -p "$prompt: " password
    echo
    if [[ -n "$password" ]]; then
      # 兼容老版本 bash，使用 eval 设置全局变量
      eval "$var_name=\"$password\""
      break
    else
      log_warn "密码不能为空，请重新输入"
    fi
  done
}

# 检查镜像是否已存在
check_image_exists() {
  log_info "检查本地镜像是否存在..."
  if docker images "$IMAGE_NAME:$IMAGE_TAG" --format "table {{.Repository}}:{{.Tag}}" | grep -q "$IMAGE_NAME:$IMAGE_TAG"; then
    log_warn "本地镜像 $IMAGE_NAME:$IMAGE_TAG 已存在"
    read -p "是否重新构建？(y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
      log_info "跳过镜像构建"
      return 1
    fi
  fi
  return 0
}

# 构建镜像
build_image() {
  if check_image_exists; then
    log_step "1. 构建镜像 $IMAGE_NAME:$IMAGE_TAG"
    log_info "构建平台: $BUILD_PLATFORM"
    
    # 显示构建进度
    docker buildx build \
      --platform "$BUILD_PLATFORM" \
      --progress=plain \
      -t "$IMAGE_NAME:$IMAGE_TAG" . \
      --load
    
    log_success "镜像构建完成"
  else
    log_step "1. 跳过镜像构建"
  fi
}

# 登录阿里云
login_aliyun() {
  log_step "2. 登录阿里云镜像仓库"
  
  # 检查是否已经登录
  if docker info 2>/dev/null | grep -q "$ALIYUN_REGISTRY"; then
    log_info "已登录阿里云镜像仓库"
  else
    echo "$ALIYUN_PASS" | docker login --username="$ALIYUN_USER" --password-stdin "$ALIYUN_REGISTRY"
    log_success "阿里云镜像仓库登录成功"
  fi
}

# 推送镜像
push_image() {
  log_step "3. 给镜像打标签并推送到阿里云"
  
  log_info "打标签: $ALIYUN_IMAGE"
  docker tag "$IMAGE_NAME:$IMAGE_TAG" "$ALIYUN_IMAGE"
  
  log_info "推送镜像到阿里云..."
  docker push "$ALIYUN_IMAGE"
  log_success "镜像推送完成"
}

# 远程部署
deploy_remote() {
  log_step "4. 登录远程服务器 $SERVER_IP 并部署"
  
  # 检查 SSH 连接
  log_info "测试 SSH 连接..."
  if ! sshpass -p "$SERVER_PASS" ssh -o ConnectTimeout=10 -o StrictHostKeyChecking=no -p "$SERVER_PORT" "$SERVER_USER@$SERVER_IP" "exit 0" 2>/dev/null; then
    log_error "无法连接到服务器 $SERVER_IP"
    exit 1
  fi
  
  log_info "SSH 连接测试成功，开始部署..."
  
  sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no -p "$SERVER_PORT" "$SERVER_USER@$SERVER_IP" bash -s <<EOF
set -euo pipefail

# 颜色定义
RED="\033[31m"; GREEN="\033[32m"; YELLOW="\033[33m"; BLUE="\033[34m"; RESET="\033[0m"

log_info() { echo -e "\${YELLOW}>>> \$1\${RESET}"; }
log_success() { echo -e "\${GREEN}✅ \$1\${RESET}"; }
log_error() { echo -e "\${RED}❌ \$1\${RESET}"; }

# 错误处理
trap 'log_error "远程服务器执行失败：第 \$LINENO 行出错"; exit 1' ERR

if ! systemctl is-active --quiet docker; then
  log_error "Docker 服务未运行，请启动 Docker 服务"
  exit 1
fi

# 登录阿里云镜像仓库
log_info "登录阿里云镜像仓库..."
echo "$ALIYUN_PASS" | docker login --username="$ALIYUN_USER" --password-stdin "$ALIYUN_REGISTRY"

# 拉取最新镜像
log_info "拉取镜像 $ALIYUN_IMAGE..."
docker pull "$ALIYUN_IMAGE"

# 健康检查：先检查端口是否被占用
log_info "检查端口 $APP_PORT 状态..."
if netstat -tlnp 2>/dev/null | grep -q ":$APP_PORT "; then
  log_info "端口 $APP_PORT 被占用，准备停止旧服务..."
fi

# 优雅停止旧容器
log_info "停止并删除旧容器（如果存在）..."
if docker ps -q --filter "name=$IMAGE_NAME" | grep -q .; then
  log_info "停止容器 $IMAGE_NAME..."
  docker stop "$IMAGE_NAME" || true
  sleep 2  # 给容器时间优雅停止
fi

if docker ps -a -q --filter "name=$IMAGE_NAME" | grep -q .; then
  log_info "删除容器 $IMAGE_NAME..."
  docker rm "$IMAGE_NAME" || true
fi

# 启动新容器
log_info "启动新容器..."
docker run -d \
  --name "$IMAGE_NAME" \
  --restart=unless-stopped \
  -p "$APP_PORT:$DOCKER_PORT" \
  "$ALIYUN_IMAGE"

# 等待容器启动并进行健康检查
log_info "等待容器启动..."
sleep 5

if ! docker ps --filter "name=$IMAGE_NAME" --filter "status=running" | grep -q "$IMAGE_NAME"; then
  log_error "容器启动失败，请检查日志: docker logs $IMAGE_NAME"
  exit 1
fi

log_success "容器启动成功"

# 显示容器状态
log_info "容器状态："
docker ps --filter "name=$IMAGE_NAME" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

EOF

  log_success "远程部署完成"
}

# === 主函数 ===
main() {
  log_step "开始部署 $IMAGE_NAME:$IMAGE_TAG"
  
  # 检查依赖和配置
  check_dependencies
  validate_config
  
  # 交互式输入密码
  read_password "请输入阿里云镜像仓库密码" "ALIYUN_PASS"
  read_password "请输入服务器 $SERVER_IP 登录密码" "SERVER_PASS"
  
  # 显示部署信息
  log_info "部署信息："
  log_info "  - 镜像: $IMAGE_NAME:$IMAGE_TAG"
  log_info "  - 目标服务器: $SERVER_USER@$SERVER_IP:$SERVER_PORT"
  log_info "  - 应用端口: $APP_PORT"
  log_info "  - 阿里云仓库: $ALIYUN_IMAGE"
  
  read -p "确认开始部署？(y/N): " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    log_info "部署已取消"
    exit 0
  fi
  
  # 执行部署步骤
  build_image
  login_aliyun
  push_image
  deploy_remote
  
  echo
  log_success "🎉 部署完成！"
  log_info "访问地址: http://$SERVER_IP:$APP_PORT"
  log_info "查看日志: ssh $SERVER_USER@$SERVER_IP \"docker logs $IMAGE_NAME\""
}

# 脚本入口点
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi