import type { Bilingual } from "../lib/types"

/*
 * ─────────────────────────────────────────────────────────────────────────
 *  Site identity & copy.
 *
 *  Personal details marked "⚠ TODO" below are placeholders you must replace
 *  before publishing — they are not filled in because they are not public
 *  on your GitHub profile.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "siujamo",
  domain: "siujamo.github.io",
  sourceUrl: "https://github.com/siujamo/siujamo.github.io",

  tagline: {
    en: "Full-Stack Developer · Software Architect · DevOps Engineer",
    zh: "全栈开发 · 软件架构 · DevOps 工程师",
  } satisfies Bilingual,

  location: {
    en: "Nanjing, China · UTC+8",
    zh: "中国 · 南京（UTC+8）",
  } satisfies Bilingual,

  summary: {
    en: "I build high-concurrency distributed systems, elegant APIs and polished desktop tooling — and I like squeezing every last drop of performance out of constrained environments, whether that's a 10 Mbps edge network or a Rust-powered desktop app.",
    zh: "我擅长高并发分布式系统、优雅的 API 与打磨到位的桌面工具——也享受在受限环境里榨干最后一丝性能，无论是 10 Mbps 的边缘网络，还是 Rust 写的桌面应用。",
  } satisfies Bilingual,
}

/** Contact channels. Keep `email` / `linkedin` as `null` to hide them. */
export const contact: {
  email: string | null
  linkedin: string | null
} = {
  email: "jamo.siu@gmail.com",
  linkedin: null,
}

export const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/siujamo" },
  { label: "X / Twitter", href: "https://x.com/siujamo" },
]
