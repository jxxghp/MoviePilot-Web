import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export interface ScrollProgressOptions {
  /** 仅在元素靠近或位于视口时更新，降低长页面重算频率 */
  bufferPx?: number
}

const isReducedMotion = (): boolean => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * 追踪单个 DOM 元素穿越视口的连续滚动进度，驱动类 Apple 产品页的
 * 3D 视差展开、设备微缩放与舞台光晕联动效果。
 *
 * - `enterProgress`: 0（刚出现在视口底部） -> 1（到达视口黄金阅读区）
 * - `centeredProgress`: -1（视口下方） -> 0（视口中央） -> 1（视口上方）
 */
export function useScrollProgress(
  targetRef: Ref<HTMLElement | null>,
  options: ScrollProgressOptions = {},
) {
  const enterProgress = ref(1)
  const centeredProgress = ref(0)
  const bufferPx = options.bufferPx ?? 320

  let rafId: number | null = null

  const compute = () => {
    rafId = null
    const el = targetRef.value
    if (!el || isReducedMotion()) {
      enterProgress.value = 1
      centeredProgress.value = 0
      return
    }

    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || 1

    // 远离视口时跳过精细插值，但保留边界态避免回滚突跳
    if (rect.bottom < -bufferPx) {
      enterProgress.value = 1
      centeredProgress.value = 1
      return
    }
    if (rect.top > vh + bufferPx) {
      enterProgress.value = 0
      centeredProgress.value = -1
      return
    }

    // 元素顶部从视口底部（vh * 1.02）滑动至视口上部（vh * 0.22）区间内完成主展开
    const start = vh * 1.02
    const end = vh * 0.22
    const rawEnter = (start - rect.top) / Math.max(1, start - end)
    enterProgress.value = Math.min(1, Math.max(0, rawEnter))

    // 元素中心相对视口中心的标准化偏移，适合微幅视差位移
    const elementCenter = rect.top + rect.height * 0.5
    const viewportCenter = vh * 0.5
    const rawCentered = (viewportCenter - elementCenter) / Math.max(1, vh * 0.75)
    centeredProgress.value = Math.min(1, Math.max(-1, rawCentered))
  }

  const schedule = () => {
    if (rafId === null) {
      rafId = window.requestAnimationFrame(compute)
    }
  }

  onMounted(() => {
    compute()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId)
      rafId = null
    }
  })

  return {
    enterProgress,
    centeredProgress,
  }
}

/**
 * 追踪整页滚动进度（0 ~ 1）与当前滚动距离，驱动顶部阅读进度细光条与吸顶玻璃导航。
 */
export function usePageScrollProgress() {
  const scrollY = ref(0)
  const pageProgress = ref(0)
  let rafId: number | null = null

  const update = () => {
    rafId = null
    const y = window.scrollY || window.pageYOffset || 0
    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight,
    )
    scrollY.value = y
    pageProgress.value = Math.min(1, Math.max(0, y / maxScroll))
  }

  const schedule = () => {
    if (rafId === null) {
      rafId = window.requestAnimationFrame(update)
    }
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId)
      rafId = null
    }
  })

  return {
    scrollY,
    pageProgress,
  }
}
