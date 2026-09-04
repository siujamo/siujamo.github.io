import type { Essay } from "./types"

/*
 * ─────────────────────────────────────────────────────────────────────────
 *  Essays (随笔) — optional, non-technical-or-not writing.
 *
 *  ⚠ TODO: the entry below is a sample to demonstrate the format. Replace it
 *  with your own posts (or set `essays` to `[]` to hide the list). Each post
 *  needs a unique `slug`, a date, a summary and an array of paragraphs in
 *  both languages.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const essays: Essay[] = [
  {
    slug: "why-this-site-exists",
    title: {
      en: "Why this site exists",
      zh: "这个网站为什么存在",
    },
    date: "2026-09-04",
    summary: {
      en: "A short note on keeping a personal corner of the web — and what I plan to put here.",
      zh: "关于在网络上保留一块自留地的小记——以及我打算在这里放些什么。",
    },
    body: [
      {
        en: 'Most of my working hours go into systems that never get a face: OTA servers, CI pipelines, quietly reliable services. A personal site is the opposite — it is a place where the "who" finally matters as much as the "what".',
        zh: "我工作里的大部分时间都花在没有面孔的系统上：OTA 升级服务、CI 流水线、那些安静又可靠的服务。而个人网站正好相反——在这里，「我是谁」终于和「我做了什么」一样重要。",
      },
      {
        en: "So this site is intentionally simple. It keeps the essentials — who I am, what I have built, what I use — in one editable place, and it gives me a spot to write without a publishing pipeline.",
        zh: "所以这个站点故意做得很简单：把「我是谁、做过什么、用什么」这些基本盘集中在一个可编辑的地方，也给我留了一块不用搭发布流程就能写点东西的空间。",
      },
      {
        en: "Expect occasional posts about building for constrained environments, developer tooling, and whatever else I am currently obsessed with. If you have thoughts, the GitHub repo is a fine place to reach me.",
        zh: "这里会不定期更新：受限环境下做开发、开发者工具，以及我当下痴迷的任何东西。如果有什么想法，GitHub 仓库就是找到我的好地方。",
      },
    ],
  },
]
