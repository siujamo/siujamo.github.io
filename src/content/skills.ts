import type { SkillGroup } from "./types"

/** Grouped skill set, mirroring what is listed on the GitHub profile README. */
export const skillGroups: SkillGroup[] = [
  {
    group: { en: "Languages", zh: "编程语言" },
    items: ["Java", "Go", "Rust", "Python", "TypeScript", "C#"],
  },
  {
    group: { en: "Frameworks & Runtime", zh: "框架与运行时" },
    items: ["Spring Boot", "Gin", "React", "Tauri", ".NET 9"],
  },
  {
    group: { en: "Data & Infrastructure", zh: "数据与基础设施" },
    items: ["PostgreSQL", "Docker", "Linux", "GitHub / Gitea Actions"],
  },
]
