import type { GearCategory } from "./types"

/*
 * ─────────────────────────────────────────────────────────────────────────
 *  /uses — "what I use". The classic developer-gear page.
 *
 *  ⚠ TODO: the hardware/theme/font categories are left as hints because I
 *  can't know your real setup. The tooling entries below reflect what this
 *  environment actually runs (Windows 11, PowerShell 7, JetBrains, pnpm…).
 *  Delete the `hint`s and add your own `items`.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const gearCategories: GearCategory[] = [
  {
    title: {
      en: "Workstation & hardware",
      zh: "工作站与硬件",
    },
    hint: {
      en: "⚠ TODO — list your machines & peripherals (laptop / desktop / phone / keyboard / monitor …).",
      zh: "⚠ TODO — 列出你的设备与外设（笔记本 / 台式机 / 手机 / 键盘 / 显示器 …）。",
    },
    items: [],
  },
  {
    title: {
      en: "Editor & IDE theme",
      zh: "编辑器与主题",
    },
    hint: {
      en: "⚠ TODO — your IDE theme + colour scheme. This project is developed in a JetBrains IDE.",
      zh: "⚠ TODO — 你的编辑器主题与配色。本项目在 JetBrains IDE 中开发。",
    },
    items: [
      {
        name: "JetBrains IDEs",
        detail: {
          en: "IntelliJ-family IDEs across Java, Go and front-end work.",
          zh: "Java、Go 与前端开发所用的 IntelliJ 系 IDE。",
        },
        href: "https://www.jetbrains.com",
      },
    ],
  },
  {
    title: {
      en: "Terminal & shell",
      zh: "终端与 Shell",
    },
    items: [
      {
        name: "PowerShell 7 (pwsh)",
        detail: {
          en: "Daily shell on Windows — the shell this very site is built in.",
          zh: "Windows 上的日常 Shell——本站正是在这个终端里构建的。",
        },
        href: "https://learn.microsoft.com/powershell/",
      },
      {
        name: "Git for Windows (Git Bash)",
        detail: {
          en: "Git workflows and POSIX-flavoured scripting on Windows.",
          zh: "Windows 下的 Git 工作流与 POSIX 风格脚本。",
        },
        href: "https://gitforwindows.org",
      },
    ],
  },
  {
    title: {
      en: "Toolchain",
      zh: "开发工具链",
    },
    items: [
      {
        name: "pnpm",
        detail: { en: "Fast, disk-efficient package manager.", zh: "快速且省磁盘的包管理器。" },
        href: "https://pnpm.io",
      },
      {
        name: "Node.js (v24)",
        detail: { en: "Current LTS line used for tooling.", zh: "工具链所用的当前 LTS 版本。" },
        href: "https://nodejs.org",
      },
      {
        name: "Prettier",
        detail: { en: "Opinionated code formatter.", zh: "固执己见的代码格式化器。" },
        href: "https://prettier.io",
      },
    ],
  },
  {
    title: {
      en: "Fonts & typography",
      zh: "字体与排版",
    },
    hint: {
      en: "⚠ TODO — your preferred pairing & fallback chain (e.g. Inter with a mono like JetBrains Mono, plus platform fallbacks).",
      zh: "⚠ TODO — 你偏好的字体搭配与 fallback 链（例如 Inter 搭配 JetBrains Mono 等宽，并带平台回退）。",
    },
    items: [],
  },
]
