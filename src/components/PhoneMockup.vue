<template>
  <!-- 三端差异化硬件真机外框，还原各旗舰设备的精致物理比例与玻璃高光 -->
  <div
    :class="[
      'mp-phone-shell relative select-none transition-all duration-500',
      interactive ? 'cursor-pointer' : '',
      active
        ? 'ring-1 ring-white/25 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.95),0_0_80px_-20px_rgba(139,92,246,0.38)]'
        : 'opacity-85 hover:opacity-100',
    ]"
  >
    <!-- 侧边实体按键高光点缀 -->
    <span
      class="pointer-events-none absolute -right-[2px] top-[24%] w-[2px] h-12 rounded-r bg-white/25"
    ></span>
    <span
      class="pointer-events-none absolute -left-[2px] top-[19%] w-[2px] h-8 rounded-l bg-white/20"
    ></span>
    <span
      class="pointer-events-none absolute -left-[2px] top-[30%] w-[2px] h-10 rounded-l bg-white/20"
    ></span>

    <div class="mp-phone-screen aspect-[9/19.5] w-full bg-[#05070e]">
      <!-- 顶部硬件传感器装饰（不遮挡截图核心信息） -->
      <div
        v-if="platform === 'ios'"
        class="pointer-events-none absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-[27%] h-[18px] rounded-full bg-black/90 border border-white/[0.08] shadow-inner flex items-center justify-end pr-2"
      >
        <span class="w-2 h-2 rounded-full bg-[#111936] ring-1 ring-indigo-400/20"></span>
      </div>
      <div
        v-else-if="platform === 'android'"
        class="pointer-events-none absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-3 h-3 rounded-full bg-black/95 border border-white/10"
      ></div>
      <div
        v-else
        class="pointer-events-none absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-[20%] h-[14px] rounded-full bg-black/90 border border-white/[0.08] flex items-center justify-center gap-2"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-[#111936]"></span>
      </div>

      <!-- 丝滑切图过渡 -->
      <transition
        mode="out-in"
        enter-active-class="transition duration-400 ease-out"
        enter-from-class="opacity-0 scale-[1.02]"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-[0.985]"
      >
        <img
          :key="src"
          :src="src"
          :alt="alt"
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover object-top block"
        />
      </transition>

      <!-- 玻璃表面极轻斜角反光 -->
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.025] to-white/[0.08] opacity-60"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AppPlatformId } from '../data/siteContent'

defineProps<{
  platform: AppPlatformId
  src: string
  alt: string
  active?: boolean
  interactive?: boolean
}>()
</script>
