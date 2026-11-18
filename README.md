# MoviePilot-Web

MoviePilot 官方产品介绍网站（[https://movie-pilot.org](https://movie-pilot.org)），基于 **Vue 3 + TypeScript + Tailwind CSS + Vite** 构建的独立静态站点。

## 本地开发与构建

```bash
# 安装依赖
yarn install

# 启动本地开发预览
yarn dev

# 类型检查并生成生产静态构建产物（输出至 dist/）
yarn build

# 预览生产构建产物
yarn preview
```

## 目录结构

- `public/`：站点 Favicon、Apple Touch Icon 与官方矢量 Logo
- `src/data/siteContent.ts`：界面截图说明、核心特性、AI & MCP 示例、生态矩阵与部署指南数据层
- `src/components/`：模块化页面分区组件（导航、交互视窗、自动化闭环、Bento 特性、AI 智能体与 MCP、插件生态、生态矩阵、部署指南与页脚）
- `src/assets/`：产品实机截图与生态平台图标资源
