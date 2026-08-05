
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // 线上静态资源使用 immutable 长缓存，保留 Vite 默认内容哈希以确保每次发布即时生效。
    assetsDir: 'assets'
  }
})
