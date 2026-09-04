import { Link } from "react-router"
import { Seo } from "@/components/Seo"
import {
  btnGhost,
  btnPrimary,
  chip,
  eyebrow,
  h2,
  page,
  plainLink,
  plainList,
} from "@/components/ui"
import { essays } from "@/content/essays"
import { projects } from "@/content/projects"
import { site, socials } from "@/content/site"
import { skillGroups } from "@/content/skills"
import { useDict, useText } from "@/i18n/useI18n"
import type { Bilingual } from "@/lib/types"

const copy = {
  hello: { en: "Hello, I’m", zh: "你好，我是" },
  whatIDo: { en: "What I do", zh: "我做什么" },
  background: {
    en: "I work across the whole stack — Spring Boot and Go for backend services, Rust and C#/.NET when the tool has to feel great on the desktop, and TypeScript/React on the front end. On the operations side, PostgreSQL, Docker and Linux are home turf.",
    zh: "我的工作覆盖全栈——后端用 Spring Boot 与 Go，桌面端用 Rust 与 C#/.NET 让工具手感更好，前端用 TypeScript / React；运维侧则常年深耕 PostgreSQL、Docker 与 Linux。",
  },
  stackTitle: { en: "Stack", zh: "常用技术" },
  featured: { en: "Featured", zh: "代表性项目" },
  moreProjects: { en: "View all projects", zh: "查看全部项目" },
  latestTitle: { en: "Latest writing", zh: "最近随笔" },
  emptyEssays: { en: "Nothing published yet — check back soon.", zh: "暂无发布内容——敬请期待。" },
  elsewhereTitle: { en: "Elsewhere", zh: "其他入口" },
} satisfies Record<string, Bilingual>

export default function Home() {
  const t = useText()
  const dict = useDict()
  const languages = skillGroups[0]?.items ?? []
  const recent = essays.slice(0, 3)
  const featured = projects[0]

  return (
    <div className={page}>
      <Seo page="home" description={t(site.summary)} />

      <section>
        <p className={eyebrow}>{t(copy.hello)}</p>
        <h1 className="mt-4 font-mono text-[clamp(2.2rem,6vw,3.6rem)] font-bold leading-none tracking-tight text-fg">
          {site.name}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-2 font-mono text-[clamp(0.95rem,2vw,1.1rem)] text-accent">
          {t(site.tagline)}
        </p>
        <p className="mt-6 max-w-[64ch] text-[clamp(1.05rem,2vw,1.2rem)] leading-relaxed text-muted">
          {t(site.summary)}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link className={btnPrimary} to="/about">
            {dict.nav.about} →
          </Link>
          <Link className={btnGhost} to="/projects">
            {dict.nav.projects}
          </Link>
          <Link className={btnGhost} to="/resume">
            {dict.nav.resume}
          </Link>
        </div>
      </section>

      <div className="mt-16 grid items-start gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section>
          <h2 className={h2}>{t(copy.whatIDo)}</h2>
          <p className="mt-3">{t(copy.background)}</p>

          {featured ? (
            <div className="mt-12">
              <h2 className={h2}>{t(copy.featured)}</h2>
              <p className="mt-3">
                <span className="font-mono font-semibold">{featured.name}</span>
                <span className="text-faint"> — </span>
                {t(featured.tagline)}
              </p>
              <Link className={`${btnGhost} mt-4`} to="/projects">
                {t(copy.moreProjects)} →
              </Link>
            </div>
          ) : null}
        </section>

        <aside>
          <h2 className={h2}>{t(copy.stackTitle)}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span className={chip} key={lang}>
                {lang}
              </span>
            ))}
          </div>

          <h2 className={`${h2} mt-12`}>{t(copy.elsewhereTitle)}</h2>
          <ul className={`${plainList} mt-3`}>
            {socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer" className={plainLink}>
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {recent.length > 0 ? (
        <section className="mt-16">
          <h2 className={h2}>{t(copy.latestTitle)}</h2>
          <ul className={`${plainList} mt-4`}>
            {recent.map((post) => (
              <li key={post.slug}>
                <time className="font-mono text-xs text-faint" dateTime={post.date}>
                  {post.date}
                </time>
                <span aria-hidden="true" className="text-faint">
                  {" "}
                  ·{" "}
                </span>
                <Link to={`/essays/${post.slug}`}>{t(post.title)}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p className="mt-16 text-muted">{t(copy.emptyEssays)}</p>
      )}
    </div>
  )
}
