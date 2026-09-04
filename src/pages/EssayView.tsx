import { Link, useParams } from "react-router"
import { Seo } from "@/components/Seo"
import { essays } from "@/content/essays"
import { useDict, useText } from "@/i18n/useI18n"

const copy = {
  missing: {
    en: "That essay does not exist (yet).",
    zh: "这篇随笔（暂时）不存在。",
  },
  missingBack: {
    en: "See all essays",
    zh: "查看全部随笔",
  },
}

export default function EssayView() {
  const { slug } = useParams<{ slug: string }>()
  const t = useText()
  const dict = useDict()
  const post = essays.find((e) => e.slug === slug)

  if (!post) {
    return (
      <div className="wrap pt-12 pb-20">
        <Seo page="essays" />
        <p className="font-mono">{t(copy.missing)}</p>
        <p className="mt-3">
          <Link to="/essays">← {t(copy.missingBack)}</Link>
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-[70ch] px-[var(--page-x)] pt-12 pb-20">
      <Seo page="essays" description={t(post.summary)} />
      <p className="font-mono text-xs text-faint">
        <Link to="/essays" className="hover:text-accent">
          ← {dict.actions.backToEssays}
        </Link>
      </p>
      <time className="mt-4 block font-mono text-xs text-faint" dateTime={post.date}>
        {post.date}
      </time>
      <h1 className="mt-3 text-[clamp(1.7rem,4vw,2.3rem)] text-fg">{t(post.title)}</h1>
      <p className="mt-4 text-[clamp(1.05rem,2vw,1.2rem)] leading-relaxed text-muted">
        {t(post.summary)}
      </p>
      <div className="mt-8 space-y-6">
        {post.body.map((paragraph, i) => (
          <p key={i}>{t(paragraph)}</p>
        ))}
      </div>
    </div>
  )
}
