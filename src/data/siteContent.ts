import dashboardImage from '../assets/dashboard.jpg'
import recommendImage from '../assets/recommend.jpg'
import subscribeImage from '../assets/subscribe.jpg'
import calendarImage from '../assets/calendar.jpg'
import pluginImage from '../assets/plugin.jpg'

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
  { value: '影视 + 音乐', label: 'V3 全链路双栖自动化' },
  { value: '前后端分离', label: 'FastAPI + Vue 3 + Rust 加速' },
  { value: '400+ 插件', label: '热插拔扩展与虚拟分身' },
  { value: 'AI & MCP', label: '多模态助手与标准协议接入' },
]

export const showcaseSlides: ShowcaseSlide[] = [
  {
    id: 'dashboard',
    tab: '全局仪表盘',
    badge: '实时态势总览',
    title: '存储、馆藏与后台任务一屏掌控',
    description:
      '聚合展示存储池容量占比、电影 / 电视剧 / 剧集与音乐馆藏规模，实时绘制内存与 CPU 负载曲线；同步监控订阅搜索、文件整理与公共定时服务状态，配合顶部 ⌘K 全局直达搜索与快捷运维面板，让整套媒体中心运行脉搏清晰可见。',
    url: dashboardImage,
    routeHint: 'moviepilot.local / dashboard',
    highlights: [
      '存储空间与硬件负载实时曲线',
      '入库统计图表与近期整理动态',
      '后台定时任务队列状态追踪',
      '⌘K 全局搜索与识别/词表/日志捷径',
    ],
  },
  {
    id: 'recommend',
    tab: '探索与榜单',
    badge: '多源内容聚合',
    title: '流行趋势、院线热映与新番音乐一站发现',
    description:
      '深度融合 TMDB、豆瓣、Bangumi 每日放送与 ListenBrainz 音乐热度榜单，支持按电影、剧集、动漫、音乐与专题榜单多维筛选；高清海报墙直观呈现媒体评分、在库角标与订阅状态，遇到心仪作品即可一键发起检索或追更。',
    url: recommendImage,
    routeHint: 'moviepilot.local / recommend',
    highlights: [
      '全球流行趋势与院线正在热映',
      'Bangumi 每日新番放送时间线',
      'V3 新增 ListenBrainz 音乐探索',
      '在库与已订阅角标实时同步映射',
    ],
  },
  {
    id: 'subscribe',
    tab: '智能订阅追更',
    badge: '全生命周期管理',
    title: '剧集、电影与音乐专辑全自动追踪补齐',
    description:
      '以高颜值剧照卡片呈现每项订阅的季集收集进度、订阅来源与最近下载动态；内置订阅/搜索/洗版三级优先级表达式与订阅级专属识别词，自动巡检缺集并择优升级画质，更支持浏览热门订阅广场与社区一键订阅分享。',
    url: subscribeImage,
    routeHint: 'moviepilot.local / subscribe/tv',
    highlights: [
      '季集收集进度与更新时间直观呈现',
      '4K / 特效字幕 / 促销洗版优先级过滤',
      '单订阅专属自定义识别词与集偏移',
      '热门订阅排行与社区订阅规则共享',
    ],
  },
  {
    id: 'calendar',
    tab: '放送与入库日历',
    badge: '时间轴排期视图',
    title: '每日剧集播出计划与入库状态精准对账',
    description:
      '将所有订阅影视与番剧的放送时间自动排布为周/月视图日历，支持按全部、电影、电视剧快速切换；每日卡片清晰标注待播集数与绿标“已入库”或“未入库”实时状态，追剧排期与缺集漏更一目了然。',
    url: calendarImage,
    routeHint: 'moviepilot.local / calendar',
    highlights: [
      '周一至周日剧集连载排期矩阵',
      '已入库 / 未入库状态实时核验',
      '单集播出时间与集号清晰标注',
      '支持按全部、电影与剧集维度过滤',
    ],
  },
  {
    id: 'plugin',
    tab: '插件市场与分身',
    badge: '开放模块化生态',
    title: '400+ 官方与社区插件，支持虚拟分身多实例',
    description:
      '内置丰富的可视化插件市场，覆盖站点自动签到、站点数据统计、豆瓣/猫眼榜单同步、媒体库刷新通知、自动健康诊断与播放限速等扩展场景；V3 原生引入插件虚拟分身、多仓库来源绑定换源与远程动态组件加载。',
    url: pluginImage,
    routeHint: 'moviepilot.local / plugins',
    highlights: [
      '即装即用热加载，支持自动检测更新',
      'V3 虚拟分身实现多账号/多目录隔离',
      '多源仓库准入管理与核心依赖保护',
      '支持远程自定义仪表盘小组件与配置页',
    ],
  },
]

export const pipelineSteps: PipelineStep[] = [
  {
    step: '01',
    title: '多源发现与订阅',
    subtitle: 'Discover & Subscribe',
    description: '聚合 TMDB、豆瓣、Bangumi、IMDb、MusicBrainz 等权威数据源，网页、移动端或消息对话一键添加订阅。',
    iconPath:
      'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  },
  {
    step: '02',
    title: '并发检索与规则优选',
    subtitle: 'Search & Filter',
    description: '依托 Rust 高速解析引擎并发检索多站点资源，按分辨率、杜比视界、特效字幕、做种数与免费促销智能择优。',
    iconPath:
      'M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z',
  },
  {
    step: '03',
    title: '自动投递与下载监控',
    subtitle: 'Dispatch & Monitor',
    description: '自动选择最优下载器与分类目录投递任务，支持失败冷却自动重试、做种标签管理与下载完成回调触发。',
    iconPath:
      'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3',
  },
  {
    step: '04',
    title: '无损整理与元数据刮削',
    subtitle: 'Organize & Scrape',
    description: '支持硬链接无损保种或跨网盘流转，按 Jinja2 模板与可视化自动分类策略归档，自动补全 NFO、海报、音轨标签与歌词。',
    iconPath:
      'M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z',
  },
  {
    step: '05',
    title: '海报墙刷新与即时推送',
    subtitle: 'Refresh & Notify',
    description: '入库瞬间联动 Plex、Emby、Jellyfin、飞牛影视等刷新媒体库，并通过微信、Telegram、钉钉等按用户精准推送通知。',
    iconPath:
      'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z',
  },
]

export const coreFeatures: FeatureItem[] = [
  {
    badge: 'V3 核心升级',
    title: '影视与音乐双栖全链路自动化',
    description:
      '不仅深耕电影、剧集、动漫的自动追更与洗版，V3 更将音乐作为一等公民纳入主流程：支持歌曲、专辑、艺术家检索订阅，读取 FLAC/MP3/M4A 采样率与位深，自动写入标准标签、内嵌封面及 LRCLIB / AMLL 逐字同步歌词，且在硬链接刮削时自动保护做种源文件。',
    tags: ['电影 / 剧集 / 动漫 / 音乐', 'MusicBrainz & 豆瓣音乐', '内嵌封面与逐字歌词升级', '保种源文件写时复制保护'],
    span: 'wide',
    accent: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
    iconPath:
      'M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z',
  },
  {
    badge: '精准识别',
    title: '统一媒体身份与优先级引擎',
    description:
      '采用「媒体来源 + 来源内 ID」统一身份架构，彻底告别跨源同名冲突；支持自定义正则识别词、集偏移运算及订阅/搜索/洗版多级优先级表达式，精准锁定最佳版本。',
    tags: ['多源身份互转', '自定义识别词与集偏移', '洗版升级策略'],
    span: 'normal',
    accent: 'from-sky-500/20 via-blue-500/10 to-transparent',
    iconPath:
      'M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z M6 6h.008v.008H6V6z',
  },
  {
    badge: '存储与分类',
    title: '多存储矩阵与可视化分类策略',
    description:
      '原生打通本地磁盘、SMB、115 网盘、阿里云盘、AList / OpenList 与 Rclone；内置版本化自动分类可视化编辑器（支持近期样本影响预览与一键回滚）及 Jinja2 自定义重命名模板。',
    tags: ['本地 / SMB / 115 / 阿里云盘 / AList', '硬链接无损保种', '版本化分类规则预览'],
    span: 'normal',
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    iconPath:
      'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  },
  {
    badge: '流程编排',
    title: '可视化工作流自动化编排',
    description:
      '通过事件触发器与定时调度串联搜索、过滤、下载、整理、保种巡检与插件动作节点，自由拼装贴合个人习惯的自动化流水线，并支持一键导入导出与社区工作流共享。',
    tags: ['事件与定时双驱动', '模块化动作节点', '工作流社区共享'],
    span: 'normal',
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    iconPath:
      'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5',
  },
  {
    badge: '工程架构',
    title: 'Rust 性能加速与企业级可靠性',
    description:
      '基于 Python 3.14 + FastAPI + Vue 3 打造，独立 `moviepilot-rust` 扩展大幅加速标题识别、站点索引与 RSS 解析；引入可靠事件队列（Outbox）、迁移前数据库自动备份、SQLite/PostgreSQL 双引擎与 `moviepilot doctor` 离线诊断。',
    tags: ['Rust / PyO3 高频解析加速', 'Outbox 可靠事件恢复', '数据库自动备份与 Doctor 诊断', 'PWA 与原生 iOS 客户端'],
    span: 'wide',
    accent: 'from-indigo-500/20 via-cyan-500/10 to-transparent',
    iconPath:
      'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z',
  },
]

export const aiHighlights = [
  {
    title: '全场景工具调用与智能排障',
    description: '内置丰富系统与插件工具，一句话完成找片、查资源、加订阅、分析整理失败原因并自动重试接管。',
  },
  {
    title: '多模态语音、图片与全屏交互',
    description: '支持 Web 全屏助手及微信、Telegram 语音转写对话与语音回传，发送截图或日志文件即可辅助诊断。',
  },
  {
    title: '开放 Skills 技能市场与定时唤醒',
    description: '支持通过 /skills 远程浏览安装社区技能或导入自定义 SKILL.md，搭配长期记忆与后台定时巡检任务。',
  },
  {
    title: '原生标准 MCP Server 端点',
    description: '无需额外部署桥接容器，直接通过 /api/v1/mcp 接入 Claude Code、Claude Desktop、OpenClaw 等外部智能体。',
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
    content: `# 为外部 AI 智能体一键导入 MoviePilot 官方操作技能
npx skills add https://github.com/jxxghp/MoviePilot

# 在本机终端直接唤醒 MoviePilot 智能体协同排障
moviepilot agent "帮我分析最近一次整理失败记录，能修就直接重试"
moviepilot agent "搜索《沙丘2》优先 2160p 免费资源并查看做种数"

# 查看当前实例暴露给 Agent / MCP 的可用工具列表
moviepilot tool list`,
  },
]

export const pluginCapabilities = [
  {
    title: '热插拔即装即用',
    description: '前端市场一键安装、更新与启停，支持远程组件按需加载，无需重启主程序即可生效。',
    iconPath: 'M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z',
  },
  {
    title: 'V3 虚拟插件分身',
    description: '同一份插件可派生多个虚拟实例，拥有各自独立的配置、数据、定时任务与事件绑定，轻松服务多账号与多媒体库。',
    iconPath: 'M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75',
  },
  {
    title: '多源绑定与依赖保护',
    description: '精准记录插件安装来源并支持一键换源，严格校验第三方依赖兼容性，防止冲突降级破坏核心宿主环境。',
    iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
  {
    title: '稳定 SDK 与远程 UI',
    description: '提供标准化 V3 插件 SDK、分类扩展接口、Agent 工具注册与 Module Federation 前端自定义页面能力。',
    iconPath: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
  },
]

export const featuredPlugins: PluginShowcaseCard[] = [
  {
    name: '站点自动签到 & 数据统计',
    version: '站点养护',
    category: '自动化运维',
    desc: '定时模拟登录签到、聚合展示各站点上传下载量、做种体积与分享率变化趋势图表。',
    accent: 'text-sky-400 bg-sky-500/10 border-sky-400/20',
  },
  {
    name: '豆瓣想看 & 猫眼榜单订阅',
    version: '跨端同步',
    category: '内容订阅',
    desc: '实时同步豆瓣“想看”列表与多平台热播榜单，自动建立影视订阅任务，解放双手。',
    accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20',
  },
  {
    name: '媒体库服务器刷新 & 播放限速',
    version: '影院联动',
    category: '媒体服务',
    desc: '入库后即时刷新海报墙并推送入库战报；外网观影时自动对下载器限速，保障流畅播放。',
    accent: 'text-violet-400 bg-violet-500/10 border-violet-400/20',
  },
  {
    name: '自动健康诊断 & 封面工坊',
    version: '高阶增强',
    category: '系统与美化',
    desc: '自动检测网络连通性与硬链接状态；一键定制高颜值媒体库静态与动态分类封面海报。',
    accent: 'text-amber-400 bg-amber-500/10 border-amber-400/20',
  },
]

export const integrationGroups: IntegrationGroup[] = [
  {
    id: 'metadata',
    title: '影视与音乐权威数据源',
    subtitle: '多源元数据聚合、海报艺术图与音乐指纹歌词识别',
    items: [
      { name: 'TheMovieDb', role: '影视核心元数据', icon: tmdbColorIcon },
      { name: '豆瓣', role: '华语影视与音乐源', icon: doubanColorIcon, roundedIcon: true },
      { name: 'Bangumi', role: '番剧放送与条目', icon: bangumiIcon, roundedIcon: true },
      { name: 'AniList', role: '动漫检索与追踪', icon: anilistIcon, roundedIcon: true },
      { name: 'IMDb', role: '全球影视权威索引', icon: imdbIcon, roundedIcon: true },
      { name: 'TheTVDB', role: '剧集季集资料库', icon: thetvdbIcon, roundedIcon: true },
      { name: 'MusicBrainz', role: 'V3 音乐发行数据库', icon: musicbrainzIcon },
      { name: 'ListenBrainz', role: '音乐热度与推荐榜单', icon: listenbrainzIcon },
      { name: 'Fanart.tv', role: '高清海报与无字背景', icon: fanartIcon, roundedIcon: true },
    ],
  },
  {
    id: 'mediaservers',
    title: '媒体服务器与 NAS 影视中心',
    subtitle: '入库自动刷新媒体库、同步在库状态与 Webhook 联动',
    items: [
      { name: 'Plex', role: '个人流媒体中心', icon: plexIcon, roundedIcon: true },
      { name: 'Emby', role: '家庭影院服务器', icon: embyIcon },
      { name: 'Jellyfin', role: '开源媒体服务器', icon: jellyfinIcon },
      { name: '飞牛影视', role: 'fnOS 原生影视中心', icon: trimemediaIcon, roundedIcon: true },
      { name: '绿联影视', role: 'UGREEN NAS 影院', icon: ugreenIcon, roundedIcon: true },
      { name: '极空间影视', role: 'ZSpace 极影视支持', icon: zspaceIcon, roundedIcon: true },
      {
        name: 'Navidrome',
        role: '音乐流媒体服务配合',
        svgPath:
          'M12 3a9 9 0 109 9 9.01 9.01 0 00-9-9zm0 14.25A5.25 5.25 0 1117.25 12 5.256 5.256 0 0112 17.25zm0-7.5A2.25 2.25 0 1014.25 12 2.252 2.252 0 0012 9.75z',
      },
    ],
  },
  {
    id: 'download_storage',
    title: '下载客户端与多端网盘存储',
    subtitle: '支持多下载器分流、本地硬链接与主流网盘挂载跨端整理',
    items: [
      { name: 'qBittorrent', role: '主流 BT/PT 下载器', icon: qbittorrentIcon },
      { name: 'Transmission', role: '轻量低耗保种客户端', icon: transmissionIcon },
      { name: 'rTorrent', role: '高性能命令行下载器', icon: rtorrentColorIcon },
      {
        name: '115 网盘',
        role: '高速云盘文件整理',
        svgPath:
          'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
      },
      {
        name: '阿里云盘',
        role: '云端媒体目录管理',
        svgPath:
          'M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z',
      },
      {
        name: 'AList / OpenList',
        role: 'V3 原生多网盘聚合存储',
        svgPath:
          'M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776',
      },
      {
        name: 'Rclone & SMB',
        role: '跨盘同步与局域网共享',
        svgPath:
          'M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75',
      },
    ],
  },
  {
    id: 'notifications',
    title: '消息通知与远程智能交互',
    subtitle: '支持按用户隔离通知推送、交互菜单控制与语音/图片 AI 对话',
    items: [
      { name: '企业微信 / 微信', role: '菜单控制与语音交互', icon: wechatIcon },
      { name: 'Telegram', role: '按钮交互与语音回传', icon: telegramIcon },
      { name: '钉钉机器人', role: 'V3 原生群通知推送', icon: dingtalkIcon, roundedIcon: true },
      { name: '飞书', role: '团队与个人消息卡片', icon: feishuIcon, roundedIcon: true },
      { name: 'Slack', role: 'Socket 双向命令交互', icon: slackIcon },
      { name: 'Discord', role: '频道通知与机器人指令', icon: discordColorIcon },
      { name: 'QQ 机器人', role: '即时通知与快捷查询', icon: qqColorIcon },
      { name: 'SynologyChat', role: '群晖原生私有聊天整合', icon: synologyChatIcon },
      { name: 'VoceChat', role: '轻量自托管私密通知', icon: vocechatIcon, roundedIcon: true },
    ],
  },
]

export const deploymentTabs: DeploymentTab[] = [
  {
    id: 'compose',
    label: 'Docker Compose',
    badge: '官方推荐 · V3',
    title: '单容器开箱即用 Compose 部署',
    description:
      '内置虚拟显示、浏览器仿真与进程守护。V3 全新安装无需在环境变量中预置初始密码或 API_TOKEN，启动后直接访问网页向导即可安全创建管理员账号。',
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
      '计划使用硬链接保种时，请务必将下载目录与媒体库放在同一个宿主机根目录（如 /media）下统一映射。',
      '从 V2 升级至 V3 无需手工迁移数据：先备份 /config，将镜像改为 jxxghp/moviepilot-v3:latest 后拉取重建容器即可。',
      '高并发或大体量历史记录场景，可参考官方 Wiki 启用 PostgreSQL + Redis 全功能编排模板。',
    ],
    docUrl: 'https://wiki.movie-pilot.org/zh/install',
  },
  {
    id: 'docker-cli',
    label: 'Docker CLI',
    badge: '快速启动',
    title: '一行命令启动容器实例',
    description:
      '适合熟悉命令行操作或使用 Unraid、群晖 Container Manager、飞牛 fnOS、绿联、极空间等 NAS 容器面板快速部署的用户。',
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
      '启动后浏览器访问 http://宿主机IP:3000 进入首次初始化页面设置管理员密码并保存 API Key。',
      'V3 容器内建 supervisor 进程管理，网页内重启无需挂载 /var/run/docker.sock。',
      '建议保留 --stop-timeout 120，确保容器停止时后台队列与插件优雅收尾。',
    ],
    docUrl: 'https://wiki.movie-pilot.org/zh/v3',
  },
  {
    id: 'local-cli',
    label: '本地 CLI',
    badge: 'macOS / Linux',
    title: '原生无容器一键安装与管理',
    description:
      '适用于 macOS（含 Apple Silicon Mac mini 家庭服务器）与 Linux 裸机环境，自动同步后端、前端、V3 站点资源与 Rust 加速依赖，并提供全局 moviepilot 命令行工具。',
    filename: 'bash · macOS / Linux',
    lang: 'bash',
    code: `# 一键安装本地 CLI 与运行时环境（V3 分支）
curl -fsSL https://raw.githubusercontent.com/jxxghp/MoviePilot/v3/scripts/bootstrap-local.sh | bash

# 常用生命周期与运维诊断命令
moviepilot start            # 启动前后端服务
moviepilot status           # 查看运行状态与端口
moviepilot update all       # 同步更新前后端与资源包
moviepilot doctor           # 离线环境体检与备份恢复诊断`,
    tips: [
      '配置目录默认独立存放在用户目录（如 macOS ~/Library/Application Support/MoviePilot），升级不丢失配置。',
      '内置 moviepilot doctor 诊断工具，可在服务异常时进行离线配置检查与数据库恢复指引。',
      '支持直接通过 moviepilot agent "..." 在终端发起智能体排障对话。',
    ],
    docUrl: 'https://wiki.movie-pilot.org/zh/cli',
  },
]

export const ecosystemProjects: EcosystemProject[] = [
  {
    name: 'MoviePilot iOS 客户端',
    platform: 'iOS 16+ / iOS 26 Liquid Glass',
    repo: 'jxxghp/MoviePilot-App',
    url: 'https://github.com/jxxghp/MoviePilot-App/releases/latest',
    description: '官方 iOS 原生容器客户端，支持原生导航、桌面与锁屏小组件、媒体服务器单曲/剧集搜索播放与推送通知。',
    official: true,
  },
  {
    name: '群晖 DSM 套件源',
    platform: 'Synology DSM 7',
    repo: 'spk7.imnks.com',
    url: 'https://spk7.imnks.com/',
    description: '面向群晖 NAS 用户的第三方套件源安装方案，无需手写命令行即可在套件中心快速部署。',
  },
  {
    name: 'Windows 安装版',
    platform: 'Windows 10 / 11',
    repo: 'developer-wlj/Windows-MoviePilot',
    url: 'https://github.com/developer-wlj/Windows-MoviePilot',
    description: '社区维护的 Windows 桌面安装集成方案，简化 Windows 环境下的依赖配置与后台运行管理。',
  },
  {
    name: 'MoviePilot Lite & TV & 浏览器扩展',
    platform: '移动端 / Apple TV / 浏览器',
    repo: '社区周边生态合集',
    url: 'https://wiki.movie-pilot.org/zh/ecosystem',
    description: '涵盖 MoviePilotLite 移动客户端、MoviePilot-TV (Apple TV) 与 MoviePilot-Tools 浏览器助手扩展。',
  },
]

export const repoMatrix = [
  {
    name: 'MoviePilot',
    desc: '核心后端宿主、工作流、AI Agent 与 MCP 服务',
    url: 'https://github.com/jxxghp/MoviePilot',
  },
  {
    name: 'MoviePilot-Frontend',
    desc: '基于 Vue 3 + Vuetify 3 的现代化响应式前端',
    url: 'https://github.com/jxxghp/MoviePilot-Frontend',
  },
  {
    name: 'MoviePilot-Plugins',
    desc: '官方插件源码仓库与 V1 / V2 / V3 市场索引',
    url: 'https://github.com/jxxghp/MoviePilot-Plugins',
  },
  {
    name: 'MoviePilot-Rust',
    desc: '基于 Rust / PyO3 的标题识别与索引过滤加速模块',
    url: 'https://github.com/jxxghp/MoviePilot-Rust',
  },
  {
    name: 'MoviePilot-App',
    desc: '支持原生导航与系统小组件的 iOS 移动客户端',
    url: 'https://github.com/jxxghp/MoviePilot-App',
  },
  {
    name: 'MoviePilot-Wiki',
    desc: '安装部署、配置进阶、插件开发与排障官方文档',
    url: 'https://wiki.movie-pilot.org/',
  },
]
