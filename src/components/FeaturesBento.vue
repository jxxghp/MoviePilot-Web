<template>
  <section id="features" class="relative py-24 lg:py-32 scroll-mt-20 border-t border-white/[0.06]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Heading -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div v-reveal.fade class="mp-section-badge mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          <span>Core Capabilities</span>
        </div>
        <h2
          v-reveal="{ variant: 'blur-up', delay: 70 }"
          class="mp-display-heading text-3xl sm:text-5xl mb-4"
        >
          专为家庭媒体中心打造的硬核能力
        </h2>
        <p v-reveal="{ variant: 'up', delay: 130 }" class="text-base sm:text-lg text-slate-400 leading-relaxed">
          兼顾精准识别、多盘流转与全端高性能底座，从容管理大规模影音馆藏。
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(feature, idx) in coreFeatures"
          :key="feature.title"
          v-reveal="{ variant: 'up', delay: (idx % 3) * 90 }"
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
            <div class="flex items-center justify-between gap-4 mb-5">
              <div class="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-violet-300 group-hover:scale-105 group-hover:border-violet-400/30 transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="feature.iconPath" />
                </svg>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-slate-300 border border-white/10">
                {{ feature.badge }}
              </span>
            </div>

            <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
              {{ feature.title }}
            </h3>
            <p class="text-sm sm:text-base text-slate-300/85 leading-relaxed mb-5">
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

        <!-- 6th Card -->
        <div
          v-reveal="{ variant: 'up', delay: 180 }"
          class="mp-card rounded-3xl p-7 sm:p-8 overflow-hidden flex flex-col justify-between group lg:col-span-1"
        >
          <div class="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-rose-500/15 via-violet-500/10 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative">
            <div class="flex items-center justify-between gap-4 mb-5">
              <div class="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-violet-300 group-hover:scale-105 group-hover:border-violet-400/30 transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-slate-300 border border-white/10">
                多用户协同
              </span>
            </div>

            <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
              多用户通知隔离与远控
            </h3>
            <p class="text-sm sm:text-base text-slate-300/85 leading-relaxed mb-5">
              细粒度权限与通知渠道隔离，回执精准送达发起人，支持聊天菜单、APNs 与多端消息中心即时联动。
            </p>
          </div>

          <div class="relative flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
            <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.07]">
              多用户隔离
            </span>
            <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.07]">
              WebPush & APNs
            </span>
            <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.07]">
              多实例标识
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
