<template>
  <section class="relative py-20 lg:py-24 border-y border-white/[0.06] bg-white/[0.01]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="mp-section-badge mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
          <span>End-to-End Automation</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          五步闭环，让影视与音乐自动归位
        </h2>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          打通从内容发现、多站点择优下载到无损保种刮削、海报墙入库刷新的每一个环节，一次设定即可长期静默高效运转。
        </p>
      </div>

      <div class="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div
          v-for="(item, idx) in pipelineSteps"
          :key="item.step"
          class="mp-card rounded-2xl p-6 flex flex-col justify-between group"
        >
          <div>
            <div class="flex items-center justify-between mb-5">
              <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/25 to-indigo-500/20 border border-violet-400/25 flex items-center justify-center text-violet-300 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="item.iconPath" />
                </svg>
              </div>
              <span class="text-xs font-mono font-semibold text-slate-500 group-hover:text-violet-300 transition-colors">
                STEP {{ item.step }}
              </span>
            </div>

            <h3 class="text-lg font-bold text-white mb-1">{{ item.title }}</h3>
            <p class="text-[11px] font-mono uppercase tracking-wider text-violet-300/70 mb-3">
              {{ item.subtitle }}
            </p>
            <p class="text-sm text-slate-300/80 leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <div
            v-if="idx < pipelineSteps.length - 1"
            class="hidden lg:flex items-center justify-end mt-5 pt-3 border-t border-white/[0.06] text-xs text-slate-500 group-hover:text-violet-300 transition-colors"
          >
            <span>自动流转下一步</span>
            <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          <div
            v-else
            class="hidden lg:flex items-center justify-end mt-5 pt-3 border-t border-white/[0.06] text-xs text-emerald-400"
          >
            <span>完成闭环入库</span>
            <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { pipelineSteps } from '../data/siteContent'
</script>
