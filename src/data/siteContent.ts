import dashboardImage from '../assets/dashboard.png'
import recommendImage from '../assets/recommend.png'
import mediaImage from '../assets/media.png'
import subscribeImage from '../assets/subscribe.png'
import calendarImage from '../assets/calendar.png'
import pluginImage from '../assets/plugin.png'

import plexIcon from '../assets/plex.png'
import embyIcon from '../assets/emby.png'
import jellyfinIcon from '../assets/jellyfin.png'
import qbittorrentIcon from '../assets/qbittorrent.png'
import transmissionIcon from '../assets/transmission.png'
import wechatIcon from '../assets/wechat.png'
import telegramIcon from '../assets/telegram.webp'
import slackIcon from '../assets/slack.webp'

import tmdbColorIcon from '../assets/integrations/tmdb.png'
import doubanColorIcon from '../assets/integrations/douban.png'
import bangumiIcon from '../assets/integrations/bangumi.png'
import anilistIcon from '../assets/integrations/anilist.png'
import imdbIcon from '../assets/integrations/imdb.png'
import thetvdbIcon from '../assets/integrations/thetvdb.jpeg'
import musicbrainzIcon from '../assets/integrations/musicbrainz.png'
import listenbrainzIcon from '../assets/integrations/listenbrainz.png'
import fanartIcon from '../assets/integrations/fanart.png'
import trimemediaIcon from '../assets/integrations/trimemedia.png'
import ugreenIcon from '../assets/integrations/ugreen.png'
import zspaceIcon from '../assets/integrations/zspace.webp'
import rtorrentColorIcon from '../assets/integrations/rtorrent.png'
import qqColorIcon from '../assets/integrations/qq.png'
import discordColorIcon from '../assets/integrations/discord.png'
import dingtalkIcon from '../assets/integrations/dingtalk.jpg'
import feishuIcon from '../assets/integrations/feishu.png'
import synologyChatIcon from '../assets/integrations/synologychat.png'
import vocechatIcon from '../assets/integrations/vocechat.png'

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface ShowcaseSlide {
  id: string
  tab: string
  badge: string
  title: string
  description: string
  url: string
  routeHint: string
  highlights: string[]
}

export interface PipelineStep {
  step: string
  title: string
  subtitle: string
  description: string
  iconPath: string
}

export interface FeatureItem {
  badge: string
  title: string
  description: string
  tags: string[]
  iconPath: string
  span?: 'wide' | 'normal'
  accent: string
}

export interface PluginShowcaseCard {
  name: string
  version: string
  category: string
  desc: string
  accent: string
}

export interface IntegrationItem {
  name: string
  role: string
  icon?: string
  svgPath?: string
  roundedIcon?: boolean
}

export interface IntegrationGroup {
  id: string
  title: string
  subtitle: string
  items: IntegrationItem[]
}

export interface DeploymentTab {
  id: string
  label: string
  badge: string
  title: string
  description: string
  filename: string
  lang: string
  code: string
  tips: string[]
  docUrl: string
}

export interface EcosystemProject {
  name: string
  platform: string
  repo: string
  url: string
  description: string
  official?: boolean
}

export const navItems: NavItem[] = [
  { label: '界面预览', href: '#showcase' },
  { label: '核心特性', href: '#features' },
  { label: 'AI 与 MCP', href: '#ai-agent' },
  { label: '插件生态', href: '#plugins' },
  { label: '生态集成', href: '#integrations' },
  { label: '快速部署', href: '#installation' },
  { label: '使用文档', href: 'https://wiki.movie-pilot.org/', external: true },
]

export const heroStats = [
  { value: '影视 + 音乐', label: '全流程自动化' },
  { value: '前后端分离', label: 'FastAPI + Vue 3 + Rust' },
  { value: '400+ 插件', label: '热插拔与虚拟分身' },
  { value: 'AI & MCP', label: '内置助手与标准协议' },
]

export const showcaseSlides: ShowcaseSlide[] = [
  {
    id: 'dashboard',
    tab: '全局总览',
    badge: '实时态势',
    title: '存储、馆藏与后台任务一屏掌控',
    description: '实时呈现存储容量、馆藏规模、硬件负载与定时任务状态。',
    url: dashboardImage,
    routeHint: 'moviepilot.local / dashboard',
    highlights: [
      '存储与负载曲线',
      '入库统计与动态',
      '后台任务追踪',
      '⌘K 全局直达搜索',
    ],
  },
  {
    id: 'recommend',
    tab: '探索榜单',
    badge: '多源聚合',
    title: '热门趋势、新番与音乐一站发现',
    description: '聚合 TMDB、豆瓣、Bangumi 与 ListenBrainz 榜单，一键检索追更。',
    url: recommendImage,
    routeHint: 'moviepilot.local / recommend',
    highlights: [
      '流行与院线热映',
      'Bangumi 每日放送',
      'ListenBrainz 音乐榜',
      '在库状态实时映射',
    ],
  },
  {
    id: 'media',
    tab: '媒体详情',
    badge: '沉浸交互',
    title: '演职员、元数据与资源字幕直达',
    description: '全景呈现影视简介、主创阵容与发行信息，支持一键订阅、搜种与查字幕。',
    url: mediaImage,
    routeHint: 'moviepilot.local / media/movie',
    highlights: [
      '沉浸式剧照背景',
      '一键订阅状态管理',
      '多站点资源检索',
      '外挂字幕快捷搜索',
    ],
  },
  {
    id: 'subscribe',
    tab: '订阅追更',
    badge: '自动洗版',
    title: '影视与音乐专辑全自动追踪补齐',
    description: '直观追踪季集收集进度，按优先级规则与自定义识别词自动巡检洗版。',
    url: subscribeImage,
    routeHint: 'moviepilot.local / subscribe/tv',
    highlights: [
      '季集进度实时追踪',
      '多级洗版优先级',
      '识别词与集偏移',
      '社区热门订阅共享',
    ],
  },
  {
    id: 'calendar',
    tab: '放送日历',
    badge: '排期视图',
    title: '每日播出计划与入库状态精准对账',
    description: '按周/月排布订阅剧集与番剧更新计划，清晰标注单集入库状态。',
    url: calendarImage,
    routeHint: 'moviepilot.local / calendar',
    highlights: [
      '周/月连载排期',
      '入库状态核验',
      '单集时间与集号',
      '按媒体类型筛选',
    ],
  },
  {
    id: 'plugin',
    tab: '插件市场',
    badge: '模块生态',
    title: '400+ 插件扩展与虚拟分身隔离',
    description: '覆盖签到统计、榜单同步、播放限速等场景，支持多实例分身与换源。',
    url: pluginImage,
    routeHint: 'moviepilot.local / plugins',
    highlights: [
      '即装即用热加载',
      '虚拟分身多实例',
      '多仓库与依赖保护',
      '自定义仪表盘组件',
    ],
  },
]

export const pipelineSteps: PipelineStep[] = [
  {
    step: '01',
    title: '多源订阅',
    subtitle: 'Discover & Subscribe',
    description: '聚合主流影视与音乐源，多端一键添加订阅。',
    iconPath:
      'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  },
  {
    step: '02',
    title: '择优检索',
    subtitle: 'Search & Filter',
    description: 'Rust 引擎并发搜种，按画质、字幕与促销择优。',
    iconPath:
      'M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z',
  },
  {
    step: '03',
    title: '下载监控',
    subtitle: 'Dispatch & Monitor',
    description: '自动匹配下载器与目录，支持失败重试与标签。',
    iconPath:
      'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3',
  },
  {
    step: '04',
    title: '无损整理',
    subtitle: 'Organize & Scrape',
    description: '硬链接保种或网盘流转，自动重命名与刮削歌词。',
    iconPath:
      'M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z',
  },
  {
    step: '05',
    title: '入库推送',
    subtitle: 'Refresh & Notify',
    description: '即时刷新媒体库海报墙，按用户精准推送通知。',
    iconPath:
      'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z',
  },
]

export const coreFeatures: FeatureItem[] = [
  {
    badge: 'V3 核心升级',
    title: '影视与音乐双栖自动化',
    description:
      '统一支持电影、剧集、动漫与音乐订阅洗版，自动写入音频标签、封面与逐字歌词，硬链接时保护做种源文件。',
    tags: ['电影 / 剧集 / 动漫 / 音乐', 'MusicBrainz & 豆瓣音乐', '内嵌封面与逐字歌词', '保种源文件保护'],
    span: 'wide',
    accent: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
    iconPath:
      'M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z',
  },
  {
    badge: '精准识别',
    title: '统一身份与优先级引擎',
    description:
      '「来源 + ID」消除跨源同名冲突，配合自定义识别词、集偏移与多级优先级精准洗版。',
    tags: ['多源身份互转', '识别词与集偏移', '洗版升级策略'],
    span: 'normal',
    accent: 'from-sky-500/20 via-blue-500/10 to-transparent',
    iconPath:
      'M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z M6 6h.008v.008H6V6z',
  },
  {
    badge: '存储与分类',
    title: '多存储与智能分类',
    description:
      '打通本地、SMB 与主流网盘，内置版本化分类规则编辑器（支持预览回滚）与 Jinja2 重命名。',
    tags: ['本地 / SMB / 115 / 阿里云盘 / AList', '硬链接无损保种', '分类规则预览'],
    span: 'normal',
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    iconPath:
      'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  },
  {
    badge: '流程编排',
    title: '可视化工作流编排',
    description:
      '事件与定时双驱动，自由串联搜索、下载、整理与插件节点，支持社区工作流一键共享。',
    tags: ['事件与定时驱动', '模块化动作节点', '工作流共享'],
    span: 'normal',
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    iconPath:
      'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5',
  },
  {
    badge: '工程架构',
    title: 'Rust 加速与高可靠底座',
    description:
      '基于 FastAPI + Vue 3 构建，Rust 扩展加速标题识别与索引解析；内置 Outbox 可靠队列、双数据库引擎与离线诊断。',
    tags: ['Rust 高频解析加速', 'Outbox 可靠队列', '自动备份与 Doctor 诊断', 'PWA 与原生 iOS'],
    span: 'wide',
    accent: 'from-indigo-500/20 via-cyan-500/10 to-transparent',
    iconPath:
      'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z',
  },
]

export const aiHighlights = [
  {
    title: '工具调用与智能排障',
    description: '一句话完成找片、加订阅、定位整理失败原因并自动重试。',
  },
  {
    title: '多模态全渠道交互',
    description: '支持 Web 全屏及微信、Telegram 语音图片对话，辅助日志诊断。',
  },
  {
    title: 'Skills 技能扩展与巡检',
    description: '支持安装社区技能或导入 SKILL.md，搭配长期记忆与定时唤醒。',
  },
  {
    title: '原生标准 MCP 端点',
    description: '免部署桥接容器，通过 /api/v1/mcp 直连 Claude、OpenClaw 等客户端。',
  },
]

export const aiDemoTabs = [
  {
    id: 'chat',
    label: '智能助手对话',
    filename: 'Agent Session · Web / Telegram / WeChat',
    content: '',
  },
  {
    id: 'mcp',
    label: 'MCP Server 配置',
    filename: 'mcpServers.json · Streamable HTTP',
    content: `{
  "mcpServers": {
    "moviepilot": {
      "type": "http",
      "url": "http://127.0.0.1:3001/api/v1/mcp",
      "headers": {
        "X-API-KEY": "YOUR_MOVIEPILOT_API_TOKEN"
      }
    }
  }
}`,
  },
  {
    id: 'skills',
    label: 'Skills 与本地 CLI',
    filename: 'Terminal · Skills & Agent CLI',
    content: `# 导入官方技能包
npx skills add https://github.com/jxxghp/MoviePilot

# 终端直接唤醒智能体检索与排障
moviepilot agent "分析最近一次整理失败记录，能修就直接重试"
moviepilot agent "搜索《沙丘2》优先 2160p 免费资源并查看做种数"

# 查看可用 Agent / MCP 工具列表
moviepilot tool list`,
  },
]

export const pluginCapabilities = [
  {
    title: '热插拔即装即用',
    description: '市场一键安装、更新与启停，远程组件按需加载，免重启生效。',
    iconPath: 'M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z',
  },
  {
    title: 'V3 虚拟插件分身',
    description: '单插件可派生多个独立实例，配置、数据与定时任务互不干扰。',
    iconPath: 'M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75',
  },
  {
    title: '多源绑定与依赖保护',
    description: '记录安装来源并支持一键换源，校验依赖兼容性，保护宿主环境。',
    iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
  {
    title: '标准 SDK 与远程 UI',
    description: '提供标准化 V3 SDK、Agent 工具注册与前端动态自定义页面能力。',
    iconPath: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
  },
]

export const featuredPlugins: PluginShowcaseCard[] = [
  {
    name: '站点签到 & 数据统计',
    version: '站点养护',
    category: '自动化运维',
    desc: '定时登录签到，汇总各站点上传下载量、做种体积与分享率趋势。',
    accent: 'text-sky-400 bg-sky-500/10 border-sky-400/20',
  },
  {
    name: '豆瓣想看 & 榜单订阅',
    version: '跨端同步',
    category: '内容订阅',
    desc: '同步豆瓣“想看”与多平台热播榜单，自动建立影视订阅任务。',
    accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20',
  },
  {
    name: '媒体库刷新 & 播放限速',
    version: '影院联动',
    category: '媒体服务',
    desc: '入库即时刷新海报墙并推送通知；外网观影时自动对下载器限速。',
    accent: 'text-violet-400 bg-violet-500/10 border-violet-400/20',
  },
  {
    name: '健康诊断 & 封面工坊',
    version: '高阶增强',
    category: '系统与美化',
    desc: '自动检测网络连通性与硬链接状态，一键生成媒体库分类封面。',
    accent: 'text-amber-400 bg-amber-500/10 border-amber-400/20',
  },
]

export const integrationGroups: IntegrationGroup[] = [
  {
    id: 'metadata',
    title: '影视与音乐数据源',
    subtitle: '元数据聚合、艺术海报与音乐歌词识别',
    items: [
      { name: 'TheMovieDb', role: '影视核心元数据', icon: tmdbColorIcon },
      { name: '豆瓣', role: '华语影视与音乐源', icon: doubanColorIcon, roundedIcon: true },
      { name: 'Bangumi', role: '番剧放送与条目', icon: bangumiIcon, roundedIcon: true },
      { name: 'AniList', role: '动漫检索与追踪', icon: anilistIcon, roundedIcon: true },
      { name: 'IMDb', role: '全球影视索引', icon: imdbIcon, roundedIcon: true },
      { name: 'TheTVDB', role: '剧集季集资料库', icon: thetvdbIcon, roundedIcon: true },
      { name: 'MusicBrainz', role: '音乐发行数据库', icon: musicbrainzIcon },
      { name: 'ListenBrainz', role: '音乐热度与榜单', icon: listenbrainzIcon },
      { name: 'Fanart.tv', role: '高清海报与背景', icon: fanartIcon, roundedIcon: true },
    ],
  },
  {
    id: 'mediaservers',
    title: '媒体服务器与 NAS 影院',
    subtitle: '入库自动刷新、在库同步与 Webhook 联动',
    items: [
      { name: 'Plex', role: '个人流媒体中心', icon: plexIcon, roundedIcon: true },
      { name: 'Emby', role: '家庭影院服务器', icon: embyIcon },
      { name: 'Jellyfin', role: '开源媒体服务器', icon: jellyfinIcon },
      { name: '飞牛影视', role: 'fnOS 原生影视中心', icon: trimemediaIcon, roundedIcon: true },
      { name: '绿联影视', role: 'UGREEN NAS 影院', icon: ugreenIcon, roundedIcon: true },
      { name: '极空间影视', role: '极影视原生支持', icon: zspaceIcon, roundedIcon: true },
      {
        name: 'Navidrome',
        role: '开源音乐流媒体',
        svgPath:
          'M12 3a9 9 0 109 9 9.01 9.01 0 00-9-9zm0 14.25A5.25 5.25 0 1117.25 12 5.256 5.256 0 0112 17.25zm0-7.5A2.25 2.25 0 1014.25 12 2.252 2.252 0 0012 9.75z',
      },
    ],
  },
  {
    id: 'download_storage',
    title: '下载器与多端存储',
    subtitle: '多下载器分流、硬链接与网盘跨端整理',
    items: [
      { name: 'qBittorrent', role: '主流 BT/PT 下载器', icon: qbittorrentIcon },
      { name: 'Transmission', role: '轻量保种客户端', icon: transmissionIcon },
      { name: 'rTorrent', role: '高性能命令行下载', icon: rtorrentColorIcon },
      {
        name: '115 网盘',
        role: '高速云盘整理',
        svgPath:
          'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
      },
      {
        name: '阿里云盘',
        role: '云端媒体管理',
        svgPath:
          'M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z',
      },
      {
        name: 'AList / OpenList',
        role: '多网盘聚合存储',
        svgPath:
          'M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776',
      },
      {
        name: 'Rclone & SMB',
        role: '跨盘同步与共享',
        svgPath:
          'M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75',
      },
    ],
  },
  {
    id: 'notifications',
    title: '消息通知与远程交互',
    subtitle: '按用户推送隔离、菜单控制与 AI 对话',
    items: [
      { name: '企业微信 / 微信', role: '菜单控制与语音交互', icon: wechatIcon },
      { name: 'Telegram', role: '按钮交互与语音回传', icon: telegramIcon },
      { name: '钉钉机器人', role: '原生群通知推送', icon: dingtalkIcon, roundedIcon: true },
      { name: '飞书', role: '消息卡片推送', icon: feishuIcon, roundedIcon: true },
      { name: 'Slack', role: '双向命令交互', icon: slackIcon },
      { name: 'Discord', role: '频道通知与机器人', icon: discordColorIcon },
      { name: 'QQ 机器人', role: '即时通知与查询', icon: qqColorIcon },
      { name: 'SynologyChat', role: '群晖私有聊天', icon: synologyChatIcon },
      { name: 'VoceChat', role: '自托管私密通知', icon: vocechatIcon, roundedIcon: true },
    ],
  },
]

export const deploymentTabs: DeploymentTab[] = [
  {
    id: 'compose',
    label: 'Docker Compose',
    badge: '官方推荐 · V3',
    title: '单容器 Compose 部署',
    description:
      '内置浏览器内核与进程守护，启动后访问网页向导即可初始化管理员账号。',
    filename: 'docker-compose.yml',
    lang: 'yaml',
    code: `services:
  moviepilot:
    stdin_open: true
    tty: true
    container_name: moviepilot-v3
    hostname: moviepilot-v3
    ports:
      - '3000:3000' # Web 管理界面端口
      - '3001:3001' # API 与 MCP 服务端口
    volumes:
      - '/media:/media' # 媒体库与下载目录共同根目录（保障硬链接）
      - '/moviepilot-v3/config:/config' # 配置文件、数据库与日志持久化
      - '/moviepilot-v3/core:/moviepilot/.cloakbrowser' # 浏览器内核持久化
    environment:
      - 'NGINX_PORT=3000'
      - 'PORT=3001'
      - 'PUID=0'
      - 'PGID=0'
      - 'UMASK=000'
      - 'TZ=Asia/Shanghai'
    restart: always
    stop_grace_period: 120s
    image: jxxghp/moviepilot-v3:latest`,
    tips: [
      '硬链接保种需将下载目录与媒体库放在同一宿主机根目录（如 /media）统一映射。',
      'V2 升级 V3：备份 /config 后将镜像改为 jxxghp/moviepilot-v3:latest 重建即可。',
      '高并发场景可参考官方 Wiki 启用 PostgreSQL + Redis 编排模板。',
    ],
    docUrl: 'https://wiki.movie-pilot.org/zh/install',
  },
  {
    id: 'docker-cli',
    label: 'Docker CLI',
    badge: '快速启动',
    title: 'Docker CLI 一键启动',
    description:
      '适合命令行或群晖、飞牛、绿联、极空间、Unraid 等 NAS 容器面板部署。',
    filename: 'terminal',
    lang: 'bash',
    code: `docker run -itd \\
  --name moviepilot-v3 \\
  --hostname moviepilot-v3 \\
  --network bridge \\
  -p 3000:3000 \\
  -p 3001:3001 \\
  -v /media:/media \\
  -v /moviepilot-v3/config:/config \\
  -v /moviepilot-v3/core:/moviepilot/.cloakbrowser \\
  -e 'NGINX_PORT=3000' \\
  -e 'PORT=3001' \\
  -e 'PUID=0' \\
  -e 'PGID=0' \\
  -e 'UMASK=000' \\
  -e 'TZ=Asia/Shanghai' \\
  --stop-timeout 120 \\
  --restart always \\
  jxxghp/moviepilot-v3:latest`,
    tips: [
      '启动后访问 http://宿主机IP:3000 设置管理员密码并保存 API Key。',
      '容器内置进程守护，网页内重启无需挂载 /var/run/docker.sock。',
      '建议保留 --stop-timeout 120，确保容器停止时后台队列安全收尾。',
    ],
    docUrl: 'https://wiki.movie-pilot.org/zh/v3',
  },
  {
    id: 'local-cli',
    label: '本地 CLI',
    badge: 'macOS / Linux',
    title: 'macOS / Linux 原生运行',
    description:
      '免容器部署方案，自动配置前后端与 Rust 加速依赖，提供 moviepilot CLI。',
    filename: 'bash · macOS / Linux',
    lang: 'bash',
    code: `# 一键安装本地 CLI 与运行时环境（V3 分支）
curl -fsSL https://raw.githubusercontent.com/jxxghp/MoviePilot/v3/scripts/bootstrap-local.sh | bash

# 常用生命周期与诊断命令
moviepilot start            # 启动前后端服务
moviepilot status           # 查看运行状态与端口
moviepilot update all       # 更新前后端与资源包
moviepilot doctor           # 离线体检与备份恢复诊断`,
    tips: [
      '配置独立存放在用户目录，升级不影响现有数据。',
      '内置 moviepilot doctor，支持离线配置检查与数据库恢复指引。',
      '支持 moviepilot agent "..." 在终端直接发起智能体对话。',
    ],
    docUrl: 'https://wiki.movie-pilot.org/zh/cli',
  },
]

export const ecosystemProjects: EcosystemProject[] = [
  {
    name: 'MoviePilot iOS 客户端',
    platform: 'iOS 16+ / Liquid Glass',
    repo: 'jxxghp/MoviePilot-App',
    url: 'https://github.com/jxxghp/MoviePilot-App/releases/latest',
    description: '官方原生客户端，支持桌面小组件、媒体播放与推送通知。',
    official: true,
  },
  {
    name: '群晖 DSM 套件源',
    platform: 'Synology DSM 7',
    repo: 'spk7.imnks.com',
    url: 'https://spk7.imnks.com/',
    description: '第三方群晖套件源，可在套件中心直接搜索安装。',
  },
  {
    name: 'Windows 安装版',
    platform: 'Windows 10 / 11',
    repo: 'developer-wlj/Windows-MoviePilot',
    url: 'https://github.com/developer-wlj/Windows-MoviePilot',
    description: '社区维护的桌面集成包，简化依赖配置与后台运行管理。',
  },
  {
    name: 'Lite / TV / 浏览器扩展',
    platform: '移动端 / Apple TV / 浏览器',
    repo: '社区周边生态合集',
    url: 'https://wiki.movie-pilot.org/zh/ecosystem',
    description: '涵盖移动端、Apple TV 客户端与浏览器快捷订阅助手。',
  },
]

export const repoMatrix = [
  {
    name: 'MoviePilot',
    desc: '核心后端、工作流、Agent 与 MCP',
    url: 'https://github.com/jxxghp/MoviePilot',
  },
  {
    name: 'MoviePilot-Frontend',
    desc: 'Vue 3 + Vuetify 3 响应式前端',
    url: 'https://github.com/jxxghp/MoviePilot-Frontend',
  },
  {
    name: 'MoviePilot-Plugins',
    desc: '官方插件源码与市场索引',
    url: 'https://github.com/jxxghp/MoviePilot-Plugins',
  },
  {
    name: 'MoviePilot-Rust',
    desc: 'Rust 高性能解析加速模块',
    url: 'https://github.com/jxxghp/MoviePilot-Rust',
  },
  {
    name: 'MoviePilot-App',
    desc: 'iOS 原生移动客户端',
    url: 'https://github.com/jxxghp/MoviePilot-App',
  },
  {
    name: 'MoviePilot-Wiki',
    desc: '部署配置与开发官方文档',
    url: 'https://wiki.movie-pilot.org/',
  },
]
