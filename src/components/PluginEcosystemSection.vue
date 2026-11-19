<template>
  <section id="plugins" class="relative py-24 lg:py-32 scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="mp-section-badge mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span>
          <span>Plugin Ecosystem</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          400+ 插件生态，按需自由扩展
        </h2>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          核心保持轻量克制，高阶场景由插件按需延展；V3 原生支持虚拟分身与多仓库换源。
        </p>
      </div>

      <!-- 4 Architectural Pillars of Plugin System -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        <div
          v-for="cap in pluginCapabilities"
          :key="cap.title"
          class="mp-card rounded-2xl p-6 group"
        >
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 border border-fuchsia-400/25 flex items-center justify-center text-fuchsia-300 mb-5 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="cap.iconPath" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">{{ cap.title }}</h3>
          <p class="text-sm text-slate-300/80 leading-relaxed">{{ cap.description }}</p>
        </div>
      </div>

      <!-- Popular Plugin Scenarios Showcase Strip -->
      <div class="rounded-3xl p-6 sm:p-8 bg-white/[0.025] border border-white/[0.08] backdrop-blur-md">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-lg sm:text-xl font-bold text-white">热门扩展场景</h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">
              站点养护、榜单同步、观影限速与界面美化
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <a
              href="https://wiki.movie-pilot.org/zh/plugin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-violet-600/90 hover:bg-violet-500 transition-colors"
            >
              <span>探索插件指南</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://wiki.movie-pilot.org/zh/plugindev"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
            >
              <span>插件开发文档</span>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="plugin in featuredPlugins"
            :key="plugin.name"
            class="p-5 rounded-2xl bg-[#090d1b]/80 border border-white/[0.07] hover:border-violet-400/30 transition-colors flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span :class="['px-2.5 py-0.5 rounded-md text-[11px] font-semibold border', plugin.accent]">
                  {{ plugin.category }}
                </span>
                <span class="text-[11px] font-mono text-slate-500">{{ plugin.version }}</span>
              </div>
              <h4 class="text-base font-semibold text-white mb-2">{{ plugin.name }}</h4>
              <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">{{ plugin.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { pluginCapabilities, featuredPlugins } from '../data/siteContent'
</script>
