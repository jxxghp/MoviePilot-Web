<template>
  <!-- Grand Closing CTA + Multi-Repo Architecture + Footer -->
  <div>
    <!-- Closing CTA Banner -->
    <section class="relative py-24 overflow-hidden">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          v-reveal="{ variant: 'scale', duration: 950 }"
          class="relative rounded-[2.25rem] p-8 sm:p-16 overflow-hidden border border-white/15 bg-gradient-to-br from-violet-950/65 via-[#0a0f22] to-indigo-950/65 shadow-2xl text-center"
        >
          <div class="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[280px] rounded-full bg-violet-500/25 blur-[110px]"></div>

          <div class="relative max-w-2xl mx-auto">
            <h2 class="mp-display-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
              即刻开启全端媒体库自动化
            </h2>
            <p class="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-9">
              开源免费、轻量易扩展，覆盖 Web 与三端原生 App，让影音馆藏始终井然有序。
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="https://github.com/jxxghp/MoviePilot/releases"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-slate-950 bg-white hover:bg-slate-100 shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <span>服务端 Releases</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="https://github.com/jxxghp/MoviePilot-App/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>下载三端原生 App</span>
              </a>
              <a
                href="https://t.me/moviepilot_channel"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 transition-all duration-200"
              >
                <span>Telegram 频道</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-white/[0.08] bg-[#03050b] pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Multi-Repo Ecosystem Bar -->
        <div class="mb-14 pb-12 border-b border-white/[0.06]">
          <div v-reveal.fade class="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
            Open-Source Repositories · 模块化开源仓库
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
            <a
              v-for="(repo, idx) in repoMatrix"
              :key="repo.name"
              :href="repo.url"
              target="_blank"
              rel="noopener noreferrer"
              v-reveal="{ variant: 'up', delay: idx * 55 }"
              class="p-4 rounded-2xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/[0.06] hover:border-violet-400/30 transition-all group"
            >
              <div class="flex items-center justify-between gap-2 mb-1.5">
                <span class="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors truncate">
                  {{ repo.name }}
                </span>
                <svg class="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">{{ repo.desc }}</p>
            </a>
          </div>
        </div>

        <!-- Footer Columns -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/[0.06]">
          <div class="md:col-span-5">
            <div class="flex items-center gap-3 mb-4">
              <img :src="iconImage" alt="MoviePilot" class="w-9 h-9 rounded-xl ring-1 ring-white/15" />
              <span class="text-xl font-bold text-white tracking-tight">MoviePilot</span>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed max-w-md mb-3">
              开源个人媒体库自动化管理平台，覆盖 Web 控制台与三端全原生客户端，专注影视与音乐全流程整理。
            </p>
            <p class="text-xs text-slate-500 leading-relaxed max-w-md">
              免责声明：本项目开源免费且不接受捐赠，仅供个人学习与技术交流，请勿用于商业或违法用途。
            </p>
          </div>

          <div class="md:col-span-2">
            <h4 class="text-sm font-semibold text-white mb-4">产品导览</h4>
            <ul class="space-y-2.5 text-sm text-slate-400">
              <li><a href="#showcase" class="hover:text-white transition-colors">界面预览</a></li>
              <li><a href="#native-app" class="hover:text-white transition-colors">三端客户端</a></li>
              <li><a href="#features" class="hover:text-white transition-colors">核心特性</a></li>
              <li><a href="#ai-agent" class="hover:text-white transition-colors">AI 与 MCP</a></li>
              <li><a href="#plugins" class="hover:text-white transition-colors">插件生态</a></li>
              <li><a href="#installation" class="hover:text-white transition-colors">快速部署</a></li>
            </ul>
          </div>

          <div class="md:col-span-2">
            <h4 class="text-sm font-semibold text-white mb-4">文档与开发</h4>
            <ul class="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="https://wiki.movie-pilot.org/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
                  官方 Wiki
                </a>
              </li>
              <li>
                <a href="https://wiki.movie-pilot.org/zh/v3" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
                  V3 版本说明
                </a>
              </li>
              <li>
                <a href="https://api.movie-pilot.org/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
                  REST API 文档
                </a>
              </li>
              <li>
                <a href="https://wiki.movie-pilot.org/zh/plugindev" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
                  插件开发指南
                </a>
              </li>
            </ul>
          </div>

          <div class="md:col-span-3">
            <h4 class="text-sm font-semibold text-white mb-4">开源社区</h4>
            <ul class="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="https://github.com/jxxghp/MoviePilot" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
                  GitHub 主仓库
                </a>
              </li>
              <li>
                <a href="https://github.com/jxxghp/MoviePilot-App" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
                  三端原生客户端仓库
                </a>
              </li>
              <li>
                <a href="https://t.me/moviepilot_channel" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
                  Telegram 发布频道
                </a>
              </li>
              <li>
                <a href="https://t.me/moviepilot_official" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
                  Telegram 社区交流群
                </a>
              </li>
              <li>
                <a href="https://github.com/jxxghp/MoviePilot/issues" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
                  Issue 问题反馈
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright Bottom Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p class="text-center sm:text-left">© {{ currentYear }} MoviePilot Open Source Project · Released under the GPL-3.0 License.</p>
          <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 whitespace-nowrap">
            <a href="https://movie-pilot.org" class="hover:text-slate-300 transition-colors">movie-pilot.org</a>
            <span>·</span>
            <a href="https://wiki.movie-pilot.org" target="_blank" rel="noopener noreferrer" class="hover:text-slate-300 transition-colors">wiki.movie-pilot.org</a>
            <span>·</span>
            <a href="https://api.movie-pilot.org" target="_blank" rel="noopener noreferrer" class="hover:text-slate-300 transition-colors">api.movie-pilot.org</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import iconImage from '../assets/icon.png'
import { repoMatrix } from '../data/siteContent'

const currentYear = new Date().getFullYear()
</script>
