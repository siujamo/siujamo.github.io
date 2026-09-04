import type { Bilingual } from "@/lib/types"

/*
 * ─────────────────────────────────────────────────────────────────────────
 *  Resume / CV data.
 *
 *  ⚠ TODO: `experience` is intentionally left empty — I cannot guess your
 *  real work history. Copy this sample entry and adapt it (then delete the
 *  comment):
 *
 *    {
 *      role: { en: 'Senior Backend Engineer', zh: '高级后端工程师' },
 *      org: { en: 'Example Ltd', zh: '示例公司' },
 *      period: '2022-06 — present',
 *      location: { en: 'Nanjing', zh: '南京' },
 *      points: [
 *        {
 *          en: '…what you did and the measurable result…',
 *          zh: '……你做了什么、带来了什么可量化的结果……',
 *        },
 *      ],
 *    }
 *
 *  Sections with an empty array are simply hidden on the page, so an
 *  unfinished CV never looks broken.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface ResumeEntry {
  role: Bilingual
  org: Bilingual
  period: string
  location?: Bilingual
  points: Bilingual[]
}

export const resume = {
  name: {
    en: "SIU Jam Oh",
    zh: "邵鑫柯",
  } satisfies Bilingual,

  objective: {
    en: "Full-stack engineer with a software-architecture and DevOps mindset. Comfortable owning systems end to end — from high-concurrency Go and Java services down to PostgreSQL data modelling and the CI/CD that ships them.",
    zh: "具备软件架构与 DevOps 思维的全栈工程师，习惯端到端地负责系统——从高并发的 Go / Java 服务，到 PostgreSQL 数据建模，再到把它们送上线的 CI/CD。",
  } satisfies Bilingual,

  experience: [
    {
      role: { en: "Senior Backend Engineer", zh: "后端工程师" },
      org: { en: "Nanjing Kuanta Information Technology Co., Ltd", zh: "南京宽塔信息技术有限公司" },
      period: "2025-01 — present",
      location: { en: "Nanjing", zh: "南京" },
      points: [
        {
          en: "…what you did and the measurable result…",
          zh: "……你做了什么、带来了什么可量化的结果……",
        },
      ],
    },
  ] as ResumeEntry[],

  education: [
    {
      role: {
        en: "B.Eng. in Software Engineering — full-time undergraduate",
        zh: "全日制工学学士 · 软件工程",
      },
      org: {
        en: "Changsha University of Science and Technology",
        zh: "长沙理工大学",
      },
      period: "2021.09 — 2023.06",
      location: { en: "Changsha", zh: "长沙" },
      points: [
        {
          en: "GPA 3.4/4.0 — top 5% of the cohort.",
          zh: "GPA 3.4/4.0，位列年级前 5%。",
        },
        {
          en: "Honours: University Second-Class Scholarship and Outstanding Graduate.",
          zh: "荣誉：校二等奖学金、优秀毕业生。",
        },
      ],
    },
  ] as ResumeEntry[],

  interests: {
    en: "Distributed systems · Edge computing · Developer tooling · Desktop (Rust / .NET)",
    zh: "分布式系统 · 边缘计算 · 开发者工具 · 桌面端（Rust / .NET）",
  } satisfies Bilingual,
}
