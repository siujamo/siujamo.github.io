import { PageHeader } from "@/components/PageHeader"
import { Seo } from "@/components/Seo"
import { h2, page, plainLink, plainList } from "@/components/ui"
import { contact, site, socials } from "@/content/site"
import { skillGroups } from "@/content/skills"
import { useText } from "@/i18n/useI18n"

const copy = {
  eyebrow: { en: "// about", zh: "// 关于我" },
  title: { en: "About Me", zh: "关于我" },
  lead: {
    en: "Full-stack developer, software architect and DevOps engineer based in Nanjing, China.",
    zh: "全栈开发、软件架构与 DevOps 工程师，坐标中国南京。",
  },
  backgroundTitle: { en: "Background", zh: "技术背景" },
  background: {
    en: "I build high-concurrency distributed systems, elegant APIs and polished desktop tooling. My day-to-day spans Spring Boot and Go services, PostgreSQL data modelling, and TypeScript/React interfaces — with Rust and C#/.NET reserved for the desktop tools I want to feel great to use.",
    zh: "我擅长构建高并发分布式系统、优雅的 API 与打磨到位的桌面工具。日常工作覆盖 Spring Boot 与 Go 服务、PostgreSQL 数据建模、TypeScript / React 界面——Rust 与 C#/.NET 则留给我希望手感出众的桌面工具。",
  },
  focusTitle: { en: "Current focus", zh: "当前关注" },
  focus: [
    {
      en: "Update delivery that stays reliable when bandwidth is scarce — OTA to fleets of devices over links measured in single-digit Mbps.",
      zh: "在带宽稀缺时依然可靠的升级下发——在只有个位数 Mbps 的链路上向设备群做 OTA。",
    },
    {
      en: "Smooth developer experience: clean CI/CD on GitHub and Gitea Actions, reproducible builds, and tooling that removes friction.",
      zh: "顺滑的研发体验：GitHub / Gitea Actions 上干净的 CI/CD、可复现的构建，以及能消除摩擦的工具。",
    },
    {
      en: "Tight, well-crafted desktop utilities in .NET and Tauri that do one job well.",
      zh: "用 .NET 与 Tauri 打造专注、精致的桌面小工具。",
    },
  ],
  visionTitle: { en: "Where I’m headed", zh: "职业愿景" },
  vision: {
    en: "I want to keep owning systems end to end — infrastructure and tooling that let small teams ship reliably under real-world constraints. If the software quietly does the right thing and nobody has to think about it, that is a good day at work.",
    zh: "我希望继续端到端地负责系统：让小型团队在真实约束下也能稳定交付的基础设施与工具。如果软件安静地做对了该做的事、没人需要为它操心，那就是工作的好日子。",
  },
  contactTitle: { en: "Contact & links", zh: "联系方式与链接" },
  emailTodo: {
    en: "// TODO: add your public email in src/content/site.ts",
    zh: "// TODO：在 src/content/site.ts 中填写你的公开邮箱",
  },
  linkedinTodo: {
    en: "// TODO: add your LinkedIn URL in src/content/site.ts",
    zh: "// TODO：在 src/content/site.ts 中填写你的 LinkedIn 链接",
  },
  thanks: { en: "Thanks for stopping by.", zh: "谢谢阅读。" },
}

export default function About() {
  const t = useText()

  return (
    <div className={page}>
      <Seo page="about" description={t(site.summary)} />
      <PageHeader eyebrow={t(copy.eyebrow)} title={t(copy.title)} lead={t(copy.lead)} />

      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-12">
          <section>
            <h2 className={h2}>{t(copy.backgroundTitle)}</h2>
            <p className="mt-3">{t(copy.background)}</p>
            {skillGroups.map((group) => (
              <p key={group.group.en} className="mt-2">
                <span className="font-mono text-faint">{t(group.group)}: </span>
                {group.items.join(" · ")}
              </p>
            ))}
          </section>

          <section>
            <h2 className={h2}>{t(copy.focusTitle)}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {copy.focus.map((item) => (
                <li key={item.en}>{t(item)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className={h2}>{t(copy.visionTitle)}</h2>
            <p className="mt-3">{t(copy.vision)}</p>
          </section>
        </div>

        <aside>
          <h2 className={h2}>{t(copy.contactTitle)}</h2>
          <ul className={`${plainList} mt-3 space-y-2`}>
            {socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer" className={plainLink}>
                  <span className="font-mono">{s.label}</span> ↗
                </a>
              </li>
            ))}
            {contact.email ? (
              <li>
                <a href={`mailto:${contact.email}`} className={plainLink}>
                  <span className="font-mono">Email</span> ↗
                </a>
              </li>
            ) : (
              <li className="font-mono text-xs text-faint">{t(copy.emailTodo)}</li>
            )}
            {contact.linkedin ? (
              <li>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className={plainLink}>
                  <span className="font-mono">LinkedIn</span> ↗
                </a>
              </li>
            ) : (
              <li className="font-mono text-xs text-faint">{t(copy.linkedinTodo)}</li>
            )}
          </ul>

          <p className="mt-8 text-muted">{t(copy.thanks)}</p>
        </aside>
      </div>
    </div>
  )
}
