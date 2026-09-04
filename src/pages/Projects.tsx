import { PageHeader } from "@/components/PageHeader"
import { Seo } from "@/components/Seo"
import { chip, page, plainList } from "@/components/ui"
import { projects } from "@/content/projects"
import { useText } from "@/i18n/useI18n"
import type { Project } from "@/content/types"

const copy = {
  eyebrow: { en: "// projects", zh: "// 项目" },
  title: { en: "Projects", zh: "项目" },
  lead: {
    en: "A selection of things I have built, big and small — more land here as they ship.",
    zh: "我做过的一些东西，无论大小——新的会陆续放到这里。",
  },
  impactTitle: { en: "Impact", zh: "成果" },
  featuresTitle: { en: "What I built", zh: "核心内容" },
}

function ProjectCard({ project }: { project: Project }) {
  const t = useText()

  return (
    <article className="rounded-xl border border-line bg-card p-6 shadow-card" id={project.id}>
      <p className="font-mono text-xs text-faint">{t(project.kind)}</p>
      <h3 className="mt-1 text-lg text-fg">{project.name}</h3>
      <p className="mt-1 font-mono text-sm text-accent">{t(project.tagline)}</p>

      <p className="mt-3 text-sm leading-relaxed text-fg">{t(project.summary)}</p>

      {project.highlights.length > 0 ? (
        <div className="mt-4">
          <p className="text-sm font-semibold">{t(copy.featuresTitle)}</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted">
            {project.highlights.map((highlight) => (
              <li key={highlight.en}>{t(highlight)}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.impact && project.impact.length > 0 ? (
        <div className="mt-4 rounded-md border-l-4 border-l-accent bg-soft px-4 py-3 text-sm">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            {t(copy.impactTitle)} —{" "}
          </span>
          <ul className={`${plainList} mt-1 space-y-1 text-muted`}>
            {project.impact.map((item) => (
              <li key={item.en}>{t(item)}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span className={chip} key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 ? (
        <p className="mt-4 text-sm">
          {project.links.map((link, i) => (
            <span key={link.href}>
              {i > 0 ? " · " : ""}
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono hover:text-accent">
                {link.label} ↗
              </a>
            </span>
          ))}
        </p>
      ) : null}
    </article>
  )
}

export default function Projects() {
  const t = useText()

  return (
    <div className={page}>
      <Seo page="projects" />
      <PageHeader eyebrow={t(copy.eyebrow)} title={t(copy.title)} lead={t(copy.lead)} />

      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
