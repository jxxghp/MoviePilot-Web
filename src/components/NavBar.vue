<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-500',
      scrolled
        ? 'bg-[#04060d]/78 backdrop-blur-2xl saturate-150 border-b border-white/[0.08] shadow-[0_12px_36px_-12px_rgba(0,0,0,0.75)] py-3'
        : 'bg-transparent border-b border-transparent py-5',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Brand Logo -->
        <a href="#" class="flex items-center gap-3 group focus:outline-none">
          <div class="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden ring-1 ring-white/15 shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform duration-300">
            <img :src="iconImage" alt="MoviePilot" class="w-full h-full object-cover" />
          </div>
          <div class="flex items-center">
            <span class="text-lg sm:text-xl font-bold tracking-tight text-white">MoviePilot</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden xl:flex items-center gap-0.5 bg-white/[0.035] border border-white/[0.08] rounded-full px-2 py-1 backdrop-blur-xl">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            class="px-3 py-1.5 text-[13px] font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all duration-200 inline-flex items-center gap-1 whitespace-nowrap"
          >
            {{ item.label }}
            <svg
              v-if="item.external"
              class="w-3 h-3 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </nav>

        <!-- Right Actions -->
        <div class="hidden md:flex items-center gap-2.5">
          <a
            href="https://github.com/jxxghp/MoviePilot"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all duration-200"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="#installation"
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 shadow-lg shadow-white/10 transition-all duration-200"
          >
            <span>立即部署</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          type="button"
          aria-label="切换导航菜单"
          @click="mobileOpen = !mobileOpen"
          class="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:bg-white/[0.1] transition-colors"
        >
          <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown -->
      <transition
        enter-active-class="transition duration-250 ease-out"
        enter-from-class="opacity-0 -translate-y-2 scale-[0.98]"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-2 scale-[0.98]"
      >
        <div
          v-if="mobileOpen"
          class="xl:hidden mt-4 p-4 rounded-2xl bg-[#0a0f20]/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-1.5"
        >
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
            @click="mobileOpen = false"
            class="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <span>{{ item.label }}</span>
            <svg
              v-if="item.external"
              class="w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <div class="pt-3 mt-2 border-t border-white/10 grid grid-cols-2 gap-3">
            <a
              href="https://github.com/jxxghp/MoviePilot"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-white/[0.06] border border-white/10"
            >
              GitHub
            </a>
            <a
              href="#installation"
              @click="mobileOpen = false"
              class="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-white"
            >
              立即部署
            </a>
          </div>
        </div>
      </transition>
    </div>

    <!-- 顶部极细滚动阅读进度光条 -->
    <div class="pointer-events-none absolute bottom-0 inset-x-0 h-[1.5px] bg-transparent overflow-hidden">
      <div
        class="h-full origin-left bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400 transition-opacity duration-300"
        :style="{
          transform: `scaleX(${pageProgress})`,
          opacity: scrolled ? 0.9 : 0,
        }"
      ></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import iconImage from '../assets/icon.png'
import { navItems } from '../data/siteContent'
import { usePageScrollProgress } from '../composables/useScrollProgress'

const mobileOpen = ref(false)
const { scrollY, pageProgress } = usePageScrollProgress()
const scrolled = computed(() => scrollY.value > 24)
</script>
