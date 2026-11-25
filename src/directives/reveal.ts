import type { Directive, DirectiveBinding } from 'vue'

export type RevealVariant = 'up' | 'blur-up' | 'scale' | 'left' | 'right' | 'fade'

export interface RevealOptions {
  /** 入场动效变体，默认 up（经典 Apple 柔滑上浮） */
  variant?: RevealVariant
  /** 阶梯延迟（毫秒），用于卡片与列表依次浮现 */
  delay?: number
  /** 过渡时长（毫秒），默认 900ms */
  duration?: number
  /** 位移距离（px），默认由 CSS 变体决定 */
  distance?: number
  /** 是否仅在首次进入视口时触发，默认 true 避免反复回弹干扰阅读 */
  once?: boolean
}

type RevealBindingValue = RevealOptions | RevealVariant | number | undefined

interface RevealElement extends HTMLElement {
  __mpRevealOnce?: boolean
}

const VALID_VARIANTS: RevealVariant[] = ['up', 'blur-up', 'scale', 'left', 'right', 'fade']

let sharedObserver: IntersectionObserver | null = null

/**
 * 判断系统是否启用了减少动态效果偏好。
 * 遵循无障碍规范，开启时直接静态展示所有内容，不做隐藏与位移。
 */
const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * 获取全站复用的 IntersectionObserver，减少滚动监听实例开销。
 * 底部保留 -8% rootMargin，让元素刚进入阅读区即平滑展开，接近 Apple 官网节奏。
 */
const getObserver = (): IntersectionObserver | null => {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return null
  }
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as RevealElement
          if (entry.isIntersecting) {
            el.classList.add('mp-reveal-visible')
            if (el.__mpRevealOnce !== false) {
              sharedObserver?.unobserve(el)
            }
          } else if (el.__mpRevealOnce === false && entry.boundingClientRect.top > 0) {
            // 仅在元素完全退回视口下方时重置，向上回滚查看时不闪烁消失
            el.classList.remove('mp-reveal-visible')
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -7% 0px',
      },
    )
  }
  return sharedObserver
}

/**
 * 解析指令绑定值与修饰符，支持简写（如 v-reveal、v-reveal.scale、v-reveal="120"）
 * 以及完整对象配置（v-reveal="{ variant: 'scale', delay: 160 }"）。
 */
const parseOptions = (binding: DirectiveBinding<RevealBindingValue>): Required<Omit<RevealOptions, 'distance'>> & { distance?: number } => {
  const modifiers = binding.modifiers || {}
  let variant: RevealVariant = 'up'
  let delay = 0
  let duration = 900
  let distance: number | undefined
  let once = !modifiers.repeat

  for (const key of VALID_VARIANTS) {
    if (modifiers[key]) {
      variant = key
      break
    }
  }

  const val = binding.value
  if (typeof val === 'number') {
    delay = val
  } else if (typeof val === 'string' && VALID_VARIANTS.includes(val)) {
    variant = val
  } else if (val && typeof val === 'object') {
    if (val.variant) variant = val.variant
    if (typeof val.delay === 'number') delay = val.delay
    if (typeof val.duration === 'number') duration = val.duration
    if (typeof val.distance === 'number') distance = val.distance
    if (typeof val.once === 'boolean') once = val.once
  }

  return { variant, delay, duration, distance, once }
}

/**
 * 类 Apple 官网滚动渐显指令（v-reveal）。
 * 通过 GPU 合成层属性（transform / opacity / filter）实现流畅的滚动入场编排。
 */
export const revealDirective: Directive<RevealElement, RevealBindingValue> = {
  mounted(el, binding) {
    const opts = parseOptions(binding)
    el.__mpRevealOnce = opts.once

    if (prefersReducedMotion()) {
      el.classList.add('mp-reveal-visible')
      return
    }

    el.classList.add('mp-reveal', `mp-reveal--${opts.variant}`)
    el.style.setProperty('--reveal-delay', `${opts.delay}ms`)
    el.style.setProperty('--reveal-duration', `${opts.duration}ms`)
    if (typeof opts.distance === 'number') {
      el.style.setProperty('--reveal-distance', `${opts.distance}px`)
    }

    const observer = getObserver()
    if (!observer) {
      el.classList.add('mp-reveal-visible')
      return
    }

    observer.observe(el)
  },

  unmounted(el) {
    sharedObserver?.unobserve(el)
  },
}
