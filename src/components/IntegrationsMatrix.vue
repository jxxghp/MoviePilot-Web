<template>
  <section id="integrations" class="relative py-24 lg:py-32 scroll-mt-20 border-y border-white/[0.06] bg-white/[0.01]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="mp-section-badge mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Seamless Integrations</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-5">
          无缝融入你的现有数字家庭生态
        </h2>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          广泛连接主流影视音乐元数据平台、家庭影院服务器、NAS 原生影视中心、BT/PT 下载器、云盘挂载存储以及即时通讯工具。
        </p>
      </div>

      <!-- Categorized Ecosystem Matrix -->
      <div class="space-y-8">
        <div
          v-for="group in integrationGroups"
          :key="group.id"
          class="rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-white/[0.07]"
        >
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-4 border-b border-white/[0.06]">
            <h3 class="text-lg sm:text-xl font-bold text-white">{{ group.title }}</h3>
            <p class="text-xs sm:text-sm text-slate-400">{{ group.subtitle }}</p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
            <div
              v-for="item in group.items"
              :key="item.name"
              class="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0a0f1f]/90 hover:bg-white/[0.06] border border-white/[0.07] hover:border-violet-400/30 transition-all duration-200 group"
            >
              <div class="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 p-2 group-hover:scale-105 transition-transform">
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  :alt="item.name"
                  :class="[
                    'w-full h-full object-contain',
                    item.roundedIcon ? 'rounded-md' : '',
                  ]"
                />
                <svg
                  v-else-if="item.svgPath"
                  class="w-6 h-6 text-violet-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="item.svgPath" />
                </svg>
              </div>
              <div class="min-w-0">
                <div class="text-sm font-semibold text-white truncate">{{ item.name }}</div>
                <div class="text-xs text-slate-400 truncate mt-0.5">{{ item.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { integrationGroups } from '../data/siteContent'
</script>
