<template>
  <section id="native-app" class="relative py-28 lg:py-36 scroll-mt-20">
    <!-- 独立背景光晕层（仅裁剪光晕，保留外层 overflow 可见以确保内部 Sticky 正常吸顶） -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute top-24 left-1/2 -translate-x-1/2 w-[920px] h-[520px] rounded-full bg-gradient-to-tr blur-[140px] opacity-65 transition-all duration-700"
        :class="activePlatform.accentGlow"
      ></div>
      <div
        class="absolute top-[52%] -left-48 w-[440px] h-[440px] rounded-full bg-indigo-600/10 blur-[140px]"
      ></div>
      <div
        class="absolute top-[60%] -right-48 w-[460px] h-[460px] rounded-full bg-sky-500/10 blur-[140px]"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- ==================== 乐章 1：开幕大字与三机同框视差舞台 ==================== -->
      <div class="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
        <div v-reveal.fade class="mp-section-badge mb-5">
          <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
          <span>Native Clients · 三端全原生</span>
        </div>

        <h2
          v-reveal="{ variant: 'blur-up', delay: 80 }"
          class="mp-display-heading text-4xl sm:text-5xl lg:text-6xl mb-5"
        >
          三端全原生，
          <span class="mp-apple-gradient-text">为每一块屏幕量身打造</span>
        </h2>

        <p
          v-reveal="{ variant: 'up', delay: 160 }"
          class="text-base sm:text-lg lg:text-xl text-slate-300/85 max-w-2xl mx-auto leading-relaxed"
        >
          拒绝跨端套壳，以 <strong class="text-white font-semibold">Rust 共享内核</strong>驱动
          <strong class="text-white font-semibold">iOS</strong>、<strong class="text-white font-semibold">Android</strong> 与
          <strong class="text-white font-semibold">HarmonyOS NEXT</strong> 全原生体验。
        </p>
      </div>

      <!-- 场景同步切换胶囊（切换时三台设备画面同步联动） -->
      <div
        v-reveal="{ variant: 'up', delay: 200 }"
        class="flex flex-col items-center gap-3 mb-10 lg:mb-14"
      >
        <div class="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.09] backdrop-blur-xl">
          <button
            v-for="scene in appSceneTabs"
            :key="scene.id"
            type="button"
            @click="activeSceneId = scene.id"
            :class="[
              'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300',
              activeSceneId === scene.id
                ? 'bg-white text-slate-950 shadow-lg shadow-white/15'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]',
            ]"
          >
            {{ scene.label }}
          </button>
        </div>
        <p class="text-xs sm:text-sm text-slate-400">
          {{ activeSceneObj.subtitle }} · 点击设备可切换焦点或放大查看原图
        </p>
      </div>

      <!-- 三机同框滚动视差舞台（桌面端三台设备随滚动展开；移动端聚焦当前端 + 快捷切换） -->
      <div ref="trioStageRef" class="relative mb-10 lg:mb-14">
        <!-- 桌面端三机同框展示 -->
        <div class="hidden md:flex items-center justify-center gap-5 lg:gap-8 pt-4 pb-8 min-h-[540px] lg:min-h-[620px]">
          <div
            v-for="slot in orderedTrioSlots"
            :key="slot.profile.id"
            :style="getTrioDeviceStyle(slot.position)"
            @click="handleTrioClick(slot.profile.id)"
            :class="[
              'relative transition-all duration-700 ease-out will-change-transform group',
              slot.position === 'center'
                ? 'w-[270px] lg:w-[305px] z-20'
                : 'w-[228px] lg:w-[258px] z-10',
            ]"
          >
            <!-- 设备顶部平台浮签 -->
            <div class="flex items-center justify-center mb-3.5">
              <span
                :class="[
                  'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md transition-all duration-300',
                  slot.position === 'center'
                    ? slot.profile.accentBadge
                    : 'bg-white/[0.04] text-slate-400 border-white/10 group-hover:text-white',
                ]"
              >
                <span :class="['w-1.5 h-1.5 rounded-full', slot.profile.accentDot]"></span>
                <span>{{ slot.profile.name }}</span>
              </span>
            </div>

            <PhoneMockup
              :platform="slot.profile.id"
              :src="slot.profile.screens[activeSceneId]"
              :alt="`${slot.profile.name} - ${activeSceneObj.label}`"
              :active="slot.position === 'center'"
              interactive
            />

            <!-- 焦点设备的放大提示 -->
            <div
              v-if="slot.position === 'center'"
              class="mt-4 flex items-center justify-center"
            >
              <button
                type="button"
                @click.stop="openLightbox(slot.profile.screens[activeSceneId], `${slot.profile.name} · ${activeSceneObj.label}`, slot.profile.designLanguage)"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
              >
                <svg class="w-3.5 h-3.5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                <span>高清放大查看</span>
              </button>
            </div>
          </div>
        </div>

        <!-- 移动端单机聚焦 + 三端切换 -->
        <div class="md:hidden flex flex-col items-center">
          <div class="w-[260px] sm:w-[290px] mb-5">
            <PhoneMockup
              :platform="activePlatform.id"
              :src="activePlatform.screens[activeSceneId]"
              :alt="`${activePlatform.name} - ${activeSceneObj.label}`"
              active
              interactive
              @click="openLightbox(activePlatform.screens[activeSceneId], `${activePlatform.name} · ${activeSceneObj.label}`, activePlatform.designLanguage)"
            />
          </div>
        </div>

        <!-- 三端平台切换选项卡 -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 mt-2">
          <button
            v-for="plat in appPlatformProfiles"
            :key="plat.id"
            type="button"
            @click="activePlatformId = plat.id"
            :class="[
              'inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border transition-all duration-300',
              activePlatformId === plat.id
                ? 'bg-white/[0.11] text-white border-white/25 shadow-lg shadow-black/40'
                : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border-white/[0.08]',
            ]"
          >
            <span :class="['w-2 h-2 rounded-full', plat.accentDot]"></span>
            <span>{{ plat.name }}</span>
            <span class="hidden sm:inline text-[11px] font-mono text-slate-400">
              {{ plat.techStack.split(' · ')[0] }}
            </span>
          </button>
        </div>
      </div>

      <!-- 当前聚焦平台详情说明卡 -->
      <div
        v-reveal="{ variant: 'up', delay: 80 }"
        class="mp-apple-surface rounded-3xl p-6 sm:p-8 lg:p-10 mb-24 lg:mb-32"
      >
        <transition
          mode="out-in"
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div :key="activePlatform.id" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-5 space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <span :class="['px-3 py-1 rounded-full text-xs font-semibold border', activePlatform.accentBadge]">
                  {{ activePlatform.name }}
                </span>
                <span class="text-xs font-mono text-slate-400">
                  {{ activePlatform.systemSupport }}
                </span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {{ activePlatform.designLanguage }}
              </h3>

              <p class="text-sm sm:text-base text-slate-300/85 leading-relaxed">
                {{ activePlatform.tagline }}
              </p>

              <div class="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span class="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-200">
                  {{ activePlatform.techStack }}
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] font-sans text-slate-300">
                  {{ activePlatform.paletteHint }}
                </span>
              </div>
            </div>

            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="item in activePlatform.highlights"
                :key="item"
                class="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
              >
                <span :class="['w-2 h-2 rounded-full mt-1.5 shrink-0', activePlatform.accentDot]"></span>
                <span class="text-xs sm:text-sm text-slate-200 leading-relaxed">{{ item }}</span>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- ==================== 乐章 2：Apple 风格 Sticky 滚动叙事分镜 ==================== -->
      <div class="mb-24 lg:mb-32">
        <div class="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div v-reveal.fade class="mp-section-badge mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>Crafted Experience</span>
          </div>
          <h3
            v-reveal="{ variant: 'blur-up', delay: 80 }"
            class="mp-display-heading text-3xl sm:text-4xl lg:text-5xl mb-4"
          >
            掌心里的全量媒体体验
          </h3>
          <p v-reveal="{ variant: 'up', delay: 140 }" class="text-base sm:text-lg text-slate-400 leading-relaxed">
            随身影院、双栖追更、3D 勋章与原生工作流，一屏尽览。
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <!-- 左侧：滚动章节卡片流 -->
          <div class="lg:col-span-6 space-y-6 lg:space-y-12">
            <article
              v-for="(chapter, idx) in appStoryChapters"
              :key="chapter.id"
              :ref="(el) => setChapterRef(el as HTMLElement | null, idx)"
              @click="selectStoryChapter(idx)"
              :class="[
                'rounded-3xl p-6 sm:p-8 border transition-all duration-500 cursor-pointer',
                activeStoryIdx === idx
                  ? 'bg-white/[0.06] border-violet-400/35 shadow-[0_24px_64px_-24px_rgba(124,58,237,0.3)]'
                  : 'bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.04] hover:border-white/15 opacity-80 lg:opacity-65 hover:opacity-100',
              ]"
            >
              <div class="flex items-center justify-between gap-3 mb-4">
                <span class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-300">
                  <span class="px-2 py-0.5 rounded-md bg-violet-500/15 border border-violet-400/25">
                    {{ chapter.step }}
                  </span>
                  <span>{{ chapter.eyebrow }}</span>
                </span>
                <span
                  v-if="activeStoryIdx === idx"
                  class="hidden lg:inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-300"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  当前展示
                </span>
              </div>

              <h4 class="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                {{ chapter.title }}
              </h4>
              <p class="text-sm sm:text-base text-slate-300/85 leading-relaxed mb-5">
                {{ chapter.description }}
              </p>

              <!-- 特色标签 -->
              <div class="flex flex-wrap gap-2 mb-5">
                <span
                  v-for="tag in chapter.tags"
                  :key="tag"
                  class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.07]"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- 同一章节内双视角/双平台切换按钮 -->
              <div class="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.07]">
                <button
                  v-for="(slide, sIdx) in chapter.slides"
                  :key="slide.label"
                  type="button"
                  @click.stop="selectStorySlide(idx, sIdx)"
                  :class="[
                    'px-3 py-1.5 rounded-xl text-xs font-medium border transition-all',
                    activeStoryIdx === idx && getChapterSlideIndex(idx) === sIdx
                      ? 'bg-violet-500/20 text-violet-200 border-violet-400/40'
                      : 'bg-white/[0.03] text-slate-400 hover:text-white border-white/10',
                  ]"
                >
                  {{ slide.label }}
                </button>
              </div>

              <!-- 移动端内联真机预览（大屏使用右侧 Sticky 设备） -->
              <div class="lg:hidden mt-6 pt-5 border-t border-white/[0.06] flex flex-col items-center">
                <div class="w-[230px] sm:w-[260px]">
                  <PhoneMockup
                    :platform="chapter.slides[getChapterSlideIndex(idx)].platform"
                    :src="chapter.slides[getChapterSlideIndex(idx)].image"
                    :alt="chapter.slides[getChapterSlideIndex(idx)].caption"
                    active
                    interactive
                    @click.stop="openLightbox(chapter.slides[getChapterSlideIndex(idx)].image, chapter.title, chapter.slides[getChapterSlideIndex(idx)].caption)"
                  />
                </div>
                <p class="mt-3 text-xs text-slate-400 text-center">
                  {{ chapter.slides[getChapterSlideIndex(idx)].caption }}
                </p>
              </div>
            </article>
          </div>

          <!-- 右侧：桌面端 Sticky 固定舞台（随左侧滚动丝滑切换实机画面） -->
          <div class="hidden lg:block lg:col-span-6 lg:sticky lg:top-28">
            <div class="mp-apple-surface rounded-[2.25rem] p-8 xl:p-10 relative overflow-hidden">
              <!-- 动态环境光晕 -->
              <div
                class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[380px] h-[260px] rounded-full bg-gradient-to-b from-violet-500/25 via-indigo-500/15 to-transparent blur-[90px]"
              ></div>

              <!-- 顶栏平台标签与进度指示 -->
              <div class="relative flex items-center justify-between gap-4 mb-6">
                <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.06] text-slate-200 border border-white/10">
                  <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                  <span>{{ activeStorySlide.platformLabel }}</span>
                </span>
                <span class="text-xs font-mono text-slate-400">
                  {{ appStoryChapters[activeStoryIdx].step }} / 0{{ appStoryChapters.length }}
                </span>
              </div>

              <!-- 真机居中展示 -->
              <div class="relative flex justify-center">
                <div class="w-[290px] xl:w-[310px]">
                  <PhoneMockup
                    :platform="activeStorySlide.platform"
                    :src="activeStorySlide.image"
                    :alt="activeStorySlide.caption"
                    active
                    interactive
                    @click="openLightbox(activeStorySlide.image, appStoryChapters[activeStoryIdx].title, activeStorySlide.caption)"
                  />
                </div>
              </div>

              <!-- 底部说明与视角切换 -->
              <div class="relative mt-6 text-center space-y-3">
                <p class="text-sm text-slate-300 leading-relaxed min-h-[42px]">
                  {{ activeStorySlide.caption }}
                </p>
                <div class="flex items-center justify-center gap-2">
                  <button
                    v-for="(slide, sIdx) in appStoryChapters[activeStoryIdx].slides"
                    :key="slide.label"
                    type="button"
                    @click="selectStorySlide(activeStoryIdx, sIdx)"
                    :class="[
                      'px-3 py-1 rounded-full text-xs font-medium border transition-colors',
                      getChapterSlideIndex(activeStoryIdx) === sIdx
                        ? 'bg-white text-slate-950 border-white'
                        : 'bg-white/[0.04] text-slate-300 hover:text-white border-white/10',
                    ]"
                  >
                    {{ slide.label }}
                  </button>
                  <button
                    type="button"
                    @click="openLightbox(activeStorySlide.image, appStoryChapters[activeStoryIdx].title, activeStorySlide.caption)"
                    class="px-3 py-1 rounded-full text-xs font-medium text-violet-300 hover:text-violet-200 bg-violet-500/10 border border-violet-400/25 transition-colors"
                  >
                    放大原图
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==================== 乐章 3：Rust 共享内核 × SSOT 架构底座 ==================== -->
      <div class="mb-16 lg:mb-20">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div v-reveal.up>
            <span class="text-xs font-mono uppercase tracking-wider text-violet-300">
              Shared Core Architecture
            </span>
            <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
              全原生不止于界面，内核同样硬核
            </h3>
          </div>
          <p v-reveal="{ variant: 'up', delay: 80 }" class="text-sm text-slate-400 max-w-md">
            统一核心与安全边界，兼顾原生手感与多端一致。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(pillar, idx) in appArchitecturePillars"
            :key="pillar.title"
            v-reveal="{ variant: 'up', delay: idx * 80 }"
            class="mp-card rounded-3xl p-6 overflow-hidden flex flex-col justify-between group"
          >
            <div
              :class="[
                'pointer-events-none absolute -top-20 -right-20 w-52 h-52 rounded-full bg-gradient-to-br blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500',
                pillar.accent,
              ]"
            ></div>

            <div class="relative">
              <div class="flex items-center justify-between gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-violet-300 group-hover:scale-105 transition-transform">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="pillar.iconPath" />
                  </svg>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/[0.05] text-slate-300 border border-white/10">
                  {{ pillar.badge }}
                </span>
              </div>

              <h4 class="text-lg font-bold text-white mb-2 tracking-tight">
                {{ pillar.title }}
              </h4>
              <p class="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-5">
                {{ pillar.description }}
              </p>
            </div>

            <div class="relative pt-3 border-t border-white/[0.06] text-[11px] font-mono text-violet-300/90">
              {{ pillar.metrics }}
            </div>
          </div>
        </div>
      </div>

      <!-- ==================== 乐章 4：三端联合发布与下载入口 ==================== -->
      <div
        v-reveal="{ variant: 'scale', delay: 80 }"
        class="mp-apple-surface rounded-3xl p-6 sm:p-8 lg:p-10"
      >
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-7 pb-6 border-b border-white/[0.07]">
          <div>
            <div class="flex flex-wrap items-center gap-2.5 mb-2">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-200 border border-violet-400/30">
                三端同步发布
              </span>
              <span class="text-xs font-mono text-slate-400">
                GitHub Actions 自动构建
              </span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
              获取官方全原生客户端
            </h3>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/jxxghp/MoviePilot-App/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 shadow-lg shadow-white/15 transition-all"
            >
              <span>下载三端安装包</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a
              href="https://github.com/jxxghp/MoviePilot-App/blob/v2/screenshots/README.md"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-colors"
            >
              <span>浏览三端实测图册</span>
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            v-for="artifact in appReleaseArtifacts"
            :key="artifact.platform"
            href="https://github.com/jxxghp/MoviePilot-App/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            class="p-4 rounded-2xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/[0.07] hover:border-violet-400/35 transition-all group"
          >
            <div class="flex items-center justify-between gap-2 mb-2.5">
              <span :class="['px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold border', artifact.accent]">
                {{ artifact.badge }}
              </span>
              <svg class="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div class="text-sm font-bold text-white">{{ artifact.platform }}</div>
            <div class="text-xs text-slate-400 mt-0.5 mb-2.5">{{ artifact.arch }}</div>
            <div class="text-[11px] font-mono text-slate-500 truncate">{{ artifact.packageHint }}</div>
          </a>
        </div>
      </div>
    </div>

    <!-- App 截图高清全屏 Lightbox -->
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
          v-if="lightbox.open"
          class="fixed inset-0 z-[100] bg-black/92 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          @click.self="closeLightbox"
        >
          <div class="relative max-w-xl w-full flex flex-col items-center">
            <div class="w-full flex items-center justify-between gap-4 mb-4">
              <div class="min-w-0">
                <h3 class="text-base sm:text-lg font-bold text-white truncate">{{ lightbox.title }}</h3>
                <p class="text-xs sm:text-sm text-slate-400 truncate">{{ lightbox.subtitle }}</p>
              </div>
              <button
                type="button"
                aria-label="关闭大图预览"
                @click="closeLightbox"
                class="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                关闭
              </button>
            </div>

            <div class="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#05070e] max-h-[82vh]">
              <img
                :src="lightbox.src"
                :alt="lightbox.title"
                class="w-auto max-h-[82vh] max-w-full object-contain block"
              />
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'
import PhoneMockup from './PhoneMockup.vue'
import { useScrollProgress } from '../composables/useScrollProgress'
import {
  appSceneTabs,
  appPlatformProfiles,
  appStoryChapters,
  appArchitecturePillars,
  appReleaseArtifacts,
  type AppPlatformId,
  type AppSceneId,
} from '../data/siteContent'

const activePlatformId = ref<AppPlatformId>('ios')
const activeSceneId = ref<AppSceneId>('discover')

const activePlatform = computed(
  () => appPlatformProfiles.find((p) => p.id === activePlatformId.value) || appPlatformProfiles[0],
)

const activeSceneObj = computed(
  () => appSceneTabs.find((s) => s.id === activeSceneId.value) || appSceneTabs[0],
)

/**
 * 动态编排三机舞台顺序：当前选中平台始终稳居中央 C 位，其余两台分列左右，
 * 实现类似 Apple 产品页的焦点切换体验。
 */
const orderedTrioSlots = computed(() => {
  const byId = Object.fromEntries(appPlatformProfiles.map((p) => [p.id, p])) as Record<
    AppPlatformId,
    (typeof appPlatformProfiles)[number]
  >
  if (activePlatformId.value === 'android') {
    return [
      { position: 'left' as const, profile: byId.ios },
      { position: 'center' as const, profile: byId.android },
      { position: 'right' as const, profile: byId.harmony },
    ]
  }
  if (activePlatformId.value === 'harmony') {
    return [
      { position: 'left' as const, profile: byId.android },
      { position: 'center' as const, profile: byId.harmony },
      { position: 'right' as const, profile: byId.ios },
    ]
  }
  return [
    { position: 'left' as const, profile: byId.android },
    { position: 'center' as const, profile: byId.ios },
    { position: 'right' as const, profile: byId.harmony },
  ]
})

// 连续滚动视差驱动：三台设备随滚动逐渐向外舒展并立正
const trioStageRef = ref<HTMLElement | null>(null)
const { enterProgress } = useScrollProgress(trioStageRef)

const getTrioDeviceStyle = (position: 'left' | 'center' | 'right') => {
  const p = enterProgress.value
  const easeOut = 1 - Math.pow(1 - p, 3)

  if (position === 'center') {
    const scale = 0.92 + easeOut * 0.08
    const ty = (1 - easeOut) * 32
    return {
      transform: `translate3d(0, ${ty.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`,
    }
  }

  const direction = position === 'left' ? -1 : 1
  // 从略微向内收拢状态平滑向外展开，伴随细腻的垂直落差与轻微旋转
  const tx = direction * (1 - easeOut) * -46
  const ty = 18 + (1 - easeOut) * 38
  const rot = direction * (2.6 - easeOut * 1.1)
  const scale = 0.88 + easeOut * 0.06
  return {
    transform: `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(4)})`,
  }
}

const handleTrioClick = (platformId: AppPlatformId) => {
  if (activePlatformId.value === platformId) {
    openLightbox(
      activePlatform.value.screens[activeSceneId.value],
      `${activePlatform.value.name} · ${activeSceneObj.value.label}`,
      activePlatform.value.designLanguage,
    )
    return
  }
  activePlatformId.value = platformId
}

// ==================== Sticky 滚动叙事分镜控制 ====================
const activeStoryIdx = ref(0)
const chapterSlideMap = reactive<Record<number, number>>({})
const chapterElements = new Map<number, HTMLElement>()
let storyObserver: IntersectionObserver | null = null

const getChapterSlideIndex = (chapterIdx: number) => chapterSlideMap[chapterIdx] ?? 0

const activeStorySlide = computed(() => {
  const chapter = appStoryChapters[activeStoryIdx.value] || appStoryChapters[0]
  const slideIdx = getChapterSlideIndex(activeStoryIdx.value)
  return chapter.slides[slideIdx] || chapter.slides[0]
})

const setChapterRef = (el: HTMLElement | null, idx: number) => {
  if (el) {
    chapterElements.set(idx, el)
  } else {
    chapterElements.delete(idx)
  }
}

const selectStoryChapter = (idx: number) => {
  activeStoryIdx.value = idx
}

const selectStorySlide = (chapterIdx: number, slideIdx: number) => {
  activeStoryIdx.value = chapterIdx
  chapterSlideMap[chapterIdx] = slideIdx
}

// Lightbox 高清原图预览
const lightbox = reactive({
  open: false,
  src: '',
  title: '',
  subtitle: '',
})

const openLightbox = (src: string, title: string, subtitle: string) => {
  lightbox.src = src
  lightbox.title = title
  lightbox.subtitle = subtitle
  lightbox.open = true
}

const closeLightbox = () => {
  lightbox.open = false
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && lightbox.open) {
    closeLightbox()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)

  if (typeof IntersectionObserver !== 'undefined') {
    // 监听视口中间阅读带（上下各收窄 34%），当左侧章节滑入视觉中心即切换右侧真机画面
    storyObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idxAttr = (entry.target as HTMLElement).dataset.storyIdx
            if (idxAttr !== undefined) {
              activeStoryIdx.value = Number(idxAttr)
            }
          }
        }
      },
      {
        rootMargin: '-34% 0px -34% 0px',
        threshold: 0.05,
      },
    )

    chapterElements.forEach((el, idx) => {
      el.dataset.storyIdx = String(idx)
      storyObserver?.observe(el)
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  storyObserver?.disconnect()
  storyObserver = null
})
</script>
