import { PageHeader } from "@/components/PageHeader"
import { Seo } from "@/components/Seo"
import { btnPrimary } from "@/components/ui"
import { projects } from "@/content/projects"
import { resume } from "@/content/resume"
import { skillGroups } from "@/content/skills"
import { contact, site, socials } from "@/content/site"
import { useLanguage } from "@/i18n/context"
import { useDict, useText } from "@/i18n/useI18n"

const copy = {
  eyebrow: { en: "// resume", zh: "// 简历" },
  title: { en: "Resume", zh: "简历" },
  lead: {
    en: 'A print-friendly summary of my work. Use the button below and choose "Save as PDF" to download a copy.',
    zh: "可打印的工作履历摘要。点击下方按钮，在打印对话框里选择「另存为 PDF」即可下载。",
  },
  printTip: {
    en: 'Tip: pick "Save as PDF" as the destination, then enjoy A4.',
    zh: "提示：把目标打印机选为「另存为 PDF」，即可输出为 A4。",
  },
  summaryTitle: { en: "Summary", zh: "个人概述" },
  skillsTitle: { en: "Skills", zh: "技能" },
  experienceTitle: { en: "Experience", zh: "工作经历" },
  educationTitle: { en: "Education & certifications", zh: "教育背景与认证" },
  projectsTitle: { en: "Selected projects", zh: "代表性项目" },
  interestsTitle: { en: "Interests", zh: "兴趣方向" },
  noHistoryNote: {
    en: "⚠ TODO: this section is empty until you add your work history in src/content/resume.ts",
    zh: "⚠ TODO：请在 src/content/resume.ts 中补充工作经历后，本栏目才会显示。",
  },
}

const resumeSectionTitle =
  "border-b border-line pb-2 font-mono text-sm uppercase tracking-[0.1em] text-fg"

export default function Resume() {
  const t = useText()
  const dict = useDict()
  const { lang } = useLanguage()

  // The Chinese CV omits X / Twitter.
  const resumeSocials = socials.filter(
    (s) => lang !== "zh" || (!s.href.includes("x.com") && !s.href.includes("twitter.com"))
  )
  const socialsLine = resumeSocials.map((s) => s.label).join(" · ")

  return (
    <div className="mx-auto w-full max-w-[1060px] px-[var(--page-x)] pt-12 pb-20 print:max-w-none print:px-0 print:pt-0 print:pb-0">
      <Seo page="resume" description={t(resume.objective)} />
      <div className="print:hidden">
        <PageHeader eyebrow={t(copy.eyebrow)} title={t(copy.title)} lead={t(copy.lead)} />
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-3 print:hidden">
        <button type="button" className={btnPrimary} onClick={() => window.print()}>
          {dict.actions.downloadResume} ⤓
        </button>
        <span className="text-sm text-faint">{t(copy.printTip)}</span>
      </div>

      <article className="rounded-xl border border-line bg-card px-[clamp(1.5rem,4vw,3rem)] py-[clamp(1.5rem,4vw,3rem)] shadow-card print:rounded-none print:border-0 print:bg-transparent print:p-[12mm] print:shadow-none">
        <header>
          <h1 className="text-[clamp(1.8rem,4vw,2.4rem)] text-fg">{t(resume.name)}</h1>
          <p className="mt-1 font-mono text-accent">{t(site.tagline)}</p>
          <p className="mt-4 font-mono text-sm leading-relaxed text-muted">
            {t(site.location)}
            <br />
            {socialsLine}
            {contact.email ? ` · ${contact.email}` : ""}
          </p>
        </header>

        <section className="mt-10">
          <h2 className={resumeSectionTitle}>{t(copy.summaryTitle)}</h2>
          <p className="mt-4">{t(resume.objective)}</p>
        </section>

        <section className="mt-10">
          <h2 className={resumeSectionTitle}>{t(copy.skillsTitle)}</h2>
          {skillGroups.map((group) => (
            <p className="mt-3 avoid-break" key={group.group.en}>
              <span className="font-mono text-accent">{t(group.group)}</span>
              <br />
              {group.items.join(" · ")}
            </p>
          ))}
        </section>

        {resume.experience.length > 0 ? (
          <section className="mt-10">
            <h2 className={resumeSectionTitle}>{t(copy.experienceTitle)}</h2>
            {resume.experience.map((job, index) => (
              <div className="avoid-break" key={`exp-${index}`}>
                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-fg">{t(job.org)}</h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {t(job.role)}
                  {job.location ? ` · ${t(job.location)}` : ""}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  {job.points.map((point) => (
                    <li key={point.en}>{t(point)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ) : (
          <p className="mt-6 text-xs text-faint print:hidden">{t(copy.noHistoryNote)}</p>
        )}

        <section className="mt-10">
          <h2 className={resumeSectionTitle}>{t(copy.projectsTitle)}</h2>
          {projects.map((project) => (
            <div className="mt-5 avoid-break" key={project.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-fg">{project.name}</h3>
                <span className="font-mono text-xs text-muted">{project.stack.join(" · ")}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{t(project.tagline)}</p>
              {project.impact && project.impact.length > 0 ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  {project.impact.map((item) => (
                    <li key={item.en}>{t(item)}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>

        {resume.education.length > 0 ? (
          <section className="mt-10">
            <h2 className={resumeSectionTitle}>{t(copy.educationTitle)}</h2>
            {resume.education.map((entry, index) => (
              <div className="avoid-break" key={`edu-${index}`}>
                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-fg">{t(entry.org)}</h3>
                  <span className="font-mono text-xs text-muted">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {t(entry.role)}
                  {entry.location ? ` · ${t(entry.location)}` : ""}
                </p>
                {entry.points.length > 0 ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                    {entry.points.map((point) => (
                      <li key={point.en}>{t(point)}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </section>
        ) : null}

        <section className="mt-10">
          <h2 className={resumeSectionTitle}>{t(copy.interestsTitle)}</h2>
          <p className="mt-4">{t(resume.interests)}</p>
        </section>
      </article>
    </div>
  )
}
