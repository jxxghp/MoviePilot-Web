<template>
  <section id="ai-agent" class="relative py-24 lg:py-32 scroll-mt-20 overflow-hidden border-y border-white/[0.06] bg-[#080c1b]/70">
    <!-- Subtle Accent Glow -->
    <div class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[420px] rounded-full bg-gradient-to-r from-violet-600/15 via-cyan-500/10 to-indigo-600/15 blur-[130px]"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Description Column -->
        <div class="lg:col-span-5">
          <div class="mp-section-badge mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>AI Agent · Skills · MCP</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            懂上下文、会调工具的
            <span class="bg-gradient-to-r from-cyan-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
              内置 AI 智能体与 MCP
            </span>
          </h2>

          <p class="text-base text-slate-300/85 leading-relaxed mb-8">
            MoviePilot 原生内嵌受权限边界保护的多模态智能助手，绝非简单问答陪聊——它能直接读取系统上下文、组合调用业务工具与 <code class="px-1.5 py-0.5 rounded bg-white/10 text-violet-200 font-mono text-xs">SKILL.md</code> 技能流程，并对外提供标准 HTTP MCP 接口。
          </p>

          <div class="space-y-4 mb-8">
            <div
              v-for="item in aiHighlights"
              :key="item.title"
              class="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.025] border border-white/[0.07]"
            >
              <div class="w-6 h-6 rounded-lg bg-violet-500/20 border border-violet-400/30 flex items-center justify-center text-violet-300 shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm sm:text-base font-semibold text-white mb-1">{{ item.title }}</h3>
                <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <a
              href="https://wiki.movie-pilot.org/zh/agent"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 transition-colors"
            >
              <span>智能助手指南</span>
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://wiki.movie-pilot.org/zh/mcp"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
            >
              <span>MCP 接入文档</span>
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Interactive Console / Agent Preview -->
        <div class="lg:col-span-7">
          <div class="rounded-3xl p-2 bg-gradient-to-b from-white/[0.1] to-white/[0.02] border border-white/15 shadow-2xl">
            <div class="rounded-2xl overflow-hidden bg-[#070a15] border border-white/[0.08]">
              <!-- Tab Header -->
              <div class="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#0c1122] border-b border-white/[0.07]">
                <div class="flex items-center gap-1.5">
                  <button
                    v-for="tab in aiDemoTabs"
                    :key="tab.id"
                    type="button"
                    @click="activeTab = tab.id"
                    :class="[
                      'px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200',
                      activeTab === tab.id
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.06]',
                    ]"
                  >
                    {{ tab.label }}
                  </button>
                </div>

                <button
                  v-if="currentTabObj.content"
                  type="button"
                  @click="copySnippet(currentTabObj.content)"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
                >
                  <svg v-if="!copied" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <svg v-else class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ copied ? '已复制' : '复制代码' }}</span>
                </button>
              </div>

              <!-- Interactive Chat Simulation View -->
              <div v-if="activeTab === 'chat'" class="p-5 sm:p-7 space-y-5 min-h-[360px] flex flex-col justify-between">
                <div class="space-y-4">
                  <!-- User Prompt 1 -->
                  <div class="flex justify-end">
                    <div class="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm bg-gradient-to-r from-violet-600 to-indigo-600 text-sm text-white shadow-md">
                      帮我搜一下《沙丘2》优先 2160p 杜比视界且免费的种子，如果媒体库还没有就直接下载。
                    </div>
                  </div>

                  <!-- Agent Tool Execution & Reply -->
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-xl bg-violet-500/20 border border-violet-400/30 flex items-center justify-center text-violet-300 shrink-0 text-xs font-bold">
                      AI
                    </div>
                    <div class="flex-1 space-y-2.5">
                      <div class="flex flex-wrap gap-2 text-[11px] font-mono">
                        <span class="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          ✓ query_media_library (未在库)
                        </span>
                        <span class="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20">
                          ✓ search_torrents (2160p · DV · Free)
                        </span>
                        <span class="px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20">
                          ✓ add_download_task
                        </span>
                      </div>
                      <div class="p-4 rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/[0.08] text-sm text-slate-200 leading-relaxed">
                        已确认媒体库中尚无《沙丘2 (2024)》，从已启用站点筛选出最佳免费资源
                        <span class="text-violet-300 font-mono text-xs">Dune.Part.Two.2024.2160p.UHD.BluRay.DV.HDR</span>（做种 96），已投递至 qBittorrent 并在下载完成后自动硬链接整理入库。
                      </div>
                    </div>
                  </div>

                  <!-- User Prompt 2 -->
                  <div class="flex justify-end">
                    <div class="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-tr-sm bg-white/[0.08] border border-white/10 text-sm text-slate-100">
                      🎙️ [语音转写] 顺便分析下昨晚那条失败的音乐专辑整理记录，能修就自动重试。
                    </div>
                  </div>

                  <!-- Agent Skill Reply -->
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-xl bg-violet-500/20 border border-violet-400/30 flex items-center justify-center text-violet-300 shrink-0 text-xs font-bold">
                      AI
                    </div>
                    <div class="flex-1">
                      <div class="p-3.5 rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm text-slate-300 leading-relaxed">
                        已调用技能 <code class="text-cyan-300 font-mono">transfer-failed-retry</code> 核对 MusicBrainz 双碟发行 UUID，已完成逐曲映射并重新整理入库，同步写入 FLAC 内嵌封面与逐字歌词。
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500">
                  <span>支持 Web 全屏面板 · 微信/Telegram 语音图片 · 本地 CLI 终端</span>
                  <span class="text-emerald-400 font-mono">● Agent Ready</span>
                </div>
              </div>

              <!-- Code View for MCP & Skills -->
              <div v-else class="p-5 sm:p-7 min-h-[360px] flex flex-col justify-between">
                <div>
                  <div class="text-xs font-mono text-slate-500 mb-3">{{ currentTabObj.filename }}</div>
                  <pre class="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed overflow-x-auto"><code>{{ currentTabObj.content }}</code></pre>
                </div>

                <div class="mt-6 pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <span>默认监听 API 端口 <code class="text-violet-300 font-mono">3001</code> · 自动收敛本地高风险系统工具暴露面</span>
                  <span class="font-mono text-cyan-300">/api/v1/mcp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { aiHighlights, aiDemoTabs } from '../data/siteContent'

const activeTab = ref('chat')
const copied = ref(false)

const currentTabObj = computed(() => {
  return aiDemoTabs.find((t) => t.id === activeTab.value) || aiDemoTabs[0]
})

const copySnippet = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    copied.value = false
  }
}
</script>
