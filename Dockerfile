# 使用官方的 Node.js 镜像作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 安装 bash 和 curl
RUN apk add --no-cache bash curl

# 安装 bun
RUN curl -fsSL https://bun.sh/install | bash

# 设置环境变量
ENV PATH="/root/.bun/bin:${PATH}"

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装项目依赖
RUN bun install

# 复制所有必要的文件和文件夹
COPY src/ ./src/
COPY public/ ./public/
COPY messages/ ./messages/
COPY middleware.ts ./
COPY next.config.mjs ./
COPY postcss.config.mjs ./
COPY tailwind.config.ts ./
COPY tsconfig.json ./

# 构建 Next.js 项目
RUN bun run build

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["bun", "start"]
