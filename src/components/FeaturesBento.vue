<template>
  <section id="features" class="relative py-24 lg:py-32 scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Heading -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="mp-section-badge mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          <span>Core Capabilities</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-5">
          为重度影音与音乐收藏者深耕的硬核能力
        </h2>
        <p class="text-base sm:text-lg text-slate-400 leading-relaxed">
          从多数据源统一身份、精细化洗版策略、多网盘硬链接整理到 Rust 加速内核，每一处细节都针对真实家庭媒体中心场景打磨。
        </p>
      </div>

      <!-- Bento Grid (2 wide + 3 normal = 7 columns -> 3-col layout: row1 [2+1], row2 [1+1+1] or [1+2]) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feature in coreFeatures"
          :key="feature.title"
          :class="[
            'mp-card rounded-3xl p-7 sm:p-8 overflow-hidden flex flex-col justify-between group',
            feature.span === 'wide' ? 'lg:col-span-2' : 'lg:col-span-1',
          ]"
        >
          <!-- Subtle Top Corner Gradient Wash -->
          <div
            :class="[
              'pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500',
              feature.accent,
            ]"
          ></div>

          <div class="relative">
            <div class="flex items-center justify-between gap-4 mb-6">
              <div class="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-violet-300 group-hover:scale-105 group-hover:border-violet-400/30 transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="feature.iconPath" />
                </svg>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-slate-300 border border-white/10">
                {{ feature.badge }}
              </span>
            </div>

            <h3 class="text-xl sm:text-2xl font-bold text-white mb-3.5 tracking-tight">
              {{ feature.title }}
            </h3>
            <p class="text-sm sm:text-base text-slate-300/85 leading-relaxed mb-6">
              {{ feature.description }}
            </p>
          </div>

          <div class="relative flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
            <span
              v-for="tag in feature.tags"
              :key="tag"
              class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.07]"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Additional 6th Card to Complete Clean 3x2 / Balanced Bento Grid -->
        <div class="mp-card rounded-3xl p-7 sm:p-8 overflow-hidden flex flex-col justify-between group lg:col-span-1">
          <div class="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-rose-500/15 via-violet-500/10 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative">
            <div class="flex items-center justify-between gap-4 mb-6">
              <div class="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-violet-300 group-hover:scale-105 group-hover:border-violet-400/30 transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-slate-300 border border-white/10">
                多用户协同
              </span>
            </div>

            <h3 class="text-xl sm:text-2xl font-bold text-white mb-3.5 tracking-tight">
              按用户隔离通知与远程控制
            </h3>
            <p class="text-sm sm:text-base text-slate-300/85 leading-relaxed mb-6">
              支持精细化多用户权限管理与通知渠道隔离，操作回执精准送达发起人；支持多实例主机名标识及菜单/按钮远程交互控制。
            </p>
          </div>

          <div class="relative flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
            <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.07]">
              多用户通知隔离
            </span>
            <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.07]">
              WebPush 客户端推送
            </span>
            <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.07]">
              多实例来源模板
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { coreFeatures } from '../data/siteContent'
</script>
