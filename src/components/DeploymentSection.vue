<template>
  <section id="installation" class="relative py-24 lg:py-32 scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="mp-section-badge mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          <span>Quick Deployment</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          灵活部署，几分钟快速上线
        </h2>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          全面适配主流 NAS 容器面板、Linux 服务器与 macOS 主机环境。
        </p>
      </div>

      <!-- Interactive Code Deployment Box -->
      <div class="max-w-5xl mx-auto mb-16">
        <!-- Method Selector Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <button
            v-for="tab in deploymentTabs"
            :key="tab.id"
            type="button"
            @click="selectedId = tab.id"
            :class="[
              'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border',
              selectedId === tab.id
                ? 'bg-white text-slate-950 border-white shadow-lg shadow-white/10'
                : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border-white/10',
            ]"
          >
            <span>{{ tab.label }}</span>
            <span
              :class="[
                'px-2 py-0.5 rounded-full text-[10px] font-semibold',
                selectedId === tab.id
                  ? 'bg-violet-600 text-white'
                  : 'bg-white/10 text-slate-300',
              ]"
            >
              {{ tab.badge }}
            </span>
          </button>
        </div>

        <!-- Code Terminal & Guidance Card -->
        <div class="mp-card rounded-3xl overflow-hidden">
          <div class="p-6 sm:p-7 border-b border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-1">{{ activeDeploy.title }}</h3>
              <p class="text-sm text-slate-300/85 leading-relaxed max-w-2xl">
                {{ activeDeploy.description }}
              </p>
            </div>
            <a
              :href="activeDeploy.docUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-violet-200 bg-violet-500/15 hover:bg-violet-500/25 border border-violet-400/25 transition-colors"
            >
              <span>完整配置指南</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <!-- Code Block -->
          <div class="bg-[#050711] p-5 sm:p-7 relative">
            <div class="flex items-center justify-between mb-3 pb-3 border-b border-white/[0.06]">
              <div class="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span class="w-2.5 h-2.5 rounded-full bg-violet-400/80"></span>
                <span>{{ activeDeploy.filename }}</span>
              </div>
              <button
                type="button"
                @click="copyCommand(activeDeploy.code)"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/10 transition-colors"
              >
                <svg v-if="!copied" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg v-else class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ copied ? '已复制' : '复制命令' }}</span>
              </button>
            </div>

            <pre class="text-xs sm:text-sm font-mono text-emerald-300/95 leading-relaxed overflow-x-auto"><code>{{ activeDeploy.code }}</code></pre>
          </div>

          <!-- Deployment Tips -->
          <div class="p-5 sm:p-6 bg-white/[0.015] border-t border-white/[0.06]">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                v-for="tip in activeDeploy.tips"
                :key="tip"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300/85 leading-relaxed"
              >
                <span class="w-5 h-5 rounded-full bg-violet-500/15 border border-violet-400/25 text-violet-300 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  i
                </span>
                <span>{{ tip }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Multi-Platform Clients & Peripheral Ecosystem -->
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-white">多端客户端与周边生态</h3>
            <p class="text-sm text-slate-400 mt-1">
              原生移动客户端、NAS 套件源、桌面安装版与浏览器扩展
            </p>
          </div>
          <a
            href="https://wiki.movie-pilot.org/zh/ecosystem"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs sm:text-sm font-medium text-violet-300 hover:text-violet-200 inline-flex items-center gap-1"
          >
            <span>查看全部周边</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <a
            v-for="proj in ecosystemProjects"
            :key="proj.name"
            :href="proj.url"
            target="_blank"
            rel="noopener noreferrer"
            class="mp-card rounded-2xl p-6 flex flex-col justify-between group"
          >
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span
                  :class="[
                    'px-2.5 py-0.5 rounded-md text-[11px] font-semibold border',
                    proj.official
                      ? 'bg-violet-500/15 text-violet-300 border-violet-400/30'
                      : 'bg-white/[0.05] text-slate-300 border-white/10',
                  ]"
                >
                  {{ proj.official ? '官方客户端' : '社区生态' }}
                </span>
                <svg class="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h4 class="text-base font-bold text-white mb-1">{{ proj.name }}</h4>
              <div class="text-xs font-mono text-violet-300/80 mb-2.5">{{ proj.platform }}</div>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">{{ proj.description }}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-500 truncate">
              {{ proj.repo }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { deploymentTabs, ecosystemProjects } from '../data/siteContent'

const selectedId = ref('compose')
const copied = ref(false)

const activeDeploy = computed(() => {
  return deploymentTabs.find((item) => item.id === selectedId.value) || deploymentTabs[0]
})

const copyCommand = async (code: string) => {
  try {
    await navigator.clipboard.writeText(code)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    copied.value = false
  }
}
</script>
