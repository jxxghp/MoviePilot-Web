<template>
  <section class="relative py-20 lg:py-24 border-y border-white/[0.06] bg-white/[0.01]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="mp-section-badge mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
          <span>End-to-End Automation</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          五步闭环，让影视与音乐自动归位
        </h2>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          一次配置，自动完成从发现订阅到刮削入库的完整闭环。
        </p>
      </div>

      <div class="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div
          v-for="item in pipelineSteps"
          :key="item.step"
          class="mp-card rounded-2xl p-6 group"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/25 to-indigo-500/20 border border-violet-400/25 flex items-center justify-center text-violet-300 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="item.iconPath" />
              </svg>
            </div>
            <span class="text-xs font-mono font-semibold text-slate-500 group-hover:text-violet-300 transition-colors">
              {{ item.step }}
            </span>
          </div>

          <h3 class="text-lg font-bold text-white mb-1">{{ item.title }}</h3>
          <p class="text-[11px] font-mono uppercase tracking-wider text-violet-300/70 mb-2.5">
            {{ item.subtitle }}
          </p>
          <p class="text-sm text-slate-300/80 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { pipelineSteps } from '../data/siteContent'
</script>
