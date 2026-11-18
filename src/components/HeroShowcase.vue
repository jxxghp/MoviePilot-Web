<template>
  <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <!-- Atmospheric Aurora Glows -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="bg-cinema-grid absolute inset-0"></div>
      <div
        class="animate-aurora-slow absolute -top-40 left-1/2 -translate-x-1/2 w-[960px] h-[520px] rounded-full bg-gradient-to-tr from-violet-600/25 via-indigo-600/20 to-sky-500/15 blur-[130px]"
      ></div>
      <div
        class="absolute top-[42%] -left-48 w-[420px] h-[420px] rounded-full bg-fuchsia-600/10 blur-[120px]"
      ></div>
      <div
        class="absolute top-[38%] -right-48 w-[460px] h-[460px] rounded-full bg-cyan-500/10 blur-[120px]"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Centered Hero Copy -->
      <div class="max-w-4xl mx-auto text-center">
        <!-- Announcement Pill -->
        <a
          href="https://wiki.movie-pilot.org/zh/v3"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2.5 pl-2.5 pr-3.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs sm:text-sm text-slate-200 mb-8 transition-all duration-200 group shadow-lg shadow-black/20"
        >
          <span class="px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-[11px] font-semibold text-white">
            V3 全新架构
          </span>
          <span class="text-slate-300 group-hover:text-white transition-colors">
            影视 + 音乐双栖自动化 · 统一媒体身份 · AI 智能体与原生 MCP
          </span>
          <svg
            class="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-white transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
          新一代智能个人媒体库
          <span class="block mt-2 bg-gradient-to-r from-violet-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
            全链路自动化管理中枢
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-base sm:text-lg lg:text-xl text-slate-300/90 max-w-3xl mx-auto leading-relaxed mb-10">
          围绕<strong class="font-semibold text-white">电影、电视剧、动漫与音乐</strong>打造的一站式自动化引擎。从多源发现、订阅追更、多站点择优下载、无损硬链接刮削整理，到媒体服务器刷新与多模态 AI 智能体协同，优雅掌控每一份数字珍藏。
        </p>

        <!-- Primary & Secondary CTAs -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#installation"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-slate-950 bg-white hover:bg-slate-100 shadow-[0_0_40px_-8px_rgba(255,255,255,0.45)] transition-all duration-200 group"
          >
            <svg class="w-5 h-5 text-violet-700 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>快速安装部署</span>
          </a>

          <a
            href="https://wiki.movie-pilot.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-semibold text-white bg-white/[0.06] hover:bg-white/[0.11] border border-white/15 backdrop-blur-md transition-all duration-200"
          >
            <svg class="w-5 h-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>浏览官方 Wiki</span>
          </a>

          <a
            href="https://github.com/jxxghp/MoviePilot"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-all duration-200"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>源码仓库</span>
          </a>
        </div>

        <!-- Core Architectural Metrics -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-16">
          <div
            v-for="stat in heroStats"
            :key="stat.value"
            class="px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-md text-center"
          >
            <div class="text-base sm:text-lg font-bold text-white tracking-tight">{{ stat.value }}</div>
            <div class="text-xs text-slate-400 mt-0.5">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Grand Interactive Product Showcase -->
      <div
        id="showcase"
        class="scroll-mt-28 max-w-6xl mx-auto"
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
      >
        <!-- Interactive Feature Tab Selector -->
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6">
          <button
            v-for="(slide, idx) in showcaseSlides"
            :key="slide.id"
            type="button"
            @click="selectSlide(idx)"
            :class="[
              'relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border',
              currentSlide === idx
                ? 'bg-gradient-to-r from-violet-600/90 to-indigo-600/90 text-white border-violet-400/40 shadow-lg shadow-violet-600/25'
                : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.07] border-white/[0.08]',
            ]"
          >
            <span>{{ slide.tab }}</span>
          </button>
        </div>

        <!-- macOS-Inspired Browser Frame -->
        <div class="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/[0.11] to-white/[0.03] border border-white/15 shadow-[0_32px_90px_-20px_rgba(0,0,0,0.9),0_0_80px_-25px_rgba(124,58,237,0.3)] backdrop-blur-xl">
          <div class="rounded-xl sm:rounded-2xl overflow-hidden bg-[#090d1a] border border-white/[0.08]">
            <!-- Window Top Chrome Bar -->
            <div class="flex items-center justify-between px-4 py-2.5 bg-[#0c1122] border-b border-white/[0.07]">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-amber-400/80"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>

              <div class="hidden sm:flex items-center gap-2 px-4 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-slate-400">
                <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>{{ activeSlide.routeHint }}</span>
              </div>

              <div class="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="上一张截图"
                  @click="prevSlide"
                  class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="下一张截图"
                  @click="nextSlide"
                  class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="放大查看高清截图"
                  @click="lightboxOpen = true"
                  class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span class="hidden sm:inline">高清预览</span>
                </button>
              </div>
            </div>

            <!-- Unobstructed 16:9 Screenshot Viewport -->
            <div
              class="relative aspect-[16/9] bg-[#070a14] overflow-hidden cursor-zoom-in group"
              @click="lightboxOpen = true"
            >
              <transition
                mode="out-in"
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 scale-[0.992]"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-[1.005]"
              >
                <img
                  :key="activeSlide.id"
                  :src="activeSlide.url"
                  :alt="activeSlide.title"
                  class="w-full h-full object-cover select-none"
                />
              </transition>

              <!-- Subtle Hover Zoom Hint -->
              <div class="pointer-events-none absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-xs text-slate-200 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                点击查看全尺寸原图
              </div>
            </div>

            <!-- Progress Indicator Line -->
            <div class="h-0.5 w-full bg-white/[0.05] flex">
              <div
                v-for="(slide, idx) in showcaseSlides"
                :key="slide.id"
                class="flex-1 h-full relative overflow-hidden"
              >
                <div
                  :class="[
                    'h-full transition-all duration-300',
                    idx === currentSlide
                      ? 'w-full bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400'
                      : idx < currentSlide
                        ? 'w-full bg-violet-500/35'
                        : 'w-0',
                  ]"
                ></div>
              </div>
            </div>

            <!-- Dedicated Screenshot Description & Highlights Panel -->
            <div class="p-6 sm:p-8 bg-gradient-to-b from-[#0d1224] to-[#090d1a] border-t border-white/[0.06]">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div class="lg:col-span-7">
                  <div class="flex items-center gap-2.5 mb-2.5">
                    <span class="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-violet-500/15 text-violet-300 border border-violet-400/25">
                      {{ activeSlide.badge }}
                    </span>
                    <span class="text-xs font-mono text-slate-500">
                      0{{ currentSlide + 1 }} / 0{{ showcaseSlides.length }}
                    </span>
                  </div>
                  <h2 class="text-xl sm:text-2xl font-bold text-white mb-2.5">
                    {{ activeSlide.title }}
                  </h2>
                  <p class="text-sm sm:text-base text-slate-300/85 leading-relaxed">
                    {{ activeSlide.description }}
                  </p>
                </div>

                <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div
                    v-for="point in activeSlide.highlights"
                    :key="point"
                    class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-xs sm:text-sm text-slate-200"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0"></span>
                    <span>{{ point }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen Lightbox Modal -->
    <Teleport to="body">
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          @click.self="lightboxOpen = false"
        >
          <div class="relative max-w-7xl w-full">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-lg font-bold text-white">{{ activeSlide.title }}</h3>
                <p class="text-xs sm:text-sm text-slate-400">{{ activeSlide.tab }} · 按左右方向键可快速切换</p>
              </div>
              <button
                type="button"
                aria-label="关闭大图预览"
                @click="lightboxOpen = false"
                class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                关闭
              </button>
            </div>

            <div class="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#070a14]">
              <img
                :src="activeSlide.url"
                :alt="activeSlide.title"
                class="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
              <button
                type="button"
                aria-label="上一张"
                @click="prevSlide"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 text-white flex items-center justify-center transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="下一张"
                @click="nextSlide"
                class="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 text-white flex items-center justify-center transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { heroStats, showcaseSlides } from '../data/siteContent'

const currentSlide = ref(0)
const isPaused = ref(false)
const lightboxOpen = ref(false)

const activeSlide = computed(() => showcaseSlides[currentSlide.value])

let autoTimer: number | null = null

const selectSlide = (index: number) => {
  currentSlide.value = index
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % showcaseSlides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + showcaseSlides.length) % showcaseSlides.length
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') lightboxOpen.value = false
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'ArrowLeft') prevSlide()
}

onMounted(() => {
  autoTimer = window.setInterval(() => {
    if (!isPaused.value && !lightboxOpen.value) {
      nextSlide()
    }
  }, 5500)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  if (autoTimer) {
    clearInterval(autoTimer)
    autoTimer = null
  }
  window.removeEventListener('keydown', handleKeydown)
})
</script>
