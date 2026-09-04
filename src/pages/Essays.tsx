import { Link } from "react-router"
import { PageHeader } from "@/components/PageHeader"
import { Seo } from "@/components/Seo"
import { page } from "@/components/ui"
import { essays } from "@/content/essays"
import { useText } from "@/i18n/useI18n"

const copy = {
  eyebrow: { en: "// essays", zh: "// 随笔" },
  title: { en: "Essays", zh: "随笔" },
  lead: {
    en: "Occasional writing — sometimes about software, sometimes not.",
    zh: "不定期写点东西——有时关于软件，有时也未必。",
  },
  empty: { en: "No essays published yet.", zh: "还没有发布随笔。" },
}

export default function Essays() {
  const t = useText()

  return (
    <div className={page}>
      <Seo page="essays" />
      <PageHeader eyebrow={t(copy.eyebrow)} title={t(copy.title)} lead={t(copy.lead)} />

      {essays.length === 0 ? (
        <p className="text-muted">{t(copy.empty)}</p>
      ) : (
        <ul className="list-none space-y-10 p-0">
          {essays.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/essays/${post.slug}`}
                className="text-xl font-semibold text-fg hover:text-accent md:text-2xl">
                {t(post.title)}
              </Link>
              <time className="mt-1 block font-mono text-xs text-faint" dateTime={post.date}>
                {post.date}
              </time>
              <p className="mt-2 text-muted">{t(post.summary)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
